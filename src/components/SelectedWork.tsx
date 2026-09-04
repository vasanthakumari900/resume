import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-white border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[#E5E5E5]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] uppercase">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#525252] max-w-xl font-normal">
              Digital products designed and built with rigorous UX structure, responsive frontend
              architecture, and real-world technology integration.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] uppercase">
            3 Production Deployments Verified
          </div>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-12">
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
        <div className="mt-16 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <span>SOURCE CODE AND REPOSITORIES ARE PUBLICLY ACCESSIBLE.</span>
          <a
            href="https://github.com/vasanthakumari900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#0A0A0A] font-bold hover:underline underline-offset-4 uppercase"
          >
            <span>VIEW GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
