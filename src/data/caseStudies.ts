import type { CaseStudy } from '../types';

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'pralaya-ai': {
    projectId: 'pralaya-ai',
    title: 'PRALAYA AI',
    subtitle: 'Landslide Disaster Intelligence & Early Warning Platform',
    category: 'AI · Disaster Intelligence · Product Design · Leaflet GIS',
    timeframe: '2025 – 2026',
    role: 'UI/UX Design, Interactive Dashboard Architecture, GIS Frontend Implementation',
    githubUrl: 'https://github.com/vasanthakumari900/DISASTER.git',
    liveUrl: 'https://disaster-phi-two.vercel.app/',
    problem: {
      summary:
        'Landslide prediction and disaster monitoring require interpreting dense, multi-source environmental and geospatial data (rainfall intensity, soil saturation, slope angles, historical occurrences). In high-stress scenarios, complex raw data confuses responders and decision-makers.',
      points: [
        'Raw sensor streams and geospatial figures are difficult to parse under time pressure.',
        'Existing risk platforms often lack clear visual hierarchy, burying critical early warnings.',
        'Users need to understand why an AI model triggered a high-risk alert (Explainable AI), not just receive a black-box percentage score.',
        'Data integrity is paramount: using real environmental data feeds rather than synthetic mock stats is essential for actual disaster assessment.',
      ],
    },
    myRole: {
      title: 'UI/UX Designer & Frontend Engineer',
      responsibilities: [
        'Designed the complete disaster intelligence dashboard layout and visual risk hierarchy',
        'Engineered the interactive Leaflet GIS map with toggleable hazard heatmaps and contour layers',
        'Created the Explainable AI (XAI) feature attribution cards explaining model risk drivers',
        'Implemented real-data integration via REST APIs connecting to a FastAPI Python backend',
        'Constructed historical disaster inspection views for temporal trend analysis',
      ],
    },
    designConsiderations: {
      title: 'Design Considerations & Product Decisions',
      description:
        'Without claiming artificial user testing statistics, the interface was guided by ergonomic clarity, situational awareness, and technical constraints.',
      items: [
        {
          heading: 'High-Contrast Risk State Hierarchy',
          detail:
            'Created an unmistakable 4-tier alert system (Safe, Moderate, Elevated, Critical) using color-blind-conscious hues and distinct iconography so urgency is recognized instantaneously.',
        },
        {
          heading: 'GIS Map as the Primary Context Anchor',
          detail:
            'Positioned the interactive geospatial map at the visual center, allowing users to pan, zoom, and inspect terrain contours alongside environmental telemetry overlays.',
        },
        {
          heading: 'Explainable AI (XAI) Transparency',
          detail:
            'Rather than displaying an opaque risk rating, the interface highlights which parameters (e.g., 48hr cumulative rainfall, slope gradient, soil moisture) contributed most to the Random Forest model inference.',
        },
        {
          heading: 'Real-Data-First Interface Resilience',
          detail:
            'Designed UI fallback states, stale data timestamps, and loading skeletons to guarantee that missing telemetry is explicitly communicated without deceptive placeholders.',
        },
      ],
    },
    informationArchitecture: {
      description:
        'The interface is organized into a cohesive triage cockpit designed for rapid scan-and-act cycles.',
      flows: [
        {
          title: 'Primary Monitoring Flow',
          steps: [
            'Global Status Bar (Overall regional alert level & active sensor nodes)',
            'Interactive Leaflet GIS Viewport (Terrain layers, hazard zones, pin inspect)',
            'Telemetry Drawer (Live precipitation, moisture levels, slope gradient)',
            'XAI Decision Breakdown (Top driving factors behind risk evaluation)',
            'Early Warning Action Center (Alert broadcast trigger & advisory preview)',
          ],
        },
      ],
    },
    interfaceApproach: {
      description:
        'The visual treatment uses a dark, data-dense control room aesthetic that reduces eye fatigue during extended monitoring periods while emphasizing alert states.',
      keyDecisions: [
        {
          title: 'Split-Pane Cockpit Layout',
          rationale:
            'Gives 65% width to the geospatial map canvas while keeping telemetry gauges and XAI insights docked on the right for simultaneous reference.',
        },
        {
          title: 'Interactive Layer Switcher',
          rationale:
            'Allows operators to selectively toggle Slope Contour, Precipitation Radar, and Historical Incident Markers without visual clutter.',
        },
        {
          title: 'Time-Series Scrubbing',
          rationale:
            'Enables scrubbing across the past 72 hours to observe how rainfall accumulation shifted the instability threshold.',
        },
      ],
    },
    technicalImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Component-based UI architecture, dashboard state, and reactive controls' },
        { name: 'Leaflet GIS', purpose: 'Geospatial rendering, custom tile overlays, and geoJSON polygon bounds' },
        { name: 'FastAPI (Python)', purpose: 'High-performance backend API serving real-world data endpoints' },
        { name: 'Random Forest & XAI', purpose: 'Risk classification model and feature attribution calculations' },
        { name: 'RESTful Endpoints', purpose: 'Real-time telemetry ingestion and historical incident queries' },
      ],
      architectureNotes: [
        'Separated GIS rendering from telemetry polling to prevent map re-renders during high-frequency data ticks.',
        'Deployed responsive client architecture accessible on desktop command centers and mobile field devices.',
      ],
    },
    outcomes: {
      summary:
        'Delivered a fully deployed, functioning disaster intelligence platform that unifies AI risk prediction with geospatial mapping and real-world environmental data sources.',
      verifiedDeliverables: [
        'Live production deployment on Vercel',
        'Open-source code repository with complete documentation on GitHub',
        'Functional Leaflet GIS dashboard with responsive layouts',
        'Clear Explainable AI insight panels replacing black-box scores',
      ],
    },
  },

  'certiseal': {
    projectId: 'certiseal',
    title: 'CERTISEAL',
    subtitle: 'AI-Based Certificate Verification System',
    category: 'UI/UX · AI · Document Verification',
    timeframe: '2025',
    role: 'Product Designer & Frontend Developer',
    githubUrl: 'https://github.com/vasanthakumari900/CERTISEAL',
    liveUrl: 'https://certiseal.vercel.app/',
    problem: {
      summary:
        'Academic institutions, employers, and certifiers struggle with forged and manipulated digital credentials. Existing verification workflows are often opaque, confusing to non-technical users, or require cumbersome manual steps.',
      points: [
        'Users lack transparency on what happens when they upload sensitive credentials.',
        'Binary (pass/fail) screens provide no insight into which part of a document is suspect.',
        'High anxiety during document verification demands an interface that communicates trust, security, and clarity.',
        'Needs to run smoothly on standard web browsers without heavy desktop software.',
      ],
    },
    myRole: {
      title: 'End-to-End Designer & Developer',
      responsibilities: [
        'Designed the user verification workflow from document drop to tamper-inspection results',
        'Built reusable, accessible React components with clean typography and reassuring micro-interactions',
        'Implemented client-side file inspection and integrated AI verification processing logic',
        'Structured clear status indicators (Authentic, Tampered, Inconclusive) with actionable guidance',
        'Configured repository workflows and deployed the web platform to Vercel',
      ],
    },
    designConsiderations: {
      title: 'Design Considerations & UX Decisions',
      description:
        'The UX was designed around psychological reassurance, frictionless document handling, and clarity of verification findings.',
      items: [
        {
          heading: 'Trust-Centered Visual Language',
          detail:
            'Used a clean, crisp neutral canvas with purposeful indigo accents and clear security badges to signal institutional credibility without visual gimmicks.',
        },
        {
          heading: 'Frictionless Drag-and-Drop Zone',
          detail:
            'Created an expansive drop area with clear file format guidelines (PDF, JPG, PNG), instant file integrity feedback, and explicit privacy reassurance.',
        },
        {
          heading: 'Progressive Inspection Stepper',
          detail:
            'Instead of an ambiguous infinite spinner, designed a transparent 3-step visual verification progress sequence: Document Parsing ➔ AI Structural Check ➔ Authenticity Verification.',
        },
        {
          heading: 'Granular Findings Breakdown',
          detail:
            'Organized the verification outcome into clean categorical cards: Issuer Signature, Layout Geometry, Text Consistency, and Timestamp Validity.',
        },
      ],
    },
    informationArchitecture: {
      description:
        'A single-page, progressive-disclosure workflow designed to guide the user naturally from upload to validation certificate receipt.',
      flows: [
        {
          title: 'Verification Journey',
          steps: [
            'Landing & Security Context (Clear statement of system purpose & privacy)',
            'Document Upload Stage (Drag/drop or file picker with instant client-side preview)',
            'AI Inspection Stepper (Visual stage progression with status feedback)',
            'Results Dashboard (Confidence verdict, detailed validation matrix, verification ID)',
            'Export Verification Badge / Shareable Report',
          ],
        },
      ],
    },
    interfaceApproach: {
      description:
        'Prioritized clean white space, unambiguous typography, and high visual contrast so that verification outcomes leave no room for misinterpretation.',
      keyDecisions: [
        {
          title: 'Immediate Visual Preview',
          rationale:
            'Renders an inline preview of the uploaded document immediately so the user can visually confirm they selected the correct certificate before running verification.',
        },
        {
          title: 'Clear Color-Coded Verdict Badges',
          rationale:
            'Utilized green for Verified Genuine, amber for Flagged Discrepancies, and red for Confirmed Tampering, supplemented with plain-language explanations.',
        },
      ],
    },
    technicalImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Component-driven frontend architecture and dynamic verification states' },
        { name: 'JavaScript (ES6+)', purpose: 'Client-side file handling, validation logic, and async processing' },
        { name: 'CSS3 / Modern Styling', purpose: 'Clean responsive layouts, transitions, and accessible UI tokens' },
        { name: 'AI/ML Integration', purpose: 'Document feature extraction and visual consistency checks' },
        { name: 'Vercel', purpose: 'Production edge deployment and automated continuous delivery' },
      ],
      architectureNotes: [
        'Pure web platform requiring no third-party browser plugins or external downloads.',
        'Strictly documented as AI/ML document verification without unsubstantiated blockchain claims.',
      ],
    },
    outcomes: {
      summary:
        'Built and deployed an accessible, user-friendly digital certificate verification system that simplifies credential authentication through a transparent UI flow.',
      verifiedDeliverables: [
        'Fully working live deployment on Vercel',
        'Open-source repository on GitHub with clean component structure',
        'Intuitive document inspection stepper and detailed findings breakdown',
      ],
    },
  },

  'cs-academic-portal': {
    projectId: 'cs-academic-portal',
    title: 'CS Academic Portal',
    subtitle: 'Student Academic Management & Learning Platform',
    category: 'Product Design · Web Platform · Education',
    timeframe: '2024 – 2025',
    role: 'Product Designer & Frontend Developer',
    githubUrl: 'https://github.com/vasanthakumari900/cs-academic-portal',
    liveUrl: 'https://cs-academic-portal.vercel.app/',
    problem: {
      summary:
        'University computer science students frequently encounter fragmented academic information: syllabus PDFs, lab manuals, assignment schedules, departmental notices, and reference materials are scattered across chat groups, emails, and outdated notice boards.',
      points: [
        'Information fragmentation leads to missed deadlines and confusion regarding course resources.',
        'Most legacy collegiate portals have cumbersome navigation and are not mobile-responsive.',
        'Students need a unified, bookmarkable space where subject roadmaps and study materials are logically structured.',
      ],
    },
    myRole: {
      title: 'Product Designer & Frontend Developer',
      responsibilities: [
        'Conceived and designed the centralized academic hub information architecture',
        'Created responsive user interfaces tailored for mobile and laptop viewports',
        'Organized academic modules, subject resources, and departmental updates',
        'Built the frontend using React.js, clean CSS, and semantic HTML',
        'Maintained Git version control and deployed the live platform on Vercel',
      ],
    },
    designConsiderations: {
      title: 'Design Considerations & Approach',
      description:
        'As an active computer science student, the approach was centered on real student pain points, intuitive navigation, and zero-distraction information hierarchy.',
      items: [
        {
          heading: 'Hierarchical Content Organization',
          detail:
            'Grouped resources by Semester ➔ Subject ➔ Module ➔ Resource Type (Notes, Lab Code, Question Banks), allowing students to find materials in two clicks.',
        },
        {
          heading: 'Mobile-First Student Accessibility',
          detail:
            'Ensured all tables, navigation sidebars, and resource links are easily tappable on smartphones, where students most frequently look up timetable and notice updates.',
        },
        {
          heading: 'Quick-Filter & Resource Shelving',
          detail:
            'Implemented instant client-side category filters so students can quickly isolate practical code repositories from theoretical lecture notes.',
        },
        {
          heading: 'Low Bandwidth Friendliness',
          detail:
            'Maintained a lightweight, clean frontend bundle ensuring swift load times even on standard campus Wi-Fi or cellular connections.',
        },
      ],
    },
    informationArchitecture: {
      description:
        'Designed around a persistent sidebar navigation and high-contrast content cards for effortless scanning.',
      flows: [
        {
          title: 'Resource Discovery Journey',
          steps: [
            'Student Dashboard (Quick notices, upcoming lab schedules, active semester preview)',
            'Subject Directory (Cards organized by core domains: Algorithms, DBMS, Web, OS)',
            'Material Shelf (Direct links to syllabus, reference materials, lab repositories)',
            'Department Notices (Chronological announcements and event details)',
          ],
        },
      ],
    },
    interfaceApproach: {
      description:
        'A warm, professional academic interface combining clear typography, comfortable line lengths, and structured grid cards.',
      keyDecisions: [
        {
          title: 'Card-Based Module Architecture',
          rationale:
            'Enables discrete scanning of individual subjects with clear badges for semester and credit weighting.',
        },
        {
          title: 'Direct Action Links',
          rationale:
            'Replaced nested download dialogs with direct, one-click access to code repositories and PDF documents.',
        },
      ],
    },
    technicalImplementation: {
      stack: [
        { name: 'React.js', purpose: 'Modular UI components and client-side view state management' },
        { name: 'JavaScript (ES6+)', purpose: 'Filtering logic, resource categorization, and interactive states' },
        { name: 'HTML5 & CSS3', purpose: 'Clean layout grids, responsive media queries, and typography scale' },
        { name: 'GitHub & Vercel', purpose: 'Continuous deployment pipeline with instant live updates' },
      ],
      architectureNotes: [
        'Built with clean modular components that allow new subjects and resources to be added seamlessly.',
      ],
    },
    outcomes: {
      summary:
        'Successfully delivered a centralized, responsive academic platform that streamlines computer science study material access for students.',
      verifiedDeliverables: [
        'Live deployment accessible at cs-academic-portal.vercel.app',
        'Well-structured open-source repository on GitHub',
        'Responsive multi-device interface for academic resources',
      ],
    },
  },
};
