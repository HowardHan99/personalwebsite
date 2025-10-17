/**
 * Site Configuration
 * 
 * Control which sections are visible on your website
 */
export interface SiteConfig {
  showNews: boolean;
  showProjects: boolean;
  showPublications: boolean;
  darkModeEnabled: boolean;
}

export const siteConfig: SiteConfig = {
  showNews: false,           // Toggle news section on/off
  showProjects: true,       // Toggle projects section on/off
  showPublications: true,   // Toggle publications section on/off
  darkModeEnabled: true,    // Enable dark mode toggle
};

