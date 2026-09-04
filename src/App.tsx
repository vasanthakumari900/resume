import React, { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode for that sleek modern product designer feel
  });

  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0C] text-neutral-900 dark:text-neutral-100 selection:bg-indigo-600 selection:text-white transition-colors duration-200">
      {/* Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
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

      {/* Full Case Study Reader Modal */}
      <CaseStudyModal
        projectId={selectedCaseStudyId}
        onClose={() => setSelectedCaseStudyId(null)}
      />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
