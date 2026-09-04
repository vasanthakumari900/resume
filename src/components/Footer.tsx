import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

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
    <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-[#0A0A0C]/50 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Designer credits */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-neutral-900 dark:text-white font-semibold">
              © 2026 {PERSONAL_INFO.name} · All rights reserved.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-[11px]">
              Designed in Figma & built with React.js, TypeScript & Tailwind CSS.
            </p>
          </div>

          {/* Time & Location */}
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-200/70 dark:border-neutral-800/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tiruvallur, IN · {time || 'IST'}</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors border border-neutral-200/70 dark:border-neutral-800/70"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
