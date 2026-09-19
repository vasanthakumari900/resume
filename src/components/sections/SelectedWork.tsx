import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectUniverse3D } from '../3d/ProjectUniverse3D';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-white dark:bg-[#060608] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 01 · 3D PROJECT UNIVERSE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white uppercase font-display">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-xl font-normal">
              Digital platforms designed with rigorous user flows, responsive component architecture, and production deployments.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
            3 Production Deployments Verified
          </div>
        </div>

        {/* 1. 3D Interactive Project Universe */}
        <ProjectUniverse3D onOpenCaseStudy={onOpenCaseStudy} />

        {/* 2. In-Depth Project Architectural Cards */}
        <div className="space-y-12 pt-8">
          <div className="flex items-center justify-between font-mono text-xs text-[#737373] dark:text-[#A3A3A3] pb-2 border-b border-[#E5E5E5] dark:border-[#262626]">
            <span className="uppercase font-bold text-[#0A0A0A] dark:text-white">FULL ARCHITECTURAL BREAKDOWN</span>
            <span className="uppercase">CODE & DESIGN SYSTEM ARTIFACTS</span>
          </div>

          {/* Featured Project: 01 PRALAYA AI */}
          <ProjectCard
            project={featuredProject}
            projectNumber="01"
            onOpenCaseStudy={onOpenCaseStudy}
          />

          {/* Secondary Projects: 02 & 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                projectNumber={`0${index + 2}`}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* Bottom Editorial Repository Link */}
        <div className="mt-16 pt-6 border-t border-[#E5E5E5] dark:border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
          <span>ALL SOURCE CODE AND REPOSITORIES ARE PUBLICLY AUDITABLE.</span>
          <a
            href="https://github.com/vasanthakumari900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#0A0A0A] dark:text-white font-bold hover:underline underline-offset-4 uppercase"
          >
            <span>VIEW GITHUB REPOSITORIES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
