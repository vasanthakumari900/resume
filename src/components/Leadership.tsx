import React from 'react';
import { LEADERSHIP_ITEMS, LANGUAGES } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 md:py-24 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Leadership Roles */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2 border-b border-[#E5E5E5] pb-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold block">
                ORGANIZATIONAL INITIATIVE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
                Leadership & Activities
              </h3>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {LEADERSHIP_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-[#E5E5E5] space-y-1"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-[#0A0A0A] uppercase">{item.role}</span>
                    {item.organization && (
                      <span className="text-[#737373] text-[11px] uppercase">{item.organization}</span>
                    )}
                  </div>
                  <p className="text-xs text-[#525252] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2 border-b border-[#E5E5E5] pb-4">
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold block">
                LINGUISTIC PROFICIENCY
              </span>
              <h4 className="text-2xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
                Languages
              </h4>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="py-3 border-b border-[#E5E5E5] flex items-center justify-between"
                >
                  <span className="font-bold text-sm text-[#0A0A0A] uppercase">{lang.name}</span>
                  <span className="text-[#525252]">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
