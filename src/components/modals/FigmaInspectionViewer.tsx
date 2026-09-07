import React, { useState } from 'react';
import { ExternalLink, Sliders, Box, Layers, Check } from 'lucide-react';
import { FigmaIcon } from '../common';

interface FigmaFrameSpec {
  name: string;
  type: string;
  autoLayout: {
    direction: 'Horizontal' | 'Vertical';
    gap: string;
    padding: string;
    alignment: string;
    resizing: string;
  };
  variants: { name: string; props: string }[];
  tokenMappings: { token: string; value: string; element: string }[];
}

const SAMPLE_SPECS: Record<string, FigmaFrameSpec> = {
  'pralaya-ai': {
    name: 'Frame // Operations_Command_Viewport_v2',
    type: 'Root Desktop Frame · 1440 × 900',
    autoLayout: {
      direction: 'Vertical',
      gap: '0px',
      padding: '0px (Fixed Header 56px + Body Viewport)',
      alignment: 'Top Left · Stretch Width',
      resizing: 'Width: Fill Container · Height: Fixed 900px',
    },
    variants: [
      { name: 'Alert_Status = Safe', props: 'Border: 1px #E5E5E8 · Fill: #FAFAFA' },
      { name: 'Alert_Status = Elevated', props: 'Border: 1px #0A0A0A · Badge: Amber Pulse' },
      { name: 'Alert_Status = Critical', props: 'Border: 2px #0A0A0A · Badge: High Urgency' },
      { name: 'Viewport_Mode = Telemetry', props: 'Side Drawer Open (380px Fixed)' },
      { name: 'Viewport_Mode = GIS_Full', props: 'Side Drawer Collapsed (48px Icon Rail)' },
    ],
    tokenMappings: [
      { token: 'color/surface/command', value: '#0A0A0A', element: 'Global Command Header' },
      { token: 'color/surface/card', value: '#FFFFFF', element: 'Telemetry Card Components' },
      { token: 'typography/heading/display', value: 'Space Grotesk · 32px · W700', element: 'Sector Alert Header' },
      { token: 'typography/mono/telemetry', value: 'JetBrains Mono · 11px · W500', element: 'WGS84 Coordinates & Gauges' },
      { token: 'elevation/neu-inset', value: 'inset 2px 2px 5px rgba(0,0,0,0.05)', element: 'GIS Frame Well' },
    ],
  },
  'certiseal': {
    name: 'Frame // Trust_Workspace_Stepper_v3',
    type: 'Modal Flow Viewport · 1120 × 780',
    autoLayout: {
      direction: 'Vertical',
      gap: '24px',
      padding: '32px 40px',
      alignment: 'Top Center',
      resizing: 'Width: Fixed 1120px · Height: Hug Contents',
    },
    variants: [
      { name: 'Step = 01_Ingestion', props: 'Drop Zone Active · Progress 25%' },
      { name: 'Step = 02_Structural_OCR', props: 'Scan Laser Active · Progress 50%' },
      { name: 'Step = 03_Cryptographic_Audit', props: 'Key Verification Live · Progress 75%' },
      { name: 'Step = 04_Verdict_Verified', props: 'Green Trust Seal · Progress 100%' },
    ],
    tokenMappings: [
      { token: 'color/trust/verified', value: '#0A0A0A', element: 'Authentic Stamp Badge' },
      { token: 'typography/trust/display', value: 'Space Grotesk · 28px · W800', element: 'VERIFIED Verdict Header' },
      { token: 'radius/neu-pill', value: '9999px (Full Rounded)', element: 'Stage Stepper Node' },
      { token: 'border/dashed-target', value: '1.5px Dashed #0A0A0A', element: 'Drop Target Well' },
    ],
  },
  'cs-academic-portal': {
    name: 'Frame // Academic_Resource_Shelf_v1',
    type: 'Responsive Grid Canvas · 1280 × 850',
    autoLayout: {
      direction: 'Horizontal',
      gap: '20px',
      padding: '24px 32px',
      alignment: 'Center Stretch',
      resizing: 'Width: Fill Container · Height: Hug',
    },
    variants: [
      { name: 'Semester = VI', props: 'Selected Pill = Neu-Active · 6 Subjects Rendered' },
      { name: 'Card_State = Default', props: 'neu-card · Elevation 4px' },
      { name: 'Card_State = Hover', props: 'TranslateY -2px · Shadow Expanded' },
      { name: 'Drawer = Open', props: 'Slide-out Resource Shelf · Width 420px' },
    ],
    tokenMappings: [
      { token: 'color/brand/black', value: '#0A0A0A', element: 'Curriculum Department Banner' },
      { token: 'typography/course/title', value: 'Space Grotesk · 20px · W700', element: 'Course Subject Name' },
      { token: 'typography/code/id', value: 'JetBrains Mono · 11px · W700', element: 'Subject Alphanumeric ID' },
      { token: 'spacing/touch-target', value: 'Min 48px × 48px', element: 'Download Action Buttons' },
    ],
  },
};

