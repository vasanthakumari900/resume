import React from 'react';
import { ResumeDocument3D } from '../3d/ResumeDocument3D';

interface ResumeSectionProps {
  onOpenResume: () => void;
  onOpenRecruiterScan: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResume,
  onOpenRecruiterScan,
}) => {
  return (
    <section
      id="resume"
      className="py-24 md:py-32 bg-white dark:bg-[#0A0A0A] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 06 · RESUME
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0A] dark:text-white uppercase font-display">
              Curriculum Vitae
            </h2>
            <p className="text-sm sm:text-base text-[#525252] dark:text-[#A3A3A3] max-w-xl font-normal">
              Structured summary of academic records, software engineering internships, hackathons, and product deliverables.
            </p>
          </div>

          <div className="font-mono text-xs text-[#737373] dark:text-[#A3A3A3] uppercase">
            Recruiter & ATS Ready
          </div>
        </div>

        {/* 3D Document Experience */}
        <ResumeDocument3D
          onOpenResume={onOpenResume}
          onOpenRecruiterScan={onOpenRecruiterScan}
        />
      </div>
    </section>
  );
};

export default ResumeSection;
