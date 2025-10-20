export interface Project {
  id: string;
  title: string;
  image: string;
  advisors: string;
  description: string;
  status?: string;
  publicationIds?: string[];
  citationFormat?: 'short' | 'long'; // 'short' = [CHI '26], 'long' = Full title with venue
}

export const projects: Project[] = [
  {
    id: "co-design-robots",
    title: "Public Space Robotics: Community-Driven Co-design, Simulation, and Robot Learning for Social Navigation and Communication",
    image: "/images/socialnav-sim.png", // Replace with your image
    advisors: `Advised by Nikolas Martelaro and Sarah Fox. 
In collaboration with CMU Mechanical Engineering and Civil Engineering Departments.`,
    description: "Informed by the ethnographic and design research from our group, we are exploring how to repurpose simulation-based platform for community engagement and how such engagement can inform socially compliant VLM-enhanced robot navigation and communication.",
    status: "",
    publicationIds: ["han2024codesign", "han2023robot"],
    citationFormat: 'short', // or 'long' for full title
  },
  {
    id: "audit-interface",
    title: "Design Agent: Understanding, Modeling, and Improving Human-Agent Interaction for more Adaptive and Contested Design Processes",
    image: "/images/adaptive-agent.png", // Replace with your image
    advisors: "Advised by Nikolas Martelaro",
    description: "Design Agents are more than just LLM-enhanced design tools. Informed by theories from Human-Machine Interaction. We are exploring how to model and improve human-agent interaction for more adaptive and contested design processes.",
    publicationIds: ["han2024antagonistic"],
    citationFormat: 'long', // or 'long' for full title
  },
];

