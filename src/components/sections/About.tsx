import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveInspector } from './InteractiveInspector';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-[#0A0A0A] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Main Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 02 · DESIGN THINKING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight leading-[1.1] font-display">
              {PERSONAL_INFO.aboutHeadline}
            </h2>

            <div className="pt-2 font-mono text-xs text-[#737373] dark:text-[#A3A3A3] space-y-1.5">
              <p>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</p>
              <p>INSTITUTION: DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE</p>
              <p>DEGREE: B.SC. COMPUTER SCIENCE (2024–2027) · CGPA 8.27/10</p>
            </div>
          </div>

          {/* Right Column: Professional Copy & Pipeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#525252] dark:text-[#D4D4D4] leading-relaxed font-normal">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Typography-Based Pipeline */}
            <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#262626] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] font-bold block">
                CORE WORKFLOW PIPELINE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                <div className="p-4 border border-[#E5E5E5] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#141414] neu-card space-y-1.5">
                  <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] block">01 // IDEA</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">DESIGN</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Figma design systems, wireframes, user flows, and ergonomic hierarchy.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#141414] neu-card space-y-1.5">
                  <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] block">02 // EXPERIENCE</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">DEVELOPMENT</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Component-driven React.js interfaces, responsive CSS, and state logic.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#141414] neu-card space-y-1.5">
                  <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] block">03 // PRODUCT</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">TECHNOLOGY</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Real-world data integration, ML explainability, and production edge deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Architectural UI/UX Blueprint Inspector */}
        <div className="space-y-4 pt-6 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div className="flex items-center justify-between font-mono text-xs text-[#737373] dark:text-[#A3A3A3] pb-2">
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider">
              INTERACTION & DESIGN SYSTEM INSPECTOR
            </span>
            <span className="uppercase">FIGMA TO PRODUCTION WORKFLOW</span>
          </div>
          <InteractiveInspector />
        </div>

        {/* 13. CURRENTLY FOCUSED ON (Ambitious, continuous growth) */}
        <div className="p-8 sm:p-10 border border-[#0A0A0A] dark:border-[#333333] bg-[#FAFAFA] dark:bg-[#141414] neu-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E5] dark:border-[#262626] pb-4 font-mono">
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider font-display">
              CURRENTLY FOCUSED ON
            </h3>
            <span className="text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
              GROWTH TRAJECTORY // 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {PERSONAL_INFO.currentlyFocusedOn.map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-[#0D0D0D] border border-[#E5E5E5] dark:border-[#262626] neu-flat flex items-start gap-3">
                <span className="font-bold text-[#0A0A0A] dark:text-white">0{idx + 1}.</span>
                <span className="text-[#0A0A0A] dark:text-[#EDEDED] font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
