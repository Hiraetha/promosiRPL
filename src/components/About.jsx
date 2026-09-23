import React from 'react';

export default function About() {
  return (
    <section className="space-y-6" id="tentang">
      <div className="flex items-center gap-2 text-tech-blue text-xs font-bold uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-tech-blue"></span>
        Tentang Program Keahlian
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left: Narrative (Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-[28px] p-8 md:p-10 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-text tracking-tight mb-5">
              Apa itu RPL?
            </h2>
            <p className="text-base text-muted-text leading-relaxed mb-4">
              Rekayasa Perangkat Lunak (RPL) di SMKN 12 Jakarta adalah program keahlian yang memfokuskan siswa pada seni dan ilmu merancang, mengembangkan, menguji, serta memelihara perangkat lunak tingkat profesional.
            </p>
            <p className="text-base text-muted-text leading-relaxed">
              Di sini, siswa tidak hanya belajar mengetik baris kode, namun juga dilatih memecahkan masalah nyata (problem-solving), menyusun logika terstruktur, memahami siklus hidup perangkat lunak (SDLC), serta menciptakan solusi teknologi yang adaptif dan bernilai guna tinggi bagi masyarakat.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-soft-blue/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-soft-blue/50 flex items-center justify-center text-deep-blue">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark-text uppercase">Full-Stack Curriculum</h4>
                <p className="text-xs text-muted-text">Kurikulum Merdeka Berstandar DUDI</p>
              </div>
            </div>
            <a 
              className="text-xs font-bold text-tech-blue hover:text-deep-blue inline-flex items-center gap-1 group" 
              href="#kompetensi"
            >
              <span>Pelajari Kompetensi</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Right: Visual Card Highlighting Tech Stacks & Modern Vocational (Span 5) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-page-canvas to-soft-blue/30 rounded-[28px] p-8 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block mb-2">Modern Vocational Ecosystem</span>
            <h3 className="text-xl font-bold text-dark-text mb-4">Ekosistem Belajar Terpadu</h3>
            <p className="text-sm text-muted-text mb-6">Siswa dibekali penguasaan teknologi terdepan yang paling dicari dalam dunia industri modern:</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-soft-blue shadow-xs">
                <span className="text-xs font-bold text-dark-text block">Web Development</span>
                <span className="text-[11px] text-muted-text">React, HTML5, CSS3, Tailwind, Node.js</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-soft-blue shadow-xs">
                <span className="text-xs font-bold text-dark-text block">Mobile Apps</span>
                <span className="text-[11px] text-muted-text">Flutter, Kotlin, Android Studio</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-soft-blue shadow-xs">
                <span className="text-xs font-bold text-dark-text block">Database Engine</span>
                <span className="text-[11px] text-muted-text">MySQL, PostgreSQL, REST API</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-soft-blue shadow-xs">
                <span className="text-xs font-bold text-dark-text block">UI/UX & Interactive</span>
                <span className="text-[11px] text-muted-text">Figma, Godot, Wireframing</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-soft-blue/60 flex items-center justify-between text-xs text-muted-text">
            <span>Sertifikasi Kompetensi Resmi</span>
            <span className="font-bold text-deep-blue">LSP-P1 BNSP</span>
          </div>
        </div>
      </div>
    </section>
  );
}
