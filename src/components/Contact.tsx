import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Phone,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Fire celebratory micro-confetti
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // safe fallback
    }

    setStatus('submitted');

    // Create mailto link
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 400);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background Accent Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Communication Direct Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400">
              <MessageSquare className="w-3 h-3 text-indigo-500" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
              Let's build something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                meaningful.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              I'm interested in opportunities where I can contribute through UI/UX design, product thinking,
              frontend development, and emerging technology. Whether you have an open role, an idea, or
              simply want to connect, feel free to reach out.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-400 font-semibold">
                  Direct Email Address
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Inbox
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-neutral-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors shrink-0 shadow-2xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-neutral-800 transition-all shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-500" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-neutral-800 transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111115] border border-neutral-200/90 dark:border-neutral-800/90 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Compose a quick inquiry. It launches your default email client pre-filled.
                </p>
              </div>

              {status === 'submitted' ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-in fade-in">
                  <Sparkles className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">
                    Preparing Your Email Client...
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">
                    If your mail app did not open automatically, click the email address above to write directly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Maya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] block">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. UI/UX Design Role / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-neutral-600 dark:text-neutral-400 text-[11px] block">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Tharun, I came across your portfolio and would like to talk about..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Tharun</span>
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
