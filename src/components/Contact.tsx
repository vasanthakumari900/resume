import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

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

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Bold Editorial Callout */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#737373] font-semibold">
                INDEX // 06
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.05]">
              Let's build <br />
              something <br />
              meaningful.
            </h2>

            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-lg font-normal">
              I'm interested in opportunities where I can contribute through UI/UX design, product
              thinking, frontend development, and technology.
            </p>

            {/* Direct Email & Action */}
            <div className="pt-4 space-y-4">
              <div className="p-6 bg-[#141414] border border-[#262626] space-y-3 font-mono">
                <span className="text-[10px] text-[#737373] uppercase block">DIRECT EMAIL ADDRESS</span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:underline underline-offset-4 break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 text-xs text-[#A3A3A3] hover:text-white uppercase transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="pt-2 border-t border-[#262626] text-xs text-[#737373]">
                  PHONE: {PERSONAL_INFO.phoneDisplay}
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#0A0A0A] font-bold hover:bg-[#E5E5E5] transition-colors uppercase tracking-wider"
                >
                  <span>EMAIL ME</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-[#262626] text-white hover:border-white transition-colors uppercase"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 border border-[#262626] text-white hover:border-white transition-colors uppercase"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Composer */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-[#141414] border border-[#262626] space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="text-xs font-mono uppercase text-[#737373] block">INQUIRY FORM</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1">
                  Send a Direct Message
                </h3>
              </div>

              {status === 'submitted' ? (
                <div className="p-6 bg-[#1A1A1A] border border-[#333333] space-y-3 font-mono text-xs">
                  <span className="font-bold text-white block">INITIALIZING EMAIL CLIENT...</span>
                  <p className="text-[#A3A3A3]">
                    If your mail application did not trigger automatically, write directly to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-white underline underline-offset-4"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] text-[#737373] uppercase block">YOUR NAME</label>
                    <input
                      type="text"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#0A0A0A] border border-[#262626] text-white placeholder-[#525252] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-[#737373] uppercase block">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="EMAIL@DOMAIN.COM"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#0A0A0A] border border-[#262626] text-white placeholder-[#525252] focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-[#737373] uppercase block">MESSAGE *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="DISCUSS A PROJECT, ROLE, OR IDEA..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#0A0A0A] border border-[#262626] text-white placeholder-[#525252] focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 bg-white text-[#0A0A0A] font-bold text-xs uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors"
                  >
                    DISPATCH MESSAGE →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
