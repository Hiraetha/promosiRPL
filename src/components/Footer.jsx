import React from 'react';
import logoSekolah from '../assets/logo/logo-sekolah-cropped.png';

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 pt-8 border-t border-soft-blue">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Subtitle */}
        <div className="flex items-center gap-3.5">
          <div className="h-9 w-9 rounded-xl p-0.5 bg-white border border-soft-blue/80 flex items-center justify-center shrink-0 shadow-xs">
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
            <span className="font-bold text-xs sm:text-sm text-dark-text tracking-tight">
              SMKN 12 JAKARTA | REKAYASA PERANGKAT LUNAK
            </span>
            <span className="text-[11px] text-muted-text">
              Pusat Keunggulan Pendidikan Vokasi Teknologi DKI Jakarta
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted-text font-medium">
          © 2026 SMKN 12 JAKARTA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
