import React from 'react';
import {
  Palette,
  Code2,
  Cpu,
  Sparkles,
  MapPin,
  GraduationCap,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-neutral-50/50 dark:bg-neutral-950/30 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              <span>PHILOSOPHY & POSITIONING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Design-minded.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                Technically grounded.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              <p>
                I am a third-year B.Sc. Computer Science student interested in designing and building digital
                products that solve meaningful problems.
              </p>
              <p>
                My work sits at the intersection of UI/UX design, frontend development, and emerging technologies.
                I enjoy understanding how users interact with products and translating ideas into structured,
                intuitive digital experiences.
              </p>
              <p>
                My technical background helps me understand how products move from design concepts to working
                interfaces—ensuring what is designed in Figma is feasible, accessible, and performant when built.
              </p>
            </div>

            {/* Micro Quick Bio Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block">Academics</span>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-white">B.Sc. Computer Science</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block">Location</span>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-white">Tiruvallur, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual 3-Pillar Pipeline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500">
                  Product Creation Pipeline
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                  Idea ➔ Experience ➔ Product
                </span>
              </div>

              {/* Pipeline Step 1 */}
              <div className="relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 space-y-2 group hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center">
                      <Palette className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      UI/UX & Product Design
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 px-2 py-0.5 rounded border border-pink-200 dark:border-pink-900/60">
                    Phase 01 · The Idea
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-10.5">
                  Figma design systems, wireframes, user flows, and ergonomic prototyping centered on clarity and user trust.
                </p>
              </div>

              {/* Connecting arrow 1 */}
              <div className="flex justify-center -my-2 text-neutral-300 dark:text-neutral-700">
                <div className="w-0.5 h-4 bg-indigo-500/40" />
              </div>

              {/* Pipeline Step 2 */}
              <div className="relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 space-y-2 group hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Frontend Development
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-900/60">
                    Phase 02 · The Experience
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-10.5">
                  Semantic React.js components, fluid responsive grids, accessible states, and micro-interactions that make interfaces feel alive.
                </p>
              </div>

              {/* Connecting arrow 2 */}
              <div className="flex justify-center -my-2 text-neutral-300 dark:text-neutral-700">
                <div className="w-0.5 h-4 bg-indigo-500/40" />
              </div>

              {/* Pipeline Step 3 */}
              <div className="relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 space-y-2 group hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Technology & AI Integration
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/60">
                    Phase 03 · The Product
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pl-10.5">
                  Connecting frontend views with real-world geospatial telemetry, Explainable AI insights, and production deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
