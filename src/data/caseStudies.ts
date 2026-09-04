export interface CaseStudyAtAGlance {
  project: string;
  roleContribution: string;
  focus: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
}

export interface DesignDecision {
  title: string;
  consideration: string;
  rationale: string;
}

export interface CaseStudyData {
  projectId: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  timeframe: string;
  liveUrl: string;
  githubUrl: string;
  atAGlance: CaseStudyAtAGlance;
  summary: string;
  theContext: string;
  theProblem: {
    overview: string;
    keyPoints: string[];
  };
  myContribution: {
    title: string;
    summary: string;
    points: string[];
  };
  designDecisions: DesignDecision[];
  challengesAndConstraints: {
    heading: string;
    detail: string;
  }[];
  productAndTechImplementation: {
    stack: { name: string; purpose: string }[];
    architectureSpecs: string[];
  };
  keyFeatures: {
    feature: string;
    description: string;
  }[];
  whatILearned: string[];
  outcomes: {
    summary: string;
    verifiedDeliverables: string[];
  };
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  'pralaya-ai': {
    projectId: 'pralaya-ai',
    number: '01',
    title: 'PRALAYA AI',
    subtitle: 'National Landslide Disaster Operations Centre & Early Warning Platform',
    category: 'AI · DISASTER INTELLIGENCE · GIS · PRODUCT EXPERIENCE',
    timeframe: '2025 – 2026',
    liveUrl: 'https://disaster-phi-two.vercel.app/',
    githubUrl: 'https://github.com/vasanthakumari900/DISASTER.git',
    atAGlance: {
      project: 'PRALAYA AI',
      roleContribution: 'UI Contribution · Dashboard Experience · GIS Visualization · Product Implementation',
      focus: 'Landslide Disaster Intelligence & Early Warning',
      technologies: 'Python · FastAPI · React.js · Machine Learning · Leaflet GIS · REST APIs',
      liveUrl: 'https://disaster-phi-two.vercel.app/',
      githubUrl: 'https://github.com/vasanthakumari900/DISASTER.git',
    },
    summary:
      'PRALAYA AI is an AI-powered disaster intelligence platform engineered to assess landslide risk through environmental telemetry and geospatial visualization, structured as a high-density operations centre interface.',
    theContext:
      'Landslide prediction and disaster monitoring require operators to interpret multiple disparate environmental feeds—precipitation intensity, soil saturation, slope angles, and historical disaster records. In high-stress scenarios, fragmented raw data leads to cognitive overload for emergency response teams.',
    theProblem: {
      overview:
        'Emergency response operators face critical information bottlenecks during monsoon flash events:',
      keyPoints: [
        'Geospatial telemetry and soil sensor logs are dispersed across separate systems without unified spatial context.',
        'Existing risk platforms present opaque "black-box" risk percentages without explaining why an area is unstable.',
        'Data integrity is critical: synthesized demo numbers can mislead disaster mitigation, requiring authentic environmental data integration.',
        'Operators need an interface that conveys urgency immediately while supporting deep exploratory triage.',
      ],
    },
    myContribution: {
      title: 'UI/UX & Product Design Contribution',
      summary:
        'Led the interface design thinking and contributed directly to the frontend dashboard and geospatial implementation:',
      points: [
        'Designed the disaster intelligence dashboard experience and visual risk hierarchy',
        'Contributed to the interface architecture and interactive telemetry widgets',
        'Developed the GIS-based geospatial visualization using Leaflet GIS overlays',
        'Engineered the Explainable AI (XAI) feature attribution breakdown to surface risk drivers',
        'Integrated real-world environmental data sources via FastAPI REST endpoints',
        'Developed the historical disaster analysis and interactive geographic layer inspection views',
        'Built a real-data-first product implementation contribution deployed live on Vercel',
      ],
    },
    designDecisions: [
      {
        title: 'Prioritizing Risk Information Hierarchy',
        consideration:
          'Critical early warning alerts must be immediately legible within milliseconds.',
        rationale:
          'Structured a 4-tier alert system (Safe, Moderate, Elevated, Critical) using distinct high-contrast typography, clear geometric borders, and persistent status banners at the top of the viewport to establish instant situational awareness.',
      },
      {
        title: 'Geographic Context as Visual Anchor',
        consideration:
          'Numerical telemetry lacks meaning without spatial terrain relationships.',
        rationale:
          'Positioned the interactive Leaflet GIS map as the visual core (60% canvas), enabling operators to toggle elevation contours, precipitation radar, and hazard pins simultaneously without losing global context.',
      },
      {
        title: 'Balancing Information Density',
        consideration:
          'Command centre dashboards must accommodate sensor telemetry without visual exhaustion.',
        rationale:
          'Employed a modular cockpit architecture with collapsible telemetry drawers and strict typography scales, allowing operators to monitor overview status while drilling down into specific sensor nodes on demand.',
      },
      {
        title: 'Explainable AI (XAI) Presentation',
        consideration:
          'Operators do not trust black-box scores when lives are on the line.',
        rationale:
          'Replaced simple confidence percentages with an explicit feature importance panel showing top model drivers (e.g., 48h cumulative rainfall vs. soil pore pressure), providing actionable justification for every alert.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Working with Environmental and Geospatial Data',
        detail:
          'Handling coordinate projections, topographic contour rendering, and sensor location mapping efficiently within a web browser without performance lag.',
      },
      {
        heading: 'Presenting Complex Telemetry Clearly',
        detail:
          'Translating technical metrics (soil pore pressure, millimeter precipitation, incline degrees) into human-scannable dashboard gauges.',
      },
      {
        heading: 'Integrating Real-World Data Sources',
        detail:
          'Connecting to live environmental endpoints and managing real-world latency, stale sensor timestamps, and intermittent network feeds.',
      },
      {
        heading: 'Handling Data Gaps Transparently',
        detail:
          'Designing honest UI fallback states that explicitly signal offline or disconnected sensor nodes rather than displaying false fallback averages.',
      },
    ],
    productAndTechImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Component-driven operations dashboard and reactive state' },
        { name: 'Leaflet GIS', purpose: 'Geospatial mapping canvas, coordinate overlays, and contour layers' },
        { name: 'FastAPI (Python)', purpose: 'Backend microservice ingestion and ML inference endpoints' },
        { name: 'Random Forest & XAI', purpose: 'Risk classification and feature attribution calculations' },
        { name: 'RESTful Endpoints', purpose: 'Real-time telemetry streaming and historical queries' },
      ],
      architectureSpecs: [
        'Decoupled map viewport rendering from high-frequency sensor polling cycles to avoid frame drops.',
        'Responsive layout adapting between large desktop operations monitors and field laptop viewports.',
      ],
    },
    keyFeatures: [
      {
        feature: 'Interactive Hazard Viewport',
        description: 'Pan and zoom Leaflet GIS terrain map with toggleable hazard sectors (Nilgiris, Wayanad, Idukki).',
      },
      {
        feature: 'Live Sensor Telemetry Drawer',
        description: 'Real-time precipitation (24h), soil saturation percentage, and slope shift rate.',
      },
      {
        feature: 'Explainable AI Decision Breakdown',
        description: 'Surfaces the exact environmental parameters triggering the model threshold.',
      },
      {
        feature: 'Historical Disaster Timeline',
        description: 'Allows scrubbing across historical incident occurrences to evaluate temporal patterns.',
      },
    ],
    whatILearned: [
      'Designing interfaces for complex, high-stakes information systems under strict ergonomic requirements',
      'Communicating AI-generated model insights in a structured, transparent manner that earns operator trust',
      'Architecting interactive geospatial visualizations that remain performant with multi-layer overlays',
      'Bridging technical computational models with intuitive, user-focused digital product design',
    ],
    outcomes: {
      summary:
        'Delivered a deployed, functioning disaster intelligence operations centre that pairs machine learning inference with geospatial visualization and verified environmental data.',
      verifiedDeliverables: [
        'Live production deployment on Vercel (disaster-phi-two.vercel.app)',
        'Public open-source repository on GitHub with complete architecture docs',
        'Functional Leaflet GIS dashboard with multi-sector hazard monitoring',
        'Verified Explainable AI feature attribution panels',
      ],
    },
  },

  'certiseal': {
    projectId: 'certiseal',
    number: '02',
    title: 'CERTISEAL',
    subtitle: 'Digital Certificate Verification & Trust Infrastructure (CERTX)',
    category: 'UI/UX · AI · DOCUMENT VERIFICATION · PRODUCT PLATFORM',
    timeframe: '2025',
    liveUrl: 'https://certiseal.vercel.app/',
    githubUrl: 'https://github.com/vasanthakumari900/CERTISEAL',
    atAGlance: {
      project: 'CERTISEAL (CERTX)',
      roleContribution: 'Structured UI Development · Verification Workflow Interface · Frontend Implementation',
      focus: 'Academic Credential Trust & Tamper Detection',
      technologies: 'HTML · CSS · JavaScript · React.js · AI/ML Checks · Vercel',
      liveUrl: 'https://certiseal.vercel.app/',
      githubUrl: 'https://github.com/vasanthakumari900/CERTISEAL',
    },
    summary:
      'CERTISEAL (CERTX) is a digital credential verification platform built to help academic institutions, employers, and certifiers detect document manipulation through a structured multi-level verification experience.',
    theContext:
      'Credential forgery and document tampering erode academic integrity. Employers and registrars often receive forged certificates that cannot be easily distinguished with the naked eye, while manual verification takes days or weeks.',
    theProblem: {
      overview:
        'Credential verifiers face high uncertainty and opaque validation processes:',
      keyPoints: [
        'Users lack transparency into how documents are evaluated once uploaded.',
        'Generic pass/fail screens fail to show whether an issue is a formatting discrepancy or deliberate tampering.',
        'High anxiety during document screening requires an interface that communicates institutional trust and security.',
        'Verification tools must work seamlessly across standard modern web browsers without specialized client software.',
      ],
    },
    myContribution: {
      title: 'UI/UX & Frontend Development Contribution',
      summary:
        'Designed and implemented the core user-facing verification interfaces and workflow components:',
      points: [
        'Structured UI development and clear verification workflow interface',
        'Designed the user-friendly document verification experience and stepper progression',
        'Created high-contrast status indicators (VERIFIED, ON_HOLD, RELEASED, REVOKED)',
        'Contributed to the multi-surface interface layout (Public Verification, Admin Governance, Student Vault)',
        'Built frontend components in React with clean CSS typography and accessible states',
        'Managed GitHub version control and continuous edge deployment on Vercel',
      ],
    },
    designDecisions: [
      {
        title: 'Clear Verification Workflow Stepper',
        consideration:
          'Users need complete visibility into the progress of document inspection.',
        rationale:
          'Engineered a progressive disclosure stepper (Document Ingestion ➔ Structural Integrity ➔ Digital Signature ➔ Verification Verdict) that replaces ambiguous loading spinners with clear status milestones.',
      },
      {
        title: 'Trust-Centered Visual Hierarchy',
        consideration:
          'Security platforms must convey institutional authority without unnecessary visual distractions.',
        rationale:
          'Adopted a crisp, restrained monochrome aesthetic with clear typography and unambiguous border contrast, signaling technical rigor and reliability.',
      },
      {
        title: 'Granular Inspection Findings Matrix',
        consideration:
          'Binary verdicts (Yes/No) are insufficient for administrative decision-making.',
        rationale:
          'Structured verification findings into discrete inspection categories: Digital Signature (SHA-256), Typography Alignment, and Anomaly Score, giving verifiers specific forensic details.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Creating a Clear Verification Workflow',
        detail:
          'Structuring the step-by-step verification pipeline so non-technical users immediately comprehend each validation check.',
      },
      {
        heading: 'Presenting Trust-Related Information Clearly',
        detail:
          'Explaining cryptographic validation and anomaly detection without overwhelming users with unnecessary cryptographic jargon.',
      },
      {
        heading: 'Designing a Structured Multi-Surface Experience',
        detail:
          'Designing cohesive navigation across the public verifier, super admin governance dashboard, and student credential portal.',
      },
    ],
    productAndTechImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Component-driven verification engine and responsive layout' },
        { name: 'JavaScript (ES6+)', purpose: 'Client-side file handling, validation logic, and async flow' },
        { name: 'Modern CSS3', purpose: 'High-contrast monochrome styling, accessible typography, and grids' },
        { name: 'AI/ML Document Checks', purpose: 'Feature extraction and anomaly detection' },
        { name: 'Vercel Edge', purpose: 'Production deployment with continuous delivery' },
      ],
      architectureSpecs: [
        'Client-side responsive architecture operational across mobile, tablet, and desktop viewports.',
        'Documented strictly as an AI/ML document verification platform without unsubstantiated claims.',
      ],
    },
    keyFeatures: [
      {
        feature: 'Single-Click Certificate Lookup',
        description: 'Instant verification by certificate ID with pre-seeded test scenarios.',
      },
      {
        feature: 'Multi-Level Evidence Chain',
        description: 'Transparent step-by-step verification across institutional identity, signature, and status.',
      },
      {
        feature: 'Granular Status Indicators',
        description: 'Unambiguous state markers: VERIFIED, ON_HOLD, RELEASED, REVOKED.',
      },
    ],
    whatILearned: [
      'Designing trust-focused product workflows that reduce user anxiety during credential verification',
      'Creating structured, progressive-disclosure verification experiences with clear feedback states',
      'Connecting interface design decisions directly with technical frontend implementation',
      'Structuring complex multi-surface software architectures into a cohesive user journey',
    ],
    outcomes: {
      summary:
        'Successfully delivered and deployed an accessible certificate verification web application that clarifies document authentication through a transparent UX flow.',
      verifiedDeliverables: [
        'Live production web application on Vercel (certiseal.vercel.app)',
        'Open-source repository on GitHub with clean component structure',
        'Interactive verification workflow stepper and granular findings matrix',
      ],
    },
  },

  'cs-academic-portal': {
    projectId: 'cs-academic-portal',
    number: '03',
    title: 'CS ACADEMIC PORTAL',
    subtitle: 'Student Academic Management & Learning Platform',
    category: 'PRODUCT DESIGN · WEB PLATFORM · EDUCATION',
    timeframe: '2024 – 2025',
    liveUrl: 'https://cs-academic-portal.vercel.app/',
    githubUrl: 'https://github.com/vasanthakumari900/cs-academic-portal',
    atAGlance: {
      project: 'CS Academic Portal',
      roleContribution: 'Responsive Interface Development · Academic Information Architecture · Frontend Implementation',
      focus: 'Centralized Academic Hub & Syllabus Navigation',
      technologies: 'HTML · CSS · JavaScript · React.js · GitHub · Vercel',
      liveUrl: 'https://cs-academic-portal.vercel.app/',
      githubUrl: 'https://github.com/vasanthakumari900/cs-academic-portal',
    },
    summary:
      'A centralized academic platform created for the Department of Computer Science at DG Vaishnav College to organize course syllabi, lab repositories, study modules, and departmental notices into an intuitive, student-focused hub.',
    theContext:
      'Computer science students frequently encounter fragmented academic materials: lecture notes, lab exercise code, syllabus PDFs, and timetable announcements are scattered across messaging groups, emails, and physical notice boards.',
    theProblem: {
      overview:
        'Students waste significant time searching across fragmented channels for essential academic materials:',
      keyPoints: [
        'Academic information is dispersed without centralized taxonomy or searchability.',
        'Legacy collegiate portals are rarely optimized for mobile smartphones where students access information most.',
        'Students need a dependable single destination to access syllabus roadmaps, practical code, and exam schedules.',
      ],
    },
    myContribution: {
      title: 'Product Design & Frontend Development Contribution',
      summary:
        'Spearheaded the information architecture and built the responsive web portal for computer science students:',
      points: [
        'Responsive interface development tailored for mobile and desktop screens',
        'Academic information organization and hierarchical subject cataloging',
        'Created a student-focused interface enabling resource discovery within two clicks',
        'Contributed to core frontend development using React.js and semantic HTML/CSS',
        'Maintained Git version control and production deployment on Vercel',
      ],
    },
    designDecisions: [
      {
        title: 'Hierarchical Content Organization',
        consideration:
          'Students need immediate access to specific semester subjects without browsing dead ends.',
        rationale:
          'Structured the information taxonomy strictly by Semester ➔ Subject ➔ Module ➔ Resource Type (Lecture Notes, Lab Practicum, Exam Guides), allowing students to reach any document in two interactions.',
      },
      {
        title: 'Mobile-First Ergonomics',
        consideration:
          'Students predominantly look up schedules and syllabus modules on mobile devices while on campus.',
        rationale:
          'Engineered generous touch targets (minimum 44x44px), sticky bottom filters, and readable typography, eliminating horizontal panning and awkward zoom gestures.',
      },
      {
        title: 'Direct Action Resource Links',
        consideration:
          'Nested download dialogs create unnecessary friction when students need rapid reference in lab sessions.',
        rationale:
          'Implemented direct, one-click access links to code repositories and PDF documents right from the subject shelf.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Organizing Different Types of Academic Information',
        detail:
          'Structuring theoretical notes, practical programming code, timetable schedules, and notice boards into one cohesive layout.',
      },
      {
        heading: 'Maintaining Clear Navigation',
        detail:
          'Designing navigation that remains clear across multiple semesters and disciplines without overwhelming first-time student users.',
      },
      {
        heading: 'Designing Responsive Interfaces',
        detail:
          'Ensuring data tables, code preview snippets, and curriculum roadmaps render legibly on both budget mobile devices and desktop computers.',
      },
    ],
    productAndTechImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Modular UI components and client-side view state' },
        { name: 'JavaScript (ES6+)', purpose: 'Filtering logic, resource taxonomy, and fast search' },
        { name: 'Semantic HTML5 & CSS3', purpose: 'Fluid responsive layouts and accessible document flow' },
        { name: 'GitHub & Vercel', purpose: 'Continuous deployment with instant production updates' },
      ],
      architectureSpecs: [
        'Lightweight client bundle ensuring fast loading even on congested campus Wi-Fi connections.',
        'Modular subject schema allowing new semesters and syllabi to be appended cleanly.',
      ],
    },
    keyFeatures: [
      {
        feature: 'Centralized Subject Directory',
        description: 'Curated modules across core CS disciplines: Algorithms, DBMS, Web Architecture, and OS.',
      },
      {
        feature: 'Instant Resource Shelf',
        description: 'Direct links to syllabus documents, lab codes, and reference papers.',
      },
      {
        feature: 'Department Notice Board',
        description: 'Chronological announcements for upcoming submissions and examinations.',
      },
    ],
    whatILearned: [
      'Organizing large volumes of academic information into an intuitive, scalable hierarchy',
      'Designing mobile-first responsive interfaces tailored for active student workflows',
      'Considering accessibility and low-bandwidth constraints when designing utility platforms',
      'Applying product design thinking to solve actual peer problems in an academic environment',
    ],
    outcomes: {
      summary:
        'Successfully delivered a centralized, responsive academic web portal that streamlines study material discovery for computer science students.',
      verifiedDeliverables: [
        'Live deployment accessible at cs-academic-portal.vercel.app',
        'Public open-source repository on GitHub',
        'Responsive multi-device academic hub in active use',
      ],
    },
  },
};
