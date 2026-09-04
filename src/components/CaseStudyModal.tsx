import React, { useEffect, useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { X, ArrowUpRight } from 'lucide-react';

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState('context');

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

  const projectNumberMap: Record<string, string> = {
    'pralaya-ai': '01',
    'certiseal': '02',
    'cs-academic-portal': '03',
  };
  const projNum = projectNumberMap[projectId] || '01';

  const sections = [
    { id: 'context', label: '01 CONTEXT' },
    { id: 'problem', label: '02 PROBLEM' },
    { id: 'contribution', label: '03 CONTRIBUTION' },
    { id: 'design', label: '04 DESIGN APPROACH' },
    { id: 'tech', label: '05 TECH IMPLEMENTATION' },
    { id: 'outcomes', label: '06 DELIVERABLES' },
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white text-[#0A0A0A] border border-[#0A0A0A] my-6 transition-all shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-10 py-4 bg-white border-b border-[#E5E5E5] flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="font-bold text-[#0A0A0A]">PROJECT {projNum}</span>
            <span className="text-[#D4D4D4]">/</span>
            <span className="text-[#525252] uppercase">{caseStudy.title}</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4"
            >
              <span>LIVE DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#737373] hover:text-[#0A0A0A] hover:underline underline-offset-4"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 text-[#0A0A0A] hover:bg-[#F7F7F7] border border-[#E5E5E5] ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Jump Bar */}
        <div className="px-6 sm:px-10 py-2.5 bg-[#F7F7F7] border-b border-[#E5E5E5] flex items-center gap-3 overflow-x-auto text-[11px] font-mono">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`px-2.5 py-1 whitespace-nowrap transition-colors ${
                activeTab === s.id
                  ? 'bg-[#0A0A0A] text-white font-bold'
                  : 'text-[#525252] hover:text-[#0A0A0A]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Case Study Body */}
        <div className="p-6 sm:p-12 space-y-16 max-h-[80vh] overflow-y-auto font-sans leading-relaxed">
          {/* Hero Header */}
          <div className="space-y-4 border-b border-[#E5E5E5] pb-8">
            <div className="flex items-center justify-between font-mono text-xs text-[#737373]">
              <span className="uppercase">{caseStudy.category}</span>
              <span>TIMEFRAME: {caseStudy.timeframe}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
              {caseStudy.title}
            </h2>

            <p className="text-base sm:text-lg text-[#525252] font-medium">
              {caseStudy.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#525252]">
              <div>
                <span className="text-[#737373] text-[10px] uppercase block">PRIMARY ROLE</span>
                <span className="font-bold text-[#0A0A0A]">{caseStudy.role}</span>
              </div>
              <div className="text-[11px] text-[#737373] uppercase">
                Zero Fabricated Metrics · Verified Deliverables Only
              </div>
            </div>
          </div>

          {/* 01 — The Context */}
          <div id="cs-context" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>01</span>
              <span>—</span>
              <span className="uppercase">THE CONTEXT</span>
            </div>
            <p className="text-sm sm:text-base text-[#525252]">
              {caseStudy.problem.summary}
            </p>
          </div>

          {/* 02 — The Problem */}
          <div id="cs-problem" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>02</span>
              <span>—</span>
              <span className="uppercase">THE PROBLEM & CHALLENGES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {caseStudy.problem.points.map((pt, idx) => (
                <div key={idx} className="p-4 bg-[#F7F7F7] border border-[#E5E5E5] space-y-1">
                  <span className="text-[10px] font-mono text-[#737373] block">PROBLEM // 0{idx + 1}</span>
                  <p className="text-xs text-[#0A0A0A] leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 03 — My Contribution */}
          <div id="cs-contribution" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>03</span>
              <span>—</span>
              <span className="uppercase">MY CONTRIBUTION & RESPONSIBILITIES</span>
            </div>
            <div className="p-6 bg-white border border-[#E5E5E5] space-y-3">
              <span className="text-xs font-mono font-bold text-[#0A0A0A] uppercase block">
                {caseStudy.myRole.title}
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#525252] font-mono">
                {caseStudy.myRole.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#0A0A0A] font-bold">—</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 04 — Design Approach & Considerations */}
          <div id="cs-design" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>04</span>
              <span>—</span>
              <span className="uppercase">DESIGN APPROACH & CONSIDERATIONS</span>
            </div>
            <p className="text-xs text-[#737373] font-mono">
              {caseStudy.designConsiderations.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.designConsiderations.items.map((item, idx) => (
                <div key={idx} className="p-5 border border-[#E5E5E5] space-y-2">
                  <span className="text-[10px] font-mono text-[#737373] block">DECISION // 0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-[#0A0A0A] tracking-tight">{item.heading}</h4>
                  <p className="text-xs text-[#525252] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 05 — Product & Technical Implementation */}
          <div id="cs-tech" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>05</span>
              <span>—</span>
              <span className="uppercase">PRODUCT & TECHNICAL IMPLEMENTATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {caseStudy.technicalImplementation.stack.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#F7F7F7] border border-[#E5E5E5]">
                  <span className="font-bold text-[#0A0A0A] block">{item.name}</span>
                  <span className="text-[#525252] text-[11px] block mt-0.5">{item.purpose}</span>
                </div>
              ))}
            </div>

            {caseStudy.technicalImplementation.architectureNotes.length > 0 && (
              <div className="p-4 border border-[#E5E5E5] font-mono text-xs space-y-1 text-[#525252]">
                <span className="text-[10px] text-[#737373] uppercase block">ARCHITECTURE SPEC:</span>
                {caseStudy.technicalImplementation.architectureNotes.map((note, idx) => (
                  <p key={idx}>• {note}</p>
                ))}
              </div>
            )}
          </div>

          {/* 06 — Final Deliverables & Outcomes */}
          <div id="cs-outcomes" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>06</span>
              <span>—</span>
              <span className="uppercase">VERIFIED DELIVERABLES & OUTCOMES</span>
            </div>
            <p className="text-sm text-[#525252]">
              {caseStudy.outcomes.summary}
            </p>

            <div className="p-5 bg-[#F7F7F7] border border-[#E5E5E5] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#737373] uppercase block">
                Confirmed Working Milestones
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-[#0A0A0A]">
                {caseStudy.outcomes.verifiedDeliverables.map((d, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-4">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#0A0A0A] text-white hover:bg-neutral-800 transition-colors uppercase font-bold"
              >
                VISIT LIVE PROJECT →
              </a>
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors uppercase"
              >
                GITHUB REPO ↗
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-[#737373] hover:text-[#0A0A0A] uppercase"
            >
              [CLOSE WINDOW]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
