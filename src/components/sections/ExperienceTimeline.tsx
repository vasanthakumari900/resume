import React from 'react';
import { EXPERIENCE_ITEMS, HACKATHON_ACHIEVEMENT } from '../../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white dark:bg-[#0A0A0A] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        {/* Work Experience Subsection */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
                <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                  INDEX // 04
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white uppercase font-display">
                Experience
              </h2>
              <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-xl font-normal">
                Professional exposure and developer workflows within structured engineering environments.
              </p>
            </div>

            <div className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
              Practical Immersion
            </div>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E5] dark:border-[#262626] items-start"
              >
                {/* Date Left */}
                <div className="md:col-span-3 font-mono text-xs text-[#737373] dark:text-[#A3A3A3] space-y-1">
                  <span className="font-bold text-[#0A0A0A] dark:text-white text-sm block">{item.period}</span>
                  <span className="uppercase text-[11px] block">{item.duration} · {item.type}</span>
                </div>

                {/* Content Right */}
                <div className="md:col-span-9 space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-[#525252] dark:text-[#A3A3A3] uppercase font-bold">
                      {item.company}
                    </span>
                  </div>

                  <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase block mb-1">
                      Key Competencies Covered:
                    </span>
                    <ul className="space-y-1 text-xs font-mono text-[#0A0A0A] dark:text-[#EDEDED]">
                      {item.learningAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#737373] dark:text-[#525252]">—</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart India Hackathon Spotlight */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold block">
                NATIONAL COMPETITION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
                Building & Competing Beyond the Classroom
              </h3>
            </div>
            <span className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
              MINISTRY OF HOME AFFAIRS TRACK
            </span>
          </div>

          <div className="border border-[#0A0A0A] dark:border-[#333333] p-8 sm:p-10 space-y-6 bg-white dark:bg-[#141414] neu-card">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E5E5E5] dark:border-[#262626] pb-6 font-mono">
              <div className="space-y-1">
                <span className="text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">COMPETITION</span>
                <h4 className="text-xl font-bold text-[#0A0A0A] dark:text-white uppercase font-display">
                  {HACKATHON_ACHIEVEMENT.competition} · {HACKATHON_ACHIEVEMENT.year}
                </h4>
                <p className="text-xs text-[#525252] dark:text-[#A3A3A3] uppercase mt-1">
                  PROBLEM ID: {HACKATHON_ACHIEVEMENT.problemStatementId} · ORG: {HACKATHON_ACHIEVEMENT.organization}
                </p>
              </div>

              <div className="text-left sm:text-right font-mono shrink-0">
                <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] uppercase block">EVALUATION STATUS</span>
                <span className="inline-block px-3 py-1 bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] font-bold text-xs uppercase mt-1 neu-pill">
                  {HACKATHON_ACHIEVEMENT.achievement}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#0A0A0A] dark:text-white uppercase font-display">
                {HACKATHON_ACHIEVEMENT.projectTitle}
              </h5>
              <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                {HACKATHON_ACHIEVEMENT.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E5E5] dark:border-[#262626] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#737373] dark:text-[#A3A3A3]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="uppercase text-[#0A0A0A] dark:text-white font-bold">TRACK:</span>
                <span>{HACKATHON_ACHIEVEMENT.track.toUpperCase()}</span>
                <span>·</span>
                {HACKATHON_ACHIEVEMENT.focusAreas.map((fa) => (
                  <span key={fa} className="bg-[#F7F7F7] dark:bg-[#1F1F1F] px-2 py-0.5 border border-[#E5E5E5] dark:border-[#333333] uppercase text-[10px]">
                    {fa}
                  </span>
                ))}
              </div>
              <span className="text-[#0A0A0A] dark:text-white font-semibold">OFFICIAL SIH SUBMISSION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
