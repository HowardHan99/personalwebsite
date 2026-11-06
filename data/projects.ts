export interface Project {
  id: string;
  title: string; // short name shown large in the index
  subtitle: string; // one-line scope
  image: string; // small thumbnail
  advisors: string; // e.g. "with Nikolas Martelaro and Sarah Fox"
  collaborators?: string;
  description: string; // 1–2 sentences
  publicationIds?: string[]; // ids from data/publications.ts, shown as an index of papers
}

export const projects: Project[] = [
  {
    id: "public-space-robotics",
    title: "Public Space Robotics",
    subtitle: "Community-driven co-design, simulation, and robot learning for social navigation and communication",
    image: "/images/public-robots.jpg",
    advisors: "Advised by Nikolas Martelaro and Sarah Fox",
    collaborators: "In collaboration with CMU Mechanical Engineering and Civil Engineering",
    description:
      "Building on our group's ethnographic and design research, we repurpose simulation platforms for community engagement, and study how that engagement can inform socially compliant, VLM-enhanced robot navigation and communication.",
    publicationIds: [
      "han2027publicsim",
      "marpally2026acme",
      "han2026enhancedsim",
      "han2024codesign",
      "han2023robot",
    ],
  },
  {
    id: "design-agents",
    title: "Design Agents",
    subtitle: "Understanding, modeling, and improving human-agent interaction for adaptive and contested design processes",
    image: "/images/adaptive-agent.png",
    advisors: "Advised by Nikolas Martelaro",
    description:
      "Design agents are more than LLM-enhanced design tools. Drawing on theories from human-machine interaction, we model when and how agents should intervene to make design processes more adaptive and contested.",
    publicationIds: ["han2027proactive", "han2026constructive"],
  },
];
