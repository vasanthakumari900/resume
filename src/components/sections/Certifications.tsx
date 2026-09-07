import React, { useState } from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 4);

  return (
    <section id="certifications" className="py-20 md:py-24 bg-white dark:bg-[#0A0A0A] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold block">
              SUPPLEMENTARY ACCREDITATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
              Certifications & Industry Simulations
            </h3>
          </div>

          <span className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
            {CERTIFICATIONS.length} VERIFIED CREDENTIALS
          </span>
        </div>

        {/* Structured Editorial List */}
        <div className="space-y-4 font-mono text-xs">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="py-3.5 border-b border-[#E5E5E5] dark:border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#FAFAFA] dark:hover:bg-[#141414] px-2 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[#737373] dark:text-[#A3A3A3] text-[11px] w-24 shrink-0 uppercase">{cert.period}</span>
                <span className="font-bold text-[#0A0A0A] dark:text-white text-sm uppercase">{cert.title}</span>
              </div>
              <div className="flex items-center gap-3 text-[#525252] dark:text-[#A3A3A3] text-xs">
                <span>{cert.issuer}</span>
                <span className="text-[#D4D4D4] dark:text-[#525252]">/</span>
                <span className="uppercase text-[10px] text-[#737373] dark:text-[#A3A3A3]">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Toggle */}
        <div className="mt-8 font-mono text-xs">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#0A0A0A] dark:text-white font-bold hover:underline underline-offset-4 uppercase"
          >
            {showAll ? '— SHOW LESS' : `+ VIEW ALL (${CERTIFICATIONS.length}) CERTIFICATIONS`}
          </button>
        </div>
      </div>
    </section>
  );
};
