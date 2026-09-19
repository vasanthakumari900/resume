import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { isWebGLAvailable } from './webglUtils';
import { WebGLFallback } from './WebGLFallback';

export type StationId = 'hero' | 'about' | 'skills' | 'projects' | 'journey' | 'resume' | 'contact';

interface StationWaypoint {
  pos: THREE.Vector3;
  lookAt: THREE.Vector3;
}

const STATION_WAYPOINTS: Record<StationId, StationWaypoint> = {
  hero: {
    pos: new THREE.Vector3(0, 2.2, 5.0),
    lookAt: new THREE.Vector3(0, 0.75, 0),
  },
  about: {
    pos: new THREE.Vector3(-3.2, 1.8, 3.2),
    lookAt: new THREE.Vector3(-2.8, 1.2, 0.5),
  },
  skills: {
    pos: new THREE.Vector3(3.4, 2.3, 3.2),
    lookAt: new THREE.Vector3(2.9, 1.4, 0.5),
  },
  projects: {
    pos: new THREE.Vector3(0, 1.8, 1.8),
    lookAt: new THREE.Vector3(0, 1.1, -1.8),
  },
  journey: {
    pos: new THREE.Vector3(0, 4.2, 2.2),
    lookAt: new THREE.Vector3(0, 0.6, -3.2),
  },
  resume: {
    pos: new THREE.Vector3(-1.8, 1.7, 2.6),
    lookAt: new THREE.Vector3(-1.5, 1.2, 0.2),
  },
  contact: {
    pos: new THREE.Vector3(1.8, 1.7, 2.6),
    lookAt: new THREE.Vector3(1.5, 1.2, 0.2),
  },
};

interface MasterWorld3DProps {
  activeStation: StationId;
  onOpenProject: (projectId: string) => void;
  onOpenResume: () => void;
  className?: string;
}

