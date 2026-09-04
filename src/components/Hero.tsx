import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
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
    <section id="hero" className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-8 text-left">
          {/* Small Professional Label */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#0A0A0A]" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#525252] font-semibold">
              {PERSONAL_INFO.heroLabel}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.05] uppercase">
            {PERSONAL_INFO.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#525252] leading-relaxed font-normal max-w-3xl">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
            {/* Primary CTA */}
            <a
              href="#work"
              onClick={scrollToWork}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0A0A0A] text-white hover:bg-neutral-800 transition-all duration-150 uppercase tracking-wider font-semibold"
            >
              <span>VIEW SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <button
              onClick={onOpenResume}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-150 uppercase tracking-wider font-semibold"
            >
              <span>VIEW RESUME</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Minimal Secondary Links & Location */}
          <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center gap-6 text-xs font-mono text-[#737373]">
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
