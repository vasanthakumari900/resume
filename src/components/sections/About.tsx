import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveInspector } from './InteractiveInspector';
import { Sparkles, Code2, Palette, Database } from 'lucide-react';

export const About: React.FC = () => {
  const avatarCanvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = avatarCanvasRef.current;
    if (!container) return;

    let animId: number;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f0ff, 2.5, 6);
    pointLight.position.set(1.5, 2, 2);
    scene.add(pointLight);

    // Abstract 3D Developer Identity Artifact (No fake human face)
    const avatarGroup = new THREE.Group();

    // Central Floating Octahedron Core
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x121218,
      roughness: 0.2,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    avatarGroup.add(coreMesh);

    // Wireframe Cage
    const wireGeo = new THREE.WireframeGeometry(coreGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const wireLines = new THREE.LineSegments(wireGeo, wireMat);
    avatarGroup.add(wireLines);

    // Orbiting Satellite Rings
    const ringGeo = new THREE.RingGeometry(1.2, 1.22, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x52525b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    avatarGroup.add(ring);

    scene.add(avatarGroup);

    const animate = () => {
      const elapsed = performance.now() * 0.001;
      avatarGroup.rotation.y = elapsed * 0.45;
      avatarGroup.rotation.x = Math.sin(elapsed * 0.5) * 0.25;
      avatarGroup.position.y = Math.sin(elapsed * 1.4) * 0.08;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-[#060608] border-t border-[#E5E5E5] dark:border-[#262626] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Main Holographic Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Abstract 3D Identity Object & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0A0A0A] dark:bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] dark:text-[#A3A3A3] font-semibold">
                INDEX // 02 · HOLOGRAPHIC PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] dark:text-white uppercase tracking-tight leading-[1.08] font-display">
              {PERSONAL_INFO.aboutHeadline}
            </h2>

            {/* Abstract 3D Developer Identity Node */}
            <div className="relative w-full h-[260px] rounded-2xl border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#0E0E12] overflow-hidden flex items-center justify-center p-4 neu-card">
              <div ref={avatarCanvasRef} className="w-full h-full" />
              <div className="absolute bottom-3 left-3 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded bg-white/90 dark:bg-[#141418]/90 border border-[#E5E5E8] dark:border-[#27272a] text-[10px] font-mono uppercase text-[#737373] dark:text-[#A3A3A3]">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>ABSTRACT DEVELOPER NODE // TB-01</span>
              </div>
            </div>

            {/* Verified Credentials Metadata */}
            <div className="pt-2 font-mono text-xs text-[#737373] dark:text-[#A3A3A3] space-y-2 bg-[#FAFAFA] dark:bg-[#0F0F13] p-4 rounded-xl border border-[#E5E5E8] dark:border-[#242428]">
              <p>
                <strong className="text-[#0A0A0A] dark:text-white">LOCATION:</strong> {PERSONAL_INFO.location.toUpperCase()}
              </p>
              <p>
                <strong className="text-[#0A0A0A] dark:text-white">INSTITUTION:</strong> DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE
              </p>
              <p>
                <strong className="text-[#0A0A0A] dark:text-white">DEGREE:</strong> B.SC. COMPUTER SCIENCE (2024–2027) · CGPA 8.27/10
              </p>
            </div>
          </div>

          {/* Right Column: Holographic Narrative & Pipeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#525252] dark:text-[#D4D4D4] leading-relaxed font-normal">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Workflow Pipeline */}
            <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#262626] space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737373] dark:text-[#A3A3A3] font-bold block">
                CORE WORKFLOW PIPELINE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                <div className="p-4 border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#111114] rounded-xl neu-card space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-[#737373]">
                    <span>01 // UX</span>
                    <Palette className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">DESIGN</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Figma design systems, wireframes, ergonomic hierarchy, and click-through prototypes.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#111114] rounded-xl neu-card space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-[#737373]">
                    <span>02 // CODE</span>
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">DEVELOPMENT</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Component-driven React.js interfaces, responsive CSS, and state contracts.
                  </p>
                </div>

                <div className="p-4 border border-[#E5E5E8] dark:border-[#262626] bg-[#FAFAFA] dark:bg-[#111114] rounded-xl neu-card space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-[#737373]">
                    <span>03 // DATA</span>
                    <Database className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A0A0A] dark:text-white uppercase">TECHNOLOGY</h4>
                  <p className="text-[11px] text-[#525252] dark:text-[#A3A3A3] font-sans leading-snug">
                    Real-world data integration, ML explainability, and production edge deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Interaction & Design System Inspector */}
        <div className="space-y-4 pt-6 border-t border-[#E5E5E5] dark:border-[#262626]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono text-xs text-[#737373] dark:text-[#A3A3A3] pb-2 gap-2">
            <span className="font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider">
              INTERACTION & DESIGN SYSTEM INSPECTOR
            </span>
            <span className="uppercase">FIGMA TO PRODUCTION WORKFLOW</span>
          </div>
          <InteractiveInspector />
        </div>

        {/* Currently Focused On */}
        <div className="p-8 sm:p-10 border border-[#0A0A0A] dark:border-[#333338] bg-[#FAFAFA] dark:bg-[#111114] rounded-2xl neu-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E5E5] dark:border-[#262626] pb-4 font-mono">
            <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white uppercase tracking-wider font-display">
              CURRENTLY FOCUSED ON
            </h3>
            <span className="text-xs text-cyan-500 uppercase font-bold">
              GROWTH TRAJECTORY // 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            {PERSONAL_INFO.currentlyFocusedOn.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-[#0D0D10] border border-[#E5E5E8] dark:border-[#262626] rounded-xl neu-flat flex items-start gap-3"
              >
                <span className="font-bold text-cyan-400">0{idx + 1}.</span>
                <span className="text-[#0A0A0A] dark:text-[#EDEDED] font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
