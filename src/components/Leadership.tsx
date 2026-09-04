import React from 'react';
import { LEADERSHIP_ITEMS, LANGUAGES } from '../data/portfolioData';
import { Users, CheckCircle2, Globe } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Leadership Roles */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <Users className="w-3 h-3 text-indigo-500" />
                <span>COMMUNITY & INITIATIVE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                Leadership & Extracurriculars
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                Coordinating peers, organizing departmental activities, and contributing to community welfare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEADERSHIP_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {item.role}
                    </h4>
                  </div>
                  {item.organization && (
                    <p className="text-[11px] font-mono text-neutral-400">
                      {item.organization}
                    </p>
                  )}
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <Globe className="w-3 h-3 text-indigo-500" />
                <span>COMMUNICATION</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white tracking-tight">
                Languages
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Bilingual fluency for seamless team collaboration and cross-cultural communication.
              </p>
            </div>

            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {lang.name}
                    </h5>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {lang.proficiency}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Fluent
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
