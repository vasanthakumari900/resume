import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { WorkspaceScene } from '../3d/WorkspaceScene';
import { ParticleField } from '../3d/ParticleField';
import { ArrowRight, ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('projects') || document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 bg-white dark:bg-[#060608] text-[#0A0A0A] dark:text-[#EDEDED] transition-colors duration-200 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Particle Field */}
      <ParticleField count={45} speed={0.2} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Digital Identity & Story */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F5F5F7] dark:bg-[#121216] border border-[#E5E5E8] dark:border-[#27272a] rounded-full neu-pill">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#0A0A0A] dark:text-white font-semibold">
                THARUN B S // DIGITAL WORLD
              </span>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.02] uppercase font-display">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono text-cyan-500 dark:text-cyan-400 font-bold uppercase tracking-wider">
                <span>Computer Science Student</span>
                <span className="text-[#737373]">•</span>
                <span>UI/UX Designer</span>
                <span className="text-[#737373]">•</span>
                <span>Web Developer</span>
              </div>
            </div>

            {/* Supporting Description from Verified Portfolio Data */}
            <p className="text-base sm:text-lg text-[#525252] dark:text-[#A3A3A3] leading-relaxed font-normal max-w-xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-150 uppercase tracking-wider font-semibold rounded-lg shadow-md"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white dark:bg-[#121216] border border-[#0A0A0A] dark:border-[#333338] text-[#0A0A0A] dark:text-white hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all duration-150 uppercase tracking-wider font-semibold rounded-lg shadow-xs"
              >
                <span>VIEW RESUME</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Recruiter Metric Tickers */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#111114] border border-[#E5E5E8] dark:border-[#222226] rounded-xl neu-card space-y-1">
                <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                  <AnimatedCounter target={8.27} decimals={2} /> / 10
                </span>
                <span className="text-[10px] text-[#737373] uppercase font-semibold block">ACADEMIC CGPA</span>
                <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">
                  B.Sc. Computer Science (2024–2027)
                </p>
              </div>

              <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#111114] border border-[#E5E5E8] dark:border-[#222226] rounded-xl neu-card space-y-1">
                <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                  SIH <AnimatedCounter target={2026} duration={1200} />
                </span>
                <span className="text-[10px] text-emerald-500 uppercase font-semibold block">SHORTLISTED</span>
                <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">
                  Ministry of Home Affairs Track
                </p>
              </div>

              <div className="p-3.5 bg-[#FAFAFA] dark:bg-[#111114] border border-[#E5E5E8] dark:border-[#222226] rounded-xl neu-card space-y-1">
                <span className="text-lg font-extrabold text-[#0A0A0A] dark:text-white block tracking-tight">
                  <AnimatedCounter target={3} prefix="0" /> BUILDS
                </span>
                <span className="text-[10px] text-[#737373] uppercase font-semibold block">LIVE PRODUCTION</span>
                <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-tight">
                  Pralaya AI, Certiseal, CS Portal
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-2 border-t border-[#E5E5E5] dark:border-[#222226] flex flex-wrap items-center gap-5 text-xs font-mono text-[#737373]">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0A0A0A] dark:text-white hover:underline underline-offset-4 font-bold"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0A0A0A] dark:text-white hover:underline underline-offset-4 font-bold"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <span className="text-[#D4D4D4] dark:text-[#404040]">·</span>
              <span className="uppercase">{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: 3D Cinematic Developer Workspace */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] lg:h-[580px] rounded-2xl border border-[#E5E5E8] dark:border-[#27272a] bg-[#F7F7F9] dark:bg-[#0c0c10] overflow-hidden shadow-lg group">
            {/* Interactive Workspace Scene */}
            <WorkspaceScene className="w-full h-full" />

            {/* Subtle Workspace HUD Label */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/85 dark:bg-[#141418]/85 backdrop-blur-md border border-[#E5E5E8] dark:border-[#27272a] rounded-full text-[10px] font-mono tracking-wider uppercase text-[#0A0A0A] dark:text-white shadow-xs">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>INTERACTIVE 3D WORKSPACE</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block">
              <span className="text-[10px] font-mono text-[#737373] dark:text-[#71717a] uppercase tracking-wider bg-white/70 dark:bg-[#101014]/70 backdrop-blur-xs px-2 py-1 rounded">
                Pan pointer to rotate camera
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex flex-col items-center justify-center space-y-2 text-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#71717a] hover:text-[#0A0A0A] dark:hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
