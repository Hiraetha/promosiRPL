import React from 'react';
import { studentActivities, extracurriculars } from '../data/activities';

export default function Activities() {
  return (
    <section className="space-y-8" id="kegiatan">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
            Dinamika Belajar
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
            Kegiatan Siswa & Ekosistem RPL
          </h2>
        </div>
        <p className="text-sm text-muted-text max-w-md">
          Aktivitas pembelajaran terarah di dalam dan di luar laboratorium untuk membangun kecakapan teknis dan daya juang inovasi.
        </p>
      </div>

      {/* Editorial Row: Banner on Left + 4 Key Activities on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Editorial Banner */}
        <div className="lg:col-span-5 rounded-[28px] bg-surface-container-low border border-soft-blue text-dark-text p-8 sm:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden">
          {/* Subtle Ambient Background Highlights */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-soft-blue/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-sky-azure/20 blur-2xl pointer-events-none"></div>

          <div className="space-y-4 relative z-10">
            <span className="w-12 h-12 rounded-2xl bg-white text-deep-blue flex items-center justify-center border border-soft-blue shadow-xs">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </span>
            <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block">
              Budaya Belajar Aktif
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-text leading-tight">
              Kolaboratif, Eksploratif, & Solutif
            </h3>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              Setiap siswa didorong untuk aktif berkarya, berdiskusi membedah arsitektur kode, serta membiasakan diri bekerja dalam sprint tim layaknya software engineer profesional.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-soft-blue/70 flex items-center justify-between text-xs text-muted-text relative z-10">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Active Vocational Culture
            </span>
            <span className="font-bold text-deep-blue">SMKN 12 JAKARTA</span>
          </div>
        </div>

        {/* Right Activities Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {studentActivities.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-soft-blue shadow-xs card-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-deep-blue bg-soft-blue/50 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-muted-text">0{idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-dark-text mb-1.5">{item.title}</h4>
                <p className="text-xs text-muted-text leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ekstrakurikuler Bar */}
      <div className="bg-surface-container-low rounded-[28px] p-6 sm:p-8 border border-soft-blue">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block">Minat & Bakat Teknologi</span>
            <h4 className="text-lg font-bold text-dark-text">Ekstrakurikuler Bidang IT</h4>
          </div>
          <span className="text-xs text-muted-text">Wadah eksplorasi bakat siswa RPL</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {extracurriculars.map((ekskul, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-white border border-soft-blue shadow-xs hover:border-tech-blue/60 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-tech-blue text-lg">code</span>
                <span className="text-xs font-bold text-dark-text">{ekskul.name}</span>
              </div>
              <div className="text-[11px] font-semibold text-deep-blue mb-1">{ekskul.tag}</div>
              <p className="text-xs text-muted-text leading-snug">{ekskul.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
