export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  keyContributions: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  accentColor: string;
  previewType: 'pralaya' | 'certiseal' | 'portal';
}

export interface CaseStudySection {
  title: string;
  content: string[];
  bulletPoints?: string[];
  highlights?: { label: string; value: string }[];
}

export interface CaseStudy {
  projectId: string;
  title: string;
  subtitle: string;
  category: string;
  timeframe: string;
  role: string;
  githubUrl: string;
  liveUrl: string;
  problem: {
    summary: string;
    points: string[];
  };
  myRole: {
    title: string;
    responsibilities: string[];
  };
  designConsiderations: {
    title: string;
    description: string;
    items: { heading: string; detail: string }[];
  };
  informationArchitecture: {
    description: string;
    flows: { title: string; steps: string[] }[];
  };
  interfaceApproach: {
    description: string;
    keyDecisions: { title: string; rationale: string }[];
  };
  technicalImplementation: {
    stack: { name: string; purpose: string }[];
    architectureNotes: string[];
  };
  outcomes: {
    summary: string;
    verifiedDeliverables: string[];
  };
}

export interface SkillItem {
  name: string;
  note?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  description: string;
  learningAreas: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  details?: string;
}

export interface HackathonAchievement {
  id: string;
  competition: string;
  year: string;
  projectTitle: string;
  problemStatementId: string;
  organization: string;
  track: string;
  achievement: string;
  description: string;
  focusAreas: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  category: 'Traineeship' | 'Simulation' | 'Session' | 'Training';
}

export interface LeadershipActivity {
  role: string;
  organization?: string;
  description: string;
}
