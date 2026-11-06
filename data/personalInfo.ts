// Bio text lives in ./bio.md — edit it there.
import bioMarkdown from './bio.md';

export const personalInfo = {
  // ============================================
  // BASIC INFO
  // ============================================
  name: "Howard Han",
  title: "PhD Student",
  institution: "Carnegie Mellon University",
  institutionLink: "https://hcii.cmu.edu/",
  institutionName: "Human-Computer Interaction Institute",
  profileImage: "/images/profile.jpg",
  
  // ============================================
  // SEEKING STATEMENT (appears in sidebar)
  // ============================================
  //I am a {title} at [{institution}, {institutionName}.]({institutionLink}) I am {{#e85d04:fortunate to be advised}} by [Nikolas Martelaro](https://nikmartelaro.com/). I work on projects related to {{blue:Human-Robot and Human-Agent Interaction}}, Design, Responsible AI, and equitable Human-robot Interaction.

  seeking: "⭐ I am looking for research internships in HCI and HRI in Summer 2027.",
  
  
  bio: bioMarkdown.replace(/<!--[\s\S]*?-->/g, '').trim(),
  
  // ============================================
  // SIDEBAR LINKS
  // ============================================
  links: {
    googleScholar: { 
      url: "https://scholar.google.com/citations?user=p7vveGIAAAAJ&hl=en", 
      label: "Google Scholar",
      icon: "🎓"
    },
    cv: { 
      url: "/api/cv", 
      label: "CV",
      icon: "📄"
    },
    email: { 
      url: "mailto:ziyuh@andrew.cmu.edu", 
      label: "Email Me",
      icon: "✉️"
    },
    linkedin: { 
      url: "https://www.linkedin.com/in/howard-ziyu-han-2003581b3/", 
      label: "Linkedin",
      icon: "💼"
    },
  },
  
  // ============================================
  // HASHTAGS (optional - leave empty to hide)
  // ============================================
  hashtags: [
    // "#Human-AI Interaction",
    // "#Crowdsourcing",
    // "#Human-Robot Interaction",
  ],
};
