/**
 * Site Configuration
 * 
 * Control which sections are visible on your website
 */
export interface SiteConfig {
  showNews: boolean;
  showProjects: boolean;
  showPublications: boolean;
  showCommunity: boolean;
  darkModeEnabled: boolean;
}

export const siteConfig: SiteConfig = {
  showNews: false,           // Toggle news section on/off
  showProjects: false,      // Research threads now live inside the bio (data/bio.md)
  showPublications: true,   // Toggle publications section on/off
  showCommunity: true,      // "Bringing Robots to Communities" section (data/community.ts)
  darkModeEnabled: true,    // Enable dark mode toggle
};

