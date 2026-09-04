import React, { useEffect, useState } from 'react';
import { CASE_STUDIES } from '../data/caseStudies';
import { X, ArrowUpRight } from 'lucide-react';

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ projectId, onClose }) => {
  const [activeTab, setActiveTab] = useState('glance');

  const caseStudy = projectId ? CASE_STUDIES[projectId] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
    { id: 'glance', label: '01. AT A GLANCE' },
    { id: 'contribution', label: '02. MY CONTRIBUTION' },
    { id: 'screenshots', label: '03. SCREENSHOTS' },
    { id: 'problem', label: '04. THE PROBLEM' },
    { id: 'decisions', label: '05. DESIGN DECISIONS' },
    { id: 'challenges', label: '06. CONSTRAINTS' },
    { id: 'tech', label: '07. TECH IMPLEMENTATION' },
    { id: 'learned', label: '08. WHAT I LEARNED' },
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
            <span className="font-bold text-[#0A0A0A]">PROJECT {caseStudy.number}</span>
            <span className="text-[#D4D4D4]">/</span>
            <span className="text-[#525252] uppercase font-semibold">{caseStudy.title}</span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4 font-bold"
            >
              <span>LIVE PROJECT</span>
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
              className="p-1 text-[#0A0A0A] hover:bg-[#F7F7F7] border border-[#E5E5E5] ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Jump Subbar */}
        <div className="px-6 sm:px-10 py-2.5 bg-[#F7F7F7] border-b border-[#E5E5E5] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`px-2.5 py-1 whitespace-nowrap uppercase transition-colors ${
                activeTab === s.id
                  ? 'bg-[#0A0A0A] text-white font-bold'
                  : 'text-[#525252] hover:text-[#0A0A0A]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-12 space-y-16 max-h-[80vh] overflow-y-auto font-sans leading-relaxed text-[#0A0A0A]">
          {/* 1. PROJECT AT A GLANCE (15-second recruiter scan) */}
          <div id="cs-glance" className="space-y-6 scroll-mt-24">
            <div className="flex items-center justify-between font-mono text-xs text-[#737373] border-b border-[#E5E5E5] pb-2">
              <span className="uppercase">{caseStudy.category}</span>
              <span>TIMEFRAME: {caseStudy.timeframe}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
                {caseStudy.title}
              </h2>
              <p className="text-base sm:text-lg text-[#525252] font-medium">
                {caseStudy.subtitle}
              </p>
            </div>

            {/* Structured Table: Project At A Glance */}
            <div className="p-6 bg-[#FAFAFA] border border-[#0A0A0A] space-y-4 font-mono text-xs">
              <div className="border-b border-[#E5E5E5] pb-2 flex items-center justify-between">
                <span className="font-bold text-[#0A0A0A] uppercase tracking-wider text-xs">
                  PROJECT AT A GLANCE
                </span>
                <span className="text-[#737373] text-[10px] uppercase">
                  RECRUITER 15-SECOND SUMMARY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[#737373] text-[10px] uppercase block">PROJECT</span>
                  <span className="font-bold text-[#0A0A0A] text-sm">{caseStudy.atAGlance.project}</span>
                </div>

                <div>
                  <span className="text-[#737373] text-[10px] uppercase block">FOCUS AREA</span>
                  <span className="font-bold text-[#0A0A0A] text-sm">{caseStudy.atAGlance.focus}</span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-[#737373] text-[10px] uppercase block">ROLE / MY CONTRIBUTION</span>
                  <span className="font-bold text-[#0A0A0A] text-xs leading-relaxed">{caseStudy.atAGlance.roleContribution}</span>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-[#737373] text-[10px] uppercase block">CORE TECHNOLOGIES</span>
                  <span className="text-[#525252] text-xs">{caseStudy.atAGlance.technologies}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#E5E5E5] flex items-center gap-6">
                <a
                  href={caseStudy.atAGlance.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0A0A0A] hover:underline uppercase"
                >
                  LIVE PROJECT →
                </a>
                <a
                  href={caseStudy.atAGlance.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#737373] hover:text-[#0A0A0A] hover:underline uppercase"
                >
                  GITHUB REPOSITORY →
                </a>
              </div>
            </div>
          </div>

          {/* 2. MY CONTRIBUTION (Prominently placed) */}
          <div id="cs-contribution" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>02</span>
              <span>—</span>
              <span className="uppercase">MY CONTRIBUTION</span>
            </div>

            <p className="text-sm text-[#525252]">
              {caseStudy.myContribution.summary}
            </p>

            <div className="p-6 bg-white border border-[#E5E5E5] space-y-3 font-mono text-xs">
              <span className="font-bold text-[#0A0A0A] uppercase tracking-wide block">
                VERIFIED RESPONSIBILITIES & DELIVERABLES:
              </span>
              <ul className="space-y-2 text-[#0A0A0A]">
                {caseStudy.myContribution.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#0A0A0A] font-bold">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. REAL PROJECT SCREENSHOTS */}
          {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
            <div id="cs-screenshots" className="space-y-6 scroll-mt-24">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
                <div className="flex items-center gap-3">
                  <span>03</span>
                  <span>—</span>
                  <span className="uppercase">REAL PRODUCT SCREENSHOTS</span>
                </div>
                <span className="text-[10px] text-[#737373] uppercase font-normal">
                  AUTHENTIC PRODUCTION DEPLOYMENT
                </span>
              </div>

              <div className="space-y-8">
                {caseStudy.screenshots.map((shot, idx) => (
                  <div key={idx} className="border border-[#0A0A0A] bg-[#FAFAFA] p-3 sm:p-4 space-y-3">
                    <div className="flex items-center justify-between px-1 font-mono text-[11px]">
                      <span className="font-bold text-[#0A0A0A] uppercase tracking-wider">
                        FIGURE 0{idx + 1} // {shot.title}
                      </span>
                      <span className="text-[10px] text-[#737373] uppercase">VERIFIED INTERFACE</span>
                    </div>

                    <div className="overflow-hidden border border-[#E5E5E5] bg-[#0A0A0A]">
                      <img
                        src={shot.url}
                        alt={shot.title}
                        className="w-full h-auto object-cover block"
                        loading="lazy"
                      />
                    </div>

                    <p className="text-xs text-[#525252] px-1 font-mono leading-relaxed">
                      <span className="text-[#0A0A0A] font-bold">Caption:</span> {shot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. THE CONTEXT & THE PROBLEM */}
          <div id="cs-problem" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>04</span>
              <span>—</span>
              <span className="uppercase">THE CONTEXT & PROBLEM</span>
            </div>
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              {caseStudy.theContext}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {caseStudy.theProblem.keyPoints.map((pt, idx) => (
                <div key={idx} className="p-4 bg-[#F7F7F7] border border-[#E5E5E5] space-y-1">
                  <span className="text-[10px] font-mono text-[#737373] block">PROBLEM // 0{idx + 1}</span>
                  <p className="text-xs text-[#0A0A0A] leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. DESIGN DECISIONS (3-5 important decisions) */}
          <div id="cs-decisions" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>05</span>
              <span>—</span>
              <span className="uppercase">DESIGN DECISIONS & CONSIDERATIONS</span>
            </div>

            <div className="space-y-4">
              {caseStudy.designDecisions.map((decision, idx) => (
                <div key={idx} className="p-6 border border-[#E5E5E5] space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-[#F2F2F2] pb-2">
                    <h4 className="font-bold text-[#0A0A0A] text-sm uppercase">
                      {idx + 1}. {decision.title}
                    </h4>
                    <span className="text-[10px] text-[#737373] uppercase">DESIGN DECISION</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <p className="text-[#737373] font-mono">
                      <strong className="text-[#0A0A0A]">Consideration:</strong> {decision.consideration}
                    </p>
                    <p className="text-[#525252] leading-relaxed font-sans">
                      <strong className="text-[#0A0A0A] font-mono">Rationale:</strong> {decision.rationale}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. CHALLENGES & CONSTRAINTS */}
          <div id="cs-challenges" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>06</span>
              <span>—</span>
              <span className="uppercase">CHALLENGES & CONSTRAINTS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.challengesAndConstraints.map((item, idx) => (
                <div key={idx} className="p-5 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2">
                  <span className="text-[10px] font-mono text-[#737373] block uppercase">
                    CONSTRAINT // 0{idx + 1}
                  </span>
                  <h5 className="text-sm font-bold text-[#0A0A0A] tracking-tight">{item.heading}</h5>
                  <p className="text-xs text-[#525252] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. PRODUCT & TECHNICAL IMPLEMENTATION */}
          <div id="cs-tech" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>07</span>
              <span>—</span>
              <span className="uppercase">PRODUCT & TECHNICAL IMPLEMENTATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {caseStudy.productAndTechImplementation.stack.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#F7F7F7] border border-[#E5E5E5]">
                  <span className="font-bold text-[#0A0A0A] block">{item.name}</span>
                  <span className="text-[#525252] text-[11px] block mt-0.5">{item.purpose}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border border-[#E5E5E5] font-mono text-xs space-y-1 text-[#525252]">
              <span className="text-[10px] text-[#737373] uppercase font-bold block">ARCHITECTURE HIGHLIGHTS:</span>
              {caseStudy.productAndTechImplementation.architectureSpecs.map((spec, idx) => (
                <p key={idx}>• {spec}</p>
              ))}
            </div>
          </div>

          {/* 8. WHAT I LEARNED (Reflections on growth) */}
          <div id="cs-learned" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-2 font-mono text-xs font-bold text-[#0A0A0A]">
              <span>08</span>
              <span>—</span>
              <span className="uppercase">WHAT I LEARNED</span>
            </div>

            <div className="p-6 bg-[#FAFAFA] border border-[#0A0A0A] space-y-3 font-mono text-xs">
              <span className="font-bold text-[#0A0A0A] uppercase tracking-wide block">
                PROFESSIONAL & TECHNICAL TAKEAWAYS:
              </span>
              <ul className="space-y-2 text-[#0A0A0A]">
                {caseStudy.whatILearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#0A0A0A] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Bottom Action Bar */}
          <div className="pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-4">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#0A0A0A] text-white hover:bg-neutral-800 transition-colors uppercase font-bold"
              >
                LAUNCH LIVE PLATFORM →
              </a>
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors uppercase font-bold"
              >
                VIEW GITHUB REPO ↗
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-[#737373] hover:text-[#0A0A0A] uppercase"
            >
              [CLOSE WINDOW (ESC)]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
