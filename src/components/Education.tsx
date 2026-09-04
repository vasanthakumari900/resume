import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
            <GraduationCap className="w-3 h-3 text-indigo-500" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
            A solid computational grounding in computer science, software engineering, and analytical thinking.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                index === 0
                  ? 'bg-white dark:bg-[#111115] border-indigo-200/80 dark:border-indigo-900/60 shadow-lg'
                  : 'bg-white dark:bg-[#111115] border-neutral-200/80 dark:border-neutral-800/80 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  {index === 0 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      In Progress
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{item.institution}</span>
                  </p>
                </div>

                {item.details && (
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>

              {/* Score Highlight Box */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  Academic Performance
                </span>
                <div className="flex items-center gap-1 font-mono font-bold text-sm text-neutral-900 dark:text-white">
                  <Award className="w-4 h-4 text-indigo-500" />
                  <span>{item.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
