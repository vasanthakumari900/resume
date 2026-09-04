import React, { useState } from 'react';
import {
  MapPin,
  AlertTriangle,
  FileCheck,
} from 'lucide-react';

export const PralayaPreview: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'nilgiris' | 'wayanad' | 'idukki'>('nilgiris');

  const regionData = {
    nilgiris: {
      name: 'Nilgiris Sector 4, Tamil Nadu',
      elevation: '2,240m ASL',
      risk: 'ELEVATED RISK',
      rainfall: '118 mm / 24h',
      saturation: '84.2%',
      slope: '34° Incline',
      confidence: '92.4% (Random Forest)',
      topFactor: 'Sustained Rainfall (48h)',
    },
    wayanad: {
      name: 'Meppadi Corridor, Wayanad',
      elevation: '1,420m ASL',
      risk: 'CRITICAL ALERT',
      rainfall: '194 mm / 24h',
      saturation: '96.8%',
      slope: '42° Incline',
      confidence: '97.1% (Random Forest)',
      topFactor: 'Excess Soil Pore Pressure',
    },
    idukki: {
      name: 'Munnar Ridge, Idukki',
      elevation: '1,600m ASL',
      risk: 'MODERATE RISK',
      rainfall: '45 mm / 24h',
      saturation: '58.0%',
      slope: '28° Incline',
      confidence: '89.0% (Random Forest)',
      topFactor: 'Vegetation Root Stability',
    },
  };

  const current = regionData[selectedRegion];

  return (
    <div className="w-full bg-[#0A0A0A] text-white p-6 border border-[#262626] font-sans">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#262626] gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
            PRALAYA GIS // HAZARD VIEWPORT
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#737373] uppercase">
          Leaflet Overlays: Active
        </span>
      </div>

      {/* Region Selector */}
      <div className="py-3 flex items-center gap-2 font-mono text-xs overflow-x-auto">
        <span className="text-[#737373] text-[10px] uppercase shrink-0">SECTOR:</span>
        {(['nilgiris', 'wayanad', 'idukki'] as const).map((reg) => (
          <button
            key={reg}
            onClick={() => setSelectedRegion(reg)}
            className={`px-3 py-1 text-xs uppercase transition-colors shrink-0 ${
              selectedRegion === reg
                ? 'bg-white text-[#0A0A0A] font-bold'
                : 'bg-[#171717] text-[#737373] hover:text-white border border-[#262626]'
            }`}
          >
            {reg}
          </button>
        ))}
      </div>

      {/* Main Visual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
        {/* Topographic Contour Map Canvas */}
        <div className="md:col-span-7 bg-[#141414] border border-[#262626] p-5 relative min-h-[220px] flex flex-col justify-between overflow-hidden">
          {/* Topographic Lines in Monochrome */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20,40 Q80,10 180,60 T380,40 T580,70" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
              <path d="M-20,90 Q90,50 200,110 T400,90 T600,120" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
              <path d="M-20,150 Q120,100 240,160 T440,140 T640,170" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
              <path d="M-20,210 Q140,160 280,220 T480,200 T680,230" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="flex items-center justify-between relative z-10 text-xs font-mono">
            <span className="text-white font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#737373]" />
              {current.name}
            </span>
            <span className="text-[#737373]">{current.elevation}</span>
          </div>

          {/* Central Monitoring Node */}
          <div className="my-auto flex flex-col items-center justify-center relative z-10 py-4">
            <div className="w-10 h-10 border border-white flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] bg-[#0A0A0A] px-2 py-0.5 border border-[#262626]">
              SENSOR NODE #81 · ACTIVE
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] relative z-10 pt-2 border-t border-[#262626]">
            <span>11.41° N · 76.69° E</span>
            <span className="text-white">VERIFIED REAL-DATA</span>
          </div>
        </div>

        {/* Telemetry Data & XAI attribution */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-3 font-mono">
          <div className="p-4 bg-[#141414] border border-[#262626] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#737373]">RISK LEVEL</span>
              <span className="px-2 py-0.5 text-[10px] font-bold border border-white bg-white text-[#0A0A0A]">
                {current.risk}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className="p-2 bg-[#0A0A0A] border border-[#262626]">
                <span className="text-[9px] uppercase text-[#737373] block">RAIN (24H)</span>
                <span className="font-bold text-white text-xs">{current.rainfall}</span>
              </div>
              <div className="p-2 bg-[#0A0A0A] border border-[#262626]">
                <span className="text-[9px] uppercase text-[#737373] block">SATURATION</span>
                <span className="font-bold text-white text-xs">{current.saturation}</span>
              </div>
            </div>
          </div>

          {/* XAI Attribution Block */}
          <div className="p-3 bg-[#141414] border border-[#262626] text-xs space-y-1">
            <div className="flex items-center justify-between text-[10px] text-[#737373]">
              <span>XAI DECISION DRIVER</span>
              <span className="text-white">{current.confidence}</span>
            </div>
            <p className="text-[11px] text-white font-medium">
              Factor: <span className="underline">{current.topFactor}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CertiSealPreview: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0A] text-white p-6 border border-[#262626] font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
            CERTISEAL // VERIFICATION SUITE
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#737373] uppercase">
          AI/ML Structural Engine
        </span>
      </div>

      <div className="pt-4 space-y-4">
        <div className="p-4 bg-[#141414] border border-[#262626] space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-white text-white">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-tight">
                  ACADEMIC CREDENTIAL ARCHIVE
                </h5>
                <p className="text-[10px] font-mono text-[#737373]">ISSUER: ANNA UNIVERSITY</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-white text-[#0A0A0A]">
              VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-mono">
            <div className="p-2 bg-[#0A0A0A] border border-[#262626] text-center">
              <span className="text-[#737373] block">DIGITAL SEAL</span>
              <span className="text-white font-bold">SHA-256</span>
            </div>
            <div className="p-2 bg-[#0A0A0A] border border-[#262626] text-center">
              <span className="text-[#737373] block">LAYOUT GRID</span>
              <span className="text-white font-bold">MATCH</span>
            </div>
            <div className="p-2 bg-[#0A0A0A] border border-[#262626] text-center">
              <span className="text-[#737373] block">ANOMALY</span>
              <span className="text-white font-bold">0.01%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-[#737373]">
          <span>ID: CS-2025-IND-88419</span>
          <span className="text-white">VERCEL PRODUCTION EDGE</span>
        </div>
      </div>
    </div>
  );
};

export const AcademicPortalPreview: React.FC = () => {
  return (
    <div className="w-full bg-[#0A0A0A] text-white p-6 border border-[#262626] font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-white" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-white">
            CS ACADEMIC PORTAL // REPOSITORY
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#737373] uppercase">
          Centralized LMS
        </span>
      </div>

      <div className="pt-4 space-y-3 font-mono">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#141414] border border-[#262626] space-y-1">
            <span className="text-[10px] text-[#737373] block">SEMESTER VI</span>
            <h5 className="font-bold text-white text-xs uppercase">Algorithms & Complexity</h5>
            <p className="text-[10px] text-[#737373]">14 Modules · 6 Code Repos</p>
          </div>

          <div className="p-3 bg-[#141414] border border-[#262626] space-y-1">
            <span className="text-[10px] text-[#737373] block">SEMESTER VI</span>
            <h5 className="font-bold text-white text-xs uppercase">Database Architecture</h5>
            <p className="text-[10px] text-[#737373]">Relational SQL Schemas</p>
          </div>
        </div>

        <div className="p-2.5 bg-[#141414] border border-[#262626] flex items-center justify-between text-[11px] text-[#737373]">
          <span>ACADEMIC SCHEDULE & NOTICE BOARD</span>
          <span className="text-white">LIVE</span>
        </div>
      </div>
    </div>
  );
};
