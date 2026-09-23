import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.round((scrollY / docHeight) * 100)));
      }

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-deep-blue hover:bg-tech-blue text-white shadow-xl shadow-deep-blue/35 hover:shadow-tech-blue/45 border-2 border-white/90 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-soft-blue cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2.5"
          />
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="none"
            stroke="#4BB8FA"
            strokeWidth="2.5"
            strokeDasharray={132}
            strokeDashoffset={132 - (132 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Animated Arrow Icon */}
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1 relative z-10" />

        {/* Tooltip on Desktop Hover */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-dark-text/90 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:block">
          Kembali ke atas ({scrollProgress}%)
        </span>
      </button>
    </div>
  );
}
