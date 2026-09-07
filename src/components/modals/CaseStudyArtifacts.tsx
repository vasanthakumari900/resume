import React, { useState } from 'react';
import type { WireframeArtifact, UserFlowArtifact, DesignSystemArtifact } from '../../data/caseStudies';
import { Layers, GitCommit, Palette, Check, LayoutGrid, Sliders, ArrowLeftRight } from 'lucide-react';
import { FigmaIcon } from '../common';
import { BeforeAfterSlider } from '../sections/BeforeAfterSlider';
import { FigmaInspectionViewer } from './FigmaInspectionViewer';

interface CaseStudyArtifactsProps {
  wireframe?: WireframeArtifact;
  userFlow?: UserFlowArtifact;
  designSystem?: DesignSystemArtifact;
  projectNumber: string;
  projectId?: string;
}

export const CaseStudyArtifacts: React.FC<CaseStudyArtifactsProps> = ({
  wireframe,
  userFlow,
  designSystem,
  projectNumber,
  projectId,
}) => {
  const [activeArtifactTab, setActiveArtifactTab] = useState<'wireframe' | 'flow' | 'tokens' | 'before-after' | 'figma'>('wireframe');
  const [wireframeView, setWireframeView] = useState<'blueprint' | 'zones'>('blueprint');
  const [selectedZone, setSelectedZone] = useState<string | null>(wireframe?.zones[0]?.id || null);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyHex = (hex: string, token: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1800);
  };

  if (!wireframe && !userFlow && !designSystem) return null;

  return (
    <div id="cs-ux-process" className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E5] pb-3 font-mono">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-[#0A0A0A]">03</span>
          <span className="text-[#D4D4D4]">—</span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0A0A0A]">
            UX PROCESS & DESIGN ARTIFACTS
          </span>
        </div>
        <span className="text-[10px] text-[#737373] uppercase tracking-wider font-semibold">
          PROJECT {projectNumber} · ARCHITECTURAL SPECIFICATION
        </span>
      </div>

      {/* Tactile Neomorphic Artifact Switcher Tabs */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F5F5F7] dark:bg-[#121212] border border-[#E5E5E8] dark:border-[#262626] neu-inset flex-wrap">
        {wireframe && (
          <button
            onClick={() => setActiveArtifactTab('wireframe')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
              activeArtifactTab === 'wireframe'
                ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs dark:bg-white dark:text-[#0A0A0A]'
                : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>01. Spatial Wireframe Blueprint</span>
          </button>
        )}

        {userFlow && (
          <button
            onClick={() => setActiveArtifactTab('flow')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
              activeArtifactTab === 'flow'
                ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs dark:bg-white dark:text-[#0A0A0A]'
                : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span>02. User Journey Flow</span>
          </button>
        )}

        {designSystem && (
          <button
            onClick={() => setActiveArtifactTab('tokens')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
              activeArtifactTab === 'tokens'
                ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs dark:bg-white dark:text-[#0A0A0A]'
                : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>03. Design System & Tokens</span>
          </button>
        )}

        <button
          onClick={() => setActiveArtifactTab('before-after')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
            activeArtifactTab === 'before-after'
              ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs dark:bg-white dark:text-[#0A0A0A]'
              : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
          }`}
        >
          <ArrowLeftRight className="w-3.5 h-3.5" />
          <span>04. Before / After UX Comparison</span>
        </button>

        <button
          onClick={() => setActiveArtifactTab('figma')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
            activeArtifactTab === 'figma'
              ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs dark:bg-white dark:text-[#0A0A0A]'
              : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
          }`}
        >
          <FigmaIcon className="w-3.5 h-3.5" />
          <span>05. Figma Inspection & Auto-Layout</span>
        </button>
      </div>

      {/* 1. WIREFRAME ARTIFACT VIEW */}
      {activeArtifactTab === 'wireframe' && wireframe && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-extrabold uppercase text-[#0A0A0A] tracking-tight">
                {wireframe.title}
              </h3>
              <p className="text-xs text-[#525252] max-w-2xl leading-relaxed">
                {wireframe.summary}
              </p>
            </div>

            {/* Sub-view toggle (Blueprint vs Zones) */}
            <div className="flex items-center gap-1 p-1 bg-[#FAFAFA] border border-[#E5E5E8] neu-inset self-start font-mono text-[10px]">
              <button
                onClick={() => setWireframeView('blueprint')}
                className={`flex items-center gap-1.5 px-3 py-1 uppercase transition-colors ${
                  wireframeView === 'blueprint'
                    ? 'bg-[#0A0A0A] text-white font-bold neu-pill'
                    : 'text-[#737373] hover:text-[#0A0A0A]'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Interactive Blueprint</span>
              </button>
              <button
                onClick={() => setWireframeView('zones')}
                className={`flex items-center gap-1.5 px-3 py-1 uppercase transition-colors ${
                  wireframeView === 'zones'
                    ? 'bg-[#0A0A0A] text-white font-bold neu-pill'
                    : 'text-[#737373] hover:text-[#0A0A0A]'
                }`}
              >
                <Sliders className="w-3 h-3" />
                <span>Zoning Breakdown</span>
              </button>
            </div>
          </div>

          {/* Interactive Wireframe Canvas */}
          <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E8] neu-card space-y-6">
            <div className="flex items-center justify-between font-mono text-[11px] border-b border-[#EAEAEA] pb-3">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#0A0A0A]">GRID SYSTEM:</span>
                <span className="text-[#525252]">{wireframe.gridSystem}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#0A0A0A]">DENSITY:</span>
                <span className="text-[#525252] uppercase">{wireframe.density}</span>
              </div>
            </div>

            {/* Wireframe Spatial Layout Visualization */}
            {wireframeView === 'blueprint' ? (
              <div className="space-y-4">
                <div className="p-5 bg-white border border-[#0A0A0A] neu-inset relative overflow-hidden font-mono">
                  {/* Subtle Grid Lines Overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />

                  {/* Wireframe Blocks Visual Map */}
                  <div className="space-y-3 relative z-10">
                    {wireframe.zones.map((zone) => {
                      const isSelected = selectedZone === zone.id;
                      return (
                        <div
                          key={zone.id}
                          onClick={() => setSelectedZone(zone.id)}
                          className={`p-4 border transition-all cursor-pointer ${
                            isSelected
                              ? 'border-[#0A0A0A] bg-[#F5F5F7] shadow-sm ring-1 ring-[#0A0A0A]'
                              : 'border-dashed border-[#D4D4D4] bg-white hover:border-[#0A0A0A] hover:bg-[#FAFAFA]'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span className="px-1.5 py-0.5 bg-[#0A0A0A] text-white font-bold text-[10px]">
                                ZONE {zone.id}
                              </span>
                              <span className="font-bold text-[#0A0A0A] uppercase tracking-wide">
                                {zone.name}
                              </span>
                            </div>
                            <span className="text-[10px] text-[#737373] uppercase">
                              {zone.spatialSpecs}
                            </span>
                          </div>

                          <p className="mt-2 text-xs text-[#525252] font-sans leading-relaxed">
                            {zone.role} — <span className="font-mono text-[#0A0A0A]">{zone.rationale}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#737373] flex items-center justify-between px-1">
                  <span>TIP: CLICK ANY WIREFRAME ZONE TO INSPECT ITS ARCHITECTURAL ROLE</span>
                  <span className="uppercase">FIDELITY: LOW-TO-MID SPATIAL WIREFRAME</span>
                </div>
              </div>
            ) : (
              /* Zoning Detail Cards */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {wireframe.zones.map((zone) => (
                  <div
                    key={zone.id}
                    className="p-5 bg-white border border-[#E5E5E8] neu-flat space-y-3 font-mono text-xs"
                  >
                    <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#0A0A0A]">ZONE {zone.id}</span>
                        <span className="text-[#D4D4D4]">/</span>
                        <span className="font-bold text-[#0A0A0A] uppercase">{zone.name}</span>
                      </div>
                      <span className="text-[10px] text-[#737373]">{zone.spatialSpecs}</span>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <span className="text-[10px] font-mono uppercase text-[#737373] font-bold block">
                        UX RATIONALE
                      </span>
                      <p className="text-xs text-[#525252] leading-relaxed">
                        {zone.rationale}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* UX Principles Application Bar */}
            <div className="pt-4 border-t border-[#EAEAEA] space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#737373] font-bold block tracking-wider">
                CORE UX PRINCIPLES APPLIED IN THIS ARCHITECTURE:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                {wireframe.uxPrinciples.map((ux, idx) => (
                  <div key={idx} className="p-3.5 bg-white border border-[#E5E5E8] neu-inset space-y-1">
                    <span className="font-bold text-[#0A0A0A] text-[11px] uppercase block">
                      {ux.principle}
                    </span>
                    <p className="text-[11px] text-[#525252] font-sans leading-relaxed">
                      {ux.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. USER FLOW ARTIFACT VIEW */}
      {activeArtifactTab === 'flow' && userFlow && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base font-extrabold uppercase text-[#0A0A0A] tracking-tight">
                {userFlow.title}
              </h3>
              <p className="text-xs text-[#525252]">
                <strong className="text-[#0A0A0A] font-mono">User Goal:</strong> {userFlow.userGoal}
              </p>
            </div>
            <div className="font-mono text-[11px] px-3 py-1 bg-[#FAFAFA] border border-[#0A0A0A] neu-flat text-[#0A0A0A] font-bold shrink-0">
              {userFlow.benchmarkMetric}
            </div>
          </div>

          {/* Connected Flowchart Sequence */}
          <div className="space-y-4 font-mono text-xs">
            {userFlow.stages.map((stage, idx) => (
              <div key={stage.stepNumber} className="relative">
                {/* Connecting Line */}
                {idx < userFlow.stages.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-[1.5px] bg-[#E5E5E8] -mb-4 z-0 hidden sm:block" />
                )}

                <div className="p-5 bg-white border border-[#E5E5E8] neu-card space-y-3 relative z-10">
                  {/* Step Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0F0F0] pb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-[#0A0A0A] text-white flex items-center justify-center font-bold text-xs neu-pill shrink-0">
                        {stage.stepNumber}
                      </span>
                      <span className="font-bold text-[#0A0A0A] text-sm uppercase tracking-wide">
                        {stage.stageName}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#737373] uppercase">
                      FLOW MILESTONE // 0{idx + 1}
                    </span>
                  </div>

                  {/* 3-Column Node Logic */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                    <div className="md:col-span-4 space-y-1 p-3 bg-[#FAFAFA] border border-[#EAEAEA] neu-inset">
                      <span className="text-[10px] text-[#737373] uppercase font-bold block">
                        ACTOR ACTION
                      </span>
                      <p className="text-[#0A0A0A] font-sans leading-relaxed text-xs">
                        {stage.actorAction}
                      </p>
                    </div>

                    <div className="md:col-span-4 space-y-1 p-3 bg-[#FAFAFA] border border-[#EAEAEA] neu-inset">
                      <span className="text-[10px] text-[#737373] uppercase font-bold block">
                        SYSTEM PROCESSING / INFERENCE
                      </span>
                      <p className="text-[#525252] font-sans leading-relaxed text-xs">
                        {stage.systemProcess}
                      </p>
                    </div>

                    <div className="md:col-span-4 space-y-1 p-3 bg-[#FAFAFA] border border-[#EAEAEA] neu-inset">
                      <span className="text-[10px] text-[#737373] uppercase font-bold block">
                        UI FEEDBACK & STATE
                      </span>
                      <p className="text-[#0A0A0A] font-sans leading-relaxed text-xs font-medium">
                        {stage.uiFeedback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. DESIGN SYSTEM & TOKENS VIEW */}
      {activeArtifactTab === 'tokens' && designSystem && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold uppercase text-[#0A0A0A] tracking-tight">
              {designSystem.title}
            </h3>
            <p className="text-xs text-[#525252]">
              Strict design tokens ensuring accessibility standards (WCAG AAA/AA), typographic scale, and tactile interactive feedback.
            </p>
          </div>

          {/* Color Tokens Matrix */}
          <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E8] neu-card space-y-4">
            <div className="flex items-center justify-between font-mono text-xs border-b border-[#EAEAEA] pb-2">
              <span className="font-bold text-[#0A0A0A] uppercase tracking-wide">
                COLOR PALETTE & ACCESSIBILITY CONTRAST
              </span>
              <span className="text-[10px] text-[#737373] uppercase">
                CLICK SWATCH TO COPY HEX
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
              {designSystem.colorPalette.map((color) => {
                const isCopied = copiedToken === color.token;
                return (
                  <div
                    key={color.token}
                    onClick={() => copyHex(color.hex, color.token)}
                    className="p-3 bg-white border border-[#E5E5E8] neu-flat space-y-2 cursor-pointer hover:border-[#0A0A0A] transition-colors group"
                  >
                    <div
                      className="w-full h-12 border border-[#0A0A0A]/15 relative flex items-center justify-center text-[10px]"
                      style={{ backgroundColor: color.hex }}
                    >
                      {isCopied && (
                        <span className="px-2 py-0.5 bg-[#0A0A0A] text-white font-bold text-[9px] uppercase shadow-md flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> COPIED
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#0A0A0A] text-xs">{color.token}</span>
                        <span className="text-[10px] text-[#737373]">{color.hex}</span>
                      </div>
                      <span className="text-[10px] text-[#525252] font-sans block leading-tight">
                        {color.role}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-[#F5F5F7] text-[#0A0A0A] font-bold border border-[#E5E5E8] inline-block">
                        {color.contrast}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E8] neu-card space-y-4">
            <span className="text-xs font-mono font-bold text-[#0A0A0A] uppercase tracking-wide block border-b border-[#EAEAEA] pb-2">
              TYPOGRAPHIC HIERARCHY SCALE
            </span>

            <div className="space-y-3 font-mono text-xs">
              {designSystem.typography.map((typo) => (
                <div
                  key={typo.token}
                  className="p-3.5 bg-white border border-[#E5E5E8] neu-flat flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5 md:w-1/3">
                    <span className="font-bold text-[#0A0A0A] uppercase block">{typo.token}</span>
                    <span className="text-[11px] text-[#737373]">{typo.spec}</span>
                  </div>

                  <div className="md:w-2/3">
                    <span className="text-xs text-[#525252] font-sans">{typo.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live Component State & Neomorphic Tokens Preview */}
          <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E8] neu-card space-y-4 font-mono text-xs">
            <span className="font-bold text-[#0A0A0A] uppercase tracking-wide block border-b border-[#EAEAEA] pb-2">
              TACTILE COMPONENT SPECIFICATIONS & INTERACTION STATES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {designSystem.componentTokens.map((comp, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#E5E5E8] neu-flat space-y-2">
                  <span className="font-bold text-[#0A0A0A] block uppercase text-xs">
                    {comp.component}
                  </span>
                  <div className="space-y-1 text-[11px]">
                    <span className="text-[10px] text-[#737373] uppercase font-bold block">
                      STATE PROGRESSION:
                    </span>
                    <p className="text-[#0A0A0A]">{comp.states}</p>
                  </div>
                  <div className="pt-2 border-t border-[#F0F0F0] text-[10px] text-[#525252] font-sans">
                    <strong>Specs:</strong> {comp.specs}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. BEFORE / AFTER COMPARISON SLIDER */}
      {activeArtifactTab === 'before-after' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold uppercase text-[#0A0A0A] dark:text-white tracking-tight">
              INTERACTIVE BEFORE VS. AFTER REDESIGN SLIDER
            </h3>
            <p className="text-xs text-[#525252] dark:text-[#A3A3A3] max-w-2xl leading-relaxed">
              Drag the tactile center divider left and right to compare the legacy fragmented interface with the optimized, high-throughput redesign.
            </p>
          </div>
          <BeforeAfterSlider scenarioId={projectId === 'cs-academic-portal' ? 'portal' : 'pralaya'} />
        </div>
      )}

      {/* 5. FIGMA INSPECTION & AUTO-LAYOUT VIEWER */}
      {activeArtifactTab === 'figma' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="space-y-1">
            <h3 className="text-base font-extrabold uppercase text-[#0A0A0A] dark:text-white tracking-tight">
              FIGMA SPECIFICATION & AUTO-LAYOUT INSPECTOR
            </h3>
            <p className="text-xs text-[#525252] dark:text-[#A3A3A3] max-w-2xl leading-relaxed">
              Live inspection frame showing exact auto-layout constraints, component variant states, and design token mappings to code.
            </p>
          </div>
          <FigmaInspectionViewer projectId={projectId || 'pralaya-ai'} />
        </div>
      )}
    </div>
  );
};
