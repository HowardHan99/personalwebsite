/**
 * BibTeX Parser for Publications
 * 
 * Parses BibTeX entries and extracts custom fields for the website.
 * Supports custom fields: image, tags, pdflink, highlight
 */

export interface ParsedPublication {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  authorHighlight: string;
  venue: string;
  shortvenue?: string;
  year: number;
  image: string;
  pdfLink?: string;
  tags: string[];
  award?: string;
  section?: string;
  imageFit?: 'cover' | 'contain';
  abstract?: string;
}

interface BibTeXEntry {
  id: string;
  type: string;
  fields: Record<string, string>;
}

/**
 * Parse a BibTeX string into publication objects
 */
export function parseBibTeX(bibtexString: string): ParsedPublication[] {
  const entries = extractBibTeXEntries(bibtexString);
  return entries.map(convertBibTeXToPublication);
}

/**
 * Extract individual BibTeX entries from a string
 */
function extractBibTeXEntries(bibtexString: string): BibTeXEntry[] {
  const entries: BibTeXEntry[] = [];
  
  // Match @type{id, ... }
  // Using [\s\S] instead of . with s flag for ES5 compatibility
  const entryRegex = /@(\w+)\s*\{\s*([^,]+)\s*,([\s\S]*?)(?=\n\s*@|$)/g;
  
  let match;
  while ((match = entryRegex.exec(bibtexString)) !== null) {
    const [, type, id, fieldsString] = match;
    
    const fields = parseFields(fieldsString);
    
    entries.push({
      id: id.trim(),
      type: type.toLowerCase(),
      fields,
    });
  }
  
  return entries;
}

/**
 * Parse fields from BibTeX entry
 */
function parseFields(fieldsString: string): Record<string, string> {
  const fields: Record<string, string> = {};
  
  // Match field = {value} or field = "value"
  const fieldRegex = /(\w+)\s*=\s*[{"]([^}"]*)[}"]/g;
  
  let match;
  while ((match = fieldRegex.exec(fieldsString)) !== null) {
    const [, key, value] = match;
    fields[key.toLowerCase()] = value.trim();
  }
  
  return fields;
}

/**
 * Convert BibTeX entry to Publication object
 */
function convertBibTeXToPublication(entry: BibTeXEntry): ParsedPublication {
  const fields = entry.fields;
  
  // Extract venue based on entry type
  let venue = '';
  if (fields.booktitle) {
    venue = fields.booktitle;
  } else if (fields.journal) {
    venue = fields.journal;
  } else if (fields.venue) {
    venue = fields.venue;
  }
  
  // Add year if available
  if (fields.year) {
    venue += ` ${fields.year}`;
  }
  
  // Parse tags (custom field, comma-separated)
  const tags = fields.tags 
    ? fields.tags.split(',').map(tag => {
        const trimmed = tag.trim();
        return trimmed.startsWith('#') ? trimmed : `#${trimmed}`;
      })
    : [];
  
  // Create subtitle from tags
  const subtitle = tags.length > 0 
    ? `Skills: ${tags.join(' ')}` 
    : '';
  
  // Determine author to highlight (custom field or last author)
  const authorHighlight = fields.highlight || getLastAuthor(fields.author || '');
  
  // Default image
  const defaultImage = '/images/placeholder-publication.svg';
  
  return {
    id: entry.id,
    title: cleanLatex(fields.title || 'Untitled'),
    subtitle,
    authors: cleanLatex(fields.author || ''),
    authorHighlight: cleanLatex(authorHighlight),
    venue: cleanLatex(venue),
    shortvenue: fields.shortvenue ? cleanLatex(fields.shortvenue) : undefined,
    year: parseInt(fields.year || '0', 10),
    image: fields.image || defaultImage,
    pdfLink: fields.pdflink || fields.pdf,
    tags,
    award: fields.award ? cleanLatex(fields.award) : undefined,
    abstract: fields.abstract ? cleanLatex(fields.abstract) : undefined,
    imageFit: fields.imagefit === 'contain' ? 'contain' : undefined,
    section: fields.section ? cleanLatex(fields.section) : undefined,
  };
}

/**
 * Get the last author from author list
 */
function getLastAuthor(authors: string): string {
  const authorList = authors.split(' and ');
  if (authorList.length === 0) return '';
  
  const lastAuthor = authorList[authorList.length - 1].trim();
  
  // Handle "Last, First" format
  if (lastAuthor.includes(',')) {
    const [last, first] = lastAuthor.split(',').map(s => s.trim());
    return `${first} ${last}`;
  }
  
  return lastAuthor;
}

/**
 * Clean LaTeX formatting from strings
 */
function cleanLatex(text: string): string {
  return text
    .replace(/\\textbf\{([^}]*)\}/g, '$1')
    .replace(/\\textit\{([^}]*)\}/g, '$1')
    .replace(/\\emph\{([^}]*)\}/g, '$1')
    .replace(/\{\\em ([^}]*)\}/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\\\\/g, '')
    .replace(/~/g, ' ')
    .replace(/``/g, '"')
    .replace(/''/g, '"')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .trim();
}

