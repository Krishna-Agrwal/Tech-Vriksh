export type EventStatus = 'upcoming' | 'past';
export type EventFormat = 'online' | 'offline';
export type EventKind = 'workshop' | 'session' | 'hackathon';

export type EventItem = {
  slug: string;
  title: string;
  subtitle: string;
  kind: EventKind;
  format: EventFormat;
  status: EventStatus;
  dateLabel: string;
  description: string;
  image: string;
  galleryImages?: string[];
  venue?: string;
  registrationUrl: string;
  notes?: string[];
};

export type HackathonTrack = {
  name: string;
  description: string;
};

export type HackathonDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  registrationUrl: string;
  heroMetric: string;
  coverImage: string;
  tracks: HackathonTrack[];
  sponsors: string[];
  prizes: string[];
  faqs: { question: string; answer: string }[];
  notes: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  focus: string;
  linkedinUrl: string;
};

export type TeamDepartment = {
  department: string;
  summary: string;
  members: TeamMember[];
};

export type StateMemberCount = {
  state: string;
  count: number;
  lat: number;
  lng: number;
};

// Derived from the raw college/institution list — names normalized, near-duplicate spellings merged,
// mapped to states, then doubled per the agreed methodology.
export const stateMembers: StateMemberCount[] = [
  { state: 'Uttar Pradesh', count: 444, lat: 26.8467, lng: 80.9462 },
  { state: 'Delhi', count: 194, lat: 28.7041, lng: 77.1025 },
  { state: 'Haryana', count: 112, lat: 29.0588, lng: 76.0856 },
  { state: 'Punjab', count: 52, lat: 31.1471, lng: 75.3412 },
  { state: 'Maharashtra', count: 32, lat: 19.7515, lng: 75.7139 },
  { state: 'Telangana', count: 32, lat: 18.1124, lng: 79.0193 },
  { state: 'Tamil Nadu', count: 28, lat: 11.1271, lng: 78.6569 },
  { state: 'Gujarat', count: 24, lat: 22.2587, lng: 71.1924 },
  { state: 'Karnataka', count: 20, lat: 15.3173, lng: 75.7139 },
  { state: 'Uttarakhand', count: 10, lat: 30.0668, lng: 79.0193 },
  { state: 'Rajasthan', count: 10, lat: 27.0238, lng: 74.2179 },
  { state: 'West Bengal', count: 10, lat: 22.9868, lng: 87.855 },
  { state: 'Andhra Pradesh', count: 6, lat: 15.9129, lng: 79.74 },
  { state: 'Madhya Pradesh', count: 6, lat: 22.9734, lng: 78.6569 },
  { state: 'Odisha', count: 4, lat: 20.9517, lng: 85.0985 },
  { state: 'Manipur', count: 2, lat: 24.6637, lng: 93.9063 },
  { state: 'Bihar', count: 2, lat: 25.0961, lng: 85.3131 },
  { state: 'Jharkhand', count: 2, lat: 23.6102, lng: 85.2799 }
];

export type Speaker = {
  name: string;
  role: string;
  topic: string;
  event: string;
  image?: string;
};

// Real speakers only — add here as more sessions happen. Photos/LinkedIn can be added once available.
export const speakers: Speaker[] = [
  {
    name: 'Nitin Pandit',
    role: 'Microsoft MVP',
    topic: 'Career guidance session',
    event: 'Ctrl + Future'
  },
  {
    name: 'Arun Chaudhary',
    role: 'Cybersecurity & OSINT Expert',
    topic: 'OSINT and cybersecurity',
    event: 'Ctrl + Future'
  },
  {
    name: 'Sarvesh Shashi Kumar',
    role: 'AI Agents Speaker',
    topic: 'Building with AI agents',
    event: 'Ctrl + Future'
  }
];

const driveImage = (fileId: string) => `https://drive.google.com/uc?export=view&id=${fileId}`;

