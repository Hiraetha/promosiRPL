import React from 'react';

export default function Advantages() {
  return (
    <section className="space-y-6" id="keunggulan">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
            Kekuatan Kurikulum
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
            Keunggulan Jurusan RPL
          </h2>
        </div>
        <p className="text-sm text-muted-text max-w-md">
          Pendekatan aplikatif terstruktur yang mengkombinasikan penguasaan teori mendalam dengan implementasi proyek nyata.
        </p>
      </div>

      {/* Asymmetric Bento Grid (NOT Generic 3 Column) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Featured Larger Card: Project-Based Learning (PBL) (Span 7) */}
        <div className="md:col-span-7 bg-surface-container-low border border-soft-blue text-dark-text rounded-[28px] p-8 card-lift relative overflow-hidden flex flex-col justify-between shadow-sm">
          {/* Subtle Ambient Background Highlights */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-soft-blue/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-sky-azure/20 blur-2xl pointer-events-none"></div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-deep-blue text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-tech-blue/10 text-tech-blue text-xs font-bold uppercase tracking-wider">
                Program Inti Utama
              </span>
            </div>
            <h3 className="text-2xl font-bold text-dark-text">
              Project-Based Learning (PBL)
            </h3>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Pembelajaran tidak hanya mengacu pada buku cetak, melainkan berfokus pada pengerjaan studi kasus industri nyata. Siswa merancang arsitektur sistem, memprogram antarmuka dan backend, melakukan deployment server, serta mempresentasikan karya di depan praktisi profesional.
            </p>
          </div>
          <div className="pt-6 mt-4 border-t border-soft-blue flex flex-wrap gap-2 relative z-10">
            <span className="px-3 py-1 rounded-xl bg-white border border-soft-blue text-xs font-semibold text-deep-blue">
              Studi Kasus Riil
            </span>
            <span className="px-3 py-1 rounded-xl bg-white border border-soft-blue text-xs font-semibold text-deep-blue">
              Scrum & Agile Teamwork
            </span>
            <span className="px-3 py-1 rounded-xl bg-white border border-soft-blue text-xs font-semibold text-deep-blue">
              Presentasi Klien
            </span>
          </div>
        </div>

        {/* Pembelajaran Pemrograman (Span 5) */}
        <div className="md:col-span-5 bg-white rounded-[28px] p-7 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">code</span>
            </span>
            <h3 className="text-lg font-bold text-dark-text">Pembelajaran Pemrograman</h3>
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              Fondasi logika algoritma yang solid, penguasaan paradigma Object-Oriented Programming (OOP), dan struktur data teroptimasi.
            </p>
          </div>
          <div className="pt-4 text-xs font-bold text-tech-blue">
            Logika Algoritma & OOP
          </div>
        </div>

        {/* 3 Split Distinct Cards: Web, App, Game (Each Span 4) */}
        <div className="md:col-span-4 bg-white rounded-[28px] p-6 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">language</span>
            </span>
            <h3 className="text-base font-bold text-dark-text">Pengembangan Website</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Pembuatan website modern, interaktif, responsif, dan scalable dengan standar web terkini.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-muted-text pt-3">
            Frontend & Backend Modern
          </span>
        </div>

        <div className="md:col-span-4 bg-white rounded-[28px] p-6 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">smartphone</span>
            </span>
            <h3 className="text-base font-bold text-dark-text">Pengembangan Aplikasi</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Rekayasa aplikasi mobile dan desktop multi-platform yang cepat, aman, dan ergonomis bagi pengguna.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-muted-text pt-3">
            Multi-Platform Ecosystem
          </span>
        </div>

        <div className="md:col-span-4 bg-white rounded-[28px] p-6 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">sports_esports</span>
            </span>
            <h3 className="text-base font-bold text-dark-text">Pengembangan Game</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Perancangan gameplay mechanic, animasi game 2D/3D, audio logic, dan implementasi game engine interaktif.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-muted-text pt-3">
            Mechanics & Visual Interactivity
          </span>
        </div>

        {/* 2 Split Cards: Basis Data & UI/UX (Each Span 6) */}
        <div className="md:col-span-6 bg-white rounded-[28px] p-6 border border-soft-blue card-lift flex items-start gap-4 shadow-xs">
          <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">database</span>
          </span>
          <div>
            <h3 className="text-base font-bold text-dark-text">Basis Data Terstruktur</h3>
            <p className="text-xs text-muted-text leading-relaxed mt-1">
              Perancangan skema relasional, manipulasi data dengan SQL efisien, normalisasi query, serta penyimpanan data aman.
            </p>
          </div>
        </div>

        <div className="md:col-span-6 bg-white rounded-[28px] p-6 border border-soft-blue card-lift flex items-start gap-4 shadow-xs">
          <span className="w-10 h-10 rounded-xl bg-soft-blue/60 text-deep-blue flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">palette</span>
          </span>
          <div>
            <h3 className="text-base font-bold text-dark-text">Desain Antarmuka UI/UX</h3>
            <p className="text-xs text-muted-text leading-relaxed mt-1">
              Riset pengalaman pengguna, pembuatan wireframe, perancangan prototipe fungsional figma, dan desain sistem visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
