import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveInspector } from './InteractiveInspector';
import {
  ArrowDown,
  FileText,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Positioning */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Status & Category Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-700 dark:text-neutral-300 text-xs font-mono shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">HELLO, I'M THARUN</span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {PERSONAL_INFO.heroTagline}
              </span>
            </div>

            {/* Main Bold Memorable Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              I design digital experiences and build products that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-300">
                solve real problems.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Core Value Props Checklist */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Product Design & Design Systems
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                Semantic React & Modern Web
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-500" />
                Real-World AI Problem Solving
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#work"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl transition-all shadow-md hover:shadow-indigo-500/20 active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 rounded-xl border border-neutral-200/80 dark:border-neutral-800 transition-all shadow-xs active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Download Resume</span>
              </button>

              {/* Quick Socials */}
              <div className="flex items-center gap-2 pl-2 border-l border-neutral-200 dark:border-neutral-800">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tharun B S LinkedIn Profile"
                  className="p-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tharun B S GitHub Profile"
                  className="p-2.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Current Context */}
            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                3rd Year B.Sc. Computer Science
              </span>
            </div>
          </div>

          {/* Right Column: Hero Interactive Widget */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <InteractiveInspector />
          </div>
        </div>
      </div>
    </section>
  );
};
