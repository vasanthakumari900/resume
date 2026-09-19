import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { WebGLFallback } from './WebGLFallback';
import { Printer, Zap, Eye } from 'lucide-react';

import { isWebGLAvailable } from './webglUtils';

interface ResumeDocument3DProps {
  onOpenResume: () => void;
  onOpenRecruiterScan: () => void;
}

export const ResumeDocument3D: React.FC<ResumeDocument3DProps> = ({
  onOpenResume,
  onOpenRecruiterScan,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported] = useState<boolean>(isWebGLAvailable);

  useEffect(() => {
    if (!webglSupported) return;
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 3, 3);
    scene.add(keyLight);

    const glowLight = new THREE.PointLight(0x38bdf8, 1.8, 5);
    glowLight.position.set(0, 0, 1.2);
    scene.add(glowLight);

    // Dynamic Resume Document Canvas Texture
    const cvs = document.createElement('canvas');
    cvs.width = 512;
    cvs.height = 720;
    const ctx = cvs.getContext('2d');
    if (ctx) {
      // Document Background
      ctx.fillStyle = '#0e0e12';
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      // Border frame
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 3;
      ctx.strokeRect(12, 12, cvs.width - 24, cvs.height - 24);

      // Monogram Header
      ctx.fillStyle = '#18181b';
      ctx.fillRect(36, 36, 44, 44);
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 20px monospace';
      ctx.fillText('TB', 46, 65);

      // Name & Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(PERSONAL_INFO.name.toUpperCase(), 96, 58);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '11px monospace';
      ctx.fillText('UI/UX DESIGNER & PRODUCT THINKER', 96, 76);

      // Line
      ctx.strokeStyle = '#27272a';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(36, 96);
      ctx.lineTo(cvs.width - 36, 96);
      ctx.stroke();

      // Contact details
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '10px monospace';
      ctx.fillText(`${PERSONAL_INFO.email} · ${PERSONAL_INFO.location}`, 36, 116);
      ctx.fillText(`CGPA: 8.27/10 · Smart India Hackathon 2026 Shortlisted`, 36, 134);

      // Section: Education
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('// EDUCATION', 36, 172);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('B.Sc. Computer Science (2024–2027)', 36, 194);
      ctx.fillStyle = '#71717a';
      ctx.font = '10px monospace';
      ctx.fillText('Dwaraka Doss Goverdhan Doss Vaishnav College · CGPA 8.27', 36, 210);

      // Section: Verified Builds
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('// VERIFIED PRODUCT BUILDS', 36, 250);

      const builds = [
        '01. PRALAYA AI — Disaster Intelligence & Leaflet GIS Platform',
        '02. CERTISEAL — Academic Credential Verification Infrastructure',
        '03. CS ACADEMIC PORTAL — Centralized Student Resource Hub',
      ];
      builds.forEach((b, i) => {
        ctx.fillStyle = '#ffffff';
        ctx.font = '11px sans-serif';
        ctx.fillText(b, 36, 276 + i * 24);
      });

      // Section: Experience & Internship
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('// PRACTICAL IMMERSION', 36, 370);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('Software Engineering Intern · WEBBED (Dec 2025–Jan 2026)', 36, 394);
      ctx.fillStyle = '#71717a';
      ctx.font = '10px monospace';
      ctx.fillText('Modular React architecture, version control, and web technologies', 36, 410);

      // Section: Skills
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 12px monospace';
      ctx.fillText('// CORE CAPABILITIES', 36, 450);
      ctx.fillStyle = '#e4e4e7';
      ctx.font = '10px monospace';
      ctx.fillText('Design: Figma, Wireframing, User Flows, Prototyping, Systems', 36, 474);
      ctx.fillText('Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS', 36, 494);
      ctx.fillText('Technology: Python, SQL, REST APIs, Leaflet GIS, Git, Vercel', 36, 514);

      // Bottom Click Hint
      ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.fillRect(36, 590, cvs.width - 72, 70);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1;
      ctx.strokeRect(36, 590, cvs.width - 72, 70);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 14px monospace';
      ctx.fillText('CLICK DOCUMENT TO INSPECT ↗', 120, 630);
    }

    const docTexture = new THREE.CanvasTexture(cvs);
    docTexture.anisotropy = 4;

    // 3D Document Mesh
    const docGroup = new THREE.Group();
    const docGeo = new THREE.BoxGeometry(1.6, 2.25, 0.02);
    const docMat = new THREE.MeshStandardMaterial({
      color: 0x121216,
      roughness: 0.3,
      metalness: 0.8,
    });
    const docMesh = new THREE.Mesh(docGeo, docMat);
    docGroup.add(docMesh);

    // Front Texture Plane
    const frontGeo = new THREE.PlaneGeometry(1.58, 2.23);
    const frontMat = new THREE.MeshStandardMaterial({
      map: docTexture,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.25,
      roughness: 0.2,
    });
    const frontMesh = new THREE.Mesh(frontGeo, frontMat);
    frontMesh.position.set(0, 0, 0.012);
    docGroup.add(frontMesh);

    // Wireframe Border Glow
    const edgeGeo = new THREE.EdgesGeometry(docGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    docGroup.add(edgeLines);

    scene.add(docGroup);

    // Pointer Tilting
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onPointerClick = () => {
      onOpenResume();
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onPointerClick);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      const elapsed = performance.now() * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Gentle floating + tilt
      docGroup.rotation.y = mouse.x * 0.4 + Math.sin(elapsed * 1.2) * 0.06;
      docGroup.rotation.x = -mouse.y * 0.3 + Math.cos(elapsed * 1.5) * 0.04;
      docGroup.position.y = Math.sin(elapsed * 1.5) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onPointerClick);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      docGeo.dispose();
      frontGeo.dispose();
      edgeGeo.dispose();
      docMat.dispose();
      frontMat.dispose();
      edgeMat.dispose();
      docTexture.dispose();
    };
  }, [webglSupported, onOpenResume]);

  if (!webglSupported) {
    return (
      <WebGLFallback
        title="3D DIGITAL RESUME"
        subtitle="Access full resume sheet and 60s recruiter scan."
      />
    );
  }

  return (
    <div className="relative w-full rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Interactive Document Canvas */}
        <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] flex items-center justify-center">
          <div ref={containerRef} className="w-full h-full cursor-pointer" />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 pointer-events-none">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] bg-white/80 dark:bg-[#141414]/80 px-2.5 py-1 rounded-full border border-[#E5E5E8] dark:border-[#262626]">
              Interactive 3D Sheet · Click to Expand
            </span>
          </div>
        </div>

        {/* Action Controls & Fast Summary */}
        <div className="lg:col-span-6 space-y-6 font-mono">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-[#0A0A0A] dark:text-white">VERIFIED CURRICULUM VITAE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] dark:text-[#A3A3A3] font-sans leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-[#E5E5E8] dark:border-[#262626] bg-white dark:bg-[#111113]">
              <span className="text-[10px] text-[#737373] uppercase block">ACADEMIC CGPA</span>
              <span className="text-lg font-bold text-[#0A0A0A] dark:text-white">8.27 / 10</span>
              <span className="text-[10px] text-[#737373] block">B.Sc. Computer Science</span>
            </div>
            <div className="p-3.5 rounded-xl border border-[#E5E5E8] dark:border-[#262626] bg-white dark:bg-[#111113]">
              <span className="text-[10px] text-[#737373] uppercase block">SIH 2026</span>
              <span className="text-lg font-bold text-emerald-500">SHORTLISTED</span>
              <span className="text-[10px] text-[#737373] block">Ministry of Home Affairs</span>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={onOpenResume}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <Eye className="w-4 h-4" />
              <span>VIEW FULL PRINTABLE RESUME</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onOpenRecruiterScan}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-white dark:bg-[#141414] border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>60s BRIEFING</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-white dark:bg-[#141414] border border-[#E5E5E8] dark:border-[#262626] text-[#0A0A0A] dark:text-white text-xs uppercase tracking-wider font-bold rounded-xl hover:bg-[#F5F5F7] dark:hover:bg-[#1A1A1A] transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-[#737373]" />
                <span>PRINT / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDocument3D;
