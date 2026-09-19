import React from 'react';
import type { StationId } from './MasterWorld3D';
import { PERSONAL_INFO, PROJECTS, HACKATHON_ACHIEVEMENT, EXPERIENCE_ITEMS } from '../../data/portfolioData';
import { AnimatedCounter } from '../common/AnimatedCounter';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Layers,
  ExternalLink,
  Code2,
  Eye,
  Zap,
  Printer,
  Sparkles,
  Send,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface WorldHUDProps {
  activeStation: StationId;
  onSelectStation: (station: StationId) => void;
  onOpenCaseStudy: (projectId: string) => void;
  onOpenResume: () => void;
  onOpenRecruiterScan: () => void;
  onToggleViewMode: () => void;
  is3DMode: boolean;
}

const STATIONS: { id: StationId; label: string; num: string }[] = [
  { id: 'hero', label: 'HERO // DESK', num: '01' },
  { id: 'about', label: 'ABOUT // PROFILE', num: '02' },
  { id: 'skills', label: 'SKILLS // TECH CORE', num: '03' },
  { id: 'projects', label: 'PROJECTS // UNIVERSE', num: '04' },
  { id: 'journey', label: 'JOURNEY // TIMELINE', num: '05' },
  { id: 'resume', label: 'RESUME // DOCUMENT', num: '06' },
  { id: 'contact', label: 'CONTACT // TERMINAL', num: '07' },
];

