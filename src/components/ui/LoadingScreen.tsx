import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [isDone, setIsDone] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [progress, setProgress] = useState(() => (isDone ? 100 : 0));

  useEffect(() => {
    if (isDone) {
      if (onLoaded) onLoaded();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            if (onLoaded) onLoaded();
          }, 200);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 15;
        return Math.min(100, prev + step);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isDone, onLoaded]);

  if (isDone) return null;

  return (
    <aside
      aria-label="Loading digital workspace"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#060608] text-white transition-opacity duration-500"
    >
      <div className="w-full max-w-xs px-6 space-y-4 text-center font-mono">
        {/* Monogram Pulse */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#121216] border border-[#27272a] shadow-lg">
          <span className="text-sm font-bold text-cyan-400 tracking-wider">TB</span>
        </div>

        {/* Brand & Subtitle */}
        <div className="space-y-1">
          <h2 className="text-sm font-extrabold tracking-widest uppercase font-display text-white">
            THARUN B S
          </h2>
          <p className="text-[10px] text-[#71717a] tracking-wider uppercase">
            INITIALIZING DIGITAL SPACE...
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-full bg-[#18181b] h-1 rounded-full overflow-hidden border border-[#27272a]">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-150 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="flex justify-between text-[10px] text-[#71717a]">
          <span>WORKSPACE READY</span>
          <span>{progress}%</span>
        </div>
      </div>
    </aside>
  );
};

export default LoadingScreen;
