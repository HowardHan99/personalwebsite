/**
 * Simple Markdown-like parser for bio text
 * 
 * Supports:
 * - **text** = bold
 * - [text](url) = links
 * - {field} = field replacement (e.g., {title})
 */

export interface TextPart {
  type: 'text' | 'bold' | 'link' | 'color' | 'italic' | 'publication';
  content: string | TextPart[];
  href?: string;
  color?: string;
  publicationId?: string;
}

export function parseMarkdown(text: string, fields: Record<string, string> = {}): TextPart[] {
  let remaining = text;
  
  // Replace field placeholders first
  Object.entries(fields).forEach(([key, value]) => {
    remaining = remaining.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
  });
  
  function _parse(currentText: string): TextPart[] {
    const parts: TextPart[] = [];
    // Supports: **bold**, _italic_, [link](url){color}, {{color:text}}, [pub:id]
    const regex = /(\*\*.*?\*\*|_.*?_|\[[^\]]+?\]\([^)]+?\)(?:\{[^{}]*?\})?|{{[^:}]+?:[^}]+?}}|\[pub:[^\]]+?\])/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(currentText)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push({ type: 'text', content: currentText.substring(lastIndex, match.index) });
      }
      
      const matched = match[0];
      
      // Parse **bold**
      if (matched.startsWith('**') && matched.endsWith('**')) {
        parts.push({
          type: 'bold',
          content: _parse(matched.slice(2, -2)),
        });
      }
      // Parse _italic_
      else if (matched.startsWith('_') && matched.endsWith('_')) {
        parts.push({
          type: 'italic',
          content: _parse(matched.slice(1, -1)),
        });
      }
      // Parse [text](url){color}
      else if (matched.startsWith('[')) {
        const linkMatch = matched.match(/\[([^\]]+?)\]\(([^)]+?)\)(?:\{([^{}]*?)\})?/);
        if (linkMatch) {
          parts.push({
            type: 'link',
            content: _parse(linkMatch[1]),
            href: linkMatch[2],
            color: linkMatch[3],
          });
        }
      }
      // Parse {{color:text}}
      else if (matched.startsWith('{{') && matched.endsWith('}}')) {
        const colorMatch = matched.match(/\{\{([^:}]+?):([^}]+?)\}\}/);
        if (colorMatch) {
          parts.push({
            type: 'color',
            content: _parse(colorMatch[2]),
            color: colorMatch[1],
          });
        }
      }
      // Parse [pub:id]
      else if (matched.startsWith('[pub:')) {
        parts.push({
          type: 'publication',
          content: '', // Will be filled in by the rendering component
          publicationId: matched.slice(5, -1),
        });
      }
      
      lastIndex = regex.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < currentText.length) {
      parts.push({ type: 'text', content: currentText.substring(lastIndex) });
    }
    
    return parts;
  }
  
  return _parse(remaining);
}

