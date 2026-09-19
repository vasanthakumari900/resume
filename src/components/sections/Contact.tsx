import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUpRight, ArrowRight, Check, Copy, Send, Smartphone, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const phoneCanvasRef = useRef<HTMLDivElement | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('submitted');
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 400);
  };

  // 3D Communication Terminal / Smartphone
  useEffect(() => {
    const container = phoneCanvasRef.current;
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

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 3, 3);
    scene.add(keyLight);

    const terminalGlow = new THREE.PointLight(0x00f0ff, 2.0, 5);
    terminalGlow.position.set(0, 0, 1.2);
    scene.add(terminalGlow);

    // Dynamic Communicator Screen Texture
    const cvs = document.createElement('canvas');
    cvs.width = 380;
    cvs.height = 640;
    const ctx = cvs.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#09090c';
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      // Top Status Bar
      ctx.fillStyle = '#18181c';
      ctx.fillRect(0, 0, cvs.width, 32);
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(24, 16, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#a1a1aa';
      ctx.font = '10px monospace';
      ctx.fillText('SIGNAL: ENCRYPTED // ONLINE', 36, 19);

      // Monogram Avatar
      ctx.fillStyle = '#18181b';
      ctx.beginPath();
      ctx.arc(cvs.width / 2, 100, 36, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px monospace';
      ctx.fillText('TB', cvs.width / 2 - 14, 108);

      // Name & Monogram
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(PERSONAL_INFO.name.toUpperCase(), 110, 165);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px monospace';
      ctx.fillText('COMMUNICATION HUB', 125, 185);

      // Info Cards
      const infoItems = [
        { label: 'EMAIL DISPATCH', val: PERSONAL_INFO.email, status: 'OPEN' },
        { label: 'DIRECT TEL', val: PERSONAL_INFO.phoneDisplay, status: 'READY' },
        { label: 'LOCATION', val: 'Tiruvallur, Tamil Nadu', status: 'VERIFIED' },
        { label: 'TIMEZONE', val: 'IST (UTC +5:30)', status: 'ACTIVE' },
      ];

      infoItems.forEach((item, i) => {
        const y = 220 + i * 85;
        ctx.fillStyle = '#121216';
        ctx.fillRect(20, y, cvs.width - 40, 70);
        ctx.strokeStyle = '#27272a';
        ctx.lineWidth = 1;
        ctx.strokeRect(20, y, cvs.width - 40, 70);

        ctx.fillStyle = '#71717a';
        ctx.font = '9px monospace';
        ctx.fillText(item.label, 32, y + 22);

        ctx.fillStyle = '#22c55e';
        ctx.fillText(`[ ${item.status} ]`, cvs.width - 85, y + 22);

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px sans-serif';
        ctx.fillText(item.val, 32, y + 46);
      });

      // Bottom Message Bar
      ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.fillRect(20, 570, cvs.width - 40, 44);
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1;
      ctx.strokeRect(20, 570, cvs.width - 40, 44);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 11px monospace';
      ctx.fillText('DISPATCH MESSAGE DIRECTLY ↗', 75, 597);
    }

    const screenTex = new THREE.CanvasTexture(cvs);
    screenTex.anisotropy = 4;

    // 3D Smartphone Body
    const phoneGroup = new THREE.Group();
    const bodyGeo = new THREE.BoxGeometry(1.4, 2.4, 0.08);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x121214,
      roughness: 0.25,
      metalness: 0.95,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    phoneGroup.add(bodyMesh);

    // Screen Plane
    const screenGeo = new THREE.PlaneGeometry(1.36, 2.34);
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.3,
      roughness: 0.15,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0, 0.042);
    phoneGroup.add(screenMesh);

    // Wireframe Bezel
    const edgeGeo = new THREE.EdgesGeometry(bodyGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    phoneGroup.add(edgeLines);

    scene.add(phoneGroup);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    renderer.domElement.addEventListener('mousemove', onPointerMove);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      phoneGroup.rotation.y = mouse.x * 0.45 + Math.sin(elapsed * 1.2) * 0.05;
      phoneGroup.rotation.x = -mouse.y * 0.35 + Math.cos(elapsed * 1.4) * 0.04;
      phoneGroup.position.y = Math.sin(elapsed * 1.5) * 0.06;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
      bodyGeo.dispose();
      screenGeo.dispose();
      edgeGeo.dispose();
      bodyMat.dispose();
      screenMat.dispose();
      edgeMat.dispose();
      screenTex.dispose();
    };
  }, []);

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#060608] text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222226]">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 07 · COMMUNICATION HUB
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] font-display">
              Let's Build <br /> Something Meaningful.
            </h2>
          </div>

          <div className="font-mono text-xs text-[#737373] uppercase">
            Direct Line & Inquiries
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Methods & Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed font-normal">
              I am actively open for UI/UX design, product thinking, and frontend development roles. Feel free to reach out directly or submit a message below.
            </p>

            {/* Direct Email Card */}
            <div className="p-6 bg-[#111114] border border-[#26262a] rounded-2xl space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#737373] uppercase">DIRECT EMAIL ADDRESS</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 hover:underline underline-offset-4 break-all transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-[#A3A3A3] hover:text-white uppercase transition-colors shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#222226] flex flex-wrap items-center justify-between gap-2 text-xs text-[#737373]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phoneDisplay}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0A0A0A] font-bold hover:bg-neutral-200 transition-colors uppercase tracking-wider rounded-xl shadow-xs"
              >
                <span>EMAIL ME</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-[#27272a] text-white hover:border-cyan-400 transition-colors uppercase rounded-xl"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-[#27272a] text-white hover:border-cyan-400 transition-colors uppercase rounded-xl"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Inquiry Form */}
            <div className="p-6 sm:p-8 bg-[#111114] border border-[#26262a] rounded-2xl space-y-4">
              <div className="border-b border-[#222226] pb-3">
                <span className="text-[10px] font-mono uppercase text-[#737373] block">DIRECT INQUIRY</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight font-display">
                  Send A Direct Message
                </h3>
              </div>

              {status === 'submitted' ? (
                <div className="p-4 bg-[#17171c] border border-cyan-500/30 rounded-xl space-y-2 font-mono text-xs">
                  <span className="font-bold text-cyan-400 block">INITIALIZING EMAIL CLIENT...</span>
                  <p className="text-[#A3A3A3]">
                    If your mail application does not open automatically, please send your message directly to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-white underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
                  <div>
                    <label className="block text-[10px] text-[#737373] uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-[#26262a] text-white rounded-lg focus:outline-hidden focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#737373] uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-[#26262a] text-white rounded-lg focus:outline-hidden focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#737373] uppercase mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss a product role, project, or collaboration..."
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0C] border border-[#26262a] text-white rounded-lg focus:outline-hidden focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white text-[#0A0A0A] font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>DISPATCH MESSAGE VIA EMAIL</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: 3D Communication Terminal / Smartphone Model */}
          <div className="lg:col-span-6 relative w-full h-[460px] sm:h-[560px] rounded-2xl border border-[#26262a] bg-[#0c0c10] overflow-hidden flex items-center justify-center p-4 neu-card">
            <div ref={phoneCanvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            <div className="absolute top-4 right-4 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141418]/90 backdrop-blur-md border border-[#27272a] rounded-full text-[10px] font-mono tracking-wider uppercase text-cyan-400">
                <Smartphone className="w-3 h-3" />
                <span>3D TERMINAL // LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
