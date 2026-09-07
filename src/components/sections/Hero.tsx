import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-8 text-left">
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F5F5F7] dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-pill">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#0A0A0A] dark:text-white font-semibold">
              {PERSONAL_INFO.heroLabel}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.05] uppercase font-display">
            {PERSONAL_INFO.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#525252] dark:text-[#A3A3A3] leading-relaxed font-normal max-w-3xl">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
            {/* Primary CTA */}
            <a
              href="#work"
              onClick={scrollToWork}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-150 uppercase tracking-wider font-semibold neu-btn shadow-md"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <button
              onClick={onOpenResume}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white dark:bg-[#141414] border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all duration-150 uppercase tracking-wider font-semibold neu-btn"
            >
              <span>VIEW RESUME</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </button>
          </div>

          {/* High-Impact Recruiter Bento Stats Ticker with Animated Counters */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
            <div className="p-4 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-xl font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                <AnimatedCounter target={8.27} decimals={2} /> / 10
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-semibold block">ACADEMIC CGPA</span>
              <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">B.Sc. Computer Science (2024–2027) · DG Vaishnav College</p>
            </div>

            <div className="p-4 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-xl font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                SIH <AnimatedCounter target={2026} duration={1300} />
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-semibold block">SHORTLISTED</span>
              <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">Ministry of Home Affairs Track · AI Document Tamper Screening</p>
            </div>

            <div className="p-4 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-1">
              <span className="text-xl font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                <AnimatedCounter target={3} prefix="0" /> BUILDS
              </span>
              <span className="text-[10px] text-[#737373] uppercase font-semibold block">LIVE PRODUCTION</span>
              <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">Disaster Intelligence, Digital Trust, and Academic Hub</p>
            </div>
          </div>


          {/* Minimal Secondary Links & Location */}
          <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center gap-6 text-xs font-mono text-[#737373]">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4 font-bold"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4 font-bold"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <span className="text-[#D4D4D4]">·</span>

            <span className="uppercase">{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );

};
