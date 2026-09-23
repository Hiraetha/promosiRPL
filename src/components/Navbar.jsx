import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSekolah from '../assets/logo/logo-sekolah-cropped.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kompetensi', href: '#kompetensi' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Kegiatan', href: '#kegiatan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Karier', href: '#karier' },
    { name: 'Prestasi', href: '#prestasi' },
  ];

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on outside click or window resize
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-2 sm:top-4 z-50 mb-6 sm:mb-8 md:mb-12">
      <div className="glass-nav border border-soft-blue/70 rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-xs">
        {/* Left: Logo & School Identity (Clean typography & proper spacing) */}
        <a className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group min-w-0" href="#beranda">
          <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl p-1 bg-white border border-soft-blue flex items-center justify-center shrink-0 shadow-xs group-hover:border-tech-blue transition-colors">
            <img 
              alt="Logo SMKN 12 Jakarta" 
              className="h-full w-full object-contain" 
              src={logoSekolah}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/assets/logo sekolah.png";
              }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-dark-text leading-tight group-hover:text-deep-blue transition-colors truncate">
              SMKN 12 JAKARTA
            </span>
            <span className="text-[9px] sm:text-[11px] font-bold text-tech-blue tracking-wider uppercase truncate">
              Rekayasa Perangkat Lunak
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links (Hidden on < lg) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                  isActive
                    ? 'font-bold text-white bg-deep-blue shadow-xs'
                    : 'font-semibold text-muted-text hover:text-deep-blue hover:bg-soft-blue/30'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop/Tablet CTA Button (Hidden on mobile < md to prevent cramming) */}
          <a 
            className="hidden md:inline-flex items-center gap-2 bg-deep-blue hover:bg-tech-blue text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-tech-blue/25 active:scale-95 whitespace-nowrap" 
            href="#kompetensi"
          >
            <span>Jelajahi RPL</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Toggle Button (Ergonomic, clear touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-dark-text hover:text-deep-blue hover:bg-soft-blue/40 border border-soft-blue/70 transition-all focus:outline-none active:scale-95 flex items-center justify-center bg-white/70 shadow-xs"
            aria-label="Buka Menu Navigasi"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-deep-blue" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Hierarchical, organized, includes full-width CTA) */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-3 sm:p-4 glass-nav border border-soft-blue/80 rounded-2xl shadow-xl space-y-2 animate-scale-up">
          <div className="flex items-center justify-between px-2 pt-1 pb-1 border-b border-soft-blue/40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-text">
              Navigasi Halaman
            </span>
            <span className="text-[10px] font-semibold text-tech-blue">
              SMKN 12 Jakarta
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-deep-blue text-white font-bold shadow-xs'
                      : 'text-dark-text bg-white/50 hover:bg-soft-blue/40'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-azure"></span>}
                </a>
              );
            })}
          </div>

          {/* Mobile Primary Action Button */}
          <div className="pt-2 border-t border-soft-blue/50">
            <a
              href="#kompetensi"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-deep-blue hover:bg-tech-blue text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all active:scale-98"
            >
              <span>Jelajahi Kompetensi RPL</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