export const MasterWorld3D: React.FC<MasterWorld3DProps> = ({
  activeStation,
  onOpenProject,
  onOpenResume,
  className = 'w-full h-full',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported] = useState<boolean>(isWebGLAvailable);
  const currentStationRef = useRef<StationId>(activeStation);

  useEffect(() => {
    currentStationRef.current = activeStation;
  }, [activeStation]);

  useEffect(() => {
    if (!webglSupported) return;
    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060609, 0.045);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      120
    );
    const initialWp = STATION_WAYPOINTS[currentStationRef.current];
    camera.position.copy(initialWp.pos);
    const currentLookAt = initialWp.lookAt.clone();

    // Renderer
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const cyanRim = new THREE.PointLight(0x00f0ff, 2.2, 12);
    cyanRim.position.set(-4, 3, -1);
    scene.add(cyanRim);

    const emeraldAccent = new THREE.PointLight(0x10b981, 1.8, 10);
    emeraldAccent.position.set(4, 3, -2);
    scene.add(emeraldAccent);

    // Shared Materials
    const darkObsidianMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.35,
      metalness: 0.85,
    });
    const brushedMetalMat = new THREE.MeshStandardMaterial({
      color: 0x222228,
      roughness: 0.25,
      metalness: 0.95,
    });
    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0x71717a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const glowCyanMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
    });

    // 1. STUDIO ARCHITECTURE (Floor & Structural Panels)
    const studioFloorGeo = new THREE.PlaneGeometry(30, 30, 30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x09090d,
      roughness: 0.6,
      metalness: 0.7,
      wireframe: false,
    });
    const studioFloor = new THREE.Mesh(studioFloorGeo, floorMat);
    studioFloor.rotation.x = -Math.PI / 2;
    studioFloor.position.y = -0.01;
    studioFloor.receiveShadow = true;
    scene.add(studioFloor);

    // Subtle Grid Lines on Floor
    const gridHelper = new THREE.GridHelper(26, 26, 0x27272a, 0x18181b);
    gridHelper.position.y = 0.005;
    scene.add(gridHelper);

    // Background Studio Wall Panels
    const backWallGeo = new THREE.BoxGeometry(24, 8, 0.2);
    const backWallMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c10,
      roughness: 0.8,
    });
    const backWall = new THREE.Mesh(backWallGeo, backWallMat);
    backWall.position.set(0, 4, -6);
    backWall.receiveShadow = true;
    scene.add(backWall);

    // 2. STATION 1: THE DEVELOPER WORKSPACE DESK (Hero Focal Point)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, 0, 0);

    // Desk Slab
    const deskGeo = new THREE.BoxGeometry(4.4, 0.09, 2.2);
    const deskMesh = new THREE.Mesh(deskGeo, darkObsidianMat);
    deskMesh.position.y = 0.8;
    deskMesh.receiveShadow = true;
    deskGroup.add(deskMesh);

    // Desk Legs
    const legGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 16);
    [
      [-2.05, 0.4, -0.95],
      [2.05, 0.4, -0.95],
      [-2.05, 0.4, 0.95],
      [2.05, 0.4, 0.95],
    ].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, brushedMetalMat);
      leg.position.set(x, y, z);
      deskGroup.add(leg);
    });

    // Desk Mat
    const matGeo = new THREE.BoxGeometry(2.8, 0.005, 1.3);
    const blotter = new THREE.Mesh(matGeo, brushedMetalMat);
    blotter.position.set(0, 0.848, 0.1);
    deskGroup.add(blotter);

    // Laptop (MacBook Pro style)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.85, 0.28);

    const lpBaseGeo = new THREE.BoxGeometry(1.4, 0.024, 0.95);
    const lpBase = new THREE.Mesh(lpBaseGeo, aluminumMat);
    laptopGroup.add(lpBase);

    // Laptop Lid
    const lpLidGroup = new THREE.Group();
    lpLidGroup.position.set(0, 0.012, -0.47);

    const lpScreenBackGeo = new THREE.BoxGeometry(1.4, 0.92, 0.018);
    const lpScreenBack = new THREE.Mesh(lpScreenBackGeo, aluminumMat);
    lpScreenBack.position.set(0, 0.46, 0);
    lpLidGroup.add(lpScreenBack);

    // Glowing Code Screen Texture
    const cvsLp = document.createElement('canvas');
    cvsLp.width = 512;
    cvsLp.height = 320;
    const ctxLp = cvsLp.getContext('2d');
    if (ctxLp) {
      ctxLp.fillStyle = '#060608';
      ctxLp.fillRect(0, 0, 512, 320);
      ctxLp.fillStyle = '#111116';
      ctxLp.fillRect(0, 0, 512, 24);
      ctxLp.fillStyle = '#ef4444';
      ctxLp.beginPath();
      ctxLp.arc(14, 12, 4, 0, Math.PI * 2);
      ctxLp.fill();
      ctxLp.fillStyle = '#22c55e';
      ctxLp.beginPath();
      ctxLp.arc(26, 12, 4, 0, Math.PI * 2);
      ctxLp.fill();

      ctxLp.fillStyle = '#38bdf8';
      ctxLp.font = 'bold 20px monospace';
      ctxLp.fillText('[ THARUN B S ]', 32, 64);
      ctxLp.fillStyle = '#a1a1aa';
      ctxLp.font = '11px monospace';
      ctxLp.fillText('Computer Science Student · UI/UX Designer', 32, 86);
      ctxLp.fillStyle = '#34d399';
      ctxLp.font = '10px monospace';
      ctxLp.fillText('> SIH 2026 SHORTLISTED · CGPA 8.27/10', 32, 108);

      const codeLines = [
        'const tharun = {',
        '  role: "UI/UX & Frontend Builder",',
        '  builds: ["Pralaya AI", "Certiseal", "CS Portal"],',
        '  status: "Open for Opportunities",',
        '};',
      ];
      codeLines.forEach((l, i) => {
        ctxLp.fillStyle = l.includes('role') ? '#38bdf8' : l.includes('builds') ? '#34d399' : '#e4e4e7';
        ctxLp.fillText(l, 32, 140 + i * 20);
      });
    }
    const lpTex = new THREE.CanvasTexture(cvsLp);
    const lpScreenFrontGeo = new THREE.PlaneGeometry(1.34, 0.86);
    const lpScreenFrontMat = new THREE.MeshStandardMaterial({
      map: lpTex,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.35,
      roughness: 0.15,
    });
    const lpScreenFront = new THREE.Mesh(lpScreenFrontGeo, lpScreenFrontMat);
    lpScreenFront.position.set(0, 0.46, 0.01);
    lpLidGroup.add(lpScreenFront);
    lpLidGroup.rotation.x = -THREE.MathUtils.degToRad(18);
    laptopGroup.add(lpLidGroup);

    deskGroup.add(laptopGroup);

    // Ultrawide Monitor Behind Laptop
    const monGroup = new THREE.Group();
    monGroup.position.set(0, 0.85, -0.65);

    const monBaseGeo = new THREE.CylinderGeometry(0.25, 0.27, 0.02, 32);
    const monBase = new THREE.Mesh(monBaseGeo, brushedMetalMat);
    monGroup.add(monBase);

    const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.85, 16);
    const pole = new THREE.Mesh(poleGeo, brushedMetalMat);
    pole.position.set(0, 0.42, 0);
    monGroup.add(pole);

    const monFrameGeo = new THREE.BoxGeometry(3.0, 1.25, 0.04);
    const monFrame = new THREE.Mesh(monFrameGeo, brushedMetalMat);
    monFrame.position.set(0, 0.95, 0.02);
    monGroup.add(monFrame);

    // Monitor Screen with UI Wireframe Telemetry
    const cvsMon = document.createElement('canvas');
    cvsMon.width = 512;
    cvsMon.height = 256;
    const ctxMon = cvsMon.getContext('2d');
    if (ctxMon) {
      ctxMon.fillStyle = '#060608';
      ctxMon.fillRect(0, 0, 512, 256);
      ctxMon.strokeStyle = '#27272a';
      ctxMon.strokeRect(20, 20, 225, 216);
      ctxMon.strokeRect(265, 20, 225, 216);

      ctxMon.fillStyle = '#38bdf8';
      ctxMon.font = 'bold 12px monospace';
      ctxMon.fillText('PRALAYA AI // RISK RADAR', 32, 44);
      ctxMon.fillStyle = '#34d399';
      ctxMon.fillText('CERTISEAL // VERIFIED OK', 278, 44);

      // Radar rings
      ctxMon.strokeStyle = '#38bdf8';
      ctxMon.beginPath();
      ctxMon.arc(130, 130, 55, 0, Math.PI * 2);
      ctxMon.stroke();

      // Gauge
      ctxMon.strokeStyle = '#34d399';
      ctxMon.lineWidth = 4;
      ctxMon.beginPath();
      ctxMon.arc(375, 130, 45, 0, Math.PI * 1.6);
      ctxMon.stroke();
    }
    const monTex = new THREE.CanvasTexture(cvsMon);
    const monScreenGeo = new THREE.PlaneGeometry(2.92, 1.18);
    const monScreenMat = new THREE.MeshStandardMaterial({
      map: monTex,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.28,
      roughness: 0.2,
    });
    const monScreen = new THREE.Mesh(monScreenGeo, monScreenMat);
    monScreen.position.set(0, 0.95, 0.041);
    monGroup.add(monScreen);

    deskGroup.add(monGroup);

    // Studio Headphones on Aluminum Stand
    const hpStandGroup = new THREE.Group();
    hpStandGroup.position.set(-1.65, 0.85, 0.1);
    const hpBaseGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.02, 24);
    const hpBase = new THREE.Mesh(hpBaseGeo, brushedMetalMat);
    hpStandGroup.add(hpBase);
    const hpPoleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.35, 16);
    const hpPole = new THREE.Mesh(hpPoleGeo, brushedMetalMat);
    hpPole.position.y = 0.17;
    hpStandGroup.add(hpPole);
    // Headphone Arc
    const hpArcGeo = new THREE.TorusGeometry(0.1, 0.015, 12, 24, Math.PI);
    const hpArc = new THREE.Mesh(hpArcGeo, darkObsidianMat);
    hpArc.position.set(0, 0.35, 0);
    hpArc.rotation.z = Math.PI;
    hpStandGroup.add(hpArc);
    deskGroup.add(hpStandGroup);

    // Ceramic Mug
    const mugGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.16, 24);
    const mugMat = new THREE.MeshStandardMaterial({ color: 0xededed, roughness: 0.3 });
    const mug = new THREE.Mesh(mugGeo, mugMat);
    mug.position.set(1.5, 0.93, 0.1);
    deskGroup.add(mug);

    // Wireless Keyboard & Mouse
    const kbGeo = new THREE.BoxGeometry(0.8, 0.015, 0.28);
    const kb = new THREE.Mesh(kbGeo, darkObsidianMat);
    kb.position.set(0, 0.858, 0.62);
    deskGroup.add(kb);

    const mouseGeo = new THREE.BoxGeometry(0.12, 0.03, 0.18);
    const mouseMesh = new THREE.Mesh(mouseGeo, darkObsidianMat);
    mouseMesh.position.set(0.65, 0.865, 0.62);
    deskGroup.add(mouseMesh);

    scene.add(deskGroup);

    // 3. STATION 2: HOLOGRAPHIC PROFILE STATION (About Section)
    const aboutGroup = new THREE.Group();
    aboutGroup.position.set(-2.8, 1.2, 0.5);

    // Pedestal
    const pedGeo = new THREE.CylinderGeometry(0.4, 0.45, 0.8, 32);
    const pedestal = new THREE.Mesh(pedGeo, darkObsidianMat);
    pedestal.position.y = -0.4;
    aboutGroup.add(pedestal);

    // Floating Abstract Identity Octahedron
    const octGeo = new THREE.OctahedronGeometry(0.5, 0);
    const octMesh = new THREE.Mesh(octGeo, darkObsidianMat);
    const octWireGeo = new THREE.WireframeGeometry(octGeo);
    const octWire = new THREE.LineSegments(
      octWireGeo,
      new THREE.LineBasicMaterial({ color: 0x38bdf8 })
    );
    octMesh.add(octWire);
    aboutGroup.add(octMesh);

    // Orbital Halo Ring
    const haloGeo = new THREE.RingGeometry(0.7, 0.72, 48);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    haloRing.rotation.x = Math.PI / 2.5;
    aboutGroup.add(haloRing);

    scene.add(aboutGroup);

    // 4. STATION 3: 3D TECHNOLOGY CORE (Skills Section)
    const techCoreGroup = new THREE.Group();
    techCoreGroup.position.set(2.9, 1.4, 0.5);

    const crystalCoreGeo = new THREE.IcosahedronGeometry(0.5, 1);
    const crystalCore = new THREE.Mesh(crystalCoreGeo, glowCyanMat);
    techCoreGroup.add(crystalCore);

    // Concentric Orbital Rings
    const orbitRings: THREE.Mesh[] = [];
    [1.0, 1.4, 1.8].forEach((rad, idx) => {
      const ringGeo = new THREE.RingGeometry(rad - 0.015, rad + 0.015, 64);
      const ring = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({ color: 0x52525b, side: THREE.DoubleSide, wireframe: true })
      );
      ring.rotation.x = Math.PI / 2 + (idx - 1) * 0.3;
      techCoreGroup.add(ring);
      orbitRings.push(ring);
    });

    // Orbiting Technology Spheres
    const techSpheres: { mesh: THREE.Mesh; angle: number; radius: number; speed: number }[] = [];
    const techColors = [0x38bdf8, 0x34d399, 0xfbbf24, 0x818cf8, 0xf472b6, 0x00f0ff];
    [1.0, 1.4, 1.8, 1.2, 1.6, 1.1].forEach((rad, idx) => {
      const sGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const sMat = new THREE.MeshStandardMaterial({
        color: techColors[idx % techColors.length],
        emissive: techColors[idx % techColors.length],
        emissiveIntensity: 0.6,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      techCoreGroup.add(sMesh);
      techSpheres.push({
        mesh: sMesh,
        angle: (idx / 6) * Math.PI * 2,
        radius: rad,
        speed: 0.6 + idx * 0.1,
      });
    });

    scene.add(techCoreGroup);

    // 5. STATION 4: 3D PROJECT UNIVERSE (Unique Project-Specific Physical Objects!)
    const projectsGroup = new THREE.Group();
    projectsGroup.position.set(0, 1.1, -1.8);

    // Project Click Detection
    const interactiveProjectMeshes: { mesh: THREE.Object3D; projectId: string }[] = [];

    // OBJECT A: PRALAYA AI — 3D GIS & Topographic Hazard Operations Radar
    const pralayaGroup = new THREE.Group();
    pralayaGroup.position.set(0, 0.4, 0); // Center elevated
    // Stepped Topographic Contour Base
    [0.9, 0.7, 0.5].forEach((size, idx) => {
      const stepGeo = new THREE.CylinderGeometry(size, size + 0.05, 0.06, 6);
      const stepMat = new THREE.MeshStandardMaterial({
        color: idx === 2 ? 0x059669 : 0x111827,
        roughness: 0.3,
        metalness: 0.8,
      });
      const step = new THREE.Mesh(stepGeo, stepMat);
      step.position.y = idx * 0.07;
      pralayaGroup.add(step);
    });
    // Pulsing Hazard Beacon & Radar Ring
    const radarRingGeo = new THREE.RingGeometry(1.0, 1.03, 32);
    const radarRingMat = new THREE.MeshBasicMaterial({ color: 0x10b981, side: THREE.DoubleSide });
    const radarRing = new THREE.Mesh(radarRingGeo, radarRingMat);
    radarRing.rotation.x = Math.PI / 2;
    radarRing.position.y = 0.25;
    pralayaGroup.add(radarRing);

    pralayaGroup.userData = { projectId: 'pralaya-ai' };
    projectsGroup.add(pralayaGroup);
    interactiveProjectMeshes.push({ mesh: pralayaGroup, projectId: 'pralaya-ai' });

    // OBJECT B: CERTISEAL — 3D Cryptographic Verification Trust Shield & Certificate Slab
    const certisealGroup = new THREE.Group();
    certisealGroup.position.set(-1.8, 0.1, 0.4);
    // Faceted Trust Shield
    const shieldGeo = new THREE.ConeGeometry(0.55, 0.8, 4);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.9,
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.rotation.x = Math.PI;
    certisealGroup.add(shield);
    // Certificate Document Slab behind shield
    const docSlabGeo = new THREE.BoxGeometry(0.7, 0.9, 0.04);
    const docSlabMat = new THREE.MeshStandardMaterial({ color: 0xededed, roughness: 0.4 });
    const docSlab = new THREE.Mesh(docSlabGeo, docSlabMat);
    docSlab.position.set(0, 0, -0.1);
    certisealGroup.add(docSlab);

    certisealGroup.userData = { projectId: 'certiseal' };
    projectsGroup.add(certisealGroup);
    interactiveProjectMeshes.push({ mesh: certisealGroup, projectId: 'certiseal' });

    // OBJECT C: CS ACADEMIC PORTAL — 3D Academic Dashboard & Resource Module
    const portalGroup = new THREE.Group();
    portalGroup.position.set(1.8, 0.1, 0.4);
    // Academic Terminal Console
    const conBaseGeo = new THREE.BoxGeometry(0.9, 0.06, 0.6);
    const conBase = new THREE.Mesh(conBaseGeo, darkObsidianMat);
    portalGroup.add(conBase);
    // Display Screen
    const conScreenGeo = new THREE.BoxGeometry(0.85, 0.5, 0.04);
    const conScreenMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
    });
    const conScreen = new THREE.Mesh(conScreenGeo, conScreenMat);
    conScreen.position.set(0, 0.28, -0.2);
    conScreen.rotation.x = -0.2;
    portalGroup.add(conScreen);
    // Floating Syllabus Book Cubes
    [-0.25, 0, 0.25].forEach((x, i) => {
      const bookGeo = new THREE.BoxGeometry(0.18, 0.05, 0.22);
      const bookMat = new THREE.MeshStandardMaterial({
        color: i === 1 ? 0x38bdf8 : 0x71717a,
        roughness: 0.3,
      });
      const book = new THREE.Mesh(bookGeo, bookMat);
      book.position.set(x, 0.06, 0.05);
      portalGroup.add(book);
    });

    portalGroup.userData = { projectId: 'cs-academic-portal' };
    projectsGroup.add(portalGroup);
    interactiveProjectMeshes.push({ mesh: portalGroup, projectId: 'cs-academic-portal' });

    scene.add(projectsGroup);

    // 6. STATION 5: 3D GLOWING TIMELINE PATHWAY (Journey Section)
    const journeyGroup = new THREE.Group();
    journeyGroup.position.set(0, 0.6, -3.2);

    const pathPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 6; i++) {
      const px = -2.4 + i * 0.8;
      const py = Math.sin((i / 6) * Math.PI) * 0.35;
      const pz = Math.cos((i / 6) * Math.PI) * 0.4;
      pathPts.push(new THREE.Vector3(px, py, pz));
    }
    const pathCurve = new THREE.CatmullRomCurve3(pathPts);
    const pathTubeGeo = new THREE.TubeGeometry(pathCurve, 48, 0.025, 8, false);
    const pathTube = new THREE.Mesh(pathTubeGeo, glowCyanMat);
    journeyGroup.add(pathTube);

    // Milestone Beacon Spheres
    pathPts.forEach((pt) => {
      const bGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const bMat = new THREE.MeshStandardMaterial({
        color: 0x34d399,
        emissive: 0x059669,
        emissiveIntensity: 0.8,
      });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      bMesh.position.copy(pt);
      journeyGroup.add(bMesh);
    });

    scene.add(journeyGroup);

    // 7. STATION 6: 3D RESUME TABLET (Resume Section)
    const resumeDocGroup = new THREE.Group();
    resumeDocGroup.position.set(-1.5, 1.2, 0.2);

    const docTabletGeo = new THREE.BoxGeometry(0.9, 1.3, 0.03);
    const docTablet = new THREE.Mesh(docTabletGeo, darkObsidianMat);
    resumeDocGroup.add(docTablet);

    const docSheetGeo = new THREE.PlaneGeometry(0.86, 1.26);
    const docSheetMat = new THREE.MeshStandardMaterial({
      color: 0xededed,
      roughness: 0.2,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.15,
    });
    const docSheet = new THREE.Mesh(docSheetGeo, docSheetMat);
    docSheet.position.set(0, 0, 0.016);
    resumeDocGroup.add(docSheet);

    resumeDocGroup.userData = { isResume: true };
    scene.add(resumeDocGroup);

    // 8. STATION 7: 3D COMMUNICATION TERMINAL (Contact Section)
    const contactHubGroup = new THREE.Group();
    contactHubGroup.position.set(1.5, 1.2, 0.2);

    const phoneBodyGeo = new THREE.BoxGeometry(0.65, 1.3, 0.04);
    const phoneBody = new THREE.Mesh(phoneBodyGeo, darkObsidianMat);
    contactHubGroup.add(phoneBody);

    const phoneScreenGeo = new THREE.PlaneGeometry(0.61, 1.26);
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      color: 0x09090c,
      emissive: 0x10b981,
      emissiveIntensity: 0.2,
    });
    const phoneScreen = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreen.position.set(0, 0, 0.021);
    contactHubGroup.add(phoneScreen);

    scene.add(contactHubGroup);

    // Ambient Depth Particles
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = Math.random() * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.45,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Pointer Interaction & Smooth Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const rayMouse = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onPointerClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      rayMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      rayMouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(rayMouse, camera);

      // Check projects
      const hits = raycaster.intersectObjects(
        interactiveProjectMeshes.map((p) => p.mesh),
        true
      );
      if (hits.length > 0) {
        let parent: THREE.Object3D | null = hits[0].object;
        while (parent && !parent.userData?.projectId) {
          parent = parent.parent;
        }
        if (parent && parent.userData?.projectId) {
          onOpenProject(parent.userData.projectId);
          return;
        }
      }

      // Check resume doc
      const resumeHits = raycaster.intersectObject(resumeDocGroup, true);
      if (resumeHits.length > 0) {
        onOpenResume();
      }
    };

    window.addEventListener('mousemove', onPointerMove);
    renderer.domElement.addEventListener('click', onPointerClick);

    // Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let prevTime = performance.now();
    const animate = () => {
      const now = performance.now();
      const delta = Math.min((now - prevTime) * 0.001, 0.1);
      prevTime = now;
      const elapsed = now * 0.001;

      // Damped mouse parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Target Station Waypoint
      const currentStation = currentStationRef.current;
      const targetWaypoint = STATION_WAYPOINTS[currentStation];

      // Parallax-offset camera target
      const targetCamPos = targetWaypoint.pos
        .clone()
        .add(new THREE.Vector3(mouse.x * 0.35, mouse.y * 0.25, 0));

      // Smooth Camera Glide (0.04 lerp)
      camera.position.lerp(targetCamPos, 0.04);
      currentLookAt.lerp(targetWaypoint.lookAt, 0.04);
      camera.lookAt(currentLookAt);

      // Station-specific animations
      // About Octahedron rotation
      octMesh.rotation.y = elapsed * 0.6;
      octMesh.rotation.x = Math.sin(elapsed * 0.4) * 0.3;
      haloRing.rotation.z = elapsed * 0.3;

      // Tech Core Orbit
      crystalCore.rotation.y = elapsed * 0.5;
      techSpheres.forEach((s) => {
        s.angle += delta * s.speed;
        s.mesh.position.x = Math.cos(s.angle) * s.radius;
        s.mesh.position.z = Math.sin(s.angle) * s.radius;
        s.mesh.position.y = Math.sin(s.angle * 2) * 0.15;
      });

      // Projects floating animation
      pralayaGroup.rotation.y = elapsed * 0.3;
      radarRing.scale.setScalar(1.0 + Math.sin(elapsed * 2.5) * 0.1);
      certisealGroup.rotation.y = -0.2 + Math.sin(elapsed * 1.5) * 0.08;
      portalGroup.rotation.y = 0.2 + Math.cos(elapsed * 1.5) * 0.08;

      // Resume & Contact subtle breathing
      resumeDocGroup.rotation.y = Math.sin(elapsed * 1.2) * 0.06;
      resumeDocGroup.position.y = 1.2 + Math.cos(elapsed * 1.4) * 0.03;
      contactHubGroup.rotation.y = Math.cos(elapsed * 1.2) * 0.06;
      contactHubGroup.position.y = 1.2 + Math.sin(elapsed * 1.4) * 0.03;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      renderer.domElement.removeEventListener('click', onPointerClick);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      deskGeo.dispose();
      studioFloorGeo.dispose();
      backWallGeo.dispose();
      monFrameGeo.dispose();
      monScreenGeo.dispose();
      lpBaseGeo.dispose();
      lpScreenBackGeo.dispose();
      lpScreenFrontGeo.dispose();
      octGeo.dispose();
      crystalCoreGeo.dispose();
      pathTubeGeo.dispose();
      particleGeo.dispose();
      lpTex.dispose();
      monTex.dispose();
    };
  }, [webglSupported, onOpenProject, onOpenResume]);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-auto cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Continuous 3D Digital World"
    />
  );
};

export default MasterWorld3D;
