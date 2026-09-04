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
  role: 'UI/UX Designer & Computer Science Student',
  monogram: 'TB',
  location: 'Tiruvallur, Tamil Nadu, India',
  email: 'vasanthakumariv135@gmail.com',
  phone: '+91 9710997532',
  phoneDisplay: '+91 97109 97532',
  github: 'https://github.com/vasanthakumari900',
  githubUsername: 'vasanthakumari900',
  linkedin: 'https://linkedin.com/in/tharun-b-s-tharun-5352b13b0',
  linkedinHandle: 'tharun-b-s-tharun',
  status: 'Open for UI/UX & Product Design Roles',
  headline: 'I design digital experiences and build products that solve real problems.',
  subheadline:
    'UI/UX Designer and Computer Science student combining design thinking, frontend development, and emerging technologies to create intuitive, user-focused digital experiences.',
  heroTagline: 'UI/UX DESIGNER · PRODUCT THINKER · FRONTEND BUILDER',
  summary:
    'Third-year B.Sc. Computer Science student with a strong focus in UI/UX design and experience building responsive web applications. Skilled in Figma, wireframing, prototyping, user flows, responsive design, and frontend technologies including HTML, CSS, JavaScript, and React.js. Experienced in building user-focused platforms involving AI, certificate verification, academic management, and disaster intelligence.',
  threePillars: [
    {
      title: 'UI/UX & Product Design',
      desc: 'Design systems, wireframes, user flows, and high-fidelity interactive prototypes in Figma with strict hierarchy and ergonomics.',
      badge: 'Core Focus',
      step: '01. Understand & Wireframe',
    },
    {
      title: 'Frontend Development',
      desc: 'Translating design concepts into clean, accessible, semantic React.js and modern web interfaces with micro-interactions.',
      badge: 'Technical Bridge',
      step: '02. Craft & Implement',
    },
    {
      title: 'AI & Technology Projects',
      desc: 'Integrating real-world data, GIS visualization, and AI/ML model reasoning into structured user experiences that build trust.',
      badge: 'Domain Innovation',
      step: '03. Deploy & Deliver',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'pralaya-ai',
    title: 'PRALAYA AI',
    subtitle: 'Landslide Disaster Intelligence & Early Warning Platform',
    category: 'AI · Disaster Intelligence · Product Design · GIS',
    description:
      'An AI-powered disaster intelligence platform designed to assess landslide risk using environmental and geospatial data with an intuitive risk dashboard.',
    technologies: [
      'Python',
      'FastAPI',
      'React.js',
      'Machine Learning',
      'Random Forest',
      'XAI',
      'Leaflet GIS',
      'REST APIs',
    ],
    keyContributions: [
      'Designed and contributed to the disaster intelligence dashboard UI',
      'Worked on user experience architecture and visual risk clarity',
      'Developed interactive GIS-based geographic visualization',
      'Integrated real-world environmental data sources over synthetic mocks',
      'Built modules for risk analysis and explainable AI-powered insights',
      'Developed historical disaster analysis and interactive map layers',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/DISASTER.git',
    liveUrl: 'https://disaster-phi-two.vercel.app/',
    featured: true,
    accentColor: '#10B981', // Emerald / geospatial green
    previewType: 'pralaya',
  },
  {
    id: 'certiseal',
    title: 'CERTISEAL',
    subtitle: 'AI-Based Certificate Verification System',
    category: 'UI/UX · AI · Document Verification',
    description:
      'A digital platform designed to help verify certificate authenticity and address forged or manipulated documents through clear verification flows.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'AI/ML', 'GitHub', 'Vercel'],
    keyContributions: [
      'Designed and developed the complete end-to-end verification interface',
      'Created structured, accessible UI components with clear status hierarchy',
      'Developed user-friendly document upload and verification stepper',
      'Focused on trust-centered interaction design and inspection results',
      'Managed repository versioning and production deployment on Vercel',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/CERTISEAL',
    liveUrl: 'https://certiseal.vercel.app/',
    featured: false,
    accentColor: '#6366F1', // Indigo / security trust
    previewType: 'certiseal',
  },
  {
    id: 'cs-academic-portal',
    title: 'CS Academic Portal',
    subtitle: 'Student Academic Management & Learning Platform',
    category: 'Product Design · Web Platform · Education',
    description:
      'A centralized web platform designed to improve student access to academic information, syllabus resources, and departmental activities.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'GitHub', 'Vercel'],
    keyContributions: [
      'Developed a centralized academic hub for computer science students',
      'Created responsive, structured user interfaces for quick information retrieval',
      'Organized academic features, course materials, and departmental notices',
      'Contributed to core frontend development and component reusability',
      'Managed deployment and continuous delivery on Vercel',
    ],
    githubUrl: 'https://github.com/vasanthakumari900/cs-academic-portal',
    liveUrl: 'https://cs-academic-portal.vercel.app/',
    featured: false,
    accentColor: '#F59E0B', // Amber / learning warmth
    previewType: 'portal',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'uiux',
    name: 'UI/UX Design',
    description: 'User-centered design methods, prototyping, and design systems.',
    skills: [
      { name: 'Figma', note: 'Design systems, high-fidelity UI, components & variants', highlight: true },
      { name: 'Wireframing', note: 'Low-to-mid fidelity rapid layout and UX architecture' },
      { name: 'Prototyping', note: 'Interactive transitions, click-through flows & state mockups', highlight: true },
      { name: 'User Flows', note: 'Task mapping, edge-case routing, and intuitive navigation' },
      { name: 'Responsive Design', note: 'Fluid grid systems, breakpoints, and mobile-first logic', highlight: true },
      { name: 'User Research', note: 'Needs assessment, problem framing, and task analysis' },
      { name: 'Canva', note: 'Visual assets, deck layouts, and brand collateral' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend & Web',
    description: 'Modern web technologies for turning designs into performant code.',
    skills: [
      { name: 'React.js', note: 'Component architecture, hooks, state management', highlight: true },
      { name: 'JavaScript', note: 'ES6+, async/await, DOM APIs, modern client logic', highlight: true },
      { name: 'HTML5', note: 'Semantic markup, accessibility standards, document flow' },
      { name: 'CSS3', note: 'Flexbox, CSS Grid, custom properties, animations', highlight: true },
      { name: 'ASP.NET', note: 'Web application fundamentals & backend integration' },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Algorithmic problem-solving and structured software development.',
    skills: [
      { name: 'Python', note: 'Data processing, scripting, ML model integration', highlight: true },
      { name: 'Java', note: 'Object-oriented design, core CS concepts' },
      { name: 'C++', note: 'Data structures, algorithm efficiency' },
      { name: 'C', note: 'Foundational systems programming and memory concepts' },
    ],
  },
  {
    id: 'data-backend',
    name: 'Data & Backend',
    description: 'Database design, querying, and API communications.',
    skills: [
      { name: 'REST APIs', note: 'Client-server contracts, endpoint design, JSON schemas', highlight: true },
      { name: 'SQL', note: 'Relational schema design, querying, normalization' },
      { name: 'MySQL', note: 'Database administration, tables, views, indexing' },
      { name: 'Oracle', note: 'Enterprise SQL, queries, transaction principles' },
    ],
  },
  {
    id: 'tools',
    name: 'Development Tools',
    description: 'Version control, developer workflow, and deployment environments.',
    skills: [
      { name: 'Git', note: 'Branching, commit conventions, version control', highlight: true },
      { name: 'GitHub', note: 'Repository management, PRs, collaborative workflows', highlight: true },
      { name: 'VS Code', note: 'Primary IDE, debugging, extension configuration' },
      { name: 'Visual Studio', note: 'Application development, build configurations' },
    ],
  },
  {
    id: 'emerging',
    name: 'Emerging Technology',
    description: 'Applied machine learning, explainability, and geospatial systems.',
    skills: [
      { name: 'GIS Visualization', note: 'Leaflet GIS, spatial overlays, hazard mapping', highlight: true },
      { name: 'Machine Learning Fundamentals', note: 'Random Forest, classification workflows' },
      { name: 'Geospatial Analysis', note: 'Geographic coordinate data & environmental layers' },
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
    details: 'Third-year student focusing on UI/UX design, frontend engineering, data structures, and AI systems.',
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
    description: 'Liaising between faculty and student peers, organizing class requirements, and coordinating academic schedules.',
  },
  {
    role: 'Event Coordinator',
    organization: 'College Technical & Cultural Events',
    description: 'Planning logistics, managing participant registries, and ensuring smooth execution of departmental sessions.',
  },
  {
    role: 'Team Lead',
    organization: 'Academic & Hackathon Projects',
    description: 'Guiding task assignments, UI design direction, and frontend component integration for collaborative software builds.',
  },
  {
    role: 'Member, Rotaract Club',
    organization: 'Rotaract District 3232 / College Chapter',
    description: 'Contributing to community welfare drives, youth leadership initiatives, and social awareness programs.',
  },
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Spoken & Written' },
  { name: 'Tamil', proficiency: 'Spoken & Written' },
];
