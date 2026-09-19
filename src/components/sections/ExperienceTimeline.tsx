import React from 'react';
import { EXPERIENCE_ITEMS, HACKATHON_ACHIEVEMENT } from '../../data/portfolioData';
import { TimelinePath3D } from '../3d/TimelinePath3D';
import { CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="journey"
      className="py-24 md:py-32 bg-white dark:bg-[#060608] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 04 · 3D JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white uppercase font-display">
              Career & Milestone Journey
            </h2>
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-xl font-normal">
              Chronological milestones spanning academic foundations, software engineering internships, national competitions, and live product deployments.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
            Interactive 3D Pathway
          </div>
        </div>

        {/* 1. 3D Glowing Timeline Pathway */}
        <TimelinePath3D />

        {/* 2. Smart India Hackathon Spotlight */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-500 font-bold block">
                NATIONAL COMPETITION SHORTLIST
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
                Building & Competing Beyond The Classroom
              </h3>
            </div>
            <span className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
              MINISTRY OF HOME AFFAIRS TRACK
            </span>
          </div>

          <div className="border border-[#0A0A0A] dark:border-[#333338] p-8 sm:p-10 space-y-6 bg-white dark:bg-[#111114] rounded-2xl neu-card">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E5E5E5] dark:border-[#222226] pb-6 font-mono">
              <div className="space-y-1">
                <span className="text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">COMPETITION</span>
                <h4 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase font-display">
                  {HACKATHON_ACHIEVEMENT.competition} · {HACKATHON_ACHIEVEMENT.year}
                </h4>
                <p className="text-xs text-[#525252] dark:text-[#A3A3A3] uppercase mt-1">
                  ORGANIZATION: {HACKATHON_ACHIEVEMENT.organization}
                </p>
              </div>

              <div className="text-left sm:text-right space-y-1">
                <span className="text-[10px] text-[#737373] uppercase block">NATIONAL EVALUATION STATUS</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs uppercase font-bold rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{HACKATHON_ACHIEVEMENT.achievement}</span>
                </span>
                <p className="text-[10px] text-[#737373] block">PROBLEM ID: {HACKATHON_ACHIEVEMENT.problemStatementId}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#737373] dark:text-[#A3A3A3] font-bold">
                  PROJECT TITLE:
                </span>
                <p className="text-lg font-bold text-[#0A0A0A] dark:text-white font-display uppercase">
                  {HACKATHON_ACHIEVEMENT.projectTitle}
                </p>
              </div>

              <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                {HACKATHON_ACHIEVEMENT.description}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase block mb-2 font-bold">
                  Verified Technical Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {HACKATHON_ACHIEVEMENT.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FAFAFA] dark:bg-[#17171A] border border-[#E5E5E8] dark:border-[#262626] rounded-md text-[#0A0A0A] dark:text-white font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Practical Work Experience (Internship) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 pb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-cyan-500 font-bold block">
                PRACTICAL IMMERSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
                Engineering Workflows & Internship
              </h3>
            </div>
            <span className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
              1 Verified Placement
            </span>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#111114] neu-card space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E8] dark:border-[#222226] pb-4 font-mono">
                  <div>
                    <h4 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase font-display">
                      {item.role}
                    </h4>
                    <span className="text-xs text-cyan-500 font-bold uppercase mt-0.5 block">
                      {item.company} · {item.type}
                    </span>
                  </div>
                  <div className="text-left sm:text-right text-xs text-[#737373] dark:text-[#A3A3A3]">
                    <span className="font-bold text-[#0A0A0A] dark:text-white block">{item.period}</span>
                    <span className="uppercase text-[11px] block">{item.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase block mb-2 font-bold">
                    Key Competencies Covered:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#0A0A0A] dark:text-[#EDEDED]">
                    {item.learningAreas.map((area, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded bg-white dark:bg-[#17171A] border border-[#E5E5E8] dark:border-[#262626]">
                        <span className="text-cyan-400 font-bold">—</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
