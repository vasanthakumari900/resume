import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveInspector } from './InteractiveInspector';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

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
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & Intentional Spacing */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Small Label */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#525252] font-semibold">
                HELLO, I'M THARUN.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] uppercase leading-[1.08]">
              I design digital experiences and build products that solve real problems.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl font-normal">
              UI/UX Designer and Computer Science student combining design thinking, frontend
              development, and emerging technologies to create intuitive digital products.
            </p>

            {/* Strict Two-Button System */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button: Black Filled */}
              <a
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-[#0A0A0A] text-white hover:bg-neutral-800 transition-all duration-150"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Button: White with Black Border */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono uppercase tracking-wider bg-white border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-150"
              >
                <span>VIEW RESUME</span>
              </button>
            </div>

            {/* Secondary Text Links & Location Metadata */}
            <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center gap-6 text-xs font-mono text-[#737373]">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <span className="text-[#D4D4D4]">·</span>

              <span>{PERSONAL_INFO.location.toUpperCase()}</span>
            </div>
          </div>

          {/* Right Column: Clean Architectural Inspector */}
          <div className="lg:col-span-6 w-full">
            <InteractiveInspector />
          </div>
        </div>
      </div>
    </section>
  );
};
