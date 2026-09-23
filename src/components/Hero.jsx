import React, { useState, useEffect, useMemo } from 'react';
import labPhoto from '../assets/images/lab-komputer.jpg';

export default function Hero() {
  const codeLines = [
    {
      className: '',
      tokens: [
        { text: 'interface', className: 'text-sky-azure font-semibold' },
        { text: ' ' },
        { text: 'RPLStudent', className: 'text-yellow-300' },
        { text: ' {' },
      ],
    },
    {
      className: 'pl-4',
      tokens: [
        { text: 'name: ' },
        { text: "'Siswa SMKN 12'", className: 'text-emerald-300' },
        { text: ';' },
      ],
    },
    {
      className: 'pl-4',
      tokens: [
        { text: 'skills: [' },
        { text: "'Web'", className: 'text-emerald-300' },
        { text: ', ' },
        { text: "'Mobile'", className: 'text-emerald-300' },
        { text: ', ' },
        { text: "'Database'", className: 'text-emerald-300' },
        { text: ', ' },
        { text: "'Game'", className: 'text-emerald-300' },
        { text: '];' },
      ],
    },
    {
      className: 'pl-4',
      tokens: [
        { text: 'certifications: ' },
        { text: "'LKS Internasional'", className: 'text-sky-azure' },
        { text: ';' },
      ],
    },
    {
      className: '',
      tokens: [
        { text: '};' },
      ],
    },
    {
      className: 'text-slate-400 pt-1',
      tokens: [
        { text: '// Output: Lulusan siap kerja & wirausaha digital' },
      ],
    },
  ];

  const totalChars = useMemo(() => {
    return codeLines.reduce(
      (sum, line) => sum + line.tokens.reduce((acc, t) => acc + t.text.length, 0),
      0
    );
  }, []);

  const annotatedLines = useMemo(() => {
    let cursor = 0;
    return codeLines.map((line) => {
      const lineStart = cursor;
      const tokensWithRange = line.tokens.map((token) => {
        const tokenStart = cursor;
        cursor += token.text.length;
        return {
          ...token,
          start: tokenStart,
          end: cursor,
        };
      });
      return {
        className: line.className,
        start: lineStart,
        end: cursor,
        tokens: tokensWithRange,
      };
    });
  }, []);

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(0);
    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= totalChars) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [totalChars]);

  const restartTyping = () => {
    setCharCount(0);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="beranda">
      {/* Hero Left Column (Span 7) */}
      <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-[28px] bg-surface-container-low border border-soft-blue text-dark-text relative overflow-hidden shadow-sm">
        {/* Subtle Ambient Background Highlights */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-soft-blue/40 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-sky-azure/20 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-blue/60 border border-soft-blue text-xs font-bold text-deep-blue uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-deep-blue animate-pulse"></span>
            REKAYASA PERANGKAT LUNAK
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight leading-[1.15] text-dark-text">
            Membangun Masa Depan dengan Teknologi.
          </h1>
          
          <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed max-w-xl">
            Rekayasa Perangkat Lunak membekali siswa dengan keterampilan teknologi, pemrograman, kreativitas, dan pengembangan berbagai solusi digital.
          </p>
        </div>

        <div className="relative z-10 pt-8 mt-6 border-t border-soft-blue/70 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <a 
              className="group inline-flex items-center gap-2 bg-deep-blue text-white hover:bg-tech-blue font-bold text-sm px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg bg-[#2C5EAD]" 
              href="#tentang"
            >
              <span className='leading-none'>Kenali RPL</span>
              <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            
            <a 
              className="inline-flex items-center gap-2 bg-white hover:bg-soft-blue/30 border border-soft-blue text-deep-blue font-semibold text-sm px-5 py-3 rounded-full transition-all shadow-xs" 
              href="#fasilitas"
            >
              <span className="material-symbols-outlined text-[18px]">domain</span>
              <span>Jelajahi Fasilitas</span>
            </a>
          </div>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-white rounded-2xl p-3.5 border border-soft-blue shadow-xs">
              <p className="text-[11px] uppercase tracking-wider text-muted-text font-semibold">Kurikulum</p>
              <p className="text-xl font-bold text-deep-blue mt-0.5">Standar Industri</p>
            </div>
            
            <div className="bg-white rounded-2xl p-3.5 border border-soft-blue shadow-xs col-span-2 sm:col-span-1">
              <p className="text-[11px] uppercase tracking-wider text-muted-text font-semibold">Status Kampus</p>
              <p className="text-xl font-bold text-deep-blue mt-0.5">SMK PK Unggulan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Right Column (Span 5 - Authentic Visual Lab Showcase + Floating Code Snippet) */}
      <div className="lg:col-span-5 flex flex-col gap-5">
        {/* Authentic Lab Photo Card with Floating Pill */}
        <div className="relative rounded-[28px] overflow-hidden border border-soft-blue bg-page-canvas h-72 lg:h-full min-h-[260px] group">
          <img 
            alt="Siswa di Lab RPL SMKN 12" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src={labPhoto} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-text/80 via-dark-text/20 to-transparent"></div>
          
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-white/60 px-3 py-1 rounded-full text-[11px] font-bold text-deep-blue shadow-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tech-blue"></span>
            Ruang Praktik Coding Aktif
          </div>
          
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-xs font-semibold text-sky-azure uppercase tracking-wider">Laboratorium Komputer</span>
            <p className="text-sm font-medium text-white/90 mt-0.5">
              Workstation modern & pembelajaran berbasis industri teknologi terkini.
            </p>
          </div>
        </div>

        {/* Code Snippet Card with Typing Animation */}
        <div className="p-5 rounded-[24px] bg-[#0F172A] border border-slate-800 text-slate-300 font-mono text-xs shadow-md">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="ml-2 text-slate-400 font-sans">SoftwareEngineer.ts</span>
            </div>
            <button
              onClick={restartTyping}
              className="text-tech-blue hover:text-sky-azure font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              title="Putar ulang animasi ketikan"
            >
              <span>Ready to Deploy</span>
              <span className="material-symbols-outlined text-[13px]">refresh</span>
            </button>
          </div>

          <div className="pt-3 space-y-1 min-h-[168px]">
            {annotatedLines.map((line, lineIdx) => {
              if (charCount < line.start) {
                return null;
              }

              const isCurrentLine = charCount >= line.start && charCount < line.end;
              const isLastLine = lineIdx === annotatedLines.length - 1;

              return (
                <p key={lineIdx} className={line.className}>
                  {line.tokens.map((token, tIdx) => {
                    if (charCount < token.start) {
                      return null;
                    }
                    const visibleChars = Math.min(
                      token.text.length,
                      Math.max(0, charCount - token.start)
                    );
                    const textToDisplay = token.text.slice(0, visibleChars);

                    return (
                      <span key={tIdx} className={token.className || ''}>
                        {textToDisplay}
                      </span>
                    );
                  })}
                  {isCurrentLine && (
                    <span className="inline-block w-2 h-3.5 bg-tech-blue ml-0.5 animate-pulse align-middle" />
                  )}
                  {charCount >= totalChars && isLastLine && (
                    <span className="inline-block w-2 h-3.5 bg-tech-blue/70 ml-1 animate-pulse align-middle" />
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
