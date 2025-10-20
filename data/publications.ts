import { parseBibTeX } from '../utils/bibtexParser';

export interface Publication {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  authorHighlight: string; // Name to highlight in bold
  venue: string;
  shortvenue?: string;
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
@inproceedings{han2024antagonistic,
  title={Enacting Facets of Adversarial Design with AI Agents},
  author={Howard Han and Nikolas Martelaro},
  booktitle={In Submission to the 2026 CHI Conference on Human Factors in Computing Systems},
  pages={1--20},
  highlight = {Howard Han},
  year={2026}
  tags = {Human-Agent Interaction, LLM Applications, Quantitative Research},
  image = {/images/antagonisticbot.png},
  shortvenue = {CHI},
}

@inproceedings{han2024codesign,
  title={Co-design accessible public robots: Insights from people with mobility disability, robotic practitioners and their collaborations},
  author={Howard Han, Franklin Mingzhe Li, Alesandra Baca Vazquez, Daragh Byrne, Nikolas Martelaro and Sarah Fox},
  booktitle={Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
  pages={1--20},
  highlight = {Howard Han},
  pdflink = {https://dl.acm.org/doi/full/10.1145/3613904.3642875},
  year={2024},
  tags = {Human-Robot Interaction, Co-design, Design Research},
  image = {/images/codesign.png},
  shortvenue = {CHI},
}

@inproceedings{han2023robot,
  author = {Howard Han and Franklin Li and Nikolas Martelaro and Daragh Byrne and Sarah Fox},
  title = {The Robot in Our Path: Investigating the Perceptions of People with Motor Disabilities on Navigating Public Space Alongside Sidewalk Robots},
  booktitle = {ASSETS 2023 Short Paper},
  year = {2023},
  image = {/images/robot-assets.png},
  pdflink = {https://dl.acm.org/doi/abs/10.1145/3597638.3614508},
  tags = {Accessibility, Qualitative Research},
  highlight = {Howard Han},
  shortvenue = {ASSETS},
}

@article{deng2025weaudit,
  title={WeAudit: Scaffolding User Auditors and AI Practitioners in Auditing Generative AI},
  author={Wesley Deng, Claire Wang, Howard Han, Jason Hong, Kenneth Holstein and Motahhare Eslami},
  journal={ACM SIGCHI Conference on Computer-Supported Cooperative Work & Social Computing (CSCW)},
  year={2025},
  award={CSCW Best Paper Award},
  image={/images/weaudit.png},
  pdflink={https://arxiv.org/abs/2501.01397},
  tags={Generative AI, NLP, Crowdsourcing},
  highlight={Howard Han},
  shortvenue = {CSCW},
}

@inproceedings{yi2023catch,
title={Catch my Eyebrow, Catch my Mind: Examining the Effect of Upper Facial Expressions on Emotional Recognition for VR Avatars},
author={Xin Yi, Howard Han, Xinge Liu, Yutong Ren, Xin Tong, Yan Kong and Hewu Li},
booktitle={2023 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)},
pages={761--762},
year={2023},
pdflink={https://ieeexplore.ieee.org/abstract/document/10108893},
image={/images/social-vr.png},
tags={Social Virtual Reality, Unity Development, Psychological Experiments},
highlight={Howard Han},
shortvenue = {VRW},
}

@inproceedings{wang2025raise,
  title={Raise Your Eyebrows Higher: Facilitating Emotional Communication in Social Virtual Reality Through Region-Specific Facial Expression Exaggeration},
  author={Xueyang Wang, Sheng Zhao, Yihe Wang, Howard Han, Xinge Liu, Xin Yi, Xin Tong and Hewu Li},
  booktitle={Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  pages={1--22},
  year={2025},
  image={/images/social-avatar.png},
  pdflink={https://dl.acm.org/doi/full/10.1145/3706598.3713688},
  tags={Social Virtual Reality, Facial Expression, Emotional Communication},
  highlight={Howard Han},
  shortvenue = {CHI},
}

@article{wan2022berlin,
  author = {Hui Wan and Howard Han and Weishan Xu and Waishan Qiu and Wenjing Li and Xun Liu},
  title = {Evolution Of Historical Urban Landscape With Computer Vision And Machine Learning: A Case Study Of Berlin},
  journal = {Journal of Digital Landscape and Architecture},
  year = {2022},
  image = {/images/urban-cv.png},
  pdflink = {https://gispoint.de/fileadmin/user_upload/paper_gis_open/DLA_2021/537705039.pdf},
  tags = {Applied Machine Learning, Data Visualization, Crowdsourcing},
  highlight = {Howard Han},
  shortvenue = {DLA},
}
  

`;

/**
 * Parse publications from BibTeX
 * This happens once when the module is loaded
 */
function loadPublications(): Publication[] {
  try {
    const publications = parseBibTeX(BIBTEX_CONTENT);
    // Publications appear in the order they're written in BIBTEX_CONTENT
    // To sort by year instead, uncomment: return publications.sort((a, b) => b.year - a.year);
    return publications;
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
