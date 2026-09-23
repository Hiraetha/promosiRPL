import React from 'react';
import logoSemudah from '../assets/logo/logo-semudah.jpeg';
import semudahPhoto from '../assets/images/ruangan-semudah.jpg';

export default function Semudah() {
  const services = [
    {
      title: 'Fotocopy',
      desc: 'Layanan penggandaan berkas tugas, materi ajar, dan dokumen administrasi siswa dengan cepat.',
      icon: 'content_copy',
      iconBg: 'bg-sky-azure',
      badge: 'Cepat & Terjangkau',
    },
    {
      title: 'Print Dokumen',
      desc: 'Cetak dokumen hitam-putih dan warna dengan kualitas laser tajam untuk laporan dan proposal.',
      icon: 'print',
      iconBg: 'bg-sky-azure',
      badge: 'Kualitas Cetak Laser',
    },
    {
      title: 'Top Up Game',
      desc: 'Isi ulang kredit game online favorit dengan tarif khusus siswa yang aman dan instan.',
      icon: 'sports_esports',
      iconBg: 'bg-sky-azure',
      badge: 'Proses Otomatis',
    },
    {
      title: 'Top Up Saldo',
      desc: 'Layanan pengisian dompet digital siswa dan guru untuk mempermudah transaksi cashless harian.',
      icon: 'account_balance_wallet',
      iconBg: 'bg-sky-azure',
      badge: 'Multi E-Wallet',
    },
  ];

  return (
    <div id="semudah" className="rounded-[30px] border-2 border-soft-blue bg-gradient-to-br from-white via-soft-blue/20 to-page-canvas p-6 md:p-10 card-lift shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info with official SEMUDAH logo */}
        <div className="lg:col-span-5 space-y-4">
          {/* Official Logo Displayed Prominently */}
          <div className="bg-black p-3.5 rounded-2xl inline-block shadow-sm">
            <img 
              alt="Logo SEMUDAH" 
              className="h-9 md:h-11 w-auto object-contain rounded-lg" 
              src={logoSemudah}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/assets/semudah.jpeg";
              }}
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue text-deep-blue text-xs font-bold uppercase tracking-wider">
            Teaching Factory RPL
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
            Ruangan SEMUDAH
          </h3>

          <p className="text-sm text-muted-text leading-relaxed">
            Ruangan SEMUDAH merupakan ruang layanan yang menyediakan berbagai kebutuhan transaksi dan layanan digital untuk mendukung aktivitas siswa dan lingkungan sekolah.
          </p>

          {/* Actual Photo of Ruangan SEMUDAH */}
          <div className="rounded-2xl overflow-hidden border border-soft-blue h-48 sm:h-56 relative shadow-xs group">
            <img 
              alt="Ruangan SEMUDAH SMKN 12" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={semudahPhoto} 
            />
            <div className="absolute bottom-2 left-2 bg-dark-text/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[10px] font-semibold">
              Dokumentasi Kasir & Layanan SEMUDAH
            </div>
          </div>
        </div>

        {/* Right: 4 Clean Service Cards with Icons */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div 
              key={s.title}
              className="bg-white rounded-2xl p-5 border border-soft-blue shadow-xs hover:border-tech-blue transition-colors flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} text-white flex items-center justify-center mb-3 shadow-xs`}>
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <h4 className="text-base font-bold text-dark-text mb-1">{s.title}</h4>
                <p className="text-xs text-muted-text leading-relaxed">{s.desc}</p>
              </div>
              <span className="inline-block mt-3 text-[11px] font-bold text-tech-blue">
                {s.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
