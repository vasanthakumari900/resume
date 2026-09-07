import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle } from 'lucide-react';

interface BeforeAfterScenario {
  id: string;
  projectTitle: string;
  problemHeading: string;
  solutionHeading: string;
  before: {
    badge: string;
    title: string;
    description: string;
    metrics: string[];
    visualType: 'table' | 'portal';
  };
  after: {
    badge: string;
    title: string;
    description: string;
    metrics: string[];
    screenshotUrl?: string;
  };
}

const DEFAULT_SCENARIOS: BeforeAfterScenario[] = [
  {
    id: 'pralaya',
    projectTitle: 'PRALAYA AI — DISASTER OPERATIONS COCKPIT',
    problemHeading: 'BEFORE: FRAGMENTED RAW TELEMETRY & BLACK-BOX ALERTS',
    solutionHeading: 'AFTER: UNIFIED SPATIAL GIS & EXPLAINABLE RISK HEURISTIC',
    before: {
      badge: 'LEGACY STATE · HIGH COGNITIVE OVERLOAD',
      title: 'Dispersed Raw Sensor Tables & Opaque ML Confidence',
      description:
        'Emergency response operators were forced to manually cross-reference disconnected spreadsheet logs, raw coordinate feeds, and arbitrary black-box risk numbers with zero geographic context during monsoons.',
      metrics: [
        'Fragmented: 4 disparate systems required for one decision',
        'Triage Latency: ~15 to 20 minutes to cross-reference data',
        'Black-box: Operators had no insight into risk drivers',
      ],
      visualType: 'table',
    },
    after: {
      badge: 'REDESIGNED · ZERO-SCROLL EMERGENCY COCKPIT',
      title: 'Single-Screen Leaflet GIS Viewport & Feature Attribution',
      description:
        'Unified 12-column command layout integrating live terrain contour heatmaps, persistent status hierarchy, and XAI feature importance bars directly attributing risk to rainfall and slope stability.',
      metrics: [
        'Unified: 100% telemetry consolidated on one screen',
        'Triage Latency: < 45 seconds to dispatch advisory',
        'Transparent: XAI surfaces exact top-3 risk drivers',
      ],
      screenshotUrl: '/screenshots/pralaya-main.png',
    },
  },
  {
    id: 'portal',
    projectTitle: 'CS ACADEMIC PORTAL — CENTRALIZED REPOSITORY',
    problemHeading: 'BEFORE: DISPERSED WHATSAPP & PHYSICAL NOTICEBOARDS',
    solutionHeading: 'AFTER: 2-CLICK ACADEMIC INFORMATION ARCHITECTURE',
    before: {
      badge: 'LEGACY STATE · FRAGMENTED CHANNELS',
      title: 'Scattered PDF Links, Chat Groups & Paper Circulars',
      description:
        'Students wasted significant lecture and lab time hunting across unindexed WhatsApp groups, email threads, and collegiate noticeboards just to locate practical lab codes and syllabus PDFs.',
      metrics: [
        'Average Retrieval Time: 45 to 90 seconds per document',
        'Mobile Usability: Non-responsive legacy collegiate site',
        'Failure Rate: 34% students missing assignment circulars',
      ],
      visualType: 'portal',
    },
    after: {
      badge: 'REDESIGNED · 2-CLICK RESOURCE TAXONOMY',
      title: 'Centralized Subject Directory & Instant Lab Code Shelf',
      description:
        'Structured taxonomy organized strictly by Semester ➔ Subject ➔ Module with direct one-click GitHub repositories and PDF links optimized for mobile viewports on campus Wi-Fi.',
      metrics: [
        'Average Retrieval Time: < 8 seconds directly to repository',
        'Mobile Usability: Fluid responsive grid with 48px touch targets',
        'Zero nested download traps or dead-end pages',
      ],
      screenshotUrl: '/screenshots/portal-main.png',
    },
  },
];

