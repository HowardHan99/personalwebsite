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
  imageFit?: 'cover' | 'contain';
  abstract?: string;
  section?: string; // e.g. 'earlier' to list under Earlier Work
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
 * - imagefit: 'contain' to show the whole image (for wide figures) instead of cropping
 * - abstract: Paper abstract, shown behind an [Abstract] toggle (no { } or double quotes)
 * - award: Award name (e.g., "Best Paper Award") - displays with 🏆 emoji
 */
const BIBTEX_CONTENT = `
@inproceedings{han2027proactive,
  title={Investigating How Designers Perceive the Timing and Content of Proactive AI-generated Feedback},
  author={Howard Ziyu Han, Sirui Tao, Jingwen Pan, Seung Heon Song, Steven P. Dow and Nikolas Martelaro},
  booktitle={In Submission to the 2027 CHI Conference on Human Factors in Computing Systems},
  year={2027},
  highlight = {Howard Ziyu Han},
  tags = {Human-Agent Interaction, Design Feedback, Proactive AI},
  image = {/images/proactive-feedback.png},
  imagefit = {contain},
  pdflink = {/papers/han-chi27-proactive-feedback.pdf},
  abstract = {Designers increasingly ask generative AI for feedback on creative artifacts. What is the potential for AI to proactively guide and spark ongoing work? Such proactivity creates an orchestration problem: what to offer, how to frame it, and when to inject it into the process. To explore this, we created a Wizard-of-Oz system where designers receive in-situ AI-generated perspectives, mediated by a human wizard. In a study with N=20 designers, the wizard generated a total of 81 proactive interventions, including design thinking strategies and synthetic stakeholder perspectives. Participants rated each intervention in real time for its perceived timeliness and usefulness. These judgments frequently diverged: useful content could arrive at bad moments, while good timing did not guarantee a useful perspective. We identify when and why these perspectives provide value, as well as why even carefully selected perspectives can miss designers' needs. Our findings offer implications for future autonomous proactive design support.},
  shortvenue = {CHI},
}

@inproceedings{han2027publicsim,
  title={Learning Social Navigation Strategies and Challenging Scenarios through Public-engaged Simulation},
  author={Howard Ziyu Han, Ying Zhang, Grace Yang, Yulin Chen, Aaron Steinfeld, Allan Wang, Sarah E Fox and Nikolas Martelaro},
  booktitle={In Submission to the 2027 ACM/IEEE International Conference on Human-Robot Interaction},
  year={2027},
  highlight = {Howard Ziyu Han},
  tags = {Human-Robot Interaction, Social Navigation, Simulation, Participatory Design},
  image = {/images/public-sim.jpg},
  award = {IROS 2026 Social Navigation Workshop Spotlight Paper},
  pdflink = {/papers/han-hri27-public-simulation.pdf},
  abstract = {Developing public-space robot navigation requires accounting for diverse people and complex social environments. Existing simulators and datasets already seek to capture diverse human behavior in public spaces, yet people are less often engaged in situated evaluation and co-design of robot behavior. We present additions to social-navigation simulation platforms to enable effective co-design of public-space robot behavior with people. Participants experience potentially conflicting encounters with a delivery robot, then demonstrate their preferred navigation strategies by teleoperating the robot, rerunning or branching the scenario, and annotating trajectories. They can also construct sidewalk scenarios they consider important to test. In a study with 15 participants, each experienced four scenarios and contributed preferred behaviors and challenging cases, resulting in 235 navigation trajectories and 51 user-built scenarios. Their interaction traces and in-situ reflections show that the difficulty of sharing a sidewalk with a robot comes not only from its proximity but also from its unexpected behavior, the attention it demands, and its signaling. Our findings provide interactions and scenarios that roboticists developing for navigation in public space should consider.},
  shortvenue = {HRI},
}

@article{marpally2026acme,
  title={ACME: A Multi-Cultural, Multi-Embodiment Social-Navigation Dataset},
  author={Shashank Rao Marpally, Allan Wang, Atharva Ghotavadekar, Renato Alexandre Ribeiro, Nhat Le, Pilar Bachiller-Burgos, Pranav Goyal, Subham Agrawal, Yasuhiro Nitta, Howard Ziyu Han, et al., Aaron Steinfeld, Xuesu Xiao, Christoforos Mavrogiannis and Harold Soh},
  journal={In Submission to the International Journal of Robotics Research (IJRR)},
  year={2026},
  pdflink = {https://arxiv.org/abs/2607.21964},
  highlight = {Howard Ziyu Han},
  tags = {Social Navigation, Robotics Dataset, Cross-cultural Research},
  image = {/images/acme.jpg},
  imagefit = {contain},
  shortvenue = {IJRR},
  abstract = {Understanding how robots and humans move in shared spaces is essential for designing effective social robot navigation policies and predicting human behavior. However, existing datasets often lack the diversity needed to capture differences in culture, geography, and human-robot interaction-factors that strongly shape appropriate social behavior. To address this gap, we introduce ACME: A Cross-cultural, Multi-Embodiment dataset for social navigation. A large-scale data collection effort across 8 sites in 5 countries, using 7 robot embodiments, ACME is a large and diverse multi-modal dataset aimed at advancing social navigation research, providing 29.35 hours of onboard robot data and 43.5 hours of overhead pedestrian tracking data. Unlike prior datasets, it focuses on capturing goal-driven social navigation behavior in complex social scenarios with explicit robot-crowd interaction through robot speech. To facilitate learning navigation policies and predicting pedestrian trajectories, ACME provides 3D and 2D scene features, odometry, interaction information, and human-annotated pedestrian trajectory labels. We make ACME easy to use by providing both human-readable data for each sensor modality as well as raw binary data. Our qualitative and quantitative analyses show that our dataset captures more challenging scenarios and a broader distribution of pedestrian behavior than previous datasets.},
}

@inproceedings{han2026constructive,
  title={Enacting Constructive Conflicts with AI Agents to Enhance Reconsideration among Novice Interaction Designers},
  author={Howard Ziyu Han and Nikolas Martelaro},
  booktitle={International Conference on Human-Agent Interaction (HAI)},
  year={2026},
  pdflink = {https://arxiv.org/abs/2608.04166},
  highlight = {Howard Ziyu Han},
  tags = {Human-Agent Interaction, LLM Applications, Quantitative Research},
  image = {/images/antagonisticbot.png},
  shortvenue = {HAI},
  abstract = {Generative AI agents are increasingly used in interaction design to facilitate ideation and offer critique, often following their own internal reasoning. These interactions tend to add design ideas and expand the design space. Our work explores an antagonistic role for design agents, prompting designers to engage with stakeholder tension. We built an AI agent inspired by adversarial design theory that enacts constructive conflict. We examine the agent's influence in a between-subjects experiment with 45 design students across three conditions: Self Reflection (unsupported review of the design proposal), Stepwise Guidance (written prompts that walk designers through a constructive-conflict framework), and Interactive Engagement (an AI agent that enacts the constructive-conflict framework interactively by synthesizing stakeholder pushback). The latter two conditions share the framework but differ in whether it is self-enacted or agent-enacted. Results show that, compared with Self Reflection, both the Stepwise Guidance and Interactive Engagement groups reported significantly higher self-reconsideration and made more improvements to their design proposals. Compared with Stepwise Guidance, the antagonistic agent introduced more conflictual perspectives, and participants in the Interactive Engagement condition generated and discarded more ideas. These findings suggest that agent-enacted constructive conflict can turn reconsideration into concrete design actions and deepen engagement with divergent stakeholder perspectives.},
}

@inproceedings{han2026enhancedsim,
  title={Enhanced Social Navigation Simulation for Community-Driven Participatory Evaluation of Sidewalk Robots},
  author={Howard Ziyu Han, Ying Zhang, Allan Wang and Nikolas Martelaro},
  booktitle={Companion of the 2026 ACM/IEEE International Conference on Human-Robot Interaction},
  year={2026},
  highlight = {Howard Ziyu Han},
  tags = {Human-Robot Interaction, Simulation, Participatory Evaluation},
  image = {/images/socialnav-sim.png},
  pdflink = {https://doi.org/10.1145/3776734.3794524},
  shortvenue = {HRI},
  abstract = {Using robot simulators in participatory human-robot interaction design can expand the interactions end-users can experience, articulate, and reshape during co-design. In robot social navigation, high-fidelity simulations have largely been developed for benchmarking algorithms and developing robot policy. However, less attention has been given to supporting end-user exploration and articulation of concerns. In this late-break report, we present design considerations and a system implementation that extend an existing social navigation simulator (SEAN 2.0) to support community-driven feedback and evaluation. We add features to the SEAN 2.0 platform to enable richer sidewalk scenario construction, interactive reruns, and robot signaling exploration. Finally, we provide a user scenario and discuss future directions for using participatory simulation to broaden stakeholder involvement and inform socially responsive navigation design.},
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
  abstract = {Sidewalk robots are increasingly common across the globe. Yet, their operation on public paths poses challenges for people with mobility disabilities (PwMD) who face barriers to accessibility, such as insufficient curb cuts. We interviewed 15 PwMD to understand how they perceive sidewalk robots. Findings indicated that PwMD feel they have to compete for space on the sidewalk when robots are introduced. We next interviewed eight robotics practitioners to learn about their attitudes towards accessibility. Practitioners described how issues often stem from robotic companies addressing accessibility only after problems arise. Both interview groups underscored the importance of integrating accessibility from the outset. Building on this finding, we held four co-design workshops with PwMD and practitioners in pairs. These convenings brought to bear accessibility needs around robots operating in public spaces and in the public interest. Our study aims to set the stage for a more inclusive future around public service robots.},
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
  abstract = {Sidewalk robots are becoming increasingly common worldwide, yet their operation on public walkways presents challenges for pedestrians. This is especially true for people with motor disabilities (PWMD) who already manage obstacles such as inadequate ramps and public incivility. The addition of sidewalk robots could further intensify these difficulties, which poses an urgent need to examine how the design of sidewalk robots may influence the daily navigation experiences of PWMD. This poster illustrates findings from semi-structured interviews with ten PWMD, providing insights into their perspectives on the presence of sidewalk robots. The study uncovers potential conflicts in shared sidewalk use and the adaptive actions PWMD described needing to undertake in response. Interviewees raised concerns about whether the robots could accommodate the needs of PWMD, as compared to people walking on foot, and the repercussions of any shortcomings in this regard. Our research also examines tensions stemming from different robotic design choices, indicating the necessity for more accessible public robot designs. We further delve into PWMD’s interaction needs and modalities for routine operation and in the event of robot malfunction. As cities increasingly allow for the deployment of robots in public spaces, this work seeks to inform equitable design and deployment guidelines for sidewalk robots and calls for further research into the implications of the rise of public robots for the diverse populations that make up any given municipality.},
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
  abstract = {There has been growing interest from both practitioners and researchers in engaging end users in AI auditing, to draw upon users' unique knowledge and lived experiences. However, we know little about how to effectively scaffold end users in auditing in ways that can generate actionable insights for AI practitioners. Through formative studies with both users and AI practitioners, we first identified a set of design goals to support user-engaged AI auditing. We then developed WeAudit, a workflow and system that supports end users in auditing AI both individually and collectively. We evaluated WeAudit through a three-week user study with user auditors and interviews with industry Generative AI practitioners. Our findings offer insights into how WeAudit supports users in noticing and reflecting upon potential AI harms and in articulating their findings in ways that industry practitioners can act upon. Based on our observations and feedback from both users and practitioners, we identify several opportunities to better support user engagement in AI auditing processes. We discuss implications for future research to support effective and responsible user engagement in AI auditing and red-teaming.},
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
section = {earlier},
  shortvenue = {VRW},
  abstract = {Capturing the movement of the upper face in social VR was challenging due to the head-mounted display's occlusion, which hinders accurate emotional expression. In this paper, we conducted two user studies to examine the effect of upper facial expressions on users' emotional recognition ability with VR avatars. Study 1 found that compared with eyelids, restricting the movement of eyebrows would yield greater difficulty for the users to recognize the expressed emotions of 3D avatars. Study 2 further tested different movement amplitudes of the upper facial expressions and results showed that the most realistic movement amplitude was optimal when balancing the tradeoff between emotion recognition accuracy and the Uncanny Valley effect.},
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
  section = {earlier},
  shortvenue = {CHI},
  abstract = {While exaggerated facial expressions in cartoon avatars can enhance emotional communication in social virtual reality (VR), they risk triggering the uncanny valley effect. Our research reveals that this effect varies significantly across different emotions. In Study 1 (N=30), participants evaluated scaled facial expressions during simulated VR conversations. We found that expression exaggeration had opposing effects: it decreased facial realism for joy, surprise, and disgust due to overly dramatic mouth movements, while enhancing realism for fear, sadness, and anger—emotions that rely on upper facial expressions typically constrained by HMD pressure. Based on these findings, we developed a region-specific facial expression exaggeration strategy that enhances under-expressed upper facial features while maintaining natural lower facial movements. Study 2 (N=20) validated this approach, demonstrating enhanced emotional intensity and contagion for negative emotions while mitigating the uncanny valley effect. Our research provides practical guidelines for optimizing avatar-mediated emotional communication in social VR environments.},
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
  section = {earlier},
  shortvenue = {DLA},
  abstract = {Previous studies of historical urban landscape usually focused on the qualitative analysis of city planning and development with the social, economic, and political context, but overlooked quantitative analysis from human perceptions. In this study, we objectively measured the seemingly subjective qualities of the eye-level urban landscape perceptions with computer vision and machine learning technologies. We then explored correlations between the measured perceptual qualities and characteristics from the historical context. We chose Berlin as a research object because it is a capital city that owns a rich history of division and reunification, as well as a variety of residential zones built at different periods. We extracted 30 street features from the 150,000 Google Street View Imagery (SVI) dataset with a computer vision algorithm and evaluated eight perceptual qualities including typology, order, ecology, enclosure, aesthetics, richness, accessibility and scale with a machine learning method. Then we defined seven residential districts in Berlin, according to their spatial distributions and construction periods. Through a systematic comparison of perceptual qualities of the seven residential districts, we find perceptual qualities of ecology and enclosure have been improved a lot over a hundred years in Berlin. The housing policies and design codes in different social, economic and political contexts evolved to end overcrowding living conditions, create more open spaces, and develop a better ecological environment. This study enriches our understanding and application of subjective measures of human-centred built environment perception to the evolution of the historical urban landscape. The proposed quantitative framework of subjective human perception measures provides great testimony to evaluate the effects of the implementation of housing and other urban planning policies. Such an automated, multisource, high-throughput and scalable framework can be applied to other cities to determine the personality of the city and assess the impact of urban design and planning policies in streetscape improvement.},
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
