/**
 * Simple Markdown-like parser for bio text
 * 
 * Supports:
 * - **text** = bold
 * - [text](url) = links
 * - {field} = field replacement (e.g., {title})
 */

export interface TextPart {
  type: 'text' | 'bold' | 'link' | 'color';
  content: string;
  href?: string;
  color?: string;
}

export function parseMarkdown(text: string, fields: Record<string, string> = {}): TextPart[] {
  const parts: TextPart[] = [];
  let remaining = text;
  
  // Replace field placeholders first
  Object.entries(fields).forEach(([key, value]) => {
    remaining = remaining.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  });
  
  // Parse markdown-like syntax
  // Supports: **bold**, [link](url), {{color:text}}
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\{\{[^:}]+:[^}]+\}\})/g;
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(remaining)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      const textBefore = remaining.substring(lastIndex, match.index);
      if (textBefore) {
        parts.push({ type: 'text', content: textBefore });
      }
    }
    
    const matched = match[0];
    
    // Parse **bold**
    if (matched.startsWith('**') && matched.endsWith('**')) {
      parts.push({
        type: 'bold',
        content: matched.slice(2, -2),
      });
    }
    // Parse [text](url)
    else if (matched.startsWith('[')) {
      const linkMatch = matched.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push({
          type: 'link',
          content: linkMatch[1],
          href: linkMatch[2],
        });
      }
    }
    // Parse {{color:text}}
    else if (matched.startsWith('{{') && matched.endsWith('}}')) {
      const colorMatch = matched.match(/\{\{([^:}]+):([^}]+)\}\}/);
      if (colorMatch) {
        parts.push({
          type: 'color',
          content: colorMatch[2],
          color: colorMatch[1],
        });
      }
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < remaining.length) {
    const textAfter = remaining.substring(lastIndex);
    if (textAfter) {
      parts.push({ type: 'text', content: textAfter });
    }
  }
  
  return parts;
}