export const techVrikshLogoUrl = driveImage('1KqtKhx-YZYuSgGKITtBPJzEg6MbD73_j');

export const communityJoinUrl = 'https://forms.gle/CCyMWwfZBeB7QFw';

export const communityInstagramUrl = 'https://www.instagram.com/techvrikshofficial/';

export const communityLinkedInUrl = 'https://www.linkedin.com/company/tech-vriksh/';

export const communityGalleryPhotos = [
  driveImage('1aiE7L3NvIgTx2KHtJeedI8fPFsAgS5pz'),
  driveImage('16WoK9jiZL6212DgJ98S0DI5KUlFpV-Y4'),
  driveImage('1FwchKdqeTwaCS1B_RvktPC9PMHzsfF3T')
];

export const events: EventItem[] = [
  {
    slug: 'ctrl-future',
    title: 'Ctrl + Future',
    subtitle: 'Offline Event',
    kind: 'session',
    format: 'offline',
    status: 'past',
    dateLabel: '20 Jun, 2026',
    description:
      'Offline flagship event at OpsTree Global, Noida, with four sessions and roughly 80 to 90 attendees.',
    image: driveImage('18Cr19NBz79qP5PpNx_GzEHPIXNqu-RTO'),
    galleryImages: [
      driveImage('13jOBQfdPya46BlHUkYLGNOcQJkc76VX_'),
      driveImage('1sC2uJN9mwQ8UgqCC5uhL3YS1900SYdEs'),
      driveImage('1vK30slc9tXRnMX20QQLdRrNiswr3PsKS'),
      driveImage('161DYNB30R6nonyl_DDkv7_mpWaiP2Z2C'),
      driveImage('1XsuaN7bLTCjRRZOimVg-ykX2c8U2UwfW')
    ],
    venue: 'OpsTree Global, Noida',
    registrationUrl: 'https://lu.ma/tech-vriksh-ctrl-future',
    notes: ['Held at OpsTree Global, Noida', '~80–90 attendees', 'Four sessions']
  },
  {
    slug: 'hackvriksh-code-create-cultivate',
    title: 'HackVriksh — Code. Create. Cultivate',
    subtitle: 'Hackathon',
    kind: 'hackathon',
    format: 'offline',
    status: 'past',
    dateLabel: '16 Oct, 2025',
    description:
      'The flagship hackathon for Tech Vriksh, designed around practical problem solving, mentor feedback, and post-event continuity.',
    image: driveImage('1bPAl9b3kwUyu7Modb3umroMP3Goxt5-4'),
    registrationUrl: 'https://lu.ma/tech-vriksh-hackvriksh',
    notes: ['Flagship hackathon', 'Official poster supplied by the team']
  },
  {
    slug: 'techpath-2o-discover-decide-dominate',
    title: 'Techpath 2.O — Discover. Decide. Dominate',
    subtitle: 'Offline Event',
    kind: 'session',
    format: 'offline',
    status: 'past',
    dateLabel: '31 Aug, 2025',
    description:
      'A follow-up Techpath edition with a refreshed speaker set, updated student questions, and a tighter offline agenda.',
    image: driveImage('1cL4eJXDI5veYhzdOrCmHLCeggGefojzw'),
    venue: 'Offline venue to be confirmed',
    registrationUrl: 'https://lu.ma/tech-vriksh-techpath-2'
  },
  {
    slug: 'tech-baithak',
    title: 'Tech Baithak',
    subtitle: 'Offline Event',
    kind: 'session',
    format: 'offline',
    status: 'past',
    dateLabel: '15 Nov, 2025',
    description:
      'An informal discussion evening with peer questions, quick speaker notes, and room for open conversation.',
    image: driveImage('1D0Z6SFOyr7ygd9kVF-3RW48cBjtWU5kL'),
    venue: 'Community meetup room',
    registrationUrl: 'https://lu.ma/tech-vriksh-tech-baithak'
  },
  {
    slug: 'snap-the-lens',
    title: 'Snap the Lens',
    subtitle: 'Offline Event',
    kind: 'session',
    format: 'offline',
    status: 'past',
    dateLabel: '27 Sep, 2025',
    description:
      'A photo-first offline meetup that captured community moments and gave members a lighter way to engage with the group.',
    image: driveImage('14slovMwWHb6F6IRTClRiYl2wStX69FoU'),
    galleryImages: [
      driveImage('1cfo58Tgwv1DRa9y1c1FbxiriSGzSW0kj'),
      driveImage('1qiMsXL3f-lctEcHRrft9WN7RoVzkdh0W'),
      driveImage('1a9RtBVquKA8h8pHfBlHxWFNdKwxNnwBD'),
      driveImage('1aagXzd71ShU8b41HVmeXph7SlQhR077X'),
      driveImage('1IbVTnuqneTeuIhInQhx3mQKAdRLl-7gu')
    ],
    venue: 'Community studio space',
    registrationUrl: 'https://lu.ma/tech-vriksh-snap-the-lens'
  },
  {
    slug: 'techpath-1o-discover-decide-dominate',
    title: 'Techpath 1.O — Discover. Decide. Dominate',
    subtitle: 'Offline Event',
    kind: 'session',
    format: 'offline',
    status: 'past',
    dateLabel: '31 May, 2025',
    description:
      'An offline direction-setting session that helped students connect their current skills with a practical next step.',
    image: driveImage('1cbLAmp8eTojerH_DdxDt4oPqNuN9IES-'),
    galleryImages: [
      driveImage('1yrXcQuGmS8wGPerz2Xx69_XGknYpxIZP'),
      driveImage('1DuKXglmJ3LRvDSIpqy3NAMRA_AgqKIax'),
      driveImage('1kdSpVMtE59fcFpl5gIcE3b7xUGiTV-gO'),
      driveImage('1eUZ3GoIxpaJRs0GhChn8lz1QuYrsprZt'),
      driveImage('1iN6r9MvV7goGeu2ntTrHQcQI9FNTJcSJ')
    ],
    venue: 'Noida campus hall',
    registrationUrl: 'https://lu.ma/tech-vriksh-techpath-1'
  },
  {
    slug: 'ai-rap-battle-build-with-gemini-in-python',
    title: 'AI Rap Battle: Build with Gemini in Python',
    subtitle: 'Online Workshop',
    kind: 'workshop',
    format: 'online',
    status: 'past',
    dateLabel: '10 May, 2025',
    description:
      'A light competition-format coding session where participants used Python and Gemini APIs to build playful generative ideas quickly.',
    image: driveImage('1jXshfCuzg-Qp_IgZ45ZWXig80netge2l'),
    registrationUrl: 'https://lu.ma/tech-vriksh-ai-rap-battle'
  },
  {
    slug: 'hands-on-workshop-on-neural-networks',
    title: 'Hands-on Workshop on Neural Networks',
    subtitle: 'Online Workshop',
    kind: 'workshop',
    format: 'online',
    status: 'past',
    dateLabel: '04 May, 2025',
    description:
      'An approachable neural networks session with forward passes, loss functions, and a clear explanation of what the model is actually learning.',
    image: driveImage('1qJRHW8_UDww9xj3iov685_afyfEBhoar'),
    registrationUrl: 'https://lu.ma/tech-vriksh-neural-networks'
  },
  {
    slug: 'learn-web-development-in-a-fun-way-using-games',
    title: 'Learn Web Development in a Fun Way Using Games',
    subtitle: 'Online Workshop',
    kind: 'workshop',
    format: 'online',
    status: 'past',
    dateLabel: '12 Apr, 2025',
    description:
      'A workshop that teaches HTML, CSS, and logic through small game-style exercises instead of a standard slide deck.',
    image: driveImage('1Q9dWqGSRMEY4VQeOYyL6xcFTaOZoMObd'),
    registrationUrl: 'https://lu.ma/tech-vriksh-web-dev-games'
  },
  {
    slug: 'research-mastery-workshop',
    title: 'Research Mastery Workshop',
    subtitle: 'Online Session',
    kind: 'session',
    format: 'online',
    status: 'past',
    dateLabel: '29 Mar, 2025',
    description:
      'A focused session on reading technical papers, framing research questions, and turning curiosity into a workable plan.',
    image: driveImage('1cYkopuhOwNbwTMozWwhkwJ2xMujFhJKN'),
    registrationUrl: 'https://lu.ma/tech-vriksh-research-mastery'
  },
  {
    slug: 'hands-on-workshop-on-gen-ai',
    title: 'Hands-on Workshop on Gen AI',
    subtitle: 'Online Workshop',
    kind: 'workshop',
    format: 'online',
    status: 'past',
    dateLabel: '23 Mar, 2025',
    description:
      'An introductory GenAI build session covering prompting, API basics, and small experiments that students can extend later.',
    image: driveImage('1MdbeE963RHwxVRo6pmug1Q8odh5is3Po'),
    registrationUrl: 'https://lu.ma/tech-vriksh-gen-ai'
  },
  {
    slug: 'career-guidance-workshop-balance-your-cgpa-internships-hackathons',
    title: 'Career Guidance Workshop: Balance your CGPA, Internships, Hackathons',
    subtitle: 'Online Session',
    kind: 'session',
    format: 'online',
    status: 'past',
    dateLabel: '15 Mar, 2025',
    description:
      'A practical session on prioritising academics, internships, and build work without burning out in the middle of a semester.',
    image: driveImage('1oeYmN5-sKXK3Vw7IJBjgeNE3XYcIisoa'),
    registrationUrl: 'https://lu.ma/tech-vriksh-career-guidance'
  },
  {
    slug: '2-day-data-science-hands-on-workshop',
    title: '2-Day Data Science Hands-on Workshop',
    subtitle: 'Online Workshop',
    kind: 'workshop',
    format: 'online',
    status: 'past',
    dateLabel: '25–26 Feb, 2025',
    description:
      'A two-part practical workshop on cleaning datasets, building simple models, and interpreting results with notebooks.',
    image: driveImage('14S9fO9yrxhLKj87w0d1rEP9_YX147Ksi'),
    registrationUrl: 'https://lu.ma/tech-vriksh-data-science-workshop'
  }
];

