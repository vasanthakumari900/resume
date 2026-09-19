import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { WebGLFallback } from './WebGLFallback';
import { ChevronRight, ChevronLeft, Calendar, Award, GraduationCap, Briefcase, Rocket } from 'lucide-react';

export interface Milestone {
  id: string;
  year: string;
  category: 'Education' | 'Internship' | 'Hackathon' | 'Project' | 'Certification';
  title: string;
  organization: string;
  summary: string;
  keyPoints: string[];
  color: string;
}

const VERIFIED_MILESTONES: Milestone[] = [
  {
    id: 'm-2022',
    year: '2022',
    category: 'Education',
    title: 'Secondary School Leaving Certificate (Class X)',
    organization: 'Holy Immanuel Matriculation School',
    summary: 'Graduated with academic distinction achieving 92.00% aggregate.',
    keyPoints: ['Core science & mathematics foundation', '92.00% academic record'],
    color: '#38bdf8',
  },
  {
    id: 'm-2024',
    year: '2024',
    category: 'Education',
    title: 'B.Sc. Computer Science Matriculation',
    organization: 'Dwaraka Doss Goverdhan Doss Vaishnav College',
    summary: 'Higher Secondary completion (85.83%) and commenced B.Sc. Computer Science degree (CGPA 8.27/10).',
    keyPoints: [
      'Class XII Computer Science & Math (85.83%)',
      'Undergraduate CS degree enrolled (2024–2027)',
      'Current academic CGPA: 8.27 / 10',
    ],
    color: '#00f0ff',
  },
  {
    id: 'm-2024-build',
    year: '2024–2025',
    category: 'Project',
    title: 'CS Academic Portal & Bootstrap Training',
    organization: 'DDGD Vaishnav College & Imarticus Learning',
    summary: 'Architected centralized study material repository & completed professional front-end training.',
    keyPoints: [
      'Deployed cs-academic-portal.vercel.app',
      'Centralized curriculum roadmaps and lab code shelves',
      'Imarticus responsive framework accreditation',
    ],
    color: '#818cf8',
  },
  {
    id: 'm-2025-cert',
    year: '2025',
    category: 'Certification',
    title: 'Maiyyam UI/UX & AI Traineeship & Certiseal Platform',
    organization: 'Maiyyam Knowledge and Careers & Independent Build',
    summary: 'Completed comprehensive product traineeships and designed the CERTISEAL credential trust platform.',
    keyPoints: [
      'UI/UX wireframing, heuristic evaluation, and interaction systems',
      'Built CERTISEAL (CERTX) credential verification flow',
      'Production deployment on certiseal.vercel.app',
    ],
    color: '#f472b6',
  },
  {
    id: 'm-2025-intern',
    year: 'Dec 2025 – Jan 2026',
    category: 'Internship',
    title: 'Software Engineering Intern & Industry Simulations',
    organization: 'WEBBED & Top-Tier Simulations (Deloitte, Tata, Lloyds, BA)',
    summary: 'Completed intensive four-week engineering internship and completed 4 Fortune-500 job simulations.',
    keyPoints: [
      'WEBBED Virtual Internship in frontend engineering & modular code architecture',
      'Deloitte Technology Simulation & Tata GenAI Data Analytics Simulation',
      'Lloyds Banking Group Engineering & British Airways Data Science Simulations',
    ],
    color: '#fbbf24',
  },
  {
    id: 'm-2026-sih',
    year: '2026',
    category: 'Hackathon',
    title: 'Smart India Hackathon 2026 Shortlist & Pralaya AI',
    organization: 'Ministry of Home Affairs Track (SIH26188)',
    summary: 'Evaluated at the national level by MHA for AI Document Tamper Screening, and launched Pralaya AI GIS platform.',
    keyPoints: [
      'Selected at national-level Smart India Hackathon 2026 (SIH26188)',
      'AI-Based Fake Identity & Document Screening System architecture',
      'Built PRALAYA AI landslide operations center with Leaflet GIS',
      'Production deployment on disaster-phi-two.vercel.app',
    ],
    color: '#34d399',
  },
];

import { isWebGLAvailable } from './webglUtils';

