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

export interface CaseStudyScreenshot {
  url: string;
  title: string;
  caption: string;
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
  screenshots: CaseStudyScreenshot[];
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
    screenshots: [
      {
        url: '/screenshots/pralaya-main.png',
        title: 'OPERATIONS COMMAND & GIS HAZARD VIEWPORT',
        caption: 'Live production Leaflet GIS map with ML landslide risk grid, coordinate system (WGS84), active alerts feed, and telemetry layers.',
      },
      {
        url: '/screenshots/pralaya-simulator.png',
        title: 'WHAT-IF LANDSLIDE RISK SIMULATOR',
        caption: 'Interactive stress test engine allowing operators to perturb continuous rainfall duration (+50%) and simulate slope stability across regional sectors.',
      },
    ],
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
        'UI and dashboard contribution',
        'Disaster intelligence dashboard experience',
        'GIS-based visualization',
        'Risk analysis interface',
        'AI insight presentation',
        'Historical analysis experience',
        'Interactive geographic visualization',
        'Frontend/product implementation contribution',
      ],
    },
    designDecisions: [
      {
        title: 'Prioritizing Risk Information',
        consideration:
          'Risk-related information should have strong visual hierarchy so important insights can be understood quickly.',
        rationale:
          'Structured a 4-tier alert system (Safe, Moderate, Elevated, Critical) using distinct high-contrast typography, clear geometric borders, and persistent status banners at the top of the viewport to establish instant situational awareness.',
      },
      {
        title: 'Providing Geographic Context',
        consideration:
          'Geographic visualization is important for interpreting location-based environmental information.',
        rationale:
          'Positioned the interactive Leaflet GIS map as the primary visual core, enabling operators to toggle elevation contours, precipitation radar, and hazard pins simultaneously without losing global spatial context.',
      },
      {
        title: 'Managing Information Density',
        consideration:
          'The interface must balance multiple data sources without overwhelming users.',
        rationale:
          'Employed a modular cockpit architecture with collapsible telemetry drawers and strict typography scales, allowing operators to monitor overview status while drilling down into specific sensor nodes on demand.',
      },
      {
        title: 'Structuring AI Insights',
        consideration:
          'AI-generated insights should be presented in a clear and understandable way rather than appearing as unexplained technical output.',
        rationale:
          'Replaced simple confidence percentages with an explicit feature importance panel showing top model drivers (e.g., 48h cumulative rainfall vs. soil pore pressure), providing actionable justification for every alert.',
      },
      {
        title: 'Supporting Historical Exploration',
        consideration:
          'Historical information should be structured to help users explore patterns and context.',
        rationale:
          'Designed a historical replay and incident timeline that lets analysts scrub through past landslide events, examine environmental baselines prior to slope failure, and validate predictive model accuracy.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Working with Complex Environmental and Geospatial Information',
        detail:
          'Handling coordinate projections (WGS84 EPSG:4326), topographic contour rendering, and sensor location mapping efficiently within a web browser without performance lag.',
      },
      {
        heading: 'Presenting Multiple Data Sources Clearly',
        detail:
          'Translating heterogeneous metrics (soil pore pressure, millimeter precipitation, incline degrees, and geological fault lines) into cohesive, scannable dashboard gauges.',
      },
      {
        heading: 'Integrating Real-World Data',
        detail:
          'Connecting to live environmental endpoints and managing real-world latency, stale sensor timestamps, and intermittent network feeds without UI freezing.',
      },
      {
        heading: 'Transparently Handling Data Gaps',
        detail:
          'Designing honest UI fallback states that explicitly signal offline or disconnected sensor nodes rather than displaying false fallback averages or misleading assumptions.',
      },
      {
        heading: 'Balancing Technical Complexity with Understandable Interfaces',
        detail:
          'Serving both technical GIS analysts and frontline emergency responders through intuitive progressive disclosure of analytical depth.',
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
      'Designing interfaces for complex information systems',
      'Communicating AI-related insights clearly',
      'Working with geographic visualization',
      'Balancing technical complexity with interface clarity',
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
    screenshots: [
      {
        url: '/screenshots/certiseal-main.png',
        title: 'CERTX DIGITAL TRUST ENGINE & CREDENTIAL LOOKUP',
        caption: 'Public credential verification input with pre-seeded scenario verifications, envelope encryption, and Ed25519 digital signatures.',
      },
      {
        url: '/screenshots/certiseal-verified.png',
        title: '8-LEVEL EVIDENCE CHAIN VERIFICATION WORKSPACE',
        caption: 'Operational trust workspace displaying granular verification breakdown across institutional identity, KMS, signature, and ledger continuity.',
      },
    ],
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
        'Structured UI development',
        'Verification workflow interface',
        'User-friendly verification experience',
        'Frontend development',
        'GitHub repository contribution',
        'Deployment contribution',
      ],
    },
    designDecisions: [
      {
        title: 'Simplifying the Verification Flow',
        consideration:
          'Users need complete visibility into the progress of document inspection without friction.',
        rationale:
          'Engineered a progressive disclosure stepper (Document Ingestion ➔ Structural Integrity ➔ Digital Signature ➔ Verification Verdict) that replaces ambiguous loading spinners with clear status milestones.',
      },
      {
        title: 'Surfacing Cryptographic Trust Indicators',
        consideration:
          'Security platforms must convey institutional authority without unnecessary cryptographic jargon.',
        rationale:
          'Adopted a crisp, restrained monochrome aesthetic with clear status indicators (SHA-256, Ed25519, DEK envelope encryption) and unambiguous border contrast, signaling technical rigor and reliability.',
      },
      {
        title: 'Structuring Multi-Party Roles',
        consideration:
          'Institutions, employers, and students require distinct operational views.',
        rationale:
          'Structured the platform into cohesive role workspaces (Employer verification, Institution issuance, Student credential vault) accessible through intuitive mode toggles.',
      },
      {
        title: 'Transparent Verification States & Error Recovery',
        consideration:
          'Binary verdicts (Yes/No) are insufficient for administrative decision-making.',
        rationale:
          'Structured verification findings into discrete forensic categories: Digital Signature, Typography Alignment, and Anomaly Score, giving verifiers specific forensic details.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Designing a Clear Verification Workflow',
        detail:
          'Structuring the step-by-step verification pipeline so non-technical users immediately comprehend each validation check.',
      },
      {
        heading: 'Presenting Trust-Related Information Clearly',
        detail:
          'Explaining cryptographic validation and anomaly detection without overwhelming users with unnecessary cryptographic jargon.',
      },
      {
        heading: 'Creating a Structured Certificate Verification Experience',
        detail:
          'Designing cohesive navigation and unambiguous status feedback across verification states (VERIFIED, ON_HOLD, RELEASED, REVOKED).',
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
      'Designing trust-focused product workflows',
      'Structuring verification experiences',
      'Connecting interface design with frontend implementation',
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
    screenshots: [
      {
        url: '/screenshots/portal-main.png',
        title: 'CENTRALIZED ACADEMIC PORTAL & RESOURCE REPOSITORY',
        caption: 'Department of Computer Science hub providing organized access to syllabus modules, lecture notes, question papers, and live calendar.',
      },
      {
        url: '/screenshots/portal-dashboard.png',
        title: 'STUDENT ACCESS & ROLE ROUTING INTERFACE',
        caption: 'Responsive authentication state with roll number verification, academic year routing, and instant demo access.',
      },
    ],
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
        'Responsive interface development',
        'Academic information organization',
        'Student-focused interface',
        'Frontend development',
        'Repository contribution',
        'Deployment contribution',
      ],
    },
    designDecisions: [
      {
        title: 'Organizing Information Effectively',
        consideration:
          'Students need immediate access to specific semester subjects without browsing dead ends.',
        rationale:
          'Structured the information taxonomy strictly by Semester ➔ Subject ➔ Module ➔ Resource Type (Lecture Notes, Lab Practicum, Exam Guides), allowing students to reach any document in two interactions.',
      },
      {
        title: 'Designing Responsive Interfaces',
        consideration:
          'Students predominantly look up schedules and syllabus modules on mobile devices while on campus.',
        rationale:
          'Engineered generous touch targets (minimum 44x44px), sticky bottom filters, and readable typography, eliminating horizontal panning and awkward zoom gestures.',
      },
      {
        title: 'Improving Navigation and Content Structure',
        consideration:
          'Nested download dialogs create unnecessary friction when students need rapid reference in lab sessions.',
        rationale:
          'Implemented direct, one-click access links to code repositories and PDF documents right from the subject shelf.',
      },
    ],
    challengesAndConstraints: [
      {
        heading: 'Organizing Multiple Types of Academic Information',
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
      {
        heading: 'Avoiding Unnecessary Information Overload',
        detail:
          'Keeping the layout uncluttered and prioritizing daily student workflows over administrative bureaucracy.',
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
      'Organizing information effectively',
      'Designing responsive interfaces',
      'Improving navigation and content structure',
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
