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
} from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

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
UI/UX Designer & Computer Science Student
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-start justify-center p-2 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0F0F13] text-neutral-900 dark:text-neutral-100 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print px-6 py-4 bg-white/95 dark:bg-[#0F0F13]/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-600 dark:text-neutral-400">
              Verified Curriculum Vitae // Tharun B S
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={copyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Resume Viewer"
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-8 sm:p-12 lg:p-14 space-y-9 max-h-[85vh] overflow-y-auto font-sans leading-relaxed text-neutral-800 dark:text-neutral-200">
          {/* Resume Header */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.phoneDisplay}
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-neutral-400" />
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-neutral-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white text-sm block">
                      {edu.degree}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">{edu.institution}</span>
                  </div>
                  <div className="text-left sm:text-right font-mono text-neutral-500 shrink-0">
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {edu.scoreType}: {edu.score}
                    </span>
                    <span className="block text-[11px]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-5">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
              Key Projects & Systems
            </h3>
            <div className="space-y-5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-950 dark:text-white">
                        {proj.title}
                      </span>
                      <span className="text-neutral-400">·</span>
                      <span className="text-neutral-600 dark:text-neutral-400 font-mono text-[11px]">
                        {proj.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Live Demo
                      </a>
                      <span>·</span>
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Source Code
                      </a>
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300">{proj.description}</p>

                  <div className="pt-1">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block">
                      Stack: {proj.technologies.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience & Hackathon */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
                Experience
              </h3>
              {EXPERIENCE_ITEMS.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-neutral-900 dark:text-white">{exp.role}</span>
                    <span className="font-mono text-[11px] text-neutral-500">{exp.duration}</span>
                  </div>
                  <span className="text-neutral-600 dark:text-neutral-400 block">
                    {exp.company} ({exp.type}) · {exp.period}
                  </span>
                  <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Hackathon */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
                Hackathon Achievement
              </h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-neutral-900 dark:text-white">
                    {HACKATHON_ACHIEVEMENT.competition}
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    {HACKATHON_ACHIEVEMENT.achievement}
                  </span>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 block text-[11px]">
                  {HACKATHON_ACHIEVEMENT.projectTitle} (Org: {HACKATHON_ACHIEVEMENT.organization})
                </span>
                <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                  Problem: {HACKATHON_ACHIEVEMENT.problemStatementId} · Track: {HACKATHON_ACHIEVEMENT.track}
                </p>
              </div>
            </div>
          </div>

          {/* Categorized Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
              Technical & Product Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800">
                  <span className="font-bold text-neutral-900 dark:text-white text-[11px] block font-mono">
                    {cat.name}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 text-[11px]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
                Selected Certifications
              </h3>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                {CERTIFICATIONS.slice(0, 4).map((c) => (
                  <li key={c.id}>
                    • <span className="font-semibold text-neutral-800 dark:text-neutral-200">{c.title}</span> — {c.issuer} ({c.period})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 pb-1">
                Languages & Leadership
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">Languages:</span>{' '}
                {LANGUAGES.map((l) => `${l.name} (${l.proficiency})`).join(' · ')}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">Leadership:</span>{' '}
                {LEADERSHIP_ITEMS.map((l) => l.role).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
