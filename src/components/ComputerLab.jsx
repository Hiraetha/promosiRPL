import React from 'react';
import labPhoto from '../assets/images/lab-komputer.jpg';

export default function ComputerLab() {
  return (
    <div className="bg-white rounded-[30px] border border-soft-blue p-6 md:p-8 card-lift grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs">
      <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-soft-blue group">
        <img 
          alt="Laboratorium Komputer RPL SMKN 12" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={labPhoto}
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-deep-blue shadow-xs">
          Foto Laboratorium Komputer
        </div>
      </div>

      <div className="lg:col-span-6 space-y-4">
        <span className="text-xs font-bold text-tech-blue uppercase tracking-wider">Fasilitas 01</span>
        <h3 className="text-2xl font-bold text-dark-text">Laboratorium Komputer</h3>
        <p className="text-sm text-muted-text leading-relaxed">
          Ruang laboratorium komputasi yang dirancang khusus untuk kenyamanan coding harian siswa dengan pendingin ruangan penuh, partisi individual akustik, dan suasana tenang yang kondusif.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-page-canvas border border-soft-blue/60">
            <span className="material-symbols-outlined text-tech-blue text-xl">memory</span>
            <span className="text-xs font-bold text-dark-text">High-Spec PCs</span>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-page-canvas border border-soft-blue/60">
            <span className="material-symbols-outlined text-tech-blue text-xl">wifi</span>
            <span className="text-xs font-bold text-dark-text">Internet Cepat Fiber</span>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-page-canvas border border-soft-blue/60">
            <span className="material-symbols-outlined text-tech-blue text-xl">chair</span>
            <span className="text-xs font-bold text-dark-text">Ruang Ergonomis</span>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-page-canvas border border-soft-blue/60">
            <span className="material-symbols-outlined text-tech-blue text-xl">terminal</span>
            <span className="text-xs font-bold text-dark-text">Software Industri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