export const hackathons: HackathonDetail[] = [
  {
    slug: 'hackvriksh-code-create-cultivate',
    title: 'HackVriksh',
    tagline: 'Code. Create. Cultivate',
    description:
      'HackVriksh is the flagship hackathon for Tech Vriksh. The sample version here shows how the challenge, support, and follow-up sections can be presented cleanly.',
    registrationUrl: 'https://lu.ma/tech-vriksh-hackvriksh',
    heroMetric: 'Flagship hackathon',
    coverImage: driveImage('1bPAl9b3kwUyu7Modb3umroMP3Goxt5-4'),
    tracks: [
      {
        name: 'Track A: Student Productivity',
        description: 'Build tools that help students plan, track, or simplify everyday academic work.'
      },
      {
        name: 'Track B: Community Utility',
        description: 'Create something that helps a student community share knowledge or coordinate better.'
      },
      {
        name: 'Track C: Applied AI',
        description: 'Use AI in a grounded way for workflows, support, or practical student-facing use cases.'
      }
    ],
    sponsors: ['OpsTree Global', 'ThoughtWorks', 'Microsoft', 'Sample partner slot'],
    prizes: ['First prize: sample trophy + certificate', 'Second prize: sample certificate + mentor session', 'Community choice award'],
    faqs: [
      {
        question: 'Who can participate?',
        answer: 'This sample page assumes engineering students, with team formation rules to be finalised later.'
      },
      {
        question: 'What format will it follow?',
        answer: 'The sample layout is built for an offline hackathon with mentor support and staged judging.'
      }
    ],
    notes: ['Sample timeline ready', 'Sponsor list can be swapped later']
  },
  {
    slug: 'pre-hackathon-series',
    title: 'Pre Hackathon Series',
    tagline: 'Warm-up sessions before the main event',
    description:
      'A sample prep series for HackVriksh that shows the event flow before the main hackathon day arrives.',
    registrationUrl: 'https://lu.ma/tech-vriksh-pre-hackathon-series',
    heroMetric: 'Prep series',
    coverImage: '/sample/hackathon-02.svg',
    tracks: [
      {
        name: 'Session 1: Team setup',
        description: 'How to form balanced teams and define roles before the challenge begins.'
      },
      {
        name: 'Session 2: Idea framing',
        description: 'How to shape a practical problem statement into a buildable project.'
      }
    ],
    sponsors: ['Sample sponsor 1', 'Sample sponsor 2'],
    prizes: ['Workshop certificate', 'Priority queue for HackVriksh support'],
    faqs: [
      {
        question: 'How is this connected to HackVriksh?',
        answer: 'It acts as a warm-up series and onboarding path for the flagship hackathon.'
      }
    ],
    notes: ['Sample schedule ready', 'Relationship to HackVriksh shown clearly']
  }
];

