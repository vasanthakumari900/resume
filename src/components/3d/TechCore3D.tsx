import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { WebGLFallback } from './WebGLFallback';
import { Sparkles } from 'lucide-react';

export interface TechNodeInfo {
  name: string;
  category: 'Design' | 'Frontend' | 'Product & AI' | 'Programming' | 'Data' | 'Tools';
  note: string;
  relatedProjects: string[];
  color: string;
}

const VERIFIED_TECH_NODES: TechNodeInfo[] = [
  {
    name: 'Figma',
    category: 'Design',
    note: 'Design systems, wireframes, interactive user flows & state mockups',
    relatedProjects: ['PRALAYA AI', 'CERTISEAL', 'CS ACADEMIC PORTAL'],
    color: '#00f0ff',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    note: 'Component architecture, state management, hooks & responsive UI',
    relatedProjects: ['PRALAYA AI', 'CERTISEAL', 'CS ACADEMIC PORTAL'],
    color: '#38bdf8',
  },
  {
    name: 'JavaScript / TS',
    category: 'Frontend',
    note: 'Modern client logic, asynchronous flows & typed contracts',
    relatedProjects: ['CERTISEAL', 'CS ACADEMIC PORTAL', 'PRALAYA AI'],
    color: '#fbbf24',
  },
  {
    name: 'Python',
    category: 'Programming',
    note: 'FastAPI backends, data preprocessing & machine learning pipelines',
    relatedProjects: ['PRALAYA AI'],
    color: '#34d399',
  },
  {
    name: 'REST APIs',
    category: 'Product & AI',
    note: 'JSON contract schema design, telemetry data endpoints & verification flows',
    relatedProjects: ['PRALAYA AI', 'CERTISEAL'],
    color: '#818cf8',
  },
  {
    name: 'Leaflet GIS',
    category: 'Product & AI',
    note: 'Spatial hazard mapping, geospatial coordinate overlays & risk boundaries',
    relatedProjects: ['PRALAYA AI'],
    color: '#22c55e',
  },
  {
    name: 'SQL',
    category: 'Data',
    note: 'Relational database schema modeling, normalization & complex queries',
    relatedProjects: ['CS ACADEMIC PORTAL'],
    color: '#f472b6',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    note: 'Version control, branch workflows, PR reviews & CI/CD deployment on Vercel',
    relatedProjects: ['PRALAYA AI', 'CERTISEAL', 'CS ACADEMIC PORTAL'],
    color: '#e2e8f0',
  },
];

import { isWebGLAvailable } from './webglUtils';

interface TechCore3DProps {
  onSelectTech?: (tech: TechNodeInfo) => void;
}

