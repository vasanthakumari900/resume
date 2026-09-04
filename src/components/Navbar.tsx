import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Moon, Sun, FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
  onOpenCaseStudy?: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

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
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/80 dark:bg-[#0A0A0C]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-bold tracking-tight text-sm shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span>{PERSONAL_INFO.monogram}</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white dark:ring-neutral-950 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 tracking-tight">
                UI/UX · Product Designer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 dark:bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-200/70 dark:border-neutral-800/70 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors border border-neutral-200/60 dark:border-neutral-800/60"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* View Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200/70 dark:hover:bg-neutral-800 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-500" />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-xs transition-all hover:shadow-indigo-500/10 hover:shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle theme"
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white dark:bg-[#0A0A0C] border-b border-neutral-200 dark:border-neutral-800 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 font-semibold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                View Full Resume
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs"
              >
                <Sparkles className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
