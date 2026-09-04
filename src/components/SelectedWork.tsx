import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <Layers className="w-3 h-3 text-indigo-500" />
              <span>PORTFOLIO DOMINANT · SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Products engineered for real-world utility.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Each project is built around real problems, verified data structures, and intuitive interfaces.
              No fabricated metrics—just rigorous design considerations and working code.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>3 Production Deployments Live</span>
          </div>
        </div>

        {/* Asymmetric Project Showcase */}
        <div className="space-y-8">
          {/* Featured Hero Project Card (PRALAYA AI) */}
          <ProjectCard project={featuredProject} onOpenCaseStudy={onOpenCaseStudy} />

          {/* Secondary Projects Grid (CERTISEAL & CS ACADEMIC PORTAL) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* Bottom Banner Note on Verifiability */}
        <div className="mt-12 p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>All projects feature open-source GitHub repositories and live Vercel deployments.</span>
          </div>
          <a
            href="https://github.com/vasanthakumari900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
