import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveInspector } from './InteractiveInspector';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Main Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 02 · DESIGN THINKING
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] uppercase tracking-tight leading-[1.1]">
              {PERSONAL_INFO.aboutHeadline}
            </h2>

            <div className="pt-2 font-mono text-xs text-[#737373] space-y-1.5">
              <p>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</p>
              <p>INSTITUTION: DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE</p>
              <p>DEGREE: B.SC. COMPUTER SCIENCE (2024–2027) · CGPA 8.27/10</p>
            </div>
          </div>

          {/* Right Column: Professional Copy & Pipeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#525252] leading-relaxed font-normal">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Typography-Based Pipeline */}
            <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737373] font-bold block">
                CORE WORKFLOW PIPELINE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                <div className="p-4 border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[10px] text-[#737373] block">01 // IDEA</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] uppercase">DESIGN</h4>
                  <p className="text-[11px] text-[#525252] font-sans leading-snug">
                    Figma design systems, wireframes, user flows, and ergonomic hierarchy.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[10px] text-[#737373] block">02 // EXPERIENCE</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] uppercase">DEVELOPMENT</h4>
                  <p className="text-[11px] text-[#525252] font-sans leading-snug">
                    Component-driven React.js interfaces, responsive CSS, and state logic.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E5] space-y-1.5">
                  <span className="text-[10px] text-[#737373] block">03 // PRODUCT</span>
                  <h4 className="text-xs font-bold text-[#0A0A0A] uppercase">TECHNOLOGY</h4>
                  <p className="text-[11px] text-[#525252] font-sans leading-snug">
                    Real-world data integration, ML explainability, and production edge deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Architectural UI/UX Blueprint Inspector */}
        <div className="space-y-4 pt-6 border-t border-[#E5E5E5]">
          <div className="flex items-center justify-between font-mono text-xs text-[#737373] pb-2">
            <span className="font-bold text-[#0A0A0A] uppercase tracking-wider">
              INTERACTION & DESIGN SYSTEM INSPECTOR
            </span>
            <span className="uppercase">FIGMA TO PRODUCTION WORKFLOW</span>
          </div>
          <InteractiveInspector />
        </div>

        {/* 13. CURRENTLY FOCUSED ON (Ambitious, continuous growth) */}
        <div className="p-8 sm:p-10 border border-[#0A0A0A] bg-[#FAFAFA] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E5] pb-4 font-mono">
            <h3 className="text-lg font-bold text-[#0A0A0A] uppercase tracking-wider">
              CURRENTLY FOCUSED ON
            </h3>
            <span className="text-xs text-[#737373] uppercase">
              GROWTH TRAJECTORY // 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {PERSONAL_INFO.currentlyFocusedOn.map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-[#E5E5E5] flex items-start gap-3">
                <span className="font-bold text-[#0A0A0A]">0{idx + 1}.</span>
                <span className="text-[#0A0A0A] font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
