import React from 'react';
import { Laptop, Monitor, Sparkles } from 'lucide-react';

interface WebGLFallbackProps {
  title?: string;
  subtitle?: string;
}

export const WebGLFallback: React.FC<WebGLFallbackProps> = ({
  title = 'THARUN B S — DIGITAL WORKSPACE',
  subtitle = 'Interactive 3D workspace loaded in high-efficiency fallback mode.',
}) => {
  return (
    <div className="w-full h-full min-h-[420px] rounded-xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0D0D0D] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] dark:bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Isometric Graphic Illustration */}
      <div className="relative z-10 flex items-center justify-center gap-4 mb-6">
        <div className="p-4 rounded-lg bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#2E2E2E] shadow-sm transform -rotate-3 transition-transform group-hover:rotate-0">
          <Monitor className="w-8 h-8 text-[#0A0A0A] dark:text-white" />
        </div>
        <div className="p-4 rounded-lg bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] shadow-md transform rotate-3 transition-transform group-hover:rotate-0">
          <Laptop className="w-8 h-8" />
        </div>
      </div>

      {/* Text Info */}
      <div className="relative z-10 space-y-2 max-w-md">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-[#F0F0F2] dark:bg-[#1A1A1A] text-[#737373] dark:text-[#A3A3A3] border border-[#E5E5E8] dark:border-[#2A2A2A]">
          <Sparkles className="w-3 h-3 text-emerald-500" />
          <span>ACCESSIBLE 2D MODE</span>
        </div>
        <h4 className="text-base font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
          {title}
        </h4>
        <p className="text-xs text-[#525252] dark:text-[#A3A3A3] font-mono leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default WebGLFallback;
