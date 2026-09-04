import type {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  HackathonAchievement,
  CertificationItem,
  LeadershipActivity,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Tharun B S',
  role: 'UI/UX Designer & Product Thinker',
  monogram: 'TB',
  location: 'Tiruvallur, Tamil Nadu, India',
  email: 'vasanthakumariv135@gmail.com',
  phone: '+91 9710997532',
  phoneDisplay: '+91 97109 97532',
  portfolioUrl: 'https://resume-eight-alpha-37.vercel.app',
  portfolioDisplay: 'resume-eight-alpha-37.vercel.app',
  github: 'https://github.com/vasanthakumari900',
  githubUsername: 'vasanthakumari900',
  linkedin: 'https://linkedin.com/in/tharun-b-s-tharun-5352b13b0',
  linkedinHandle: 'tharun-b-s-tharun',
  status: 'Open for UI/UX & Product Design Roles',
  heroLabel: 'UI/UX DESIGNER · PRODUCT THINKER · FRONTEND BUILDER',
  headline: 'Designing intuitive digital products and bringing ideas to life.',
  subheadline:
    'I am Tharun B S, a Computer Science student focused on UI/UX and product experiences. I combine design thinking with frontend development and technology to create intuitive digital products that solve meaningful problems.',
  aboutHeadline: 'DESIGN-MINDED. TECHNICALLY GROUNDED.',
  aboutParagraphs: [
    'I am a Computer Science student interested in designing digital products that are intuitive, structured, and meaningful.',
    'My work combines UI/UX design, frontend development, and technology. I enjoy translating complex problems into clear digital experiences and understanding how design decisions move from ideas to working products.',
    'My technical background helps me understand both product design and implementation.',
  ],
  currentlyFocusedOn: [
    'Strengthening UI/UX and product design skills',
    'Building user-focused digital products',
    'Developing stronger product case studies',
    'Exploring the intersection of AI, design, and technology',
  ],
  summary:
    'Third-year B.Sc. Computer Science student specializing in UI/UX and product design with frontend engineering experience. Skilled in Figma, wireframing, prototyping, user flows, and responsive web technologies (React.js, JavaScript, HTML, CSS). Experienced in designing and building user-focused platforms involving AI, certificate verification, academic management, and disaster intelligence.',
};