interface BeforeAfterSliderProps {
  scenarioId?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ scenarioId = 'pralaya' }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState(scenarioId);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scenario =
    DEFAULT_SCENARIOS.find((s) => s.id === selectedScenarioId) || DEFAULT_SCENARIOS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="space-y-6">
      {/* Scenario Picker Pills */}
      <div className="flex items-center justify-between flex-wrap gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#737373] uppercase font-bold text-[10px]">CASE SCENARIO:</span>
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F5F7] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
            {DEFAULT_SCENARIOS.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`px-3 py-1 uppercase text-[10px] tracking-wider transition-all ${
                  selectedScenarioId === sc.id
                    ? 'bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-bold neu-pill shadow-xs'
                    : 'text-[#737373] hover:text-[#0A0A0A] dark:hover:text-white'
                }`}
              >
                {sc.id === 'pralaya' ? 'PRALAYA AI' : 'CS ACADEMIC PORTAL'}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-[#737373] flex items-center gap-1.5 font-sans">
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>DRAG HANDLE TO COMPARE BEFORE & AFTER</span>
        </div>
      </div>

      {/* Interactive Split Viewport Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[420px] sm:h-[460px] overflow-hidden border border-[#0A0A0A] dark:border-[#333333] select-none cursor-ew-resize bg-[#0A0A0A] neu-dark-inset"
      >
        {/* AFTER LAYER (Underneath, Full Width) */}
        <div className="absolute inset-0 w-full h-full bg-[#FAFAFA] dark:bg-[#121212] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          <div className="space-y-3 z-10 max-w-md ml-auto text-right">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0A0A0A] text-white text-[10px] font-mono uppercase font-bold neu-pill">
              <CheckCircle2 className="w-3 h-3" />
              <span>{scenario.after.badge}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold uppercase text-[#0A0A0A] dark:text-white tracking-tight font-display">
              {scenario.after.title}
            </h4>
            <p className="text-xs text-[#525252] dark:text-[#A3A3A3] leading-relaxed">
              {scenario.after.description}
            </p>
          </div>

          {/* After Deliverable Metric Cards */}
          <div className="z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-xl ml-auto text-right font-mono text-[10px]">
            {scenario.after.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-white dark:bg-[#171717] border border-[#E5E5E8] dark:border-[#262626] neu-card text-[#0A0A0A] dark:text-white font-medium"
              >
                {metric}
              </div>
            ))}
          </div>

          {/* Subtle Background Watermark / Screenshot */}
          {scenario.after.screenshotUrl && (
            <img
              src={scenario.after.screenshotUrl}
              alt="After redesign preview"
              className="absolute right-0 top-0 bottom-0 w-3/5 h-full object-cover opacity-15 dark:opacity-20 pointer-events-none"
            />
          )}
        </div>

        {/* BEFORE LAYER (Clipped on top according to sliderPosition) */}
        <div
          className="absolute inset-0 h-full bg-[#171717] text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-r border-white/40"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="space-y-3 z-10 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#262626] text-[#D4D4D4] text-[10px] font-mono uppercase font-bold border border-[#404040]">
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>{scenario.before.badge}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold uppercase text-white tracking-tight font-display">
              {scenario.before.title}
            </h4>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              {scenario.before.description}
            </p>
          </div>

          {/* Before Pain Points / Bottleneck Cards */}
          <div className="z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-xl font-mono text-[10px]">
            {scenario.before.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-[#0D0D0D] border border-[#333333] text-[#D4D4D4]"
              >
                {metric}
              </div>
            ))}
          </div>

          {/* Background pattern representing unstructured legacy clutter */}
          <div
            className="absolute left-0 top-0 bottom-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0, #FFF 1px, transparent 0, transparent 50%)',
              backgroundSize: '16px 16px',
            }}
          />
        </div>

        {/* DRAGGABLE DIVIDER LINE & HANDLE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 flex items-center justify-center -ml-0.5"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-white text-white flex items-center justify-center shadow-2xl neu-pill">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Metric Breakdown Table */}
      <div className="p-4 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <span className="text-[10px] text-[#737373] uppercase font-bold block">
            TRANSFORMATION SUMMARY
          </span>
          <p className="text-xs text-[#0A0A0A] dark:text-white font-semibold">
            {scenario.problemHeading} ➔ {scenario.solutionHeading}
          </p>
        </div>
        <div className="text-[11px] text-[#737373] shrink-0">
          POSITION: {Math.round(sliderPosition)}% SPLIT
        </div>
      </div>
    </div>
  );
};
