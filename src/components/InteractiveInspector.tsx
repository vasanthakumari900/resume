import React, { useState } from 'react';
import {
  Layers,
  Code2,
  Eye,
  Sliders,
  ShieldCheck,
  AlertTriangle,
  Radio,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  MapPin,
  Cpu,
} from 'lucide-react';

export const InteractiveInspector: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'wireframe' | 'tokens'>('preview');
  const [componentType, setComponentType] = useState<'pralaya' | 'certiseal'>('pralaya');
  const [riskLevel, setRiskLevel] = useState<'low' | 'moderate' | 'high'>('high');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<string | null>('Valid');

  const simulateVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationResult((prev) => (prev === 'Valid' ? 'Tamper Detected' : 'Valid'));
    }, 900);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none rounded-2xl bg-white/90 dark:bg-[#111115]/90 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-neutral-300 dark:hover:border-neutral-700">
      {/* Chrome Top Bar */}
      <div className="px-4 py-3 bg-neutral-100/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 ml-2 font-medium">
            design-system.inspect // {componentType === 'pralaya' ? 'RiskBadge.tsx' : 'VerifyCard.tsx'}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-white dark:bg-neutral-800 p-0.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-xs shadow-2xs">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === 'preview'
                ? 'bg-neutral-900 text-white dark:bg-indigo-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-3 h-3" />
            <span>UI Live</span>
          </button>
          <button
            onClick={() => setActiveTab('wireframe')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === 'wireframe'
                ? 'bg-neutral-900 text-white dark:bg-indigo-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>Wireframe</span>
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
              activeTab === 'tokens'
                ? 'bg-neutral-900 text-white dark:bg-indigo-600 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>Tokens</span>
          </button>
        </div>
      </div>

      {/* Component Switcher Sub-bar */}
      <div className="px-4 py-2 bg-neutral-50/60 dark:bg-neutral-950/40 border-b border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono">Component:</span>
          <button
            onClick={() => setComponentType('pralaya')}
            className={`text-xs font-medium transition-colors ${
              componentType === 'pralaya'
                ? 'text-emerald-600 dark:text-emerald-400 font-semibold underline underline-offset-4 decoration-2'
                : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
            }`}
          >
            Pralaya GIS Telemetry
          </button>
          <span className="text-neutral-300 dark:text-neutral-700">/</span>
          <button
            onClick={() => setComponentType('certiseal')}
            className={`text-xs font-medium transition-colors ${
              componentType === 'certiseal'
                ? 'text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4 decoration-2'
                : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
            }`}
          >
            CertiSeal Trust Badge
          </button>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
          <Sparkles className="w-3 h-3 text-indigo-500" />
          Interactive Prototype
        </span>
      </div>

      {/* Canvas Area */}
      <div className="p-6 relative min-h-[340px] flex items-center justify-center bg-radial from-neutral-50 via-white to-neutral-100/50 dark:from-neutral-900/60 dark:via-[#0E0E12] dark:to-[#0A0A0C]">
        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* 1. LIVE PREVIEW MODE */}
        {activeTab === 'preview' && (
          <div className="w-full max-w-md transition-all duration-300 animate-in fade-in zoom-in-95">
            {componentType === 'pralaya' ? (
              <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                        Landslide Sensor Node #402
                      </h4>
                      <p className="text-[11px] text-neutral-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        Nilgiris Sector 3 · 2,140m ASL
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-full uppercase tracking-wider ${
                      riskLevel === 'high'
                        ? 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-800'
                        : riskLevel === 'moderate'
                        ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                    }`}
                  >
                    {riskLevel} Risk
                  </span>
                </div>

                {/* Simulated Telemetry Bars */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="block text-[10px] uppercase font-mono text-neutral-400">Precipitation</span>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {riskLevel === 'high' ? '142 mm' : riskLevel === 'moderate' ? '68 mm' : '18 mm'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="block text-[10px] uppercase font-mono text-neutral-400">Saturation</span>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {riskLevel === 'high' ? '91.4%' : riskLevel === 'moderate' ? '64.0%' : '32.1%'}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60">
                    <span className="block text-[10px] uppercase font-mono text-neutral-400">Slope Shift</span>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                      {riskLevel === 'high' ? '0.42°/h' : riskLevel === 'moderate' ? '0.08°/h' : '0.00°/h'}
                    </span>
                  </div>
                </div>

                {/* XAI Attribution Snippet */}
                <div className="p-2.5 rounded-lg bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Random Forest Inference</span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                    Confidence: 94.2%
                  </span>
                </div>

                {/* Simulator Slider Controls */}
                <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 font-mono">Simulate Risk:</span>
                  <div className="flex items-center gap-1">
                    {(['low', 'moderate', 'high'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => setRiskLevel(level)}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded capitalize transition-colors ${
                          riskLevel === level
                            ? 'bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 font-semibold'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        CERTISEAL Authenticity Engine
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-mono">Doc ID: #CS-2026-X891</p>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-full flex items-center gap-1 ${
                      verificationResult === 'Valid'
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {verificationResult === 'Valid' ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <AlertTriangle className="w-3 h-3" />
                    )}
                    {verificationResult}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/80">
                    <span className="text-neutral-500">Issuer Signature:</span>
                    <span className="font-mono text-neutral-800 dark:text-neutral-200">SHA-256 Validated</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100 dark:border-neutral-800/80">
                    <span className="text-neutral-500">Font Geometry Check:</span>
                    <span className="font-mono text-neutral-800 dark:text-neutral-200">No Raster Splices</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500">AI Visual Tamper Score:</span>
                    <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400">0.02% Anomaly</span>
                  </div>
                </div>

                <button
                  onClick={simulateVerification}
                  disabled={isVerifying}
                  className="w-full py-2 px-3 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center gap-1.5 transition-all shadow-xs disabled:opacity-70"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin' : ''}`} />
                  <span>{isVerifying ? 'Analyzing Document Integrity...' : 'Re-verify Document'}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. WIREFRAME BLUEPRINT MODE */}
        {activeTab === 'wireframe' && (
          <div className="w-full max-w-md p-5 rounded-xl border-2 border-dashed border-indigo-400/70 dark:border-indigo-500/50 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-4 animate-in fade-in font-mono text-[11px]">
            <div className="flex items-center justify-between border-b border-dashed border-indigo-300 dark:border-indigo-800 pb-2 text-indigo-600 dark:text-indigo-400">
              <span>{'<CardLayout flex="row" p="20px">'}</span>
              <span className="text-[10px] bg-indigo-100 dark:bg-indigo-900/60 px-1.5 py-0.5 rounded">
                Ergonomics: Scannable
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-dashed border-neutral-400 dark:border-neutral-600 flex items-center justify-center text-[10px] text-neutral-400">
                [Icon: 24]
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-3/4 bg-neutral-300/80 dark:bg-neutral-700 rounded-sm" />
                <div className="h-2 w-1/2 bg-neutral-200/80 dark:bg-neutral-800 rounded-sm" />
              </div>
              <div className="h-5 w-16 border border-indigo-300 dark:border-indigo-700 rounded text-[9px] flex items-center justify-center text-indigo-500">
                [Badge]
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-2">
              <div className="h-12 border border-dashed border-neutral-300 dark:border-neutral-700 rounded flex flex-col items-center justify-center p-1 text-[9px] text-neutral-400">
                <span>[Metric: 01]</span>
                <span className="w-8 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded mt-1" />
              </div>
              <div className="h-12 border border-dashed border-neutral-300 dark:border-neutral-700 rounded flex flex-col items-center justify-center p-1 text-[9px] text-neutral-400">
                <span>[Metric: 02]</span>
                <span className="w-8 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded mt-1" />
              </div>
              <div className="h-12 border border-dashed border-neutral-300 dark:border-neutral-700 rounded flex flex-col items-center justify-center p-1 text-[9px] text-neutral-400">
                <span>[Metric: 03]</span>
                <span className="w-8 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded mt-1" />
              </div>
            </div>

            <div className="h-8 border border-dashed border-neutral-300 dark:border-neutral-700 rounded flex items-center justify-center text-[10px] text-neutral-400">
              [Action Target: min-height 44px (WCAG compliant)]
            </div>
          </div>
        )}

        {/* 3. DESIGN TOKENS INSPECTOR */}
        {activeTab === 'tokens' && (
          <div className="w-full max-w-md p-4 rounded-xl bg-neutral-900 text-neutral-100 border border-neutral-800 font-mono text-xs space-y-2 animate-in fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-neutral-400 text-[11px]">
              <span>// Design Tokens & CSS Variables</span>
              <span className="text-emerald-400">verified</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-neutral-800/70 border border-neutral-700/50">
                <span className="text-neutral-400 block">--radius-card</span>
                <span className="text-indigo-300 font-semibold">16px (0.75rem)</span>
              </div>
              <div className="p-2 rounded bg-neutral-800/70 border border-neutral-700/50">
                <span className="text-neutral-400 block">--font-family</span>
                <span className="text-indigo-300 font-semibold">Inter, sans-serif</span>
              </div>
              <div className="p-2 rounded bg-neutral-800/70 border border-neutral-700/50">
                <span className="text-neutral-400 block">--elevation-soft</span>
                <span className="text-indigo-300 font-semibold">0 10px 25px -5px rgba(0,0,0,0.08)</span>
              </div>
              <div className="p-2 rounded bg-neutral-800/70 border border-neutral-700/50">
                <span className="text-neutral-400 block">--accent-primary</span>
                <span className="text-indigo-300 font-semibold">#6366F1 (Electric Indigo)</span>
              </div>
            </div>

            <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-[10px] text-neutral-400 space-y-0.5">
              <p>const UXConstraint = &#123;</p>
              <p className="pl-3">contrastRatio: &quot;4.8:1 (WCAG AA)&quot;,</p>
              <p className="pl-3">touchTargetMin: &quot;44x44px&quot;,</p>
              <p className="pl-3">reducedMotionRespect: true</p>
              <p>&#125;;</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Heuristic Tag */}
      <div className="px-4 py-2.5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
        <span className="flex items-center gap-1.5">
          <Sliders className="w-3 h-3 text-indigo-500" />
          Bridge: Figma Tokens ➔ Semantic React Components
        </span>
        <span className="text-neutral-400">Tharun B S Design System</span>
      </div>
    </div>
  );
};
