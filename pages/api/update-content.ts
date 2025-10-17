import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  try {
    switch (type) {
      case 'news':
        updateNews(data);
        break;
      case 'project':
        updateProjects(data);
        break;
      case 'publication':
        updatePublications(data);
        break;
      case 'profile':
        updateProfile(data);
        break;
      default:
        return res.status(400).json({ error: 'Invalid type' });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ error: 'Failed to update content' });
  }
}

function updateNews(newsItem: any) {
  const filePath = path.join(process.cwd(), 'data', 'news.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Parse existing news array
  const newsMatch = content.match(/export const news: NewsItem\[\] = \[([\s\S]*?)\];/);
  if (!newsMatch) throw new Error('Could not parse news file');
  
  // Generate new news item
  const newItem = `
  {
    id: "${newsItem.id}",
    date: "${newsItem.date}",
    content: "${newsItem.content}",
    type: "${newsItem.type}"${newsItem.link ? `,\n    link: "${newsItem.link}"` : ''},
  },`;
  
  // Insert at the beginning of the array
  const updatedContent = content.replace(
    /export const news: NewsItem\[\] = \[/,
    `export const news: NewsItem[] = [${newItem}`
  );
  
  fs.writeFileSync(filePath, updatedContent);
}

function updateProjects(project: any) {
  const filePath = path.join(process.cwd(), 'data', 'projects.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const newProject = `
  {
    id: "${project.id}",
    title: "${project.title}",
    subtitle: "${project.subtitle}",
    image: "${project.image}",
    tags: [${project.tags.map((t: string) => `"${t}"`).join(', ')}],
    advisors: "${project.advisors}",
    description: "${project.description}"${project.status ? `,\n    status: "${project.status}"` : ''},
  },`;
  
  const updatedContent = content.replace(
    /export const projects: Project\[\] = \[/,
    `export const projects: Project[] = [${newProject}`
  );
  
  fs.writeFileSync(filePath, updatedContent);
}

function updatePublications(bibtex: string) {
  const filePath = path.join(process.cwd(), 'data', 'publications.ts');
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Insert BibTeX into BIBTEX_CONTENT
  const updatedContent = content.replace(
    /const BIBTEX_CONTENT = `\n/,
    `const BIBTEX_CONTENT = \`\n${bibtex}\n\n`
  );
  
  fs.writeFileSync(filePath, updatedContent);
}

function updateProfile(profile: any) {
  const filePath = path.join(process.cwd(), 'data', 'personalInfo.ts');
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Update individual fields
  if (profile.name) {
    content = content.replace(/name: "[^"]*"/, `name: "${profile.name}"`);
  }
  if (profile.title) {
    content = content.replace(/title: "[^"]*"/, `title: "${profile.title}"`);
  }
  if (profile.institution) {
    content = content.replace(/institution: "[^"]*"/, `institution: "${profile.institution}"`);
  }
  if (profile.seeking) {
    content = content.replace(/seeking: "[^"]*"/, `seeking: "${profile.seeking}"`);
  }
  
  fs.writeFileSync(filePath, content);
}

