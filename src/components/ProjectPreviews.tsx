import React, { useState } from 'react';
import {
  MapPin,
  AlertTriangle,
  BookOpen,
  Layers,
  Activity,
  CheckCircle,
  FileCheck,
  QrCode,
  Calendar,
  FolderGit2,
} from 'lucide-react';

export const PralayaPreview: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'nilgiris' | 'wayanad' | 'idukki'>('nilgiris');

  const regionData = {
    nilgiris: {
      name: 'Nilgiris Sector 4, Tamil Nadu',
      elevation: '2,240m',
      risk: 'Elevated Risk',
      riskColor: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
      rainfall: '118 mm / 24h',
      saturation: '84.2%',
      slope: '34° Incline',
      confidence: '92.4% (Random Forest)',
      topFactor: 'Sustained Rainfall (48h)',
    },
    wayanad: {
      name: 'Meppadi Corridor, Wayanad',
      elevation: '1,420m',
      risk: 'Critical Alert',
      riskColor: 'text-red-500 bg-red-500/10 border-red-500/30',
      rainfall: '194 mm / 24h',
      saturation: '96.8%',
      slope: '42° Incline',
      confidence: '97.1% (Random Forest)',
      topFactor: 'Excess Soil Pore Pressure',
    },
    idukki: {
      name: 'Munnar Ridge, Idukki',
      elevation: '1,600m',
      risk: 'Moderate Risk',
      riskColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
      rainfall: '45 mm / 24h',
      saturation: '58.0%',
      slope: '28° Incline',
      confidence: '89.0% (Random Forest)',
      topFactor: 'Vegetation Root Stability',
    },
  };

  const current = regionData[selectedRegion];

  return (
    <div className="w-full rounded-2xl bg-neutral-950 text-neutral-100 p-5 md:p-6 border border-neutral-800/80 shadow-2xl relative overflow-hidden font-sans">
      {/* Top status bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-neutral-800/80 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-neutral-300">
            PRALAYA GIS · REAL-TIME HAZARD VIEWPORT
          </span>
        </div>
        <div className="flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded-lg border border-neutral-800 text-[11px] font-mono">
          <Layers className="w-3 h-3 text-emerald-400" />
          <span>Leaflet Vector Overlays: Active</span>
        </div>
      </div>

      {/* Region Selector Pills */}
      <div className="py-3 flex items-center gap-2 overflow-x-auto">
        <span className="text-[11px] font-mono text-neutral-400 shrink-0">Geospatial Sector:</span>
        {(['nilgiris', 'wayanad', 'idukki'] as const).map((reg) => (
          <button
            key={reg}
            onClick={() => setSelectedRegion(reg)}
            className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all shrink-0 ${
              selectedRegion === reg
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {reg}
          </button>
        ))}
      </div>

      {/* Main Visual: Map Representation + Telemetry Sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
        {/* Abstract GIS Map Canvas */}
        <div className="md:col-span-7 rounded-xl bg-neutral-900/90 border border-neutral-800 p-4 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          {/* Simulated Topographic Contour Lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20,40 Q80,10 180,60 T380,40 T580,70" fill="none" stroke="#10B981" strokeWidth="1.5" />
              <path d="M-20,90 Q90,50 200,110 T400,90 T600,120" fill="none" stroke="#10B981" strokeWidth="1.5" />
              <path d="M-20,150 Q120,100 240,160 T440,140 T640,170" fill="none" stroke="#10B981" strokeWidth="1.5" />
              <path d="M-20,210 Q140,160 280,220 T480,200 T680,230" fill="none" stroke="#10B981" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1.5 text-xs text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">{current.name}</span>
            </div>
            <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
              ASL {current.elevation}
            </span>
          </div>

          {/* Map Center Hazard Pin */}
          <div className="my-auto flex flex-col items-center justify-center relative z-10 py-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <span className="mt-2 text-[11px] font-mono text-neutral-300 bg-neutral-950/90 px-2.5 py-1 rounded-full border border-neutral-800">
              Active Monitoring Node #81
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono relative z-10 pt-2 border-t border-neutral-800/80">
            <span>Lat: 11.41° N · Lon: 76.69° E</span>
            <span className="text-emerald-400">Real-Data Stream Verified</span>
          </div>
        </div>

        {/* Telemetry & Explainable AI (XAI) Panel */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3">
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-neutral-400">Risk Assessment</span>
              <span className={`px-2 py-0.5 text-[11px] font-mono font-semibold rounded border ${current.riskColor}`}>
                {current.risk}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className="p-2 rounded bg-neutral-950 border border-neutral-800/80">
                <span className="text-[10px] text-neutral-400 font-mono block">Precipitation (24h)</span>
                <span className="font-semibold text-neutral-200">{current.rainfall}</span>
              </div>
              <div className="p-2 rounded bg-neutral-950 border border-neutral-800/80">
                <span className="text-[10px] text-neutral-400 font-mono block">Soil Saturation</span>
                <span className="font-semibold text-neutral-200">{current.saturation}</span>
              </div>
            </div>
          </div>

          {/* XAI Attribution Block */}
          <div className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-400 flex items-center gap-1">
                <Activity className="w-3 h-3 text-indigo-400" />
                XAI Attribution Factor
              </span>
              <span className="text-emerald-400">{current.confidence}</span>
            </div>
            <p className="text-[11px] text-neutral-300 font-medium leading-tight">
              Primary Driver: <span className="text-white underline decoration-emerald-500/50">{current.topFactor}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CertiSealPreview: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-neutral-950 text-neutral-100 p-5 md:p-6 border border-neutral-800/80 shadow-2xl relative overflow-hidden font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-neutral-300">
            CERTISEAL // VERIFICATION SUITE
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded">
          AI/ML Structural Inspector
        </span>
      </div>

      <div className="pt-4 space-y-4">
        {/* Certificate Card Mockup */}
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-white">Degree Certificate of Excellence</h5>
                <p className="text-[11px] font-mono text-neutral-400">Issuer: Anna University · Chennai</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              <CheckCircle className="w-3 h-3" />
              Verified Authenticity
            </span>
          </div>

          {/* Stepper Status Indicators */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-mono">
            <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-center">
              <span className="text-[10px] text-neutral-500 block">Digital Seal</span>
              <span className="text-emerald-400 font-medium">SHA-256 Valid</span>
            </div>
            <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-center">
              <span className="text-[10px] text-neutral-500 block">Typography Grid</span>
              <span className="text-emerald-400 font-medium">Zero Splice</span>
            </div>
            <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-center">
              <span className="text-[10px] text-neutral-500 block">AI Anomaly</span>
              <span className="text-emerald-400 font-medium">0.01% (Normal)</span>
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
          <span className="flex items-center gap-1.5 font-mono text-[11px]">
            <QrCode className="w-3.5 h-3.5 text-neutral-500" />
            Cert ID: CS-2025-IND-88419
          </span>
          <span className="text-indigo-400 font-mono text-[11px]">Vercel Edge Ready</span>
        </div>
      </div>
    </div>
  );
};

export const AcademicPortalPreview: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-neutral-950 text-neutral-100 p-5 md:p-6 border border-neutral-800/80 shadow-2xl relative overflow-hidden font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-neutral-300">
            CS ACADEMIC PORTAL // RESOURCE HUB
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
          Centralized LMS
        </span>
      </div>

      <div className="pt-4 space-y-3">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-[11px]">
              <span className="font-mono">Semester VI</span>
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <h5 className="font-semibold text-white">Design & Analysis of Algorithms</h5>
            <p className="text-[10px] text-neutral-400 font-mono">14 Lecture Modules · 6 Lab Repos</p>
          </div>

          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
            <div className="flex items-center justify-between text-neutral-400 text-[11px]">
              <span className="font-mono">Semester VI</span>
              <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <h5 className="font-semibold text-white">Database Management & SQL</h5>
            <p className="text-[10px] text-neutral-400 font-mono">Schema Sheets · Practicum DB</p>
          </div>
        </div>

        {/* Student notice bar */}
        <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px]">Upcoming Practicum Submissions Schedule Live</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">Updated Today</span>
        </div>
      </div>
    </div>
  );
};
