import React, { useEffect, useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Layers,
  Cpu,
  ArrowRight,
  Shield,
  FileText,
  Compass,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const caseStudy = projectId ? CASE_STUDIES[projectId] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  if (!projectId || !caseStudy) return null;

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'The Problem' },
    { id: 'role', label: 'My Role' },
    { id: 'considerations', label: 'Design Considerations' },
    { id: 'architecture', label: 'Information Architecture' },
    { id: 'tech', label: 'Technical Stack' },
    { id: 'outcomes', label: 'Verified Outcomes' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`cs-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#101014] text-neutral-900 dark:text-neutral-100 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden my-6 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white/90 dark:bg-[#101014]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              Product Case Study
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* In-Modal Navigation Subbar */}
        <div className="px-6 py-2.5 bg-neutral-50/80 dark:bg-neutral-950/60 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`px-3 py-1 rounded-md transition-colors shrink-0 ${
                activeTab === s.id
                  ? 'bg-neutral-900 text-white dark:bg-indigo-600 dark:text-white font-medium shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-10 space-y-12 max-h-[80vh] overflow-y-auto">
          {/* Hero Section */}
          <div id="cs-overview" className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 font-semibold">
                {caseStudy.category}
              </span>
              <span>·</span>
              <span>Timeline: {caseStudy.timeframe}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              {caseStudy.title}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 font-medium">
              {caseStudy.subtitle}
            </p>

            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase">My Focus & Role</span>
                <span className="font-semibold text-neutral-900 dark:text-white">{caseStudy.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Verified Deliverables Only · Zero Fabricated Metrics</span>
              </div>
            </div>
          </div>

          {/* The Problem */}
          <div id="cs-problem" className="space-y-4 scroll-mt-20">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>The Problem & Context</span>
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.problem.summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {caseStudy.problem.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div id="cs-role" className="space-y-4 scroll-mt-20">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <Compass className="w-5 h-5 text-indigo-500" />
              <span>My Role & Responsibilities</span>
            </h3>
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 space-y-3">
              <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider">
                {caseStudy.myRole.title}
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                {caseStudy.myRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Design Considerations */}
          <div id="cs-considerations" className="space-y-4 scroll-mt-20">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-500" />
                <span>{caseStudy.designConsiderations.title}</span>
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {caseStudy.designConsiderations.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.designConsiderations.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xs space-y-2"
                >
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item.heading}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Information Architecture */}
          <div id="cs-architecture" className="space-y-4 scroll-mt-20">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <FileText className="w-5 h-5 text-indigo-500" />
              <span>Information Architecture & User Flow</span>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {caseStudy.informationArchitecture.description}
            </p>

            {caseStudy.informationArchitecture.flows.map((flow, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-4"
              >
                <span className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200">
                  {flow.title}
                </span>
                <div className="space-y-2">
                  {flow.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 text-xs font-mono p-2.5 rounded-lg bg-white dark:bg-neutral-800/80 border border-neutral-200/70 dark:border-neutral-700/70"
                    >
                      <span className="w-6 h-6 rounded-md bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center font-bold text-[10px] shrink-0">
                        0{sIdx + 1}
                      </span>
                      <span className="text-neutral-800 dark:text-neutral-200">{step}</span>
                      {sIdx < flow.steps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 ml-auto hidden sm:block shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Implementation */}
          <div id="cs-tech" className="space-y-4 scroll-mt-20">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <Cpu className="w-5 h-5 text-violet-500" />
              <span>Technical Implementation & Architecture</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technicalImplementation.stack.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 text-xs space-y-1"
                >
                  <span className="font-mono font-bold text-neutral-900 dark:text-white block">
                    {item.name}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 text-[11px] leading-snug block">
                    {item.purpose}
                  </span>
                </div>
              ))}
            </div>

            {caseStudy.technicalImplementation.architectureNotes.length > 0 && (
              <div className="p-4 rounded-xl bg-neutral-100/70 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 space-y-1.5 font-mono">
                <span className="text-neutral-500 uppercase text-[10px] block font-semibold">
                  Engineering Notes:
                </span>
                {caseStudy.technicalImplementation.architectureNotes.map((note, idx) => (
                  <p key={idx}>• {note}</p>
                ))}
              </div>
            )}
          </div>

          {/* Outcomes & Verified Deliverables */}
          <div id="cs-outcomes" className="space-y-4 scroll-mt-20">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span>Verified Deliverables & Current Status</span>
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              {caseStudy.outcomes.summary}
            </p>

            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/80 space-y-2.5">
              <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 block uppercase tracking-wide">
                Confirmed Working Milestones
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                {caseStudy.outcomes.verifiedDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Project Links Action Bar */}
          <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-xs"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white underline underline-offset-4"
            >
              Close Case Study (Esc)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
