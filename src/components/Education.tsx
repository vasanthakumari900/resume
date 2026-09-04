import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E5E5E5]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 05
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] uppercase">
              Education
            </h2>
            <p className="text-sm sm:text-base text-[#525252] max-w-xl font-normal">
              Foundational computational curriculum in computer science and software systems.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] uppercase">
            Academic Performance Verified
          </div>
        </div>

        {/* Editorial Education Rows */}
        <div className="space-y-8">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E5] items-start"
            >
              <div className="md:col-span-3 font-mono text-xs text-[#737373]">
                <span className="font-bold text-[#0A0A0A] text-sm block">{item.period}</span>
                <span className="uppercase text-[11px] block mt-0.5">
                  {item.scoreType}: {item.score}
                </span>
              </div>

              <div className="md:col-span-9 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-[#0A0A0A] uppercase tracking-tight">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-[#525252] uppercase font-semibold">
                    {item.institution}
                  </span>
                </div>

                {item.details && (
                  <p className="text-xs sm:text-sm text-[#525252] font-mono leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
