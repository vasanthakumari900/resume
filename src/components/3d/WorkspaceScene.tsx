import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { WebGLFallback } from './WebGLFallback';

import { isWebGLAvailable } from './webglUtils';

interface WorkspaceSceneProps {
  className?: string;
  onExploreClick?: () => void;
}

export const WorkspaceScene: React.FC<WorkspaceSceneProps> = ({ className = 'w-full h-full' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported] = useState<boolean>(isWebGLAvailable);

  useEffect(() => {
    if (!webglSupported) return;
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 2.3, 4.4);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(3.5, 5.0, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x00f0ff, 1.8, 8);
    rimLight.position.set(-2.5, 2.5, -1.0);
    scene.add(rimLight);

    const laptopGlow = new THREE.PointLight(0x38bdf8, 1.5, 3.5);
    laptopGlow.position.set(0, 1.0, 0.4);
    scene.add(laptopGlow);

    // Materials
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x121214,
      roughness: 0.35,
      metalness: 0.8,
    });
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x242428,
      roughness: 0.25,
      metalness: 0.95,
    });
    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0x888892,
      roughness: 0.3,
      metalness: 0.85,
    });
    const darkPlastic = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      roughness: 0.6,
      metalness: 0.2,
    });

    // 1. Desk Surface
    const deskGroup = new THREE.Group();
    const deskGeo = new THREE.BoxGeometry(4.4, 0.09, 2.2);
    const deskMesh = new THREE.Mesh(deskGeo, deskMat);
    deskMesh.receiveShadow = true;
    deskGroup.add(deskMesh);

    // Desk Legs
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.2, 16);
    const legPositions: [number, number, number][] = [
      [-2.05, -1.1, -0.95],
      [2.05, -1.1, -0.95],
      [-2.05, -1.1, 0.95],
      [2.05, -1.1, 0.95],
    ];
    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, metalMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      deskGroup.add(leg);
    });

    // Desk Mat / Blotter
    const blotterGeo = new THREE.BoxGeometry(2.8, 0.005, 1.4);
    const blotterMat = new THREE.MeshStandardMaterial({
      color: 0x18181c,
      roughness: 0.85,
    });
    const blotter = new THREE.Mesh(blotterGeo, blotterMat);
    blotter.position.set(0, 0.048, 0.1);
    blotter.receiveShadow = true;
    deskGroup.add(blotter);

    scene.add(deskGroup);

    // 2. Dynamic Screen Textures (Procedural Canvas)
    const createScreenTexture = (type: 'laptop' | 'monitor') => {
      const cvs = document.createElement('canvas');
      cvs.width = 512;
      cvs.height = type === 'laptop' ? 320 : 256;
      const ctx = cvs.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#060608';
        ctx.fillRect(0, 0, cvs.width, cvs.height);

        // Header bar
        ctx.fillStyle = '#111116';
        ctx.fillRect(0, 0, cvs.width, 24);
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(14, 12, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(26, 12, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(38, 12, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#737373';
        ctx.font = '10px monospace';
        ctx.fillText(type === 'laptop' ? 'tharun-workspace.tsx' : 'telemetry-status.sys', 54, 15);

        if (type === 'laptop') {
          // Monogram brand
          ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
          ctx.font = 'bold 22px monospace';
          ctx.fillText('[ THARUN B S ]', 32, 64);
          ctx.fillStyle = '#a3a3a3';
          ctx.font = '11px monospace';
          ctx.fillText('UI/UX Designer · Frontend Builder', 32, 84);
          ctx.fillStyle = '#00f0ff';
          ctx.font = '10px monospace';
          ctx.fillText('> SIH 2026 SHORTLISTED · CGPA 8.27', 32, 104);

          // Simulated code lines
          const lines = [
            'const developer = {',
            '  name: "Tharun B S",',
            '  focus: ["UI/UX Design", "React.js", "AI Verification"],',
            '  status: "Ready for High-Impact Roles",',
            '  builds: ["Pralaya AI", "Certiseal", "CS Portal"],',
            '};',
          ];
          ctx.fillStyle = '#52525b';
          ctx.font = '10px monospace';
          lines.forEach((line, i) => {
            if (i === 0 || i === lines.length - 1) ctx.fillStyle = '#e0e7ff';
            else if (line.includes('name')) ctx.fillStyle = '#38bdf8';
            else if (line.includes('focus')) ctx.fillStyle = '#34d399';
            else if (line.includes('status')) ctx.fillStyle = '#f472b6';
            else ctx.fillStyle = '#a1a1aa';
            ctx.fillText(line, 32, 134 + i * 18);
          });
        } else {
          // Monitor Wireframe Graphics & Telemetry
          ctx.strokeStyle = '#27272a';
          ctx.lineWidth = 1;
          ctx.strokeRect(24, 38, 220, 190);
          ctx.strokeRect(268, 38, 220, 190);

          ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
          ctx.fillRect(28, 42, 212, 34);
          ctx.fillStyle = '#38bdf8';
          ctx.font = 'bold 11px monospace';
          ctx.fillText('PRALAYA AI // RISK RADAR', 36, 62);

          // Mini graph bars
          const barHeights = [40, 65, 30, 85, 95, 70, 110, 80, 50, 90];
          barHeights.forEach((h, i) => {
            ctx.fillStyle = i === 4 ? '#22c55e' : '#38bdf8';
            ctx.fillRect(40 + i * 18, 210 - h, 12, h);
          });

          ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
          ctx.fillRect(272, 42, 212, 34);
          ctx.fillStyle = '#34d399';
          ctx.font = 'bold 11px monospace';
          ctx.fillText('CERTISEAL // VERIFIED OK', 280, 62);

          // Circular gauge
          ctx.strokeStyle = '#34d399';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(378, 140, 42, 0, Math.PI * 1.5);
          ctx.stroke();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 14px monospace';
          ctx.fillText('99.4%', 360, 145);
        }
      }
      const tex = new THREE.CanvasTexture(cvs);
      tex.anisotropy = 4;
      return tex;
    };

    const laptopScreenTex = createScreenTexture('laptop');
    const monitorScreenTex = createScreenTexture('monitor');

    // 3. Laptop Model
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.05, 0.28);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(1.4, 0.024, 0.95);
    const baseMesh = new THREE.Mesh(baseGeo, aluminumMat);
    baseMesh.castShadow = true;
    laptopGroup.add(baseMesh);

    // Keyboard Area
    const kbGeo = new THREE.BoxGeometry(1.28, 0.003, 0.52);
    const kbMesh = new THREE.Mesh(kbGeo, darkPlastic);
    kbMesh.position.set(0, 0.013, -0.15);
    laptopGroup.add(kbMesh);

    // Trackpad
    const padGeo = new THREE.BoxGeometry(0.48, 0.002, 0.32);
    const padMesh = new THREE.Mesh(padGeo, metalMat);
    padMesh.position.set(0, 0.013, 0.26);
    laptopGroup.add(padMesh);

    // Laptop Screen Lid (Rotated Back ~112 deg)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.012, -0.47);

    const screenBackGeo = new THREE.BoxGeometry(1.4, 0.92, 0.018);
    const screenBackMesh = new THREE.Mesh(screenBackGeo, aluminumMat);
    screenBackMesh.position.set(0, 0.46, 0);
    screenBackMesh.castShadow = true;
    lidGroup.add(screenBackMesh);

    const screenFrontGeo = new THREE.PlaneGeometry(1.34, 0.86);
    const screenFrontMat = new THREE.MeshStandardMaterial({
      map: laptopScreenTex,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.35,
      roughness: 0.15,
    });
    const screenFrontMesh = new THREE.Mesh(screenFrontGeo, screenFrontMat);
    screenFrontMesh.position.set(0, 0.46, 0.01);
    lidGroup.add(screenFrontMesh);

    lidGroup.rotation.x = -THREE.MathUtils.degToRad(18);
    laptopGroup.add(lidGroup);
    scene.add(laptopGroup);

    // 4. Ultrawide Monitor Model (Behind Laptop)
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(0, 0.05, -0.7);

    // Stand Base & Pole
    const monBaseGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.02, 32);
    const monBase = new THREE.Mesh(monBaseGeo, metalMat);
    monitorGroup.add(monBase);

    const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16);
    const pole = new THREE.Mesh(poleGeo, metalMat);
    pole.position.set(0, 0.45, 0);
    pole.castShadow = true;
    monitorGroup.add(pole);

    // Monitor Frame
    const monFrameGeo = new THREE.BoxGeometry(3.0, 1.25, 0.04);
    const monFrame = new THREE.Mesh(monFrameGeo, metalMat);
    monFrame.position.set(0, 0.95, 0.02);
    monFrame.castShadow = true;
    monitorGroup.add(monFrame);

    // Monitor Display Screen
    const monScreenGeo = new THREE.PlaneGeometry(2.92, 1.18);
    const monScreenMat = new THREE.MeshStandardMaterial({
      map: monitorScreenTex,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.28,
      roughness: 0.2,
    });
    const monScreen = new THREE.Mesh(monScreenGeo, monScreenMat);
    monScreen.position.set(0, 0.95, 0.041);
    monitorGroup.add(monScreen);

    scene.add(monitorGroup);

    // 5. Minimal Desk Accessories (Coffee Mug & Wireless Mouse)
    // Mug
    const mugGroup = new THREE.Group();
    mugGroup.position.set(1.4, 0.05, 0.1);
    const mugGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.18, 24);
    const mugMat = new THREE.MeshStandardMaterial({ color: 0xededed, roughness: 0.3 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.castShadow = true;
    mugGroup.add(mug);
    scene.add(mugGroup);

    // Mouse
    const mouseGeo = new THREE.BoxGeometry(0.14, 0.04, 0.22);
    const mouseMesh = new THREE.Mesh(mouseGeo, darkPlastic);
    mouseMesh.position.set(1.0, 0.07, 0.28);
    mouseMesh.castShadow = true;
    scene.add(mouseMesh);

    // 6. Floating Holographic Nodes (Representing Digital Identity)
    const floatGroup = new THREE.Group();
    const nodeGeos = [
      new THREE.OctahedronGeometry(0.12),
      new THREE.IcosahedronGeometry(0.1),
      new THREE.TetrahedronGeometry(0.12),
    ];
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      wireframe: true,
    });

    const floatingNodes: { mesh: THREE.Mesh; seed: number; baseY: number }[] = [];
    const nodeOffsets: [number, number, number][] = [
      [-1.8, 1.2, 0.2],
      [1.8, 1.4, -0.1],
      [-1.2, 1.6, -0.5],
    ];

    nodeOffsets.forEach(([x, y, z], i) => {
      const node = new THREE.Mesh(nodeGeos[i % nodeGeos.length], nodeMat);
      node.position.set(x, y, z);
      floatGroup.add(node);
      floatingNodes.push({ mesh: node, seed: i * 2, baseY: y });
    });
    scene.add(floatGroup);

    // Pointer Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onPointerMove);

    // Responsive Canvas Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    const animate = () => {
      const elapsedTime = performance.now() * 0.001;

      // Smooth camera damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.45;
      camera.position.y = 2.2 + mouse.y * 0.25;
      camera.lookAt(0, 0.65, 0);

      // Subtle float animation for tech nodes
      floatingNodes.forEach((node) => {
        node.mesh.rotation.x = elapsedTime * 0.8 + node.seed;
        node.mesh.rotation.y = elapsedTime * 0.6 + node.seed;
        node.mesh.position.y = node.baseY + Math.sin(elapsedTime * 1.5 + node.seed) * 0.08;
      });

      // Gentle laptop glow pulsing
      laptopGlow.intensity = 1.3 + Math.sin(elapsedTime * 2.0) * 0.3;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      deskGeo.dispose();
      legGeo.dispose();
      blotterGeo.dispose();
      baseGeo.dispose();
      kbGeo.dispose();
      padGeo.dispose();
      screenBackGeo.dispose();
      screenFrontGeo.dispose();
      monBaseGeo.dispose();
      poleGeo.dispose();
      monFrameGeo.dispose();
      monScreenGeo.dispose();
      mugGeo.dispose();
      mouseGeo.dispose();
      nodeGeos.forEach((g) => g.dispose());
      laptopScreenTex.dispose();
      monitorScreenTex.dispose();
      deskMat.dispose();
      metalMat.dispose();
      aluminumMat.dispose();
      darkPlastic.dispose();
      blotterMat.dispose();
      screenFrontMat.dispose();
      monScreenMat.dispose();
      mugMat.dispose();
      nodeMat.dispose();
    };
  }, [webglSupported]);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Developer Workspace"
    />
  );
};

export default WorkspaceScene;
