import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoSekolah from '../assets/logo/logo-sekolah-cropped.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-4 z-50 mb-8 md:mb-12">
      <div className="glass-nav border border-soft-blue/70 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        {/* Left: Logo & School Identity */}
        <a className="flex items-center gap-3 shrink-0 group" href="#beranda">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl p-0.5 bg-white border border-soft-blue/80 flex items-center justify-center shrink-0 shadow-xs group-hover:border-tech-blue transition-colors">
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
          <div className="flex flex-col">
            <span className="font-bold text-xs sm:text-sm tracking-tight text-dark-text leading-tight group-hover:text-deep-blue transition-colors">
              SMKN 12 JAKARTA
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-tech-blue tracking-wider uppercase">
              Rekayasa Perangkat Lunak
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
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

        {/* Right: Rounded CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            className="group inline-flex items-center gap-2 bg-deep-blue hover:bg-tech-blue text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-tech-blue/25 active:scale-95 bg-[#2C5EAD]" 
            href="#kompetensi"
          >
            <span className="leading-none">Jelajahi RPL</span>
            <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-dark-text hover:bg-soft-blue/40 transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 glass-nav border border-soft-blue/80 rounded-3xl shadow-xl space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-2xl text-xs font-semibold transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-deep-blue text-white'
                  : 'text-dark-text hover:bg-soft-blue/30'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
