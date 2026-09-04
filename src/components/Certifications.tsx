import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Traineeship', 'Simulation', 'Session', 'Training'];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (selectedFilter === 'All') return true;
    return c.category === selectedFilter;
  });

  const displayedCerts = isExpanded ? filteredCerts : filteredCerts.slice(0, 4);

  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-neutral-50/50 dark:bg-neutral-950/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Award className="w-3 h-3 text-indigo-500" />
              <span>CONTINUOUS LEARNING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Certifications & Industry Simulations
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              Practical virtual job simulations, specialized UI/UX traineeships, and technical certifications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors shrink-0 ${
                  selectedFilter === cat
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#111115] border border-neutral-200/80 dark:border-neutral-800/80 hover:border-indigo-400/50 dark:hover:border-indigo-600/50 shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">{cert.period}</span>
                </div>

                <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                  {cert.title}
                </h4>
              </div>

              <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <span className="truncate">{cert.issuer}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse Button */}
        {filteredCerts.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors shadow-2xs"
            >
              <span>{isExpanded ? 'Show Less' : `View All (${filteredCerts.length}) Certifications`}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
