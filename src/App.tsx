import React, { useState } from 'react';
import { Navbar, Footer, ScrollProgressBar } from './components/common';
import {
  Hero,
  SelectedWork,
  About,
  Skills,
  ExperienceTimeline,
  Education,
  Certifications,
  Leadership,
  Contact,
} from './components/sections';
import { CaseStudyModal, ResumeModal, RecruiterScanModal } from './components/modals';

export const App: React.FC = () => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isRecruiterScanOpen, setIsRecruiterScanOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#EDEDED] font-sans selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-white dark:selection:text-[#0A0A0A] antialiased transition-colors duration-200">
      {/* 2px Minimal Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Editorial Monochrome Navigation with Theme Switcher & Recruiter Scan */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SelectedWork onOpenCaseStudy={(id) => setSelectedCaseStudyId(id)} />
        <About />
        <Skills />
        <ExperienceTimeline />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 60-Second Recruiter Briefing Modal */}
      <RecruiterScanModal
        isOpen={isRecruiterScanOpen}
        onClose={() => setIsRecruiterScanOpen(false)}
        onOpenFullResume={() => {
          setIsRecruiterScanOpen(false);
          setIsResumeOpen(true);
        }}
      />

      {/* Editorial Case Study Modal */}
      <CaseStudyModal
        projectId={selectedCaseStudyId}
        onClose={() => setSelectedCaseStudyId(null)}
      />

      {/* Printable / Exportable Resume Sheet Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
