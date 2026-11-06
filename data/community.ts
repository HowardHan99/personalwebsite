/**
 * "Bringing Robots to Communities" section.
 * Content adapted from the Public Robots project website.
 * Images live in /public/images/outreach/. Newest events first.
 */

export interface CommunityEvent {
  date: string; // display date
  partner: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

export const community = {
  title: 'Bringing Robots to Communities',
  intro:
    "Robots are starting to share our sidewalks. Together with Lawrenceville Corporation and local advocacy groups, our team brings robot simulations and real robots to Pittsburgh communities, so that cyclists, older adults, people with disabilities, and neighbors can shape how robots behave in public space.",
  projectUrl: 'https://augmented-design-capability-studio.github.io/public-robot-website/',
  contactEmail: 'cmupublicrobots@andrew.cmu.edu',
  events: [
    {
      date: 'Oct 2026',
      partner: 'BikePGH',
      title: 'BikePGH visits CMU',
      description: 'Hosted BikePGH at CMU to discuss sidewalk safety through robot simulations and live robot demos.',
      images: [
        { src: '/images/outreach/bikepgh-1.jpg', alt: 'BikePGH visitors watching a live robot demonstration at CMU' },
        { src: '/images/outreach/bikepgh-2.jpg', alt: 'BikePGH visitors discussing sidewalk safety with robot simulation at CMU' },
      ],
    },
    {
      date: 'Jun 2026',
      partner: 'BikePGH',
      title: 'BikePGH Mixer',
      description: 'Shared our research and discussed how cyclists and public-space robots can share streets and paths.',
      images: [{ src: '/images/outreach/bikepgh-mixer.jpg', alt: 'Presentation about public-area robots at the BikePGH Mixer' }],
    },
    {
      date: 'Jun 2026',
      partner: 'Lawrenceville Corporation',
      title: 'Lawrenceville community meeting',
      description: 'A talk and roundtable with Lawrenceville pedestrians on safety, governance, and everyday encounters with robots.',
      images: [
        { src: '/images/outreach/lawrenceville-1.jpg', alt: 'Researchers presenting at the Lawrenceville Corporation community meeting' },
        { src: '/images/outreach/lawrenceville-2.jpg', alt: 'Community members discussing public-area robots at the Lawrenceville meeting' },
      ],
    },
    {
      date: 'Jun 2026',
      partner: 'Age-Friendly Pittsburgh',
      title: 'Robots and older adults',
      description: 'An online meeting on how robots could support older adults, and the local infrastructure challenges they face.',
      images: [{ src: '/images/outreach/age-friendly.jpg', alt: 'Online meeting with Age-Friendly Pittsburgh about public-area robots' }],
    },
    {
      date: 'Jun 2026',
      partner: 'Access Mob Pittsburgh',
      title: 'Invited talk: robots and sidewalks',
      description: 'An invited talk centered on the concerns of people with disabilities as robots arrive on sidewalks.',
      images: [{ src: '/images/outreach/accessmob.jpg', alt: 'Recording of the Access Mob Pittsburgh invited talk' }],
    },
    {
      date: 'Apr 2026',
      partner: 'Boys & Girls Club, Lawrenceville',
      title: 'Introducing the study to neighbors',
      description: 'A community event with Lawrenceville Corporation to introduce our public robot study to local residents.',
      images: [
        { src: '/images/outreach/bgc-1.jpg', alt: 'Team members at the Boys & Girls Club, Lawrenceville Unit' },
        { src: '/images/outreach/bgc-2.jpg', alt: 'Researcher talking with a community member at the Boys & Girls Club event' },
      ],
    },
  ] as CommunityEvent[],
};
