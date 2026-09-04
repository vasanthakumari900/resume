import React from 'react';
import type { Project } from '../types';
import { PralayaPreview, CertiSealPreview, AcademicPortalPreview } from './ProjectPreviews';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  projectNumber: string;
  onOpenCaseStudy: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  projectNumber,
  onOpenCaseStudy,
}) => {
  const isFeatured = project.featured;

  const renderPreview = () => {
    switch (project.previewType) {
      case 'pralaya':
        return <PralayaPreview />;
      case 'certiseal':
        return <CertiSealPreview />;
      case 'portal':
        return <AcademicPortalPreview />;
      default:
        return null;
    }
  };

  const projectContributionMap: Record<string, string> = {
    'pralaya-ai':
      'Dashboard experience, interface design contribution, GIS-based visualization, and product implementation.',
    'certiseal':
      'Structured UI development, verification workflow interface, user-friendly verification experience, and frontend implementation.',
    'cs-academic-portal':
      'Responsive interface development, academic information organization, student-focused interface, and repository deployment.',
  };

  const myContribution = projectContributionMap[project.id] || project.keyContributions.slice(0, 3).join(', ');

  if (isFeatured) {
    return (
      <div className="group relative bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all duration-200">
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Editorial Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 font-mono text-xs">
                <span className="text-xl font-extrabold text-[#0A0A0A]">PROJECT {projectNumber}</span>
                <span className="uppercase text-[#525252] font-semibold tracking-wider">{project.category}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-[#525252]">
                  {project.subtitle}
                </p>
              </div>

              {/* One-Line Description */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#737373] font-bold block">
                  PRODUCT OVERVIEW
                </span>
                <p className="text-sm text-[#525252] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* My Contribution - Recruiter highlight */}
              <div className="p-4 bg-[#F7F7F7] border border-[#E5E5E5] space-y-1 font-mono text-xs">
                <span className="text-[10px] text-[#737373] uppercase font-bold block">
                  MY CONTRIBUTION
                </span>
                <p className="text-xs text-[#0A0A0A] font-semibold leading-relaxed">
                  {myContribution}
                </p>
              </div>

              {/* Most Relevant Technologies Only */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase text-[#525252] bg-[#FAFAFA] px-2 py-0.5 border border-[#E5E5E5]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs">
                <button
                  onClick={() => onOpenCaseStudy(project.id)}
                  className="group/btn inline-flex items-center gap-2 px-5 py-3 bg-[#0A0A0A] text-white hover:bg-neutral-800 transition-colors uppercase tracking-wider font-semibold"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-1" />
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#0A0A0A] hover:underline underline-offset-4 font-bold"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#737373] hover:text-[#0A0A0A] hover:underline underline-offset-4"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project Visual Area */}
            <div className="lg:col-span-6 w-full">{renderPreview()}</div>
          </div>
        </div>
      </div>
    );
  }

  // Secondary Asymmetric Project Card (02 & 03)
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#0A0A0A] transition-all duration-200 flex flex-col justify-between">
      <div className="p-8 space-y-5">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 font-mono text-xs">
          <span className="text-base font-extrabold text-[#0A0A0A]">PROJECT {projectNumber}</span>
          <span className="uppercase text-[#737373] tracking-wider text-[11px] font-semibold">{project.category}</span>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-[#0A0A0A] uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-mono text-[#525252]">
            {project.subtitle}
          </p>
        </div>

        {/* Product Overview */}
        <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
          {project.description}
        </p>

        {/* My Contribution */}
        <div className="p-3.5 bg-[#F7F7F7] border border-[#E5E5E5] space-y-1 font-mono text-xs">
          <span className="text-[10px] text-[#737373] uppercase font-bold block">
            MY CONTRIBUTION
          </span>
          <p className="text-xs text-[#0A0A0A] font-medium leading-relaxed">
            {myContribution}
          </p>
        </div>

        {/* Visual Preview */}
        <div className="pt-1">{renderPreview()}</div>

        {/* Relevant Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase text-[#737373] bg-[#FAFAFA] px-2 py-0.5 border border-[#E5E5E5]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-8 py-4 bg-[#FAFAFA] border-t border-[#E5E5E5] flex items-center justify-between font-mono text-xs">
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          className="group/link inline-flex items-center gap-1.5 font-bold uppercase text-[#0A0A0A] hover:underline underline-offset-4"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
        </button>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#737373] hover:text-[#0A0A0A] hover:underline underline-offset-4"
        >
          <span>LIVE PLATFORM</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
