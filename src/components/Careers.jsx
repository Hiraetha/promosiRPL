import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

// Authentic career photos
import softwareDevImg from '../assets/images/careers/software-developer.jpg';
import webDevImg from '../assets/images/careers/web-developer.jpg';
import mobileDevImg from '../assets/images/careers/mobile-developer.jpg';
import uiuxDesignerImg from '../assets/images/careers/uiux-designer.jpg';
import databaseDevImg from '../assets/images/careers/database-developer.jpg';
import itSupportImg from '../assets/images/careers/it-support.jpg';
import gameDevImg from '../assets/images/careers/game-developer.jpg';
import techEntrepreneurImg from '../assets/images/careers/tech-entrepreneur.jpg';

export default function Careers() {
  const [selectedCareer, setSelectedCareer] = useState(null);

  const careers = [
    {
      title: 'Software Developer',
      role: 'Pengembang Perangkat Lunak Industri',
      desc: 'Membangun arsitektur perangkat lunak yang andal, efisien, dan terstruktur sesuai standar industri enterprise.',
      icon: 'terminal',
      image: softwareDevImg,
      demand: 'Permintaan Industri Sangat Tinggi',
      skills: ['Algoritma & Struktur Data', 'Clean Code Architecture', 'OOP & Design Patterns', 'Git Version Control'],
      detail: 'Sebagai Software Developer, lulusan RPL bertanggung jawab menulis kode yang bersih, membangun logika aplikasi yang efisien, dan berkolaborasi dalam tim software engineering profesional.'
    },
    {
      title: 'Web Developer',
      role: 'Frontend & Backend Engineer',
      desc: 'Merancang website responsif modern, web app cloud interaktif, dan arsitektur server RESTful API yang aman.',
      icon: 'code',
      image: webDevImg,
      demand: 'Kebutuhan Terbanyak Startup & Korporat',
      skills: ['React.js / Next.js', 'Node.js & Express', 'REST API & GraphQL', 'Tailwind CSS'],
      detail: 'Mengembangkan aplikasi web modern dari sisi antarmuka interaktif yang memanjakan pengguna (Frontend) hingga infrastruktur logika server dan integrasi database (Backend).'
    },
    {
      title: 'Mobile Developer',
      role: 'Aplikasi Android & iOS',
      desc: 'Membuat aplikasi Android dan iOS native maupun cross-platform yang berkinerja tinggi dan responsif.',
      icon: 'smartphone',
      image: mobileDevImg,
      demand: 'Pertumbuhan Ekosistem Mobile Pesat',
      skills: ['Flutter & Dart', 'Kotlin / Android Studio', 'State Management', 'Mobile API Integration'],
      detail: 'Merancang aplikasi smartphone yang siap dipublikasikan ke Google Play Store dan App Store, terintegrasi sensor gawai, kamera, serta notifikasi cloud secara real-time.'
    },
    {
      title: 'UI/UX Designer',
      role: 'Desainer Produk Digital & Interaksi',
      desc: 'Meriset kenyamanan pengguna, alur interaksi digital, serta merancang antarmuka produk digital yang modern.',
      icon: 'palette',
      image: uiuxDesignerImg,
      demand: 'Kunci Utama Keberhasilan Produk Digital',
      skills: ['Figma & FigJam', 'Design Systems', 'User Research & Wireframing', 'Interactive Prototyping'],
      detail: 'Menerjemahkan ide produk menjadi desain antarmuka aplikasi yang intuitif, estetis, dan mudah digunakan melalui riset perilaku pengguna dan pengujian usability.'
    },
    {
      title: 'Database Developer',
      role: 'Arsitek & Administrator Basis Data',
      desc: 'Mengelola penyimpanan data skala besar, memastikan integritas keamanan data, dan kueri optimal.',
      icon: 'database',
      image: databaseDevImg,
      demand: 'Fondasi Big Data & Keamanan Sistem',
      skills: ['PostgreSQL & MySQL', 'Data Modeling / ERD', 'Query Optimization', 'Cloud Database Security'],
      detail: 'Merancang arsitektur penyimpanan data, merawat server basis data terpusat, dan memastikan transaksi data aplikasi berjalan super cepat tanpa downtime.'
    },
    {
      title: 'IT Support & Specialist',
      role: 'Spesialis Dukungan Teknologi & Jaringan',
      desc: 'Memastikan keandalan infrastruktur perangkat keras, jaringan komputer, dan pemeliharaan sistem instansi.',
      icon: 'support_agent',
      image: itSupportImg,
      demand: 'Kebutuhan Esensial di Seluruh Sektor',
      skills: ['Hardware Troubleshooting', 'Jaringan LAN & Server', 'Sistem Operasi Windows/Linux', 'Maintenance Lab'],
      detail: 'Bertanggung jawab atas kelancaran operasional teknologi, konfigurasi jaringan komputer, pemeliharaan perangkat laboratorium, dan penanganan kendala teknis pengguna.'
    },
    {
      title: 'Game Developer',
      role: 'Pembuat Gim Interaktif 2D/3D',
      desc: 'Menciptakan gameplay interaktif, mekanik fisika, kecerdasan buatan gim, serta integrasi visual dan audio.',
      icon: 'sports_esports',
      image: gameDevImg,
      demand: 'Industri Hiburan Digital Global',
      skills: ['Game Engines (Unity/Unreal)', 'C# / C++ Programming', 'Physics & Collision Logic', '3D Asset Integration'],
      detail: 'Menggabungkan logika koding dengan kreativitas grafis untuk membangun game interaktif, simulasi virtual reality, dan pengalaman hiburan digital yang imersif.'
    },
    {
      title: 'Wirausaha Teknologi',
      role: 'Founder Startup & Software Agency',
      desc: 'Mendirikan software agency, studio pengembangan aplikasi, dan layanan digital mandiri inovatif.',
      icon: 'trending_up',
      image: techEntrepreneurImg,
      demand: 'Menciptakan Lapangan Kerja Baru',
      skills: ['Product Management', 'Kepemimpinan Proyek', 'Solusi Klien Digital', 'Wirausaha Mandiri'],
      detail: 'Menggunakan keahlian teknis RPL untuk membangun bisnis agensi perangkat lunak, produk startup teknologi, dan melayani pembuatan sistem digital bagi klien industri.'
    },
  ];

  // Handle keyboard navigation for modal (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedCareer) return;
      if (e.key === 'Escape') {
        setSelectedCareer(null);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = careers.findIndex((item) => item.title === selectedCareer.title);
        const prevIndex = (currentIndex - 1 + careers.length) % careers.length;
        setSelectedCareer(careers[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = careers.findIndex((item) => item.title === selectedCareer.title);
        const nextIndex = (currentIndex + 1) % careers.length;
        setSelectedCareer(careers[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (selectedCareer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedCareer]);

  const currentIndex = selectedCareer 
    ? careers.findIndex((item) => item.title === selectedCareer.title)
    : -1;

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + careers.length) % careers.length;
    setSelectedCareer(careers[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % careers.length;
    setSelectedCareer(careers[nextIndex]);
  };

  return (
    <section className="rounded-[32px] bg-surface-container-low border border-soft-blue text-dark-text p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-sm" id="karier">
      <div className="relative z-10 max-w-2xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/60 text-deep-blue text-xs font-bold uppercase tracking-wider mb-3">
          Peluang Masa Depan
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-dark-text">
          Dari Kelas Menuju Dunia Teknologi
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-muted-text mt-2 leading-relaxed">
          Lulusan Rekayasa Perangkat Lunak SMKN 12 Jakarta dibekali kesiapan kerja tinggi di berbagai sektor industri digital, perusahaan multinasional, maupun startup mandiri.
        </p>
        <p className="text-xs font-semibold text-tech-blue mt-3 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-base">touch_app</span>
          Klik kartu karier untuk melihat foto profesi & dokumentasi peran industri
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((career) => {
          const isSelected = selectedCareer?.title === career.title;
          return (
            <div 
              key={career.title}
              onClick={() => setSelectedCareer(career)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCareer(career);
                }
              }}
              className={`p-5 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between cursor-pointer group select-none ${
                isSelected
                  ? 'border-tech-blue shadow-md ring-2 ring-tech-blue/20 bg-soft-blue/20 -translate-y-1'
                  : 'border-soft-blue shadow-xs hover:border-tech-blue hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-soft-blue/40 flex items-center justify-center text-tech-blue group-hover:bg-deep-blue group-hover:text-white transition-colors shadow-2xs">
                    <span className="material-symbols-outlined text-xl">
                      {career.icon}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-soft-blue/50 text-deep-blue">
                    Prospek
                  </span>
                </div>
                <h4 className="text-base font-bold text-dark-text group-hover:text-deep-blue transition-colors">
                  {career.title}
                </h4>
                <p className="text-[11px] font-semibold text-tech-blue mt-0.5">
                  {career.role}
                </p>
                <p className="text-xs text-muted-text mt-2 leading-relaxed">
                  {career.desc}
                </p>
              </div>

              {/* Bottom Interactive Link */}
              <div className="mt-4 pt-3 border-t border-soft-blue/50 flex items-center justify-between text-xs text-tech-blue font-semibold group-hover:text-deep-blue">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  Lihat Foto Profesi
                </span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Career Lightbox Modal (Portal to document.body) */}
      {selectedCareer && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-dark-text/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCareer(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-3xl border border-soft-blue shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col max-h-[90vh] my-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="shrink-0 p-4 sm:p-5 border-b border-soft-blue/60 flex items-center justify-between bg-page-canvas">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-soft-blue/50 flex items-center justify-center text-tech-blue shrink-0">
                  <span className="material-symbols-outlined text-xl">{selectedCareer.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-dark-text leading-tight">
                      {selectedCareer.title}
                    </h4>
                  </div>
                  <p className="text-xs text-tech-blue font-semibold">
                    {selectedCareer.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-soft-blue/50 text-deep-blue text-[11px] font-bold">
                  {currentIndex + 1} / {careers.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedCareer(null)}
                  className="w-9 h-9 rounded-full bg-white border border-soft-blue hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center text-muted-text cursor-pointer"
                  title="Tutup (Esc)"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden flex-1 min-h-[200px] max-h-[46vh]">
              <img 
                src={selectedCareer.image} 
                alt={`Dokumentasi Karier ${selectedCareer.title}`}
                className="w-full h-full max-h-[46vh] object-cover sm:object-contain transition-opacity duration-300"
              />

              {/* Prev & Next Floating Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-text/60 hover:bg-dark-text text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
                title="Karier Sebelumnya (Panah Kiri)"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-text/60 hover:bg-dark-text text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95 z-10"
                title="Karier Selanjutnya (Panah Kanan)"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>

              {/* Badge Overlay */}
              <div className="absolute bottom-3 left-3 bg-dark-text/80 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10 z-10">
                <span className="material-symbols-outlined text-sm text-cyan-300">verified</span>
                Contoh Gambar Profesi
              </div>
            </div>

            {/* Modal Description, Skills & Controls */}
            <div className="shrink-0 p-4 sm:p-5 bg-white space-y-3 border-t border-soft-blue/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-[11px] font-bold text-tech-blue uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  {selectedCareer.demand}
                </span>
                <span className="text-xs text-muted-text">
                  Kesiapan Kerja Vokasi Industri
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                {selectedCareer.detail}
              </p>

              {/* Skills Tags */}
              <div className="pt-1">
                <span className="text-[11px] font-bold text-dark-text block mb-1.5 uppercase tracking-wider">
                  Keahlian Utama yang Dipelajari:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCareer.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg bg-soft-blue/40 text-deep-blue text-[11px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2 border-t border-soft-blue/40">
                <span className="text-xs text-muted-text hidden sm:inline">
                  Gunakan tombol panah <strong>← / →</strong> atau <strong>Esc</strong>
                </span>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-3 py-2 rounded-xl border border-soft-blue text-xs font-bold text-dark-text hover:bg-page-canvas hover:border-tech-blue/50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-3 py-2 rounded-xl border border-soft-blue text-xs font-bold text-dark-text hover:bg-page-canvas hover:border-tech-blue/50 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Next
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedCareer(null)}
                    className="px-4 py-2 rounded-xl bg-deep-blue text-white text-xs font-bold hover:bg-tech-blue transition-colors cursor-pointer shadow-xs"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
