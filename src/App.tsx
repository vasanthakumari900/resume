import React, { useState } from 'react';
import { Navbar, Footer, ScrollProgressBar } from './components/common';
import {
  Hero,
  About,
  Skills,
  SelectedWork,
  ExperienceTimeline,
  Education,
  Certifications,
  Leadership,
  ResumeSection,
  Contact,
} from './components/sections';
import { CaseStudyModal, ResumeModal, RecruiterScanModal } from './components/modals';
import { LoadingScreen, CustomCursor } from './components/ui';

export const App: React.FC = () => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isRecruiterScanOpen, setIsRecruiterScanOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#060608] text-[#0A0A0A] dark:text-[#EDEDED] font-sans selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-white dark:selection:text-[#0A0A0A] antialiased transition-colors duration-200">
      {/* Intro Loading Sequence */}
      <LoadingScreen />

      {/* Subtle Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Minimal Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Navigation with Theme Switcher, Recruiter Scan & Resume Triggers */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
      />

      {/* Main 3D Digital Workspace Sections */}
      <main>
        {/* 1. Hero — 3D Developer Workspace */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About — Holographic Profile */}
        <About />

        {/* 3. Skills — 3D Technology Core */}
        <Skills />

        {/* 4. Projects — 3D Project Universe */}
        <SelectedWork onOpenCaseStudy={(id) => setSelectedCaseStudyId(id)} />

        {/* 5. Journey — 3D Career & Learning Timeline */}
        <ExperienceTimeline />

        {/* 6. Education — Academic Performance */}
        <Education />

        {/* 7. Certifications & Industry Simulations */}
        <Certifications />

        {/* 8. Leadership & Campus Initiatives */}
        <Leadership />

        {/* 9. Resume — 3D Digital Document */}
        <ResumeSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
        />

        {/* 10. Contact — 3D Digital Communication Hub */}
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
