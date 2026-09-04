import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#0A0A0A] selection:text-white antialiased">
      {/* Editorial Monochrome Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

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
