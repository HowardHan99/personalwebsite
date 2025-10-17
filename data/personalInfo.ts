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

  seeking: "⭐ I am looking for research internships in HCI and HRI in Summer 2026..",
  
  
  bio: `
I am a {title} at [{institution}, {institutionName}.]({institutionLink}) I am fortunate to be advised by [Nikolas Martelaro](https://nikmartelaro.com/). I work on projects related to {{#e85d04:Human-Robot and Human-Agent Interaction}}, {{ #e85d04:Design}}, {{#e85d04:Responsible AI}}, and {{ #e85d04:HCI}} in general.

My research goal is to understand why and how the [public engages with AI systems](#), to scaffold them by [developing social computing systems](#), and eventually empower them to aid them to shape both social computing systems and, when necessary, AI practitioners' workflow.

Before starting my PhD, I completed a research-based master's at CMU, advised by [Daragh Byrne](http://daraghbyrne.me/), [Sarah Fox](https://www.sarahfox.info/) and [Ken Holstein](https://www.thecoalalab.com/kenholstein). I hold a Bachelor's degree in Urban Planning from Tongji University, where I conduct research in urban computing and GIS.

Below are my [publications](#publications) and [ongoing research projects](#projects).
  `.trim(),
  
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
      url: "https://www.linkedin.com/in/yourprofile/", 
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
