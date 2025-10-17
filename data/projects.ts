export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  advisors: string;
  description: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "co-design-robots",
    title: "Co-Design Public Robots: Bridging Roboticists With End-Users For Equitable HRI With A Participatory Simulation Tool",
    subtitle: "Skills: #Co-design #System Building #HRI",
    image: "/images/codesign.png", // Replace with your image
    tags: ["#Co-design", "#System Building", "#HRI"],
    advisors: "Advised by Nikolas Martelaro and Sarah Fox",
    description: "Full paper in submission to CHI 2024 as the first author. Participatory simulation tool in preparation for IEEE RO-MAN",
    status: "first author",
  },
  {
    id: "audit-interface",
    title: "Audit Interface: Scaffold Everyday Users in Evaluating and Auditing Text-to-image Systems",
    subtitle: "Skills: #Generative AI #NLP #Crowdsourcing",
    image: "/images/weaudit.png", // Replace with your image
    tags: ["#Generative AI", "#NLP", "#Crowdsourcing"],
    advisors: "Advised by Wesley Deng, Ken Holstein, Motahhare Eslami, and Jason Hong",
    description: "In preparation for venues related to FATE (Fairness, Accountability, Transparency, and Ethics)",
  },
];

