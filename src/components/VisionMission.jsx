import React from 'react';

export default function VisionMission() {
  const missions = [
    { num: '01', text: 'Memberikan pembelajaran teknologi dan perangkat lunak yang relevan dengan perkembangan zaman.' },
    { num: '02', text: 'Meningkatkan kemampuan siswa dalam pemrograman dan pengembangan perangkat lunak.' },
    { num: '03', text: 'Mendorong siswa untuk berpikir kreatif, logis, dan inovatif dalam menyelesaikan masalah.' },
    { num: '04', text: 'Mengembangkan kemampuan siswa melalui kegiatan praktik dan project nyata industri.' },
    { num: '05', text: 'Mendorong siswa menghasilkan karya dan mengikuti berbagai kompetisi di bidang teknologi.' },
  ];

  return (
    <section className="space-y-6" id="visi-misi">
      <div className="flex items-center gap-2 text-tech-blue text-xs font-bold uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-tech-blue"></span>
        Visi & Komitmen Pembelajaran
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Visi Card: Soft Ice Blue (#C4E2F5/30%) with Quote Styling (Span 5) */}
        <div className="lg:col-span-5 bg-[#C4E2F5]/30 rounded-[28px] p-8 md:p-10 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-soft-blue flex items-center justify-center text-deep-blue mb-6 shadow-xs">
              <span className="material-symbols-outlined text-2xl">flag</span>
            </div>
            
            <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block mb-2">
              Visi Kejuruan
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-dark-text tracking-tight mb-6">
              Mewujudkan Talenta Perangkat Lunak Unggul
            </h3>

            <div className="relative pl-5 border-l-4 border-deep-blue py-1">
              <p className="text-base sm:text-lg text-dark-text font-medium leading-relaxed italic">
                “Menjadi jurusan yang menghasilkan generasi muda yang kompeten, kreatif, inovatif, dan siap berkembang di bidang teknologi informasi dan perangkat lunak global.”
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-soft-blue/70 flex items-center justify-between text-xs text-muted-text">
            <span className="font-semibold text-deep-blue">SMKN 12 JAKARTA</span>
            <span>Berdaya Saing Global</span>
          </div>
        </div>

        {/* Misi Card: Horizontal Numbered Steps 01-05 with Bright Accents (Span 7) */}
        <div className="lg:col-span-7 bg-white rounded-[28px] p-8 md:p-10 border border-soft-blue card-lift flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block mb-1">
                  Misi Strategis
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-dark-text tracking-tight">
                  Langkah Strategis Pembelajaran RPL
                </h3>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-soft-blue/50 text-deep-blue text-xs font-bold">
                5 Pilar Misi
              </span>
            </div>

            <div className="space-y-3">
              {missions.map((m) => (
                <div 
                  key={m.num}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-page-canvas border border-soft-blue/60 hover:border-tech-blue/50 transition-colors"
                >
                  <span className="w-8 h-8 rounded-xl bg-tech-blue text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {m.num}
                  </span>
                  <p className="text-xs sm:text-sm text-dark-text font-medium leading-relaxed pt-1">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-soft-blue/60 flex items-center justify-between text-xs text-muted-text">
            <span>Standar Kurikulum Merdeka</span>
            <span className="font-bold text-deep-blue">Fokus Kompetensi Nyata</span>
          </div>
        </div>
      </div>
    </section>
  );
}