interface FigmaInspectionViewerProps {
  projectId: string;
}

export const FigmaInspectionViewer: React.FC<FigmaInspectionViewerProps> = ({ projectId }) => {
  const spec = SAMPLE_SPECS[projectId] || SAMPLE_SPECS['pralaya-ai'];
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToken = (token: string, value: string) => {
    navigator.clipboard.writeText(`${token}: ${value}`);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  return (
    <div className="space-y-6">
      {/* Figma Header Bar */}
      <div className="p-4 bg-[#141414] text-white border border-[#262626] neu-dark-inset flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-xs bg-[#0A0A0A] border border-[#333333] flex items-center justify-center text-white">
            <FigmaIcon className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white block">{spec.name}</span>
            <span className="text-[10px] text-[#A3A3A3] block">{spec.type}</span>
          </div>
        </div>

        <a
          href="https://www.figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#0A0A0A] font-bold uppercase text-[10px] tracking-wider hover:bg-[#E5E5E8] transition-colors self-start sm:self-auto neu-btn"
        >
          <span>INSPECT IN FIGMA</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-mono text-xs">
        {/* Left Column: Auto-Layout Engine Specifications */}
        <div className="lg:col-span-6 p-6 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-4">
          <div className="flex items-center gap-2 border-b border-[#EAEAEA] dark:border-[#262626] pb-2">
            <Sliders className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-white" />
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wide">
              AUTO-LAYOUT PROPERTIES & CONSTRAINTS
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
              <span className="text-[#737373]">FLOW DIRECTION:</span>
              <span className="font-bold text-[#0A0A0A] dark:text-white">{spec.autoLayout.direction}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
              <span className="text-[#737373]">ITEM GAP:</span>
              <span className="font-bold text-[#0A0A0A] dark:text-white">{spec.autoLayout.gap}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
              <span className="text-[#737373]">PADDING BOX:</span>
              <span className="font-bold text-[#0A0A0A] dark:text-white">{spec.autoLayout.padding}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
              <span className="text-[#737373]">ALIGNMENT:</span>
              <span className="font-bold text-[#0A0A0A] dark:text-white">{spec.autoLayout.alignment}</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-inset">
              <span className="text-[#737373]">RESIZING LOGIC:</span>
              <span className="font-bold text-[#0A0A0A] dark:text-white">{spec.autoLayout.resizing}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Component Variant Set */}
        <div className="lg:col-span-6 p-6 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-4">
          <div className="flex items-center gap-2 border-b border-[#EAEAEA] dark:border-[#262626] pb-2">
            <Layers className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-white" />
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wide">
              COMPONENT VARIANT MATRIX
            </span>
          </div>

          <div className="space-y-2">
            {spec.variants.map((v, idx) => (
              <div
                key={idx}
                className="p-3 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-flat space-y-1"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#0A0A0A] dark:text-white">{v.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-[#F5F5F7] dark:bg-[#262626] text-[#737373] uppercase">
                    VARIANT // 0{idx + 1}
                  </span>
                </div>
                <p className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans">
                  {v.props}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Token to Element Inspection Mapping */}
      <div className="p-6 bg-[#FAFAFA] dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] neu-card space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-[#EAEAEA] dark:border-[#262626] pb-2">
          <div className="flex items-center gap-2">
            <Box className="w-3.5 h-3.5 text-[#0A0A0A] dark:text-white" />
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wide">
              FIGMA TOKEN TO PRODUCTION CODE MAPPING
            </span>
          </div>
          <span className="text-[10px] text-[#737373] uppercase">CLICK TO COPY TOKEN</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {spec.tokenMappings.map((tm) => {
            const isCopied = copiedToken === tm.token;
            return (
              <div
                key={tm.token}
                onClick={() => copyToken(tm.token, tm.value)}
                className="p-3.5 bg-white dark:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#262626] neu-flat space-y-1.5 cursor-pointer hover:border-[#0A0A0A] dark:hover:border-white transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#0A0A0A] dark:text-white text-xs">{tm.token}</span>
                  {isCopied ? (
                    <span className="px-1.5 py-0.5 bg-[#0A0A0A] text-white text-[9px] font-bold flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" /> COPIED
                    </span>
                  ) : (
                    <span className="text-[10px] text-[#737373]">{tm.value}</span>
                  )}
                </div>
                <div className="text-[10px] text-[#525252] dark:text-[#A3A3A3] font-sans">
                  Mapped Component: <strong className="text-[#0A0A0A] dark:text-white font-mono">{tm.element}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
