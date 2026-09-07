import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenRecruiterScan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenRecruiterScan }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md ${
        scrolled
          ? 'py-3.5 border-b border-[#E5E5E5] dark:border-[#262626] shadow-xs'
          : 'py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Minimal Monogram / Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <span className="font-extrabold tracking-tight text-sm text-[#0A0A0A] dark:text-white uppercase font-display">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-[#737373] dark:text-[#A3A3A3] tracking-wider uppercase pl-2 border-l border-[#E5E5E5] dark:border-[#333333]">
              UI/UX & Product Design
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs font-mono tracking-wider transition-colors duration-150 relative py-1 ${
                    isActive
                      ? 'text-[#0A0A0A] dark:text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#0A0A0A] dark:after:bg-white'
                      : 'text-[#525252] dark:text-[#A3A3A3] hover:text-[#0A0A0A] dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: 60s Recruiter Scan + Theme Switcher + View Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* 60s Recruiter Scan Button */}
            <button
              onClick={onOpenRecruiterScan}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider font-bold uppercase bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] neu-pill hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
              title="Open condensed 60-second recruiter briefing"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>60s RECRUITER SCAN</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-1.5 text-[#0A0A0A] dark:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1A1A1A] border border-[#E5E5E8] dark:border-[#2E2E2E] neu-btn transition-colors"
              title={theme === 'light' ? 'Switch to Obsidian Dark' : 'Switch to Clean Light'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Resume Sheet Button */}
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase border border-[#0A0A0A] dark:border-[#404040] text-[#0A0A0A] dark:text-[#EDEDED] bg-white dark:bg-[#141414] hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] neu-btn transition-colors duration-150"
            >
              RESUME
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 text-[#0A0A0A] dark:text-white border border-[#E5E5E8] dark:border-[#2E2E2E] neu-btn"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              className="p-1.5 text-[#0A0A0A] dark:text-white hover:bg-[#F7F7F7] dark:hover:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#2E2E2E]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pt-4 pb-6 bg-white dark:bg-[#0A0A0A] border-b border-[#E5E5E5] dark:border-[#262626] space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-mono tracking-wider uppercase py-2 text-[#0A0A0A] dark:text-white hover:pl-2 transition-all border-b border-[#F7F7F7] dark:border-[#1F1F1F]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterScan();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono tracking-wider uppercase font-bold bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] neu-pill"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>60s RECRUITER SCAN</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-xs font-mono tracking-wider uppercase border border-[#0A0A0A] dark:border-[#404040] text-[#0A0A0A] dark:text-white bg-white dark:bg-[#141414] hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              >
                VIEW RESUME
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
