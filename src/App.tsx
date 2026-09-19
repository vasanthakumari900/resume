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
import { MasterWorld3D, WorldHUD, type StationId } from './components/3d';

export const App: React.FC = () => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isRecruiterScanOpen, setIsRecruiterScanOpen] = useState<boolean>(false);
  const [is3DWorldMode, setIs3DWorldMode] = useState<boolean>(true);
  const [activeStation, setActiveStation] = useState<StationId>('hero');

  const handleSelectStation = (stationId: string) => {
    // Map navigation IDs to valid StationId
    const validStations: StationId[] = ['hero', 'about', 'skills', 'projects', 'journey', 'resume', 'contact'];
    const matched = validStations.find((s) => s === stationId || (stationId === 'work' && s === 'projects') || (stationId === 'experience' && s === 'journey'));
    if (matched) {
      setActiveStation(matched);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#060608] text-[#0A0A0A] dark:text-[#EDEDED] font-sans selection:bg-[#0A0A0A] selection:text-white dark:selection:bg-white dark:selection:text-[#0A0A0A] antialiased transition-colors duration-200">
      {/* Intro Loading Sequence */}
      <LoadingScreen />

      {/* Subtle Desktop Interactive Custom Cursor */}
      <CustomCursor />

      {/* Top Minimal Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
        activeStation={activeStation}
        onSelectStation={handleSelectStation}
        is3DMode={is3DWorldMode}
        onToggleViewMode={() => setIs3DWorldMode(!is3DWorldMode)}
      />

      {/* PRIMARY EXPERIENCE: CONTINUOUS 3D DIGITAL WORLD */}
      {is3DWorldMode ? (
        <div className="relative w-full h-screen overflow-hidden">
          {/* Master Continuous 3D Studio Canvas */}
          <MasterWorld3D
            activeStation={activeStation}
            onOpenProject={(projId) => setSelectedCaseStudyId(projId)}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Synchronized Glassmorphic HUD Overlays */}
          <WorldHUD
            activeStation={activeStation}
            onSelectStation={(st) => setActiveStation(st)}
            onOpenCaseStudy={(projId) => setSelectedCaseStudyId(projId)}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
            onToggleViewMode={() => setIs3DWorldMode(false)}
            is3DMode={is3DWorldMode}
          />
        </div>
      ) : (
        /* ACCESSIBLE 2D RECRUITER & SCAN MODE */
        <div className="animate-in fade-in duration-300">
          <main>
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <About />
            <Skills />
            <SelectedWork onOpenCaseStudy={(id) => setSelectedCaseStudyId(id)} />
            <ExperienceTimeline />
            <Education />
            <Certifications />
            <Leadership />
            <ResumeSection
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)}
            />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

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
