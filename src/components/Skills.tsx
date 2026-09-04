import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E5E5E5]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 03 · SKILLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] uppercase">
              Design & Technical Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#525252] max-w-xl font-normal">
              Structured toolchains and engineering environments prioritized by product design capability,
              followed by frontend and computational technology.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] uppercase">
            Prioritized for UI/UX & Product Design Roles
          </div>
        </div>

        {/* Structured Editorial Skill Rows - UI/UX DESIGN First */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E5]"
            >
              {/* Category Header */}
              <div className="lg:col-span-4 font-mono space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#737373] font-bold">0{idx + 1}</span>
                  <span className="text-base font-extrabold text-[#0A0A0A] uppercase tracking-wider">
                    {cat.name}
                  </span>
                </div>
                <p className="text-xs text-[#737373] font-sans pr-4">{cat.description}</p>
              </div>

              {/* Skills Items */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 font-mono text-xs">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1 p-3 bg-[#FAFAFA] border border-[#E5E5E5]">
                    <span className="font-bold text-[#0A0A0A] text-xs uppercase block">
                      {skill.name}
                    </span>
                    {skill.note && (
                      <p className="text-[11px] text-[#525252] font-sans leading-snug">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
