import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { X, ArrowUpRight, Check, Copy, Zap, FileText, Mail } from 'lucide-react';

interface RecruiterScanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFullResume: () => void;
}

export const RecruiterScanModal: React.FC<RecruiterScanModalProps> = ({
  isOpen,
  onClose,
  onOpenFullResume,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

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

  const copyPortfolioUrl = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.portfolioUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#121212] text-[#0A0A0A] dark:text-white border border-[#0A0A0A] dark:border-[#333333] my-6 neu-card shadow-2xl overflow-hidden font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#0A0A0A] text-white flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold tracking-wider uppercase">
              60-SECOND RECRUITER EXECUTIVE SUMMARY
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 text-white hover:bg-white/15 border border-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Candidate Positioning & Availability */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#E5E5E8] dark:border-[#262626] pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight font-display">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-xs font-mono text-[#525252] dark:text-[#A3A3A3] mt-0.5">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F7] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-pill text-[11px] font-mono text-[#0A0A0A] dark:text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPEN FOR HIRE</span>
            </span>
          </div>

          {/* 3 Core Verified Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
            <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block">
                8.27 / 10
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-bold block">
                ACADEMIC CGPA
              </span>
              <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans">
                B.Sc. Computer Science (2024–2027) · DG Vaishnav College
              </p>
            </div>

            <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block">
                SIH 2026
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-bold block">
                SHORTLISTED
              </span>
              <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans">
                Ministry of Home Affairs Track · AI Document Tamper Screening
              </p>
            </div>

            <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block">
                WEBBED INTERN
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-bold block">
                PRACTICAL WORKFLOWS
              </span>
              <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans">
                Virtual SWE Internship · Web Technology & Git Workflows
              </p>
            </div>
          </div>

          {/* Top 3 Live Projects (15-second scan) */}
          <div className="space-y-3 font-mono">
            <span className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block border-b border-[#E5E5E8] dark:border-[#262626] pb-2">
              TOP PRODUCTION DELIVERABLES
            </span>

            <div className="space-y-2.5">
              <div className="p-3.5 bg-white dark:bg-[#171717] border border-[#E5E5E8] dark:border-[#262626] neu-flat flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#0A0A0A] dark:text-white text-xs">
                      01. PRALAYA AI
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#F5F5F7] dark:bg-[#262626] text-[#525252] dark:text-[#A3A3A3]">
                      FASTAPI · REACT · LEAFLET GIS · RANDOM FOREST
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] dark:text-[#A3A3A3] font-sans">
                    National landslide risk intelligence centre with WGS84 spatial overlays and XAI feature attribution.
                  </p>
                </div>
                <a
                  href="https://disaster-phi-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0A0A0A] dark:text-white hover:underline uppercase shrink-0 flex items-center gap-1"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 bg-white dark:bg-[#171717] border border-[#E5E5E8] dark:border-[#262626] neu-flat flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#0A0A0A] dark:text-white text-xs">
                      02. CERTISEAL (CERTX)
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#F5F5F7] dark:bg-[#262626] text-[#525252] dark:text-[#A3A3A3]">
                      REACT.JS · AI/ML OCR · ED25519 DIGITAL TRUST
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] dark:text-[#A3A3A3] font-sans">
                    Academic credential verification platform with 8-level evidence chain and instant tamper audit.
                  </p>
                </div>
                <a
                  href="https://certiseal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0A0A0A] dark:text-white hover:underline uppercase shrink-0 flex items-center gap-1"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              <div className="p-3.5 bg-white dark:bg-[#171717] border border-[#E5E5E8] dark:border-[#262626] neu-flat flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#0A0A0A] dark:text-white text-xs">
                      03. CS ACADEMIC PORTAL
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#F5F5F7] dark:bg-[#262626] text-[#525252] dark:text-[#A3A3A3]">
                      REACT.JS · EDUCATION HUB · 2-CLICK RETRIEVAL
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] dark:text-[#A3A3A3] font-sans">
                    Streamlined student learning hub providing 2-click access to practical lab code repositories and syllabi.
                  </p>
                </div>
                <a
                  href="https://cs-academic-portal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0A0A0A] dark:text-white hover:underline uppercase shrink-0 flex items-center gap-1"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Core Skills Snapshot */}
          <div className="space-y-2 font-mono text-xs">
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block border-b border-[#E5E5E8] dark:border-[#262626] pb-1.5">
              CORE TOOLCHAIN & COMPETENCIES
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'Figma (Design Systems)',
                'Wireframing & Prototyping',
                'User Flows & Research',
                'React.js',
                'JavaScript (ES6+)',
                'HTML5 & Modern CSS3',
                'REST APIs',
                'Leaflet GIS',
                'Python & Machine Learning',
                'Git & GitHub',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-pill text-[#0A0A0A] dark:text-white font-medium text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Hub */}
          <div className="p-4 bg-[#F5F5F7] dark:bg-[#171717] border border-[#E5E5E8] dark:border-[#262626] neu-inset space-y-3 font-mono text-xs">
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider block">
              INSTANT CANDIDATE ACTIONS
            </span>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenFullResume();
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-bold uppercase tracking-wider neu-btn"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW FULL PRINTABLE RESUME</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Job Opportunity / Interview Inquiry`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1E1E1E] border border-[#0A0A0A] dark:border-[#404040] text-[#0A0A0A] dark:text-white font-bold uppercase tracking-wider neu-btn"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL THARUN</span>
              </a>

              <button
                onClick={copyPortfolioUrl}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-white dark:bg-[#1E1E1E] border border-[#E5E5E8] dark:border-[#404040] text-[#737373] hover:text-[#0A0A0A] dark:hover:text-white uppercase neu-btn"
              >
                {copiedLink ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedLink ? 'URL COPIED' : 'COPY URL'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
