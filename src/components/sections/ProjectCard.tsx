import React, { useState } from 'react';
import type { Project } from '../../types';
import { PralayaPreview, CertiSealPreview, AcademicPortalPreview } from './ProjectPreviews';
import { ArrowRight, ArrowUpRight, Image as ImageIcon, Activity } from 'lucide-react';

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
  const [viewMode, setViewMode] = useState<'screenshot' | 'interactive'>('screenshot');
  const isFeatured = project.featured;

  const projectScreenshotMap: Record<string, string> = {
    'pralaya-ai': '/screenshots/pralaya-main.png',
    'certiseal': '/screenshots/certiseal-main.png',
    'cs-academic-portal': '/screenshots/portal-main.png',
  };

  const projectContributionMap: Record<string, string> = {
    'pralaya-ai':
      'UI and dashboard contribution, GIS-based visualization, risk information presentation, and product/frontend implementation.',
    'certiseal':
      'Structured UI development, verification workflow interface, user-friendly verification experience, and frontend implementation.',
    'cs-academic-portal':
      'Responsive interface development, academic information organization, student-focused interface, and deployment contribution.',
  };

  const myContribution = projectContributionMap[project.id] || project.keyContributions.slice(0, 3).join(', ');
  const screenshotUrl = projectScreenshotMap[project.id];

  const renderInteractivePreview = () => {
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

  const renderDisplayArea = () => {
    return (
      <div className="space-y-2">
        {/* Toggle Switcher */}
        <div className="flex items-center justify-between font-mono text-[10px] pb-1">
          <span className="text-[#737373] uppercase tracking-wider font-semibold">SURFACE VIEW</span>
          <div className="flex items-center gap-1 border border-[#E5E5E8] p-1 bg-[#F5F5F7] neu-inset">
            <button
              onClick={() => setViewMode('screenshot')}
              className={`px-2.5 py-1 flex items-center gap-1 uppercase transition-all ${
                viewMode === 'screenshot'
                  ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs'
                  : 'text-[#737373] hover:text-[#0A0A0A]'
              }`}
            >
              <ImageIcon className="w-2.5 h-2.5" />
              <span>LIVE UI</span>
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-2.5 py-1 flex items-center gap-1 uppercase transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs'
                  : 'text-[#737373] hover:text-[#0A0A0A]'
              }`}
            >
              <Activity className="w-2.5 h-2.5" />
              <span>TELEMETRY</span>
            </button>
          </div>
        </div>

        {/* Content Display */}
        {viewMode === 'screenshot' && screenshotUrl ? (
          <div className="border border-[#0A0A0A] bg-[#0A0A0A] neu-dark-inset overflow-hidden">
            <img
              src={screenshotUrl}
              alt={`${project.title} live interface`}
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
            <div className="px-3 py-1.5 bg-[#141414] border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#737373]">
              <span className="text-white">AUTHENTIC DEPLOYED UI</span>
              <span>1280 × 800</span>
            </div>
          </div>
        ) : (
          renderInteractivePreview()
        )}
      </div>
    );
  };

  if (isFeatured) {
    return (
      <div className="group relative bg-white dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] hover:border-[#0A0A0A] dark:hover:border-neutral-500 neu-card transition-all duration-200">
        <div className="p-8 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Project Editorial Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] dark:border-[#262626] pb-3 font-mono text-xs">
                <span className="text-xl font-extrabold text-[#0A0A0A] dark:text-white font-display">PROJECT {projectNumber}</span>
                <span className="uppercase text-[#525252] dark:text-[#A3A3A3] font-semibold tracking-wider">{project.category}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-[#525252] dark:text-[#A3A3A3]">
                  {project.subtitle}
                </p>
              </div>

              {/* One-Line Description */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#A3A3A3] font-bold block">
                  PRODUCT OVERVIEW
                </span>
                <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* My Contribution - Recruiter highlight */}
              <div className="p-4 bg-[#F7F7F9] dark:bg-[#0D0D0D] border border-[#E5E5E8] dark:border-[#222222] neu-inset space-y-1 font-mono text-xs">
                <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] uppercase font-bold block">
                  MY CONTRIBUTION
                </span>
                <p className="text-xs text-[#0A0A0A] dark:text-[#EDEDED] font-semibold leading-relaxed">
                  {myContribution}
                </p>
              </div>

              {/* Most Relevant Technologies Only */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase text-[#525252] dark:text-[#A3A3A3] bg-[#FAFAFA] dark:bg-[#1A1A1A] px-2 py-0.5 border border-[#E5E5E5] dark:border-[#2E2E2E] neu-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs">
                <button
                  onClick={() => onOpenCaseStudy(project.id)}
                  className="group/btn inline-flex items-center gap-2 px-5 py-3 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all uppercase tracking-wider font-semibold neu-btn"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/btn:translate-x-1" />
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#0A0A0A] dark:text-white hover:underline underline-offset-4 font-bold"
                >
                  <span>LIVE PLATFORM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#737373] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:underline underline-offset-4"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Project Visual Area */}
            <div className="lg:col-span-6 w-full">{renderDisplayArea()}</div>
          </div>
        </div>
      </div>
    );
  }

  // Secondary Asymmetric Project Card (02 & 03)
  return (
    <div className="group bg-white dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] hover:border-[#0A0A0A] dark:hover:border-neutral-500 neu-card transition-all duration-200 flex flex-col justify-between">
      <div className="p-8 space-y-5">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] dark:border-[#262626] pb-3 font-mono text-xs">
          <span className="text-base font-extrabold text-[#0A0A0A] dark:text-white font-display">PROJECT {projectNumber}</span>
          <span className="uppercase text-[#737373] dark:text-[#A3A3A3] tracking-wider text-[11px] font-semibold">{project.category}</span>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight font-display">
            {project.title}
          </h3>
          <p className="mt-1 text-xs font-mono text-[#525252] dark:text-[#A3A3A3]">
            {project.subtitle}
          </p>
        </div>

        {/* Product Overview */}
        <p className="text-xs sm:text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
          {project.description}
        </p>

        {/* My Contribution */}
        <div className="p-3.5 bg-[#F7F7F9] dark:bg-[#0D0D0D] border border-[#E5E5E8] dark:border-[#222222] neu-inset space-y-1 font-mono text-xs">
          <span className="text-[10px] text-[#737373] dark:text-[#A3A3A3] uppercase font-bold block">
            MY CONTRIBUTION
          </span>
          <p className="text-xs text-[#0A0A0A] dark:text-[#EDEDED] font-medium leading-relaxed">
            {myContribution}
          </p>
        </div>

        {/* Visual Preview */}
        <div className="pt-1">{renderDisplayArea()}</div>

        {/* Relevant Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase text-[#737373] dark:text-[#A3A3A3] bg-[#FAFAFA] dark:bg-[#1A1A1A] px-2 py-0.5 border border-[#E5E5E5] dark:border-[#2E2E2E]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-8 py-4 bg-[#FAFAFA] dark:bg-[#121212] border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between font-mono text-xs">
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          className="group/link inline-flex items-center gap-1.5 font-bold uppercase text-[#0A0A0A] dark:text-white hover:underline underline-offset-4"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
        </button>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[#737373] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:underline underline-offset-4"
        >
          <span>LIVE PLATFORM</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
