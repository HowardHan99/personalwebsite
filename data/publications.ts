import { parseBibTeX } from '../utils/bibtexParser';

export interface Publication {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  authorHighlight: string; // Name to highlight in bold
  venue: string;
  year: number;
  image: string;
  pdfLink?: string;
  tags: string[];
  award?: string;
}

/**
 * BibTeX Publications
 * 
 * To add new publications:
 * 1. Add your BibTeX entry below (from Google Scholar, arXiv, etc.)
 * 2. Add custom fields: image, tags, pdflink, highlight
 * 3. Save and it will auto-parse!
 * 
 * Custom fields:
 * - image: Path to publication image (e.g., "/images/pub-chi2024.jpg")
 * - tags: Comma-separated skill tags (e.g., "HCI, Machine Learning")
 * - pdflink or pdf: Path to PDF file (e.g., "/papers/paper.pdf")
 * - highlight: Author name to highlight in bold (default: last author)
 * - award: Award name (e.g., "Best Paper Award") - displays with 🏆 emoji
 */
const BIBTEX_CONTENT = `
@article{deng2025weaudit,
  title={WeAudit: Scaffolding User Auditors and AI Practitioners in Auditing Generative AI},
  author={Wesley Deng, Claire Wang, Howard Han, Jason Hong, Kenneth Holstein and Motahhare Eslami},
  journal={ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing (CSCW)},
  year={2025},
  award={CSCW Best Paper Award},
  image={/images/weaudit.png},
  pdflink={https://arxiv.org/abs/2501.01397},
  tags={Generative AI, NLP, Crowdsourcing},
  highlight={Howard Han}
}

@article{wan2022berlin,
  author = {Hui Wan and Howard Han and Weishan Xu and Waishan Qiu and Wenjing Li and Xun Liu},
  title = {Evolution Of Historical Urban Landscape With Computer Vision And Machine Learning: A Case Study Of Berlin},
  journal = {Journal of Digital Landscape and Architecture},
  year = {2022},
  image = {/images/placeholder-publication.svg},
  pdflink = {/papers/berlin-landscape.pdf},
  tags = {Applied Machine Learning, Data Visualization, Crowdsourcing},
  highlight = {Howard Han}
}
  
@inproceedings{han2023robot,
  author = {Howard Han and Franklin Li and Nikolas Martelaro and Daragh Byrne and Sarah Fox},
  title = {The Robot in Our Path: Investigating the Perceptions of People with Motor Disabilities on Navigating Public Space Alongside Sidewalk Robots},
  booktitle = {ASSETS 2023 Short Paper},
  year = {2023},
  image = {/images/socialnav-sim.png},
  pdflink = {https://dl.acm.org/doi/abs/10.1145/3597638.3614508},
  tags = {Accessibility, Qualitative Research},
  highlight = {Howard Han}
}

`;

/**
 * Parse publications from BibTeX
 * This happens once when the module is loaded
 */
function loadPublications(): Publication[] {
  try {
    const publications = parseBibTeX(BIBTEX_CONTENT);
    // Sort by year (newest first)
    return publications.sort((a, b) => b.year - a.year);
  } catch (error) {
    console.error('Error parsing BibTeX:', error);
    return [];
  }
}

// Export publications (parsed from BibTeX above)
export const publications = loadPublications();

/**
 * How to add new publications:
 * 
 * 1. Copy your BibTeX entry from Google Scholar, arXiv, etc.
 * 2. Paste it into the BIBTEX_CONTENT string above
 * 3. Add custom fields (image, tags, pdflink, highlight)
 * 4. Save and refresh!
 * 
 * Example:
 * 
 * @inproceedings{yourname2024paper,
 *   author = {First Author and Your Name and Last Author},
 *   title = {Your Amazing Paper Title},
 *   booktitle = {CHI},
 *   year = {2024},
 *   award = {Best Paper Award},
 *   image = {/images/pub-chi2024.jpg},
 *   pdflink = {/papers/chi2024-paper.pdf},
 *   tags = {HCI, AI, Machine Learning},
 *   highlight = {Your Name}
 * }
 * 
 * Alternative: Manual publications list
 * 
 * If you prefer to manage publications manually (without BibTeX),
 * you can replace the export above with:
 * 
 * export const publications: Publication[] = [
 *   {
 *     id: "my-paper",
 *     title: "Your Paper Title",
 *     subtitle: "Skills: #Tag1 #Tag2",
 *     authors: "Author1, Author2, Your Name",
 *     authorHighlight: "Your Name",
 *     venue: "Conference Name 2024",
 *     year: 2024,
 *     image: "/images/pub-paper.jpg",
 *     pdfLink: "/papers/paper.pdf",
 *     tags: ["#Tag1", "#Tag2"],
 *   },
 * ];
 */
