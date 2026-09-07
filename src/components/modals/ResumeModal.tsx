import React, { useEffect, useState } from 'react';
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCE_ITEMS,
  EDUCATION_ITEMS,
  HACKATHON_ACHIEVEMENT,
  SKILL_CATEGORIES,
  CERTIFICATIONS,
  LEADERSHIP_ITEMS,
  LANGUAGES,
} from '../../data/portfolioData';
import { X, Printer, Copy, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainText = () => {
    const text = `
THARUN B S
UI/UX Designer & Product Thinker
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Portfolio: ${PERSONAL_INFO.portfolioDisplay}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

LINKS: PORTFOLIO: ${PERSONAL_INFO.portfolioDisplay} | LINKEDIN: ${PERSONAL_INFO.linkedin} | GITHUB: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.summary}

EDUCATION:
- B.Sc. Computer Science | Dwaraka Doss Goverdhan Doss Vaishnav College (2024–2027) | CGPA: 8.27/10
- Higher Secondary Education | Hussain Memorial (2024) | 85.83%
- Secondary School (SSLC) | Holy Immanuel (2022) | 92.00%

FEATURED PROJECTS:
1. PRALAYA AI: Landslide Disaster Intelligence & Early Warning Platform (FastAPI, React.js, Leaflet GIS, Random Forest)
2. CERTISEAL: AI-Based Certificate Verification System (React.js, AI/ML, Vercel)
3. CS Academic Portal: Student Academic Management & Learning Platform (React.js, Web Platform)

EXPERIENCE:
- Software Engineering Intern (Virtual) | WEBBED (Dec 2025 – Jan 2026, 4 Weeks)

HACKATHON:
- Smart India Hackathon 2026 Shortlisted: AI-Based Fake Identity & Document Screening System (SIH26188, Ministry of Home Affairs)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#121212] text-[#0A0A0A] dark:text-[#EDEDED] border border-[#0A0A0A] dark:border-[#333333] shadow-2xl my-4 sm:my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="no-print px-6 sm:px-10 py-4 bg-white dark:bg-[#181818] border-b border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between sticky top-0 z-20 font-mono text-xs">
          <span className="font-bold uppercase tracking-wider text-[#0A0A0A] dark:text-white">
            CURRICULUM VITAE // THARUN B S
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase font-bold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={copyPlainText}
              className="px-3.5 py-1.5 border border-[#0A0A0A] dark:border-[#404040] text-[#0A0A0A] dark:text-[#EDEDED] hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors uppercase flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY TEXT'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 text-[#0A0A0A] dark:text-white hover:bg-[#F7F7F7] dark:hover:bg-[#262626] border border-[#E5E5E5] dark:border-[#333333] ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet */}
        <div className="p-8 sm:p-12 lg:p-16 space-y-10 max-h-[85vh] overflow-y-auto font-sans leading-relaxed text-[#0A0A0A] dark:text-[#EDEDED]">
          {/* Header */}
          <div className="border-b border-[#0A0A0A] dark:border-[#333333] pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white font-display">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-xs sm:text-sm font-mono uppercase text-[#525252] dark:text-[#A3A3A3] font-semibold">
                {PERSONAL_INFO.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#525252]">
              <span>{PERSONAL_INFO.location.toUpperCase()}</span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              <span>·</span>
              <span>{PERSONAL_INFO.phoneDisplay}</span>
              <span>·</span>
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-[#0A0A0A] underline underline-offset-4">
                PORTFOLIO: {PERSONAL_INFO.portfolioDisplay}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LINKEDIN</a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GITHUB</a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
              PROFESSIONAL SUMMARY
            </span>
            <p className="text-sm text-[#525252] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4 border-t border-[#E5E5E5] pt-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
              EDUCATION
            </span>
            <div className="space-y-3 font-mono text-xs">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-bold text-sm text-[#0A0A0A] uppercase block">{edu.degree}</span>
                    <span className="text-[#525252]">{edu.institution}</span>
                  </div>
                  <div className="text-left sm:text-right font-bold text-[#0A0A0A]">
                    <span>{edu.scoreType}: {edu.score}</span>
                    <span className="block text-[11px] text-[#737373] font-normal">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-5 border-t border-[#E5E5E5] pt-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
              KEY SYSTEMS & PLATFORMS
            </span>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#0A0A0A] uppercase">{proj.title}</span>
                      <span className="text-[#737373]">·</span>
                      <span className="text-[#525252] uppercase text-[11px]">{proj.category}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#0A0A0A]">
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">LIVE DEMO ↗</a>
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">CODE ↗</a>
                    </div>
                  </div>
                  <p className="text-[#525252]">{proj.description}</p>
                  <span className="text-[10px] font-mono uppercase text-[#737373] block">
                    STACK: {proj.technologies.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Hackathon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E5E5E5] pt-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
                EXPERIENCE
              </span>
              {EXPERIENCE_ITEMS.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex justify-between font-mono">
                    <span className="font-bold text-[#0A0A0A] uppercase">{exp.role}</span>
                    <span className="text-[#737373]">{exp.duration}</span>
                  </div>
                  <span className="font-mono text-[#525252] block text-[11px]">{exp.company} · {exp.period}</span>
                  <p className="text-[#525252] text-[11px] leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] block">
                HACKATHON EVALUATION
              </span>
              <div className="space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="font-bold text-[#0A0A0A] uppercase">{HACKATHON_ACHIEVEMENT.competition}</span>
                  <span className="font-bold text-[#0A0A0A]">{HACKATHON_ACHIEVEMENT.achievement.toUpperCase()}</span>
                </div>
                <span className="text-[#525252] block text-[11px]">{HACKATHON_ACHIEVEMENT.projectTitle}</span>
                <p className="text-[#737373] text-[11px]">ORG: {HACKATHON_ACHIEVEMENT.organization} · TRACK: {HACKATHON_ACHIEVEMENT.track}</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3 border-t border-[#E5E5E5] pt-6 font-mono text-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block">
              CAPABILITIES SPECIFICATION
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 bg-[#F7F7F7] border border-[#E5E5E5]">
                  <span className="font-bold text-[#0A0A0A] block uppercase text-[11px]">{cat.name}</span>
                  <span className="text-[#525252] text-[10px] block mt-0.5">{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#E5E5E5] pt-6 font-mono text-xs">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block">
                SELECTED CERTIFICATIONS
              </span>
              <ul className="space-y-1 text-[11px] text-[#525252]">
                {CERTIFICATIONS.slice(0, 4).map((c) => (
                  <li key={c.id}>
                    • <span className="font-bold text-[#0A0A0A] uppercase">{c.title}</span> — {c.issuer} ({c.period})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#737373] block">
                LANGUAGES & LEADERSHIP
              </span>
              <p className="text-[11px] text-[#525252]">
                <span className="font-bold text-[#0A0A0A] uppercase">LANGUAGES:</span>{' '}
                {LANGUAGES.map((l) => `${l.name} (${l.proficiency})`).join(' · ')}
              </p>
              <p className="text-[11px] text-[#525252]">
                <span className="font-bold text-[#0A0A0A] uppercase">LEADERSHIP:</span>{' '}
                {LEADERSHIP_ITEMS.map((l) => l.role).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