export const TechCore3D: React.FC<TechCore3DProps> = ({ onSelectTech }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedTech, setSelectedTech] = useState<TechNodeInfo>(VERIFIED_TECH_NODES[1]); // Default React.js
  const [webglSupported] = useState<boolean>(isWebGLAvailable);
  const [isPaused, setIsPaused] = useState<boolean>(false);

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
    camera.position.set(0, 1.8, 5.0);

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

    const coreLight = new THREE.PointLight(0x00f0ff, 2.5, 6);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    // 1. Central Tech Core Object
    const coreGroup = new THREE.Group();

    // Inner Glowing Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.5, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // Outer Geometric Wireframe Cage (Icosahedron)
    const cageGeo = new THREE.IcosahedronGeometry(0.75, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    scene.add(coreGroup);

    // 2. Concentric Orbital Rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x52525b,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });

    const orbitalRadii = [1.6, 2.2, 2.8];
    orbitalRadii.forEach((radius, idx) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.015, radius + 0.015, 64);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + (idx - 1) * 0.25;
      ring.rotation.y = (idx * Math.PI) / 6;
      scene.add(ring);
    });

    // 3. Orbiting Technology Nodes
    const nodeMeshes: {
      mesh: THREE.Mesh;
      tech: TechNodeInfo;
      radius: number;
      speed: number;
      angle: number;
      yOffset: number;
      tilt: number;
    }[] = [];

    const nodeGeo = new THREE.SphereGeometry(0.16, 24, 24);

    VERIFIED_TECH_NODES.forEach((tech, i) => {
      const radius = orbitalRadii[i % orbitalRadii.length];
      const speed = 0.5 + (i % 3) * 0.15;
      const angle = (i / VERIFIED_TECH_NODES.length) * Math.PI * 2;
      const yOffset = ((i % 3) - 1) * 0.35;
      const tilt = ((i % 2) * 2 - 1) * 0.2;

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(tech.color),
        emissive: new THREE.Color(tech.color),
        emissiveIntensity: 0.5,
        roughness: 0.2,
        metalness: 0.8,
      });

      const mesh = new THREE.Mesh(nodeGeo, mat);
      mesh.userData = { tech };
      scene.add(mesh);

      nodeMeshes.push({ mesh, tech, radius, speed, angle, yOffset, tilt });
    });

    // Raycasting for Hover & Click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const hitTech = hit.userData.tech as TechNodeInfo;
        if (hitTech) {
          setSelectedTech(hitTech);
          if (onSelectTech) onSelectTech(hitTech);
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

    // Clock & Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Rotate central core
      coreGroup.rotation.y = elapsed * 0.4;
      coreGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.2;

      // Pulse core light
      coreLight.intensity = 2.0 + Math.sin(elapsed * 2.5) * 0.5;

      // Orbit tech nodes
      if (!isPaused) {
        nodeMeshes.forEach((n) => {
          n.angle += delta * n.speed * 0.4;
          n.mesh.position.x = Math.cos(n.angle) * n.radius;
          n.mesh.position.z = Math.sin(n.angle) * n.radius;
          n.mesh.position.y = n.yOffset + Math.sin(n.angle * 2) * 0.15;
          n.mesh.rotation.y += delta * 1.2;
        });
      }

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
      innerCoreGeo.dispose();
      cageGeo.dispose();
      nodeGeo.dispose();
      innerCoreMat.dispose();
      cageMat.dispose();
      ringMat.dispose();
    };
  }, [webglSupported, isPaused, onSelectTech]);

  if (!webglSupported) {
    return (
      <WebGLFallback
        title="THARUN TECH CORE"
        subtitle="Full technology stack rendered in high-efficiency fallback mode."
      />
    );
  }

  return (
    <div className="relative w-full rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden p-4 sm:p-6 shadow-sm">
      {/* 3D Canvas Area */}
      <div className="relative w-full h-[380px] sm:h-[460px]">
        <div ref={containerRef} className="w-full h-full cursor-pointer" />

        {/* Central Core HUD Badge */}
        <div className="absolute top-4 left-4 pointer-events-none space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md border border-[#E5E5E8] dark:border-[#262626] rounded-full text-[11px] font-mono uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold text-[#0A0A0A] dark:text-white">THARUN // TECH CORE</span>
          </div>
          <p className="text-[10px] text-[#737373] dark:text-[#A3A3A3] font-mono pl-1">
            Click any orbiting node to inspect capability
          </p>
        </div>

        {/* Orbit Controls Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="px-3 py-1.5 text-[10px] font-mono tracking-wider uppercase bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md border border-[#E5E5E8] dark:border-[#262626] text-[#0A0A0A] dark:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1F1F1F] rounded-md transition-colors"
          >
            {isPaused ? '▶ RESUME ORBIT' : '⏸ PAUSE ORBIT'}
          </button>
        </div>
      </div>

      {/* Selected Technology Inspection Panel */}
      <div className="mt-4 p-5 rounded-xl border border-[#E5E5E8] dark:border-[#262626] bg-white dark:bg-[#111113] neu-card space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E5E8] dark:border-[#222225] pb-3">
          <div className="flex items-center gap-3">
            <span
              className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
              style={{ backgroundColor: selectedTech.color }}
            />
            <h4 className="text-lg font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
              {selectedTech.name}
            </h4>
            <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#F4F4F6] dark:bg-[#1C1C1F] text-[#737373] dark:text-[#A3A3A3] border border-[#E5E5E8] dark:border-[#2E2E32]">
              {selectedTech.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase">
            VERIFIED CAPABILITY
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#525252] dark:text-[#D4D4D4] font-sans leading-relaxed">
          {selectedTech.note}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          <span className="text-[#737373] dark:text-[#A3A3A3] uppercase flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Applied in:
          </span>
          {selectedTech.relatedProjects.map((proj) => (
            <span
              key={proj}
              className="px-2.5 py-1 rounded bg-[#FAFAFA] dark:bg-[#17171A] border border-[#E5E5E8] dark:border-[#262626] font-bold text-[#0A0A0A] dark:text-white"
            >
              {proj}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCore3D;
