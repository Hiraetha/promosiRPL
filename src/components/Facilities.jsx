import React from 'react';
import ComputerLab from './ComputerLab';
import PusatKeunggulan from './PusatKeunggulan';
import Semudah from './Semudah';

export default function Facilities() {
  return (
    <section className="space-y-8" id="fasilitas">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
          Sarana & Prasarana
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
          Fasilitas Unggulan RPL SMKN 12
        </h2>
        <p className="text-sm text-muted-text mt-1 max-w-xl">
          Didukung lingkungan belajar berstandar industri dengan sarana komputasi mutakhir dan teaching factory aktif.
        </p>
      </div>

      <div className="space-y-8">
        {/* Facility 1: Laboratorium Komputer */}
        <div id="lab-komputer" className="scroll-mt-24">
          <ComputerLab />
        </div>

        {/* Facility 2: Lab Pusat Keunggulan (PK) */}
        <div id="lab-pk" className="scroll-mt-24">
          <PusatKeunggulan />
        </div>

        {/* Facility 3: Ruangan SEMUDAH */}
        <div id="semudah-anchor" className="scroll-mt-24">
          <Semudah />
        </div>
      </div>
    </section>
  );
}
