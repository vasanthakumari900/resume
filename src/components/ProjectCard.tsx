import type { Project } from '../types';
import { PralayaPreview, CertiSealPreview, AcademicPortalPreview } from './ProjectPreviews';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (projectId: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
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

  if (isFeatured) {
    return (
      <div className="group relative rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Featured Accent Gradient Badge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono tracking-wide">
                  FEATURED PROJECT
                </span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base font-medium text-neutral-600 dark:text-neutral-300">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              {/* Verified Contributions List */}
              <div className="space-y-2 pt-1 border-t border-neutral-100 dark:border-neutral-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                  Key Design & Engineering Contributions:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                  {project.keyContributions.slice(0, 4).map((contrib, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenCaseStudy(project.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl border border-neutral-200/80 dark:border-neutral-700/80 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Platform</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right Preview Column */}
            <div className="lg:col-span-6 w-full">{renderPreview()}</div>
          </div>
        </div>
      </div>
    );
  }

  // Standard asymmetric card (CertiSeal, Academic Portal)
  return (
    <div className="group relative rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      <div className="p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="Visit Live Application"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {project.subtitle}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Visual Preview */}
        <div className="pt-2">{renderPreview()}</div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 py-4 sm:px-8 bg-neutral-50/70 dark:bg-neutral-950/40 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between">
        <button
          onClick={() => onOpenCaseStudy(project.id)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white flex items-center gap-1 font-mono transition-colors"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