export const PROJECTS: Project[] = [
  {
    id: 'pralaya-ai',
    title: 'PRALAYA AI',
    subtitle: 'National Landslide Disaster Operations Centre & Early Warning Platform',
    category: 'AI · DISASTER INTELLIGENCE · GIS',
    description:
      'An AI-powered disaster intelligence platform designed to support landslide risk assessment using environmental and geospatial data with an intuitive operations dashboard.',
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Random Forest ML',
      'XAI (Explainable AI)',
      'Leaflet GIS',
      'REST APIs',
    ],
    keyContributions: [
      'Disaster intelligence dashboard experience and visual risk hierarchy',
      'Interactive GIS-based geographic visualization using Leaflet',
      'Explainable AI (XAI) feature attribution display explaining risk drivers',
      'Real-world environmental data integration over synthetic mocks',
      'Historical disaster exploration and responsive command centre UI',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/DISASTER.git',
    liveUrl: 'https://disaster-phi-two.vercel.app/',
    featured: true,
    accentColor: '#0A0A0A',
    previewType: 'pralaya',
  },
  {
    id: 'certiseal',
    title: 'CERTISEAL',
    subtitle: 'Digital Certificate Verification & Trust Infrastructure (CERTX)',
    category: 'UI/UX · AI · DOCUMENT VERIFICATION',
    description:
      'A digital trust platform designed to help verify academic certificate authenticity and address forged or manipulated credentials through structured verification flows.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'AI/ML Checks', 'GitHub', 'Vercel'],
    keyContributions: [
      'Structured UI development and verification workflow interface',
      'User-friendly verification experience and clear status indicators',
      'Multi-surface layout (Public verification, Admin governance, Student vault)',
      'Frontend implementation and responsive document inspection components',
      'GitHub repository and production deployment management on Vercel',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/CERTISEAL',
    liveUrl: 'https://certiseal.vercel.app/',
    featured: false,
    accentColor: '#0A0A0A',
    previewType: 'certiseal',
  },
  {
    id: 'cs-academic-portal',
    title: 'CS ACADEMIC PORTAL',
    subtitle: 'Student Academic Management & Learning Platform',
    category: 'PRODUCT DESIGN · WEB PLATFORM · EDUCATION',
    description:
      'A centralized academic web platform designed to streamline student access to departmental syllabus modules, e-content, lab repositories, and notices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'GitHub', 'Vercel'],
    keyContributions: [
      'Responsive interface development for desktop and mobile viewports',
      'Centralized academic information architecture and subject roadmaps',
      'Student-focused interface for quick resource retrieval in two clicks',
      'Frontend development and modular component structure in React',
      'Repository management and automated deployment on Vercel',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/cs-academic-portal',
    liveUrl: 'https://cs-academic-portal.vercel.app/',
    featured: false,
    accentColor: '#0A0A0A',
    previewType: 'portal',
  },
];

// Re-ordered strictly with DESIGN first
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'design',
    name: 'DESIGN',
    description: 'User-centered design methods, prototyping, and UI/UX systems.',
    skills: [
      { name: 'Figma', note: 'Design systems, high-fidelity UI, components & variants', highlight: true },
      { name: 'Canva', note: 'Visual design, layout composition, and presentation assets' },
      { name: 'Wireframing', note: 'Low-to-mid fidelity rapid layout and ergonomic UX', highlight: true },
      { name: 'Prototyping', note: 'Interactive transitions, click-through flows & state mockups', highlight: true },
      { name: 'User Research', note: 'Needs assessment, problem framing, and task analysis' },
      { name: 'User Flows', note: 'Task mapping, edge-case routing, and intuitive navigation', highlight: true },
      { name: 'Responsive Design', note: 'Fluid grid systems, breakpoints, and mobile-first logic', highlight: true },
    ],
  },
  {
    id: 'frontend',
    name: 'FRONTEND',
    description: 'Modern web technologies for turning designs into performant, accessible code.',
    skills: [
      { name: 'React.js', note: 'Component architecture, hooks, state management', highlight: true },
      { name: 'JavaScript', note: 'ES6+, async/await, DOM APIs, modern client logic', highlight: true },
      { name: 'HTML5', note: 'Semantic markup, accessibility standards, document flow', highlight: true },
      { name: 'CSS3', note: 'Flexbox, CSS Grid, custom properties, clean animations', highlight: true },
      { name: 'ASP.NET', note: 'Web application fundamentals & backend integration' },
    ],
  },
  {
    id: 'product-tech',
    name: 'PRODUCT & TECHNOLOGY',
    description: 'Data integration, API contracts, machine learning, and geospatial intelligence.',
    skills: [
      { name: 'REST APIs', note: 'Client-server contracts, endpoint design, JSON schemas', highlight: true },
      { name: 'Machine Learning Fundamentals', note: 'Random Forest classification workflows, XAI concepts' },
      { name: 'Geospatial Analysis', note: 'Geographic coordinate data & environmental telemetry layers' },
      { name: 'GIS Visualization', note: 'Leaflet GIS, spatial overlays, hazard mapping', highlight: true },
    ],
  },
  {
    id: 'programming',
    name: 'PROGRAMMING',
    description: 'Algorithmic problem-solving and structured software development.',
    skills: [
      { name: 'Python', note: 'Data processing, scripting, ML model integration', highlight: true },
      { name: 'Java', note: 'Object-oriented programming and data structures' },
      { name: 'C++', note: 'Algorithm efficiency and data structures' },
      { name: 'C', note: 'Foundational systems programming and memory concepts' },
    ],
  },
  {
    id: 'data',
    name: 'DATA',
    description: 'Database design, querying, and relational schemas.',
    skills: [
      { name: 'SQL', note: 'Relational schema design, querying, normalization', highlight: true },
      { name: 'MySQL', note: 'Database administration, tables, views, indexing' },
      { name: 'Oracle', note: 'Enterprise SQL, queries, transaction principles' },
    ],
  },
  {
    id: 'tools',
    name: 'DEVELOPMENT TOOLS',
    description: 'Version control, developer workflow, and deployment environments.',
    skills: [
      { name: 'Git', note: 'Branching, commit conventions, version control', highlight: true },
      { name: 'GitHub', note: 'Repository management, PRs, collaborative workflows', highlight: true },
      { name: 'VS Code', note: 'Primary IDE, debugging, extension configuration', highlight: true },
      { name: 'Visual Studio', note: 'Application development, build configurations' },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'webbed-internship',
    role: 'Software Engineering Intern',
    company: 'WEBBED',
    type: 'Virtual Internship',
    period: 'December 2025 – January 2026',
    duration: '4 Weeks',
    description:
      'Completed an intensive four-week virtual internship program focused on foundational software engineering concepts, collaborative code workflows, and web technology implementations.',
    learningAreas: [
      'Core software engineering principles and modular code architecture',
      'Frontend and web development technologies application',
      'Version control and collaborative workflows with Git & GitHub',
      'Modern development tooling, project setups, and debugging practices',
    ],
  },
];

export const HACKATHON_ACHIEVEMENT: HackathonAchievement = {
  id: 'sih-2026',
  competition: 'Smart India Hackathon 2026',
  year: '2026',
  projectTitle: 'AI-Based Fake Identity & Document Screening System',
  problemStatementId: 'SIH26188',
  organization: 'Ministry of Home Affairs',
  track: 'Blockchain & Cybersecurity',
  achievement: 'Shortlisted',
  description:
    'Proposed and designed an intelligent screening interface and pipeline to identify falsified documents and fraudulent credentials under national-level evaluation by the Ministry of Home Affairs.',
  focusAreas: [
    'Document Tamper Screening',
    'Identity Verification UI',
    'Blockchain Audit Concepts',
    'Cybersecurity Best Practices',
  ],
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'degree',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Dwaraka Doss Goverdhan Doss Vaishnav College',
    period: '2024 – 2027',
    score: '8.27 / 10',
    scoreType: 'CGPA',
    details: 'Third-year student focusing on UI/UX design, product thinking, frontend engineering, and computer systems.',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Hussain Memorial Matriculation Higher Secondary School',
    period: 'Completed 2024',
    score: '85.83%',
    scoreType: 'Percentage',
    details: 'Computer Science & Mathematics curriculum.',
  },
  {
    id: 'sslc',
    degree: 'Secondary School Leaving Certificate (Class X)',
    institution: 'Holy Immanuel Matriculation School',
    period: 'Completed 2022',
    score: '92.00%',
    scoreType: 'Percentage',
    details: 'Graduated with academic distinction.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'maiyyam',
    title: 'UI/UX, Artificial Intelligence & Data Analytics Traineeships',
    issuer: 'Maiyyam Knowledge and Careers Pvt. Ltd.',
    period: '2025–2026',
    category: 'Traineeship',
  },
  {
    id: 'deloitte-forage',
    title: 'Technology Job Simulation',
    issuer: 'Deloitte (Forage)',
    period: 'December 2025',
    category: 'Simulation',
  },
  {
    id: 'tata-forage',
    title: 'GenAI-Powered Data Analytics Job Simulation',
    issuer: 'Tata (Forage)',
    period: 'December 2025',
    category: 'Simulation',
  },
  {
    id: 'lloyds-forage',
    title: 'Technology Engineering Job Simulation',
    issuer: 'Lloyds Banking Group (Forage)',
    period: 'December 2025',
    category: 'Simulation',
  },
  {
    id: 'ba-forage',
    title: 'Data Science Job Simulation',
    issuer: 'British Airways (Forage)',
    period: 'December 2025',
    category: 'Simulation',
  },
  {
    id: 'hackforge-2025',
    title: 'Data Analytics & Generative AI Sessions (Brainstorming Agents)',
    issuer: 'HackForge 2025, DDGD Vaishnav College',
    period: '2025',
    category: 'Session',
  },
  {
    id: 'bootstrap-training',
    title: 'Bootstrap Framework Training',
    issuer: 'Imarticus Learning & DDGD Vaishnav College',
    period: '2024–2025',
    category: 'Training',
  },
];

export const LEADERSHIP_ITEMS: LeadershipActivity[] = [
  {
    role: 'Class Representative',
    organization: 'Department of Computer Science',
    description: 'Liaising between faculty and student peers, coordinating academic requirements and schedules.',
  },
  {
    role: 'Event Coordinator',
    organization: 'College Technical & Cultural Events',
    description: 'Planning logistics and ensuring smooth execution of departmental sessions.',
  },
  {
    role: 'Team Lead',
    organization: 'Academic & Hackathon Projects',
    description: 'Guiding UI design direction, user flows, and frontend component integration for software builds.',
  },
  {
    role: 'Member, Rotaract Club',
    organization: 'Rotaract District 3232 / College Chapter',
    description: 'Contributing to community welfare drives, youth leadership initiatives, and social awareness.',
  },
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Spoken & Written' },
  { name: 'Tamil', proficiency: 'Spoken & Written' },
];
