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
I am a {title} at [{institution}, {institutionName}.]({institutionLink}) I am fortunate to be advised by [Nikolas Martelaro](https://nikmartelaro.com/). My research goal is to advance bidirectional {{#e85d04:Human-Robot and Human-Agent Interaction}} drawn from fields like Design, HCI, Cognitive Science, Robotics,and AI.

**_From Design to Human-Agent Interaction_**: I work on projects on {{#e85d04:Public Space Service Robots}}, involving community members, especially people with mobility disability, in the simulation-based evaluation, and robot policy development for more socially inclusive and compliant robot deployment. Works from this line of research have been published at CHI and ASSETS, and covered in [TechXplore](https://techxplore.com/news/2024-06-robots-crosswalks-sidewalks-traffic.html) and [Triblive](https://triblive.com/local/valley-news-dispatch/ai-opens-new-worlds-for-the-blind/).

_**From Human-Agent Interaction to Design**_: Another line of research is to develop {{#e85d04:Design Agents}} that spark human creativity, critical thinking, and adaptability, built upon theories from Human-Robot Interaction.  

Before starting my PhD, I completed a research-based master's at CMU, advised by [Daragh Byrne](http://daraghbyrne.me/), [Sarah Fox](https://www.sarahfox.info/) and [Ken Holstein](https://www.thecoalalab.com/kenholstein). I hold a Bachelor's degree in Urban Planning from Tongji University, where I conduct research in urban computing and GIS.

Below are my [publications](#publications) and [ongoing research projects](#projects).`.trim(),
  
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
