import React from 'react';

export default function Competencies() {
  const items = [
    {
      num: '01. Sertifikasi BNSP',
      title: 'KKA (Kompetensi Keahlian Kejuruan)',
      desc: 'Standarisasi keahlian teknis menyeluruh sesuai skema LSP-P1 resmi untuk menjamin kesiapan kerja dan portofolio profesional siswa di tingkat nasional.',
      icon: 'verified',
      iconBg: 'bg-sky-azure',
      tag: 'Uji Kompetensi Nasional',
    },
    {
      num: '02. Front-End & Back-End',
      title: 'Pemrograman Web',
      desc: 'Mempelajari struktur semantik HTML5, CSS layouting interaktif, script logika pemrograman modern, framework reaktif, dan integrasi API.',
      icon: 'web',
      iconBg: 'bg-sky-azure',
      tag: 'HTML5, CSS, JS & API',
    },
    {
      num: '03. Data Architecture',
      title: 'Basis Data',
      desc: 'Manajemen sistem basis data relasional (RDBMS), pemodelan entitas (ERD), normalisasi data, serta pengoperasian query CRUD berskala tinggi.',
      icon: 'storage',
      iconBg: 'bg-sky-azure',
      tag: 'SQL, Query, Normalisasi',
    },
    {
      num: '04. Software Development',
      title: 'Pemrograman Aplikasi',
      desc: 'Pembuatan aplikasi berdaya guna untuk perangkat mobile dan desktop, integrasi basis data lokal, manajemen state, dan penyebaran aplikasi.',
      icon: 'apps',
      iconBg: 'bg-sky-azure',
      tag: 'Mobile & Desktop Apps',
    },
    {
      num: '05. Game Engineering',
      title: 'Pemrograman GIM',
      desc: 'Pengembangan logika alur permainan interaktif, perancangan physics engine, sprite animasi, collision detection, dan level design.',
      icon: 'sports_esports',
      iconBg: 'bg-sky-azure',
      tag: 'Game Engine & Interaktivitas',
    },
    {
      num: '06. Experience Design',
      title: 'UI/UX',
      desc: 'Mempelajari prinsip human-computer interaction, riset preferensi pengguna, user flow, pembuatan wireframe, dan prototipe presisi tinggi di Figma.',
      icon: 'design_services',
      iconBg: 'bg-sky-azure',
      tag: 'Figma, Wireframing & Prototyping',
    },
  ];

  return (
    <section className="space-y-6" id="kompetensi">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
          Struktur Materi
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
          Yang Akan Kamu Pelajari
        </h2>
        <p className="text-sm text-muted-text mt-1">
          Enam pilar kompetensi utama yang dipelajari siswa RPL selama masa pendidikan di SMKN 12 Jakarta.
        </p>
      </div>

      {/* STRICT EXACT 6 ITEMS ONLY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.num}
            className="bg-white rounded-[28px] p-7 border border-soft-blue card-lift flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className={`w-12 h-12 rounded-2xl ${item.iconBg} text-white flex items-center justify-center mb-5 shadow-xs`}>
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block mb-1">
                {item.num}
              </span>
              <h3 className="text-lg font-bold text-dark-text mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-page-canvas">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-soft-blue/40 text-deep-blue text-[11px] font-bold">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
