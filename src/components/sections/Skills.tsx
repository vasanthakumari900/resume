import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { TechCore3D } from '../3d/TechCore3D';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-white dark:bg-[#060608] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 03 · TECHNOLOGY CORE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white uppercase font-display">
              Capabilities & Tech Core
            </h2>
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-xl font-normal">
              Structured toolchains and engineering capabilities anchored around design thinking, modern web platforms, and applied intelligence.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
            Interactive 3D Orbit + Verified Taxonomy
          </div>
        </div>

        {/* 1. 3D Technology Core Experience */}
        <TechCore3D />

        {/* 2. Complete Categorized Skill Matrix (Accessible to all viewports & ATS) */}
        <div className="space-y-12 pt-6">
          <div className="flex items-center justify-between font-mono text-xs text-[#737373] dark:text-[#A3A3A3] pb-2 border-b border-[#E5E5E5] dark:border-[#262626]">
            <span className="uppercase font-bold text-[#0A0A0A] dark:text-white">COMPLETE SKILL TAXONOMY</span>
            <span className="uppercase">ALL VERIFIED PROFICIENCIES</span>
          </div>

          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E5] dark:border-[#262626]"
            >
              {/* Category Header */}
              <div className="lg:col-span-4 font-mono space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-cyan-500 font-bold">0{idx + 1}</span>
                  <span className="text-base font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-wider font-display">
                    {cat.name}
                  </span>
                </div>
                <p className="text-xs text-[#737373] dark:text-[#A3A3A3] font-sans pr-4">{cat.description}</p>
              </div>

              {/* Skills Items */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`space-y-1 p-3.5 rounded-xl border bg-[#FAFAFA] dark:bg-[#111114] neu-card transition-colors ${
                      skill.highlight
                        ? 'border-cyan-500/40 dark:border-cyan-500/30'
                        : 'border-[#E5E5E8] dark:border-[#262626]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#0A0A0A] dark:text-white text-xs uppercase block">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    {skill.note && (
                      <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
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

export default Skills;