export const TimelinePath3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(5); // Default to SIH 2026 / latest
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
    camera.position.set(0, 1.8, 4.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 4, 3);
    scene.add(keyLight);

    // 1. Glowing 3D Curved Pathway Spline
    const pathPoints: THREE.Vector3[] = [];
    const count = VERIFIED_MILESTONES.length;
    const spacing = 4.2 / (count - 1);

    for (let i = 0; i < count; i++) {
      const x = -2.1 + i * spacing;
      const y = Math.sin((i / (count - 1)) * Math.PI) * 0.4 - 0.2;
      const z = Math.cos((i / (count - 1)) * Math.PI) * 0.6;
      pathPoints.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(pathPoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.025, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.3,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tubeMesh);

    // 2. Interactive Milestone Beacons
    const beaconGeo = new THREE.SphereGeometry(0.14, 24, 24);
    const haloGeo = new THREE.RingGeometry(0.18, 0.22, 32);

    const beacons: {
      group: THREE.Group;
      mesh: THREE.Mesh;
      halo: THREE.Mesh;
      index: number;
      light: THREE.PointLight;
      color: THREE.Color;
    }[] = [];

    pathPoints.forEach((pt, i) => {
      const ms = VERIFIED_MILESTONES[i];
      const grp = new THREE.Group();
      grp.position.copy(pt);

      const color = new THREE.Color(ms.color);
      const bMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      const bMesh = new THREE.Mesh(beaconGeo, bMat);
      grp.add(bMesh);

      const hMat = new THREE.MeshBasicMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const halo = new THREE.Mesh(haloGeo, hMat);
      halo.rotation.x = Math.PI / 2;
      grp.add(halo);

      const light = new THREE.PointLight(color, 1.2, 2.5);
      grp.add(light);

      bMesh.userData = { index: i };
      scene.add(grp);

      beacons.push({ group: grp, mesh: bMesh, halo, index: i, light, color });
    });

    // Raycast Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(beacons.map((b) => b.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const idx = hit.userData.index as number;
        if (typeof idx === 'number') {
          setActiveIndex(idx);
        }
      }
    };

    renderer.domElement.addEventListener('click', handlePointerClick);

    // Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Camera smoothly tracks active milestone target
      const targetPoint = pathPoints[activeIndex];
      const targetCamX = targetPoint.x * 0.5;
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.lookAt(targetPoint.x * 0.3, 0, 0);

      // Pulse halos
      beacons.forEach((b) => {
        const isActive = b.index === activeIndex;
        const scale = isActive ? 1.4 + Math.sin(elapsed * 3.5) * 0.2 : 1.0;
        b.halo.scale.set(scale, scale, scale);
        b.light.intensity = isActive ? 2.5 : 0.8;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.domElement.removeEventListener('click', handlePointerClick);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      tubeGeo.dispose();
      tubeMat.dispose();
      beaconGeo.dispose();
      haloGeo.dispose();
    };
  }, [webglSupported, activeIndex]);

  const currentMilestone = VERIFIED_MILESTONES[activeIndex];

  const getCategoryIcon = (cat: Milestone['category']) => {
    switch (cat) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'Hackathon':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'Project':
        return <Rocket className="w-4 h-4 text-indigo-400" />;
      default:
        return <Calendar className="w-4 h-4 text-pink-400" />;
    }
  };

  if (!webglSupported) {
    return (
      <WebGLFallback
        title="3D JOURNEY & TIMELINE"
        subtitle="Chronological milestones rendered in accessible 2D format."
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* 3D Timeline Viewport */}
      <div className="relative w-full rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden p-4 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E8] dark:border-[#222225] pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0A0A0A] dark:text-white">
              3D PATHWAY // CAREER & LEARNING TIMELINE
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase">
            Click any beacon along the trajectory to explore
          </span>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full h-[280px] sm:h-[340px]">
          <div ref={containerRef} className="w-full h-full cursor-pointer" />

          {/* Stepper Controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md p-1.5 rounded-lg border border-[#E5E5E8] dark:border-[#262626]">
            <button
              onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
              disabled={activeIndex === 0}
              className="p-1.5 rounded hover:bg-[#F5F5F7] dark:hover:bg-[#222] disabled:opacity-40 transition-colors"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4 text-[#0A0A0A] dark:text-white" />
            </button>
            <span className="text-[11px] font-mono font-bold px-2 text-[#0A0A0A] dark:text-white">
              {activeIndex + 1} / {VERIFIED_MILESTONES.length}
            </span>
            <button
              onClick={() => setActiveIndex((prev) => Math.min(VERIFIED_MILESTONES.length - 1, prev + 1))}
              disabled={activeIndex === VERIFIED_MILESTONES.length - 1}
              className="p-1.5 rounded hover:bg-[#F5F5F7] dark:hover:bg-[#222] disabled:opacity-40 transition-colors"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-4 h-4 text-[#0A0A0A] dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Milestone Inspection Card */}
      <div className="p-6 rounded-2xl border border-[#0A0A0A] dark:border-[#333333] bg-white dark:bg-[#111113] neu-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E8] dark:border-[#222225] pb-4">
          <div className="flex items-center gap-2.5">
            {getCategoryIcon(currentMilestone.category)}
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3]">
              {currentMilestone.category} · {currentMilestone.year}
            </span>
          </div>
          <span className="text-xs font-mono uppercase font-bold text-cyan-500">
            {currentMilestone.organization}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
            {currentMilestone.title}
          </h3>
          <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed font-sans">
            {currentMilestone.summary}
          </p>
        </div>

        <div className="pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] font-bold block mb-2">
            Verified Milestone Highlights:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#0A0A0A] dark:text-[#EDEDED]">
            {currentMilestone.keyPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-[#FAFAFA] dark:bg-[#17171A] border border-[#E5E5E8] dark:border-[#262626]">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelinePath3D;