export const teamDepartments: TeamDepartment[] = [
  {
    department: '',
    summary: '',
    members: [
      {
        name: 'Krishna Agarwal',
        role: 'Founder',
        image: driveImage('1cc8Mse57cPgUz5ZY1KeXA0HzFXn9lC9s'),
        focus: 'Community direction and partnerships',
        linkedinUrl: 'https://www.linkedin.com/in/krishna-agarwal13/'
      },
    ]
  },
  {
    department: 'Design & Content',
    summary: 'Shapes the event story, visual tone, and content direction across the community.',
    members: [
      {
        name: 'Geetanjali',
        role: 'Director of Design and Content',
        image: driveImage('1CNAlCJqjfl6wvBuFAv3QDhVviKnjtUex'),
        focus: 'Visual direction and content planning',
        linkedinUrl: 'https://www.linkedin.com/in/geetanjali-y-7146aa210/'
      }
    ]
  },
    {
    department: 'Marketing & Growth',
    summary: 'Handles outreach, audience growth, and brand visibility for the community.',
    members: [
      {
        name: 'Rohan Sharma',
        role: 'Director of Marketing and Growth',
        image: driveImage('1T92DE2mX74FVjxCw5omw6fCHvHeJrFpT'),
        focus: 'Growth strategy and outreach',
        linkedinUrl: 'https://www.linkedin.com/in/rohan-sharma-021429307/'
      }
    ]
  },
  {
    department: 'PR',
    summary: 'Decides where Tech Vriksh grows',
    members: [
      {
        name: 'Bharat Chadha',
        role: 'Director of PR and Outreach',
        image: driveImage('14Hm7RfAsZlY2iY_s2hmTPbHwHJnz65j1'),
        focus: 'Visual direction and content planning',
        linkedinUrl: 'https://www.linkedin.com/in/bharat-chadha2006/'
      }
    ]
  },

  {
    department: 'Research',
    summary: 'Turns topic ideas into clear, usable workshop outlines and speaker briefs.',
    members: [
      {
        name: 'Riya Srivastava',
        role: 'Research Analyst',
        image: driveImage('15j0mziU6GQrlVMKAdV2_dh6hpvLPm1SN'),
        focus: 'Research briefs and content validation',
        linkedinUrl: 'https://www.linkedin.com/in/riya-srivastava-385b8932a'
      }
    ]
  },
  {
    department: 'Social Media',
    summary: 'Keeps the public-facing community channels active, clear, and consistent.',
    members: [
      {
        name: 'Sampada Singh',
        role: 'Social Media Manager',
        image: driveImage('1IwP0EFqAGdjHY8V9xOud5MDlpq7Zejr5'),
        focus: 'Content calendar and posting',
        linkedinUrl: 'https://www.linkedin.com/in/sampada-singh-599421359/'
      },
    ]
  },
  {
    department: 'WhatsApp Community',
    summary: 'Welcomes members, keeps the chat organised, and handles day-to-day community flow.',
    members: [
      {
        name: 'Princy Kumari',
        role: 'WhatsApp Community Management Team',
        image: driveImage('1ThU8qn643kkpBZUHHymF1wkB3CA2i7R3'),
        focus: 'Community moderation and welcome flow',
        linkedinUrl: 'https://www.linkedin.com/in/princy-kumari-a4aa82339/'
      },
      {
        name: 'Tanishak Tyagi',
        role: 'WhatsApp Community Management Team',
        image: driveImage('1lVnPXyJAgE24Ma3UsipmIdcU8XUYUhBc'),
        focus: 'Group coordination and support',
        linkedinUrl: 'https://www.linkedin.com/in/tanishak-tyagi-744501319/'
      }
    ]
  },
  {
    department: 'Social Media',
    summary: 'Keeps the public-facing community channels active, clear, and consistent.',
    members: [
      {
        name: 'Santosh Kumar Verma',
        role: 'Social Media Team',
        image: driveImage('1krTQLRcsSE-RWtCpvz3avLqzqg-zkJWN'),
        focus: 'Community social support',
        linkedinUrl: 'https://www.linkedin.com/in/santoshverma77'
      }
    ]
  },
  {
    department: 'WhatsApp Community',
    summary: 'Welcomes members, keeps the chat organised, and handles day-to-day community flow.',
    members: [
      {
        name: 'Janvi Narang',
        role: 'WhatsApp Community Management Team',
        image: driveImage('1zie9Rf6ULL_XPRf5quoo34vSXIBljLc3'),
        focus: 'Group coordination and support',
        linkedinUrl: 'https://www.linkedin.com/in/janvi-narang-2b2b18381'
      }
    ]
  },
  {
    department: 'Video Editing',
    summary: 'Turns event footage into short, polished clips for social channels and recaps.',
    members: [
      {
        name: 'Divyansh Singh',
        role: 'Video Editing Team',
        image: driveImage('1FbAaZwZg1Q0tMngDiJK0tIdeniYauOfS'),
        focus: 'Event video edits',
        linkedinUrl: 'https://www.linkedin.com/in/divyansh-singh-08-31-'
      },
      {
        name: 'Gunjan Kumari',
        role: 'Video Editing Team',
        image: driveImage('1ylayfubPS7Ox3sxFddjmHejsbyCg6iaf'),
        focus: 'Highlight cuts and short-form edits',
        linkedinUrl: 'https://www.linkedin.com/in/gunjan-kushwaha-78149b311/'
      }
    ]
  },
  {
    department: 'Anchors',
    summary: 'Hosts sessions and keeps on-stage transitions clean and clear for attendees.',
    members: [
      {
        name: 'Gayathri Komanduri',
        role: 'Anchor / Host',
        image: driveImage('1bz-0bqu2bT9US8mhbaotA-R0M0jK1Cmi'),
        focus: 'Session hosting and transitions',
        linkedinUrl: 'https://www.linkedin.com/in/gayathri-komanduri20/'
      },
      {
        name: 'Sneha Dingoriya',
        role: 'Anchor / Host',
        image: driveImage('1DRwns406RgYbpUY7Kccq0gXrwjLOpAVn'),
        focus: 'Stage delivery and session flow',
        linkedinUrl: 'https://www.linkedin.com/in/sneha-dingoriya-8949ba368/'
      }
    ]
  }
];
