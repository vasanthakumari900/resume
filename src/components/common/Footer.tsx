import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0A0A0A] text-white border-t border-[#262626] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Design credit */}
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold uppercase tracking-wider text-white">
              © 2026 {PERSONAL_INFO.name} // ALL RIGHTS RESERVED
            </p>
            <p className="text-[#737373] text-[11px] uppercase">
              DESIGNED IN FIGMA · IMPLEMENTED IN REACT & TAILWIND CSS
            </p>
          </div>

          {/* Time & Region */}
          <div className="text-[#737373] text-[11px] uppercase tracking-wider">
            TIRUVALLUR, IN · {time || 'IST'}
          </div>

          {/* Action Links & Back to Top */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-white uppercase flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A3A3A3] hover:text-white uppercase flex items-center gap-1"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:underline underline-offset-4 uppercase font-bold"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
