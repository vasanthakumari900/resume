import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PROJECTS } from '../../data/portfolioData';
import { WebGLFallback } from './WebGLFallback';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import type { Project } from '../../types';

import { isWebGLAvailable } from './webglUtils';

interface ProjectUniverse3DProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const ProjectUniverse3D: React.FC<ProjectUniverse3DProps> = ({ onOpenCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
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
    camera.position.set(0, 0.4, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(2, 4, 3);
    scene.add(keyLight);

    const cyanGlow = new THREE.PointLight(0x00f0ff, 2.0, 7);
    cyanGlow.position.set(0, 1.5, 1);
    scene.add(cyanGlow);

    // Procedural Card Face Texture Generator
    const createProjectTexture = (proj: Project, index: number) => {
      const cvs = document.createElement('canvas');
      cvs.width = 512;
      cvs.height = 360;
      const ctx = cvs.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0a0a0e';
        ctx.fillRect(0, 0, cvs.width, cvs.height);

        // Border outline
        ctx.strokeStyle = '#27272a';
        ctx.lineWidth = 4;
        ctx.strokeRect(8, 8, cvs.width - 16, cvs.height - 16);

        // Header index badge
        ctx.fillStyle = '#18181b';
        ctx.fillRect(24, 24, 80, 26);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 12px monospace';
        ctx.fillText(`0${index + 1} // POD`, 34, 42);

        // Title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 26px sans-serif';
        ctx.fillText(proj.title, 24, 90);

        // Category
        ctx.fillStyle = '#38bdf8';
        ctx.font = '11px monospace';
        ctx.fillText(proj.category, 24, 115);

        // Dividing line
        ctx.strokeStyle = '#27272a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(24, 130);
        ctx.lineTo(cvs.width - 24, 130);
        ctx.stroke();

        // Subtitle / Abstract representation
        ctx.fillStyle = '#a1a1aa';
        ctx.font = '12px sans-serif';
        const words = proj.subtitle.split(' ');
        let line1 = '';
        let line2 = '';
        words.forEach((w) => {
          if (line1.length + w.length < 32) line1 += `${w} `;
          else line2 += `${w} `;
        });
        ctx.fillText(line1, 24, 155);
        if (line2) ctx.fillText(line2, 24, 175);

        // Tech pills
        let xPos = 24;
        const yPos = 210;
        proj.technologies.slice(0, 4).forEach((tech) => {
          const w = tech.length * 8 + 14;
          ctx.fillStyle = '#1e1e24';
          ctx.fillRect(xPos, yPos, w, 22);
          ctx.fillStyle = '#e4e4e7';
          ctx.font = '10px monospace';
          ctx.fillText(tech, xPos + 7, yPos + 15);
          xPos += w + 8;
        });

        // Bottom inspect cue
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.fillRect(24, 275, cvs.width - 48, 48);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.strokeRect(24, 275, cvs.width - 48, 48);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px monospace';
        ctx.fillText('CLICK TO OPEN CASE STUDY ↗', 140, 305);
      }
      const tex = new THREE.CanvasTexture(cvs);
      tex.anisotropy = 4;
      return tex;
    };

    // 3D Pods
    const podGroup = new THREE.Group();
    const pods: {
      mesh: THREE.Group;
      frontMesh: THREE.Mesh;
      project: Project;
      targetX: number;
      targetY: number;
      targetZ: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotationY: number;
    }[] = [];

    const podPositions = [
      { x: 0, y: 0.1, z: 0.3, rotY: 0 }, // Center: PRALAYA AI
      { x: -1.8, y: -0.1, z: -0.5, rotY: 0.28 }, // Left: CERTISEAL
      { x: 1.8, y: -0.1, z: -0.5, rotY: -0.28 }, // Right: CS ACADEMIC PORTAL
    ];

    const cardGeo = new THREE.BoxGeometry(1.65, 1.15, 0.05);
    const cardBackMat = new THREE.MeshStandardMaterial({
      color: 0x121216,
      roughness: 0.3,
      metalness: 0.85,
    });
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 });

    PROJECTS.forEach((proj, idx) => {
      const pos = podPositions[idx % podPositions.length];
      const pod = new THREE.Group();
      pod.position.set(pos.x, pos.y, pos.z);
      pod.rotation.y = pos.rotY;

      // Card Base
      const baseMesh = new THREE.Mesh(cardGeo, cardBackMat);
      pod.add(baseMesh);

      // Glowing Wireframe Edge
      const wireGeo = new THREE.EdgesGeometry(cardGeo);
      const wireLines = new THREE.LineSegments(wireGeo, edgeMat);
      pod.add(wireLines);

      // Front Canvas Texture
      const tex = createProjectTexture(proj, idx);
      const frontGeo = new THREE.PlaneGeometry(1.61, 1.11);
      const frontMat = new THREE.MeshStandardMaterial({
        map: tex,
        emissive: 0x0ea5e9,
        emissiveIntensity: 0.2,
        roughness: 0.2,
      });
      const frontMesh = new THREE.Mesh(frontGeo, frontMat);
      frontMesh.position.set(0, 0, 0.026);
      frontMesh.userData = { project: proj };
      pod.add(frontMesh);

      podGroup.add(pod);

      pods.push({
        mesh: pod,
        frontMesh,
        project: proj,
        targetX: pos.x,
        targetY: pos.y,
        targetZ: pos.z,
        baseX: pos.x,
        baseY: pos.y,
        baseZ: pos.z,
        rotationY: pos.rotY,
      });
    });

    scene.add(podGroup);

    // Raycaster for Pointer Detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pods.map((p) => p.frontMesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const hitProj = hit.userData.project as Project;
        if (hitProj) {
          setHoveredProject(hitProj.id);
          renderer.domElement.style.cursor = 'pointer';
        }
      } else {
        setHoveredProject(null);
        renderer.domElement.style.cursor = 'default';
      }
    };

    const handlePointerClick = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(pods.map((p) => p.frontMesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const hitProj = hit.userData.project as Project;
        if (hitProj) {
          setSelectedProject(hitProj);
          onOpenCaseStudy(hitProj.id);
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', handlePointerMove);
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
    const animate = () => {
      const elapsed = performance.now() * 0.001;

      pods.forEach((p, i) => {
        const isHovered = hoveredProject === p.project.id;
        const isSelected = selectedProject.id === p.project.id;

        // Target positions
        const targetZ = isHovered || isSelected ? p.baseZ + 0.35 : p.baseZ;
        const targetY = p.baseY + Math.sin(elapsed * 1.5 + i * 1.2) * 0.05 + (isHovered ? 0.1 : 0);

        p.mesh.position.z += (targetZ - p.mesh.position.z) * 0.08;
        p.mesh.position.y += (targetY - p.mesh.position.y) * 0.08;

        // Subtle tilt on hover
        const targetRotY = isHovered ? p.rotationY * 0.4 : p.rotationY;
        p.mesh.rotation.y += (targetRotY - p.mesh.rotation.y) * 0.08;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.domElement.removeEventListener('mousemove', handlePointerMove);
      renderer.domElement.removeEventListener('click', handlePointerClick);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      cardGeo.dispose();
      cardBackMat.dispose();
      edgeMat.dispose();
    };
  }, [webglSupported, hoveredProject, selectedProject, onOpenCaseStudy]);

  if (!webglSupported) {
    return (
      <WebGLFallback
        title="3D PROJECT UNIVERSE"
        subtitle="Explore all verified project builds in accessible 2D card format."
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* 3D Universe Viewport */}
      <div className="relative w-full rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden p-4 sm:p-6 shadow-sm">
        {/* HUD Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E5E8] dark:border-[#222225] pb-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#0A0A0A] dark:text-white">
              PROJECT UNIVERSE // 3D INTERACTIVE PODS
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] uppercase">
            Click any pod or tab to view full case study & architecture
          </span>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full h-[360px] sm:h-[420px]">
          <div ref={containerRef} className="w-full h-full cursor-pointer" />

          {/* Quick Select Pod Buttons Overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-white/90 dark:bg-[#141414]/90 backdrop-blur-md p-1.5 rounded-full border border-[#E5E5E8] dark:border-[#262626] shadow-md max-w-[95%] overflow-x-auto">
            {PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className={`px-3 py-1 text-[11px] font-mono uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                  selectedProject.id === p.id
                    ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] font-bold shadow-xs'
                    : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white'
                }`}
              >
                0{idx + 1} {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Focused Project Detail Bar */}
      <div className="p-6 rounded-2xl border border-[#0A0A0A] dark:border-[#333333] bg-white dark:bg-[#111113] neu-card space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E5E8] dark:border-[#222225] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-500 uppercase">
                {selectedProject.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-[#0A0A0A] dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] dark:text-[#A3A3A3] font-mono">
              {selectedProject.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs shrink-0">
            {/* Case Study Modal Trigger */}
            <button
              onClick={() => onOpenCaseStudy(selectedProject.id)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] uppercase tracking-wider font-bold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CASE STUDY & SPECS</span>
            </button>

            {/* Live Demo */}
            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#E5E5E8] dark:border-[#2E2E32] text-[#0A0A0A] dark:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1A1A1A] rounded-lg transition-colors font-semibold"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub */}
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#E5E5E8] dark:border-[#2E2E32] text-[#0A0A0A] dark:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1A1A1A] rounded-lg transition-colors font-semibold"
              >
                <span>CODE</span>
                <Code2 className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Description & Stack */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-1">
          <div className="md:col-span-8 space-y-3">
            <p className="text-sm text-[#525252] dark:text-[#D4D4D4] leading-relaxed">
              {selectedProject.description}
            </p>
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] font-bold block">
                Verified Architectural Contributions:
              </span>
              <ul className="space-y-1 text-xs font-mono text-[#0A0A0A] dark:text-[#EDEDED]">
                {selectedProject.keyContributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-500 font-bold">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 space-y-2 border-t md:border-t-0 md:border-l border-[#E5E5E8] dark:border-[#222225] pt-4 md:pt-0 md:pl-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] font-bold block">
              Technology Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#F4F4F6] dark:bg-[#1A1A1E] text-[#0A0A0A] dark:text-[#EDEDED] border border-[#E5E5E8] dark:border-[#2A2A2E]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectUniverse3D;
