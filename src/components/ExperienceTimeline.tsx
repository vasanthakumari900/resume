import React from 'react';
import { EXPERIENCE_ITEMS, HACKATHON_ACHIEVEMENT } from '../data/portfolioData';
import {
  Briefcase,
  Trophy,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-neutral-50/50 dark:bg-neutral-950/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Work Experience Subsection */}
        <div>
          <div className="space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Briefcase className="w-3 h-3 text-indigo-500" />
              <span>INDUSTRY IMMERSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Experience
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Practical software engineering exposure and hands-on developer workflows.
            </p>
          </div>

          <div className="space-y-6">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-md space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 dark:border-neutral-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                        {item.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-neutral-400 font-semibold block">
                    Key Verified Learning Areas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {item.learningAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon & Competitions Spotlight */}
        <div>
          <div className="space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Trophy className="w-3 h-3 text-amber-500" />
              <span>COMPETITIVE ACHIEVEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Building and competing beyond the classroom.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Applying product design thinking and system architecture to national-level engineering challenges.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111115] border border-amber-300/40 dark:border-amber-500/30 shadow-xl relative overflow-hidden space-y-6">
            {/* Top Amber Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {HACKATHON_ACHIEVEMENT.achievement}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {HACKATHON_ACHIEVEMENT.competition} · {HACKATHON_ACHIEVEMENT.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                  {HACKATHON_ACHIEVEMENT.projectTitle}
                </h3>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 space-y-1 shrink-0">
                <div>
                  <span className="text-neutral-400 text-[10px] block">Problem Statement</span>
                  <span className="font-bold text-neutral-900 dark:text-white">{HACKATHON_ACHIEVEMENT.problemStatementId}</span>
                </div>
                <div className="text-[11px]">Org: {HACKATHON_ACHIEVEMENT.organization}</div>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {HACKATHON_ACHIEVEMENT.description}
            </p>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Track: {HACKATHON_ACHIEVEMENT.track}</span>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                {HACKATHON_ACHIEVEMENT.focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {focus}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ministry-Evaluated Submission
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