export const WorldHUD: React.FC<WorldHUDProps> = ({
  activeStation,
  onSelectStation,
  onOpenCaseStudy,
  onOpenResume,
  onOpenRecruiterScan,
  onToggleViewMode,
  is3DMode,
}) => {
  const currentIndex = STATIONS.findIndex((s) => s.id === activeStation);

  const nextStation = () => {
    const nextIdx = (currentIndex + 1) % STATIONS.length;
    onSelectStation(STATIONS[nextIdx].id);
  };

  const prevStation = () => {
    const prevIdx = (currentIndex - 1 + STATIONS.length) % STATIONS.length;
    onSelectStation(STATIONS[prevIdx].id);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 sm:p-8 select-none">
      {/* Top Floating Bar: Active Station Status & View Mode Switcher */}
      <div className="pt-16 flex items-center justify-between w-full pointer-events-auto">
        {/* Left: Active Station Breadcrumb */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/90 dark:bg-[#0c0c10]/90 backdrop-blur-md border border-[#E5E5E8] dark:border-[#27272a] rounded-full text-xs font-mono shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[#737373] dark:text-[#a1a1aa] uppercase font-semibold">
            STATION {STATIONS[currentIndex].num} //
          </span>
          <span className="font-bold text-[#0A0A0A] dark:text-white uppercase">
            {STATIONS[currentIndex].label}
          </span>
        </div>

        {/* Right: Quick View Mode Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleViewMode}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/90 dark:bg-[#141418]/90 backdrop-blur-md border border-[#0A0A0A] dark:border-[#38bdf8] text-[#0A0A0A] dark:text-white rounded-full text-xs font-mono uppercase font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xs"
            title="Toggle between continuous 3D World and compressed 2D Recruiter view"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{is3DMode ? 'SWITCH TO 2D SCAN' : 'SWITCH TO 3D WORLD'}</span>
          </button>
        </div>
      </div>

      {/* Center / Lower Area: Floating Glassmorphic Content Card */}
      <div className="my-auto max-w-2xl w-full pointer-events-auto transition-all duration-300">
        <div className="p-6 sm:p-8 rounded-2xl bg-white/95 dark:bg-[#0c0c10]/95 backdrop-blur-xl border border-[#E5E5E8] dark:border-[#27272a] shadow-2xl space-y-5">
          {/* STATION 1: HERO */}
          {activeStation === 'hero' && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs sm:text-sm font-mono text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  Computer Science Student · UI/UX Designer · Web Developer
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#a1a1aa] leading-relaxed font-sans">
                {PERSONAL_INFO.subheadline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs pt-1">
                <button
                  onClick={() => onSelectStation('projects')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] uppercase font-bold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <span>EXPLORE 3D WORK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#141418] border border-[#0A0A0A] dark:border-[#38bdf8] text-[#0A0A0A] dark:text-white uppercase font-bold rounded-lg hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
                >
                  <span>VIEW RESUME</span>
                </button>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#E5E5E8] dark:border-[#222226] font-mono text-center">
                <div className="p-2 rounded-lg bg-[#FAFAFA] dark:bg-[#141418]">
                  <span className="text-sm font-bold text-[#0A0A0A] dark:text-white block">
                    <AnimatedCounter target={8.27} decimals={2} /> / 10
                  </span>
                  <span className="text-[9px] text-[#737373] uppercase">CGPA (B.Sc. CS)</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAFAFA] dark:bg-[#141418]">
                  <span className="text-sm font-bold text-emerald-500 block">SIH 2026</span>
                  <span className="text-[9px] text-[#737373] uppercase">SHORTLISTED</span>
                </div>
                <div className="p-2 rounded-lg bg-[#FAFAFA] dark:bg-[#141418]">
                  <span className="text-sm font-bold text-cyan-400 block">3 BUILDS</span>
                  <span className="text-[9px] text-[#737373] uppercase">PRODUCTION</span>
                </div>
              </div>
            </div>
          )}

          {/* STATION 2: ABOUT */}
          {activeStation === 'about' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 font-mono text-xs">
                <span className="text-cyan-500 font-bold uppercase">HOLOGRAPHIC PROFILE STATION</span>
                <span className="text-[#737373] uppercase">CGPA 8.27/10</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                {PERSONAL_INFO.aboutHeadline}
              </h2>

              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#a1a1aa] leading-relaxed">
                {PERSONAL_INFO.aboutParagraphs[0]}
              </p>

              {/* Core Workflow Pipeline */}
              <div className="grid grid-cols-3 gap-2 font-mono text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#141418] border border-[#E5E5E8] dark:border-[#27272a] space-y-1">
                  <span className="text-[9px] text-cyan-400 uppercase font-bold block">01 // UX</span>
                  <span className="font-bold text-[#0A0A0A] dark:text-white text-xs block">DESIGN</span>
                  <p className="text-[10px] text-[#737373] font-sans">Figma systems & wireframing</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#141418] border border-[#E5E5E8] dark:border-[#27272a] space-y-1">
                  <span className="text-[9px] text-emerald-400 uppercase font-bold block">02 // CODE</span>
                  <span className="font-bold text-[#0A0A0A] dark:text-white text-xs block">DEVELOPMENT</span>
                  <p className="text-[10px] text-[#737373] font-sans">React.js & client architecture</p>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#141418] border border-[#E5E5E8] dark:border-[#27272a] space-y-1">
                  <span className="text-[9px] text-indigo-400 uppercase font-bold block">03 // AI</span>
                  <span className="font-bold text-[#0A0A0A] dark:text-white text-xs block">TECHNOLOGY</span>
                  <p className="text-[10px] text-[#737373] font-sans">ML checks & GIS telemetry</p>
                </div>
              </div>
            </div>
          )}

          {/* STATION 3: SKILLS */}
          {activeStation === 'skills' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 font-mono text-xs">
                <span className="text-cyan-500 font-bold uppercase">3D TECHNOLOGY CORE</span>
                <span className="text-[#737373] uppercase">VERIFIED STACK</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                Technical Capabilities
              </h2>

              <p className="text-xs sm:text-sm text-[#525252] dark:text-[#a1a1aa] leading-relaxed">
                Centralized toolchains prioritized for UI/UX product design, performant web engineering, and geospatial data platforms.
              </p>

              <div className="flex flex-wrap gap-2 font-mono text-xs pt-2">
                {['Figma', 'React.js', 'JavaScript / TS', 'Python', 'SQL', 'REST APIs', 'Leaflet GIS', 'Git & GitHub'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-[#FAFAFA] dark:bg-[#141418] border border-cyan-500/40 text-[#0A0A0A] dark:text-white font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* STATION 4: PROJECTS */}
          {activeStation === 'projects' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 font-mono text-xs">
                <span className="text-cyan-500 font-bold uppercase">3D PROJECT GALLERY</span>
                <span className="text-emerald-400 font-bold uppercase">3 VERIFIED BUILDS</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                  Physical 3D Project Objects
                </h2>
                <p className="text-xs sm:text-sm text-[#525252] dark:text-[#a1a1aa]">
                  Click directly on any 3D project object in space (or select below) to inspect its full case study:
                </p>
              </div>

              {/* 3 Quick Launchers */}
              <div className="space-y-2.5 pt-1 font-mono text-xs">
                {PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3 rounded-xl border border-[#E5E5E8] dark:border-[#27272a] bg-[#FAFAFA] dark:bg-[#141418] flex items-center justify-between gap-3 hover:border-cyan-400 transition-colors"
                  >
                    <div>
                      <span className="font-bold text-[#0A0A0A] dark:text-white uppercase block">
                        {proj.title}
                      </span>
                      <span className="text-[10px] text-[#737373] uppercase">{proj.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenCaseStudy(proj.id)}
                        className="px-3 py-1.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-bold uppercase rounded-md flex items-center gap-1 shadow-xs"
                      >
                        <Layers className="w-3 h-3" />
                        <span>CASE STUDY</span>
                      </button>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-[#E5E5E8] dark:border-[#27272a] text-[#737373] hover:text-white rounded-md"
                          title="Open live production demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 border border-[#E5E5E8] dark:border-[#27272a] text-[#737373] hover:text-white rounded-md"
                          title="Open GitHub repository"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STATION 5: JOURNEY */}
          {activeStation === 'journey' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 font-mono text-xs">
                <span className="text-cyan-500 font-bold uppercase">3D TIMELINE PATHWAY</span>
                <span className="text-[#737373] uppercase">2022 — 2026</span>
              </div>

              {/* Smart India Hackathon 2026 Spotlight */}
              <div className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/5 space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-emerald-400 uppercase">
                    {HACKATHON_ACHIEVEMENT.competition} · {HACKATHON_ACHIEVEMENT.year}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase text-[10px]">
                    SHORTLISTED
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0A0A0A] dark:text-white uppercase font-display">
                  {HACKATHON_ACHIEVEMENT.projectTitle}
                </h3>
                <p className="text-xs text-[#525252] dark:text-[#a1a1aa] leading-relaxed">
                  {HACKATHON_ACHIEVEMENT.description}
                </p>
                <div className="text-[10px] font-mono text-[#737373]">
                  ORGANIZATION: {HACKATHON_ACHIEVEMENT.organization} · ID: {HACKATHON_ACHIEVEMENT.problemStatementId}
                </div>
              </div>

              {/* WEBBED Internship */}
              <div className="p-3.5 rounded-xl border border-[#E5E5E8] dark:border-[#27272a] bg-[#FAFAFA] dark:bg-[#141418] space-y-1 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0A0A0A] dark:text-white uppercase">
                    {EXPERIENCE_ITEMS[0].role} · {EXPERIENCE_ITEMS[0].company}
                  </span>
                  <span className="text-[#737373] uppercase text-[10px]">{EXPERIENCE_ITEMS[0].period}</span>
                </div>
                <p className="text-[11px] text-[#525252] dark:text-[#a1a1aa] font-sans">
                  {EXPERIENCE_ITEMS[0].description}
                </p>
              </div>
            </div>
          )}

          {/* STATION 6: RESUME */}
          {activeStation === 'resume' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300 font-mono">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 text-xs">
                <span className="text-cyan-500 font-bold uppercase">3D RESUME DOCUMENT</span>
                <span className="text-emerald-400 font-bold uppercase">ATS READY</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                  Curriculum Vitae
                </h2>
                <p className="text-xs text-[#525252] dark:text-[#a1a1aa] font-sans leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-bold uppercase rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW FULL PRINTABLE RESUME SHEET</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={onOpenRecruiterScan}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-white dark:bg-[#141418] border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white font-bold uppercase rounded-xl hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>60s BRIEFING</span>
                  </button>

                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-1.5 py-2.5 bg-white dark:bg-[#141418] border border-[#E5E5E8] dark:border-[#27272a] text-[#0A0A0A] dark:text-white font-bold uppercase rounded-xl hover:bg-[#F5F5F7] dark:hover:bg-[#1A1A1A] transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#737373]" />
                    <span>PRINT / PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STATION 7: CONTACT */}
          {activeStation === 'contact' && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300 font-mono">
              <div className="flex items-center justify-between border-b border-[#E5E5E8] dark:border-[#222226] pb-2 text-xs">
                <span className="text-cyan-500 font-bold uppercase">3D COMMUNICATION TERMINAL</span>
                <span className="text-emerald-400 font-bold uppercase">ONLINE</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
                  Let's Build Together
                </h2>
                <p className="text-xs text-[#525252] dark:text-[#a1a1aa] font-sans">
                  Open for UI/UX design, product thinking, and frontend development roles.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAFAFA] dark:bg-[#141418] border border-[#E5E5E8] dark:border-[#27272a] space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#737373] uppercase">DIRECT EMAIL</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-bold text-[#0A0A0A] dark:text-white hover:text-cyan-400 transition-colors block text-sm break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center justify-between pt-1 border-t border-[#E5E5E8] dark:border-[#222226] text-[11px] text-[#737373]">
                  <span>{PERSONAL_INFO.phoneDisplay}</span>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 bg-white text-[#0A0A0A] font-bold uppercase rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>EMAIL ME</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2.5 border border-[#27272a] text-white hover:border-cyan-400 rounded-lg transition-colors uppercase"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2.5 border border-[#27272a] text-white hover:border-cyan-400 rounded-lg transition-colors uppercase"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar: Multi-Station Navigation Quick Bar & Arrows */}
      <div className="w-full flex items-center justify-between pointer-events-auto">
        {/* Previous Station Arrow */}
        <button
          onClick={prevStation}
          className="p-2.5 rounded-full bg-white/90 dark:bg-[#141418]/90 backdrop-blur-md border border-[#E5E5E8] dark:border-[#27272a] text-[#0A0A0A] dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          aria-label="Previous 3D station"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Multi-Station Quick Dots / Mini-Map */}
        <div className="flex items-center gap-1.5 bg-white/90 dark:bg-[#0c0c10]/90 backdrop-blur-md px-3 py-2 rounded-full border border-[#E5E5E8] dark:border-[#27272a] shadow-md max-w-[85%] overflow-x-auto">
          {STATIONS.map((st) => (
            <button
              key={st.id}
              onClick={() => onSelectStation(st.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all whitespace-nowrap ${
                activeStation === st.id
                  ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] font-bold shadow-xs'
                  : 'text-[#737373] dark:text-[#a1a1aa] hover:text-[#0A0A0A] dark:hover:text-white'
              }`}
            >
              {st.num} {st.id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Next Station Arrow */}
        <button
          onClick={nextStation}
          className="p-2.5 rounded-full bg-white/90 dark:bg-[#141418]/90 backdrop-blur-md border border-[#E5E5E8] dark:border-[#27272a] text-[#0A0A0A] dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          aria-label="Next 3D station"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WorldHUD;
