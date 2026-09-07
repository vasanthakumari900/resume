import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const InteractiveInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'wireframe' | 'tokens'>('preview');
  const [componentType, setComponentType] = useState<'pralaya' | 'certiseal'>('pralaya');
  const [riskLevel, setRiskLevel] = useState<'low' | 'moderate' | 'high'>('high');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<string | null>('AUTHENTIC');

  const simulateVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult((prev) => (prev === 'AUTHENTIC' ? 'FLAGGED ANOMALY' : 'AUTHENTIC'));
    }, 800);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none bg-white border border-[#E5E5E8] neu-card transition-all">
      {/* Top Bar */}
      <div className="px-5 py-3.5 bg-[#F5F5F7] border-b border-[#E5E5E8] neu-inset flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#0A0A0A]" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#525252]">
            SPEC // {componentType === 'pralaya' ? 'PRALAYA_MONITOR.TSX' : 'CERTISEAL_VERIFY.TSX'}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-[#FAFAFA] border border-[#E5E5E8] p-1 neu-inset text-xs font-mono">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-[11px] uppercase transition-all ${
              activeTab === 'preview'
                ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs'
                : 'text-[#525252] hover:text-[#0A0A0A]'
            }`}
          >
            UI LIVE
          </button>
          <button
            onClick={() => setActiveTab('wireframe')}
            className={`px-3 py-1 text-[11px] uppercase transition-all ${
              activeTab === 'wireframe'
                ? 'bg-[#0A0A0A] text-white font-bold neu-pill shadow-xs'
                : 'text-[#525252] hover:text-[#0A0A0A]'
            }`}
          >
            WIREFRAME
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-3 py-1 text-[11px] transition-colors ${
              activeTab === 'tokens'
                ? 'bg-[#0A0A0A] text-white font-medium'
                : 'text-[#525252] hover:text-[#0A0A0A]'
            }`}
          >
            TOKENS
          </button>
        </div>
      </div>

      {/* Component Selector Sub-bar */}
      <div className="px-5 py-2.5 bg-white border-b border-[#E5E5E5] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase text-[#737373]">MODULE:</span>
          <button
            onClick={() => setComponentType('pralaya')}
            className={`text-xs transition-colors ${
              componentType === 'pralaya'
                ? 'text-[#0A0A0A] font-bold underline underline-offset-4'
                : 'text-[#737373] hover:text-[#0A0A0A]'
            }`}
          >
            01. PRALAYA TELEMETRY
          </button>
          <span className="text-[#E5E5E5]">/</span>
          <button
            onClick={() => setComponentType('certiseal')}
            className={`text-xs transition-colors ${
              componentType === 'certiseal'
                ? 'text-[#0A0A0A] font-bold underline underline-offset-4'
                : 'text-[#737373] hover:text-[#0A0A0A]'
            }`}
          >
            02. CERTISEAL INSPECTOR
          </button>
        </div>

        <span className="hidden sm:inline-block text-[11px] text-[#737373]">
          INTERACTIVE PROTOTYPE
        </span>
      </div>

      {/* Canvas Workspace */}
      <div className="p-6 md:p-8 min-h-[340px] flex items-center justify-center bg-[#FAFAFA]">
        {/* 1. UI LIVE PREVIEW */}
        {activeTab === 'preview' && (
          <div className="w-full max-w-md bg-white border border-[#E5E5E5] p-6 space-y-5">
            {componentType === 'pralaya' ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                      SENSOR STREAM #402
                    </span>
                    <h4 className="text-sm font-bold text-[#0A0A0A] tracking-tight mt-0.5">
                      Nilgiris Sector 3 · Terrain Incline
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold border border-[#0A0A0A] bg-[#0A0A0A] text-white">
                    {riskLevel} RISK
                  </span>
                </div>

                {/* Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
                  <div className="p-2.5 bg-[#F7F7F7] border border-[#E5E5E5]">
                    <span className="text-[9px] uppercase text-[#737373] block">RAIN (24H)</span>
                    <span className="text-xs font-bold text-[#0A0A0A]">
                      {riskLevel === 'high' ? '142 mm' : riskLevel === 'moderate' ? '68 mm' : '18 mm'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#F7F7F7] border border-[#E5E5E5]">
                    <span className="text-[9px] uppercase text-[#737373] block">SATURATION</span>
                    <span className="text-xs font-bold text-[#0A0A0A]">
                      {riskLevel === 'high' ? '91.4%' : riskLevel === 'moderate' ? '64.0%' : '32.1%'}
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#F7F7F7] border border-[#E5E5E5]">
                    <span className="text-[9px] uppercase text-[#737373] block">SHIFT RATE</span>
                    <span className="text-xs font-bold text-[#0A0A0A]">
                      {riskLevel === 'high' ? '0.42°/h' : riskLevel === 'moderate' ? '0.08°/h' : '0.00°/h'}
                    </span>
                  </div>
                </div>

                {/* Explainable AI block */}
                <div className="p-3 bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#525252] text-[11px]">Model: Random Forest XAI</span>
                  <span className="text-[#0A0A0A] font-bold text-[11px]">Confidence: 94.2%</span>
                </div>

                {/* Risk state simulation */}
                <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-[#737373]">SIMULATE RISK:</span>
                  <div className="flex gap-1">
                    {(['low', 'moderate', 'high'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setRiskLevel(lvl)}
                        className={`px-2.5 py-1 text-[10px] uppercase transition-colors ${
                          riskLevel === lvl
                            ? 'bg-[#0A0A0A] text-white font-bold'
                            : 'bg-white border border-[#E5E5E5] text-[#525252] hover:text-[#0A0A0A]'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start justify-between border-b border-[#E5E5E5] pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                      DOCUMENT VERIFICATION ENGINE
                    </span>
                    <h4 className="text-sm font-bold text-[#0A0A0A] tracking-tight mt-0.5">
                      Certificate ID: #CS-2026-X891
                    </h4>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-bold border border-[#0A0A0A] bg-[#0A0A0A] text-white">
                    {verificationResult}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-[#F2F2F2]">
                    <span className="text-[#737373]">DIGITAL SIGNATURE:</span>
                    <span className="font-bold text-[#0A0A0A]">SHA-256 VALIDATED</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#F2F2F2]">
                    <span className="text-[#737373]">TYPOGRAPHY SCAN:</span>
                    <span className="font-bold text-[#0A0A0A]">ZERO SPLICE DETECTED</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#737373]">AI ANOMALY SCORE:</span>
                    <span className="font-bold text-[#0A0A0A]">0.02% (NOMINAL)</span>
                  </div>
                </div>

                <button
                  onClick={simulateVerification}
                  disabled={isVerifying}
                  className="w-full py-2.5 text-xs font-mono tracking-wider uppercase border border-[#0A0A0A] bg-[#0A0A0A] text-white hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
                  <span>{isVerifying ? 'INSPECTING ARTIFACT...' : 'RE-RUN VERIFICATION'}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. WIREFRAME BLUEPRINT MODE */}
        {activeTab === 'wireframe' && (
          <div className="w-full max-w-md p-6 border border-[#0A0A0A] bg-white space-y-4 font-mono text-xs">
            <div className="flex justify-between border-b border-[#E5E5E5] pb-2 text-[10px] text-[#737373] uppercase">
              <span>{'<CONTAINER WIDTH="100%" P="24px">'}</span>
              <span>GRID: 12-COL</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#0A0A0A] flex items-center justify-center text-[9px]">
                [ICON]
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-3/4 bg-[#0A0A0A]" />
                <div className="h-2 w-1/2 bg-[#E5E5E5]" />
              </div>
              <div className="h-5 px-2 border border-[#0A0A0A] text-[9px] flex items-center justify-center font-bold">
                [STATUS]
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="h-12 border border-dashed border-[#737373] flex flex-col items-center justify-center p-1 text-[9px] text-[#737373]">
                <span>[METRIC_01]</span>
              </div>
              <div className="h-12 border border-dashed border-[#737373] flex flex-col items-center justify-center p-1 text-[9px] text-[#737373]">
                <span>[METRIC_02]</span>
              </div>
              <div className="h-12 border border-dashed border-[#737373] flex flex-col items-center justify-center p-1 text-[9px] text-[#737373]">
                <span>[METRIC_03]</span>
              </div>
            </div>

            <div className="h-8 border border-[#0A0A0A] flex items-center justify-center text-[10px] font-bold">
              [ACTION_BUTTON: MIN-H 44PX]
            </div>
          </div>
        )}

        {/* 3. DESIGN TOKENS MODE */}
        {activeTab === 'tokens' && (
          <div className="w-full max-w-md p-6 bg-white border border-[#E5E5E5] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E5] text-[10px] text-[#737373] uppercase">
              <span>DESIGN TOKENS // MONOCHROME SYSTEM</span>
              <span className="font-bold text-[#0A0A0A]">SPEC_V2</span>
            </div>

            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                <span className="text-[#737373]">--bg-canvas:</span>
                <span className="font-bold text-[#0A0A0A]">#FFFFFF (Pure White)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                <span className="text-[#737373]">--text-primary:</span>
                <span className="font-bold text-[#0A0A0A]">#0A0A0A (Near Black)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                <span className="text-[#737373]">--border-hairline:</span>
                <span className="font-bold text-[#0A0A0A]">#E5E5E5 (1px solid)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                <span className="text-[#737373]">--font-headline:</span>
                <span className="font-bold text-[#0A0A0A]">Plus Jakarta Sans (800)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                <span className="text-[#737373]">--font-code:</span>
                <span className="font-bold text-[#0A0A0A]">JetBrains Mono (500)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#737373]">--contrast-ratio:</span>
                <span className="font-bold text-[#0A0A0A]">18.5:1 (Exceeds AAA)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Heuristic Tag */}
      <div className="px-5 py-2.5 bg-[#F7F7F7] border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#737373]">
        <span>METHOD: FIGMA TOKENS ➔ SEMANTIC CODE</span>
        <span>THARUN B S PORTFOLIO SYSTEM</span>
      </div>
    </div>
  );
};
