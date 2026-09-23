import React, { useState, useEffect } from 'react';
import ruangProduksiImg from '../assets/images/ruang-produksi.jpg';
import ruangPodcastImg from '../assets/images/ruang-podcast.jpg';

// Equipment authentic photos from assets
import foto3dPrinter from '../assets/images/equipment/foto-3d-printer.jpeg';
import fotoHp from '../assets/images/equipment/foto-hp.jpeg';
import fotoKamera from '../assets/images/equipment/foto-kamera.jpeg';
import fotoPc from '../assets/images/equipment/foto-pc.jpeg';
import fotoPressMug from '../assets/images/equipment/foto-press-mug.jpeg';
import fotoProduksi from '../assets/images/equipment/foto-produksi.jpeg';
import fotoSablonBaju from '../assets/images/equipment/foto-sablon-baju.jpeg';
import fotoVr from '../assets/images/equipment/foto-vr.jpeg';
import leanbotImg from '../assets/images/equipment/Leanbot.jpg';

export default function PusatKeunggulan() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const equipments = [
    {
      name: 'Laptop',
      icon: 'laptop_chromebook',
      image: fotoProduksi,
      title: 'Laptop & Production Workstation',
      subtitle: 'Stasiun Kerja Riset & Coding Portabel',
      description: 'Stasiun kerja dan laptop terintegrasi di ruang produksi untuk pemrograman web, mobile, serta testing langsung modul IoT dan robotika.',
    },
    {
      name: 'HP',
      icon: 'phone_iphone',
      image: fotoHp,
      title: 'Perangkat Pengujian Mobile (Samsung Galaxy)',
      subtitle: 'Testing & Debugging Mobile App',
      description: 'Smartphone fisik berstandar industri untuk pengujian performa aplikasi mobile (Flutter / Kotlin), UI responsif, dan sensor perangkat nyata.',
    },
    {
      name: 'Kamera',
      icon: 'photo_camera',
      image: fotoKamera,
      title: 'Kamera Sony Alpha 7 III Full-Frame',
      subtitle: 'Dokumentasi & Produksi Konten Multimedia',
      description: 'Kamera mirrorless profesional Sony A7 III untuk memproduksi video dokumenter, materi tutorial digital, podcast visual, dan karya multimedia kreatif.',
    },
    {
      name: '3D Printer',
      icon: 'view_in_ar',
      image: foto3dPrinter,
      title: 'Bambu Lab High-Precision 3D Printer',
      subtitle: 'Rapid Prototyping & Casing IoT',
      description: 'Perangkat pencetak 3D berkecepatan tinggi dari Bambu Lab untuk mencetak casing sensor IoT, part robotika custom, dan prototipe fisik rancangan siswa.',
    },
    {
      name: 'PC',
      icon: 'desktop_windows',
      image: fotoPc,
      title: 'High-End PC Workstation',
      subtitle: 'Kompilasi Cepat & Game Development',
      description: 'Komputer spesifikasi tinggi dengan monitor Dell profesional di bilik workstation untuk kompilasi proyek besar, visual 3D, dan machine learning.',
    },
    {
      name: 'Sablon Baju',
      icon: 'checkroom',
      image: fotoSablonBaju,
      title: 'Mesin Flat Heat Press Sablon Kaos',
      subtitle: 'Teaching Factory & Unit Produksi Merchandise',
      description: 'Mesin pres pemanas suhu tinggi untuk sablon kaos merchandise resmi RPL, melatih jiwa entrepreneurship dan teaching factory siswa.',
    },
    {
      name: 'Press Mug',
      icon: 'local_cafe',
      image: fotoPressMug,
      title: 'Combo Heat Press Machine (Mug Souvenir)',
      subtitle: 'Sublimasi Keramik & Custom Merchandise',
      description: 'Mesin press multi-slot untuk sublimasi mug keramik dan custom merchandise promosi, terhubung dengan alur desain grafis digital.',
    },
    {
      name: 'VR',
      icon: 'vrpano',
      image: fotoVr,
      title: 'Meta Quest 3 Virtual Reality Headset',
      subtitle: 'Virtual & Mixed Reality Development',
      description: 'Perangkat headset imersif tercanggih Meta Quest 3 untuk riset pengembangan gim VR/AR, simulasi 3D interaktif, dan komputasi spasial masa depan.',
    },
    {
      name: 'Lean Bot',
      icon: 'smart_toy',
      image: leanbotImg,
      title: 'Leanbot STEM Educational Robotics',
      subtitle: 'Robotika Pintar & Juara International Robothon',
      description: 'Robot edukasi pintar berbasis sensor ultrasonik, line tracking, dan gripper yang berhasil mengantarkan siswa RPL meraih 2nd Runner Up International Robothon 2025.',
    },
  ];

  // Handle keyboard navigation for modal (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedEquipment) return;
      if (e.key === 'Escape') {
        setSelectedEquipment(null);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = equipments.findIndex((item) => item.name === selectedEquipment.name);
        const prevIndex = (currentIndex - 1 + equipments.length) % equipments.length;
        setSelectedEquipment(equipments[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = equipments.findIndex((item) => item.name === selectedEquipment.name);
        const nextIndex = (currentIndex + 1) % equipments.length;
        setSelectedEquipment(equipments[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (selectedEquipment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedEquipment]);

  const currentIndex = selectedEquipment 
    ? equipments.findIndex((item) => item.name === selectedEquipment.name)
    : -1;

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + equipments.length) % equipments.length;
    setSelectedEquipment(equipments[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % equipments.length;
    setSelectedEquipment(equipments[nextIndex]);
  };

  return (
    <div className="bg-white rounded-[30px] border border-soft-blue p-6 md:p-8 card-lift space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold text-tech-blue uppercase tracking-wider">Fasilitas 02</span>
          <h3 className="text-2xl font-bold text-dark-text">Lab Pusat Keunggulan (PK)</h3>
          <p className="text-xs sm:text-sm text-muted-text mt-0.5">
            Ruang eksplorasi dan riset terintegrasi berstandar SMK Pusat Keunggulan nasional.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-soft-blue/50 text-deep-blue text-xs font-bold self-start sm:self-auto">
          3 Ruangan Spesialisasi
        </span>
      </div>

      {/* 3 Rooms Highlighting with Authentic Photos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Room 1: Ruang Produksi */}
        <div className="rounded-2xl border border-soft-blue overflow-hidden bg-page-canvas flex flex-col group">
          <div className="h-44 relative overflow-hidden">
            <img 
              alt="Ruang Produksi RPL" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src={ruangProduksiImg} 
            />
            <span className="absolute bottom-2 left-2 bg-dark-text/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[11px] font-bold">
              Ruang Produksi
            </span>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <p className="text-xs text-muted-text leading-relaxed">
              Unit percetakan digital, sablon baju, dan fabrikasi merchandise mandiri.
            </p>
          </div>
        </div>

        {/* Room 2: Ruang Podcast */}
        <div className="rounded-2xl border border-soft-blue overflow-hidden bg-page-canvas flex flex-col group">
          <div className="h-44 relative overflow-hidden">
            <img 
              alt="Ruang Podcast RPL" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              src={ruangPodcastImg} 
            />
            <span className="absolute bottom-2 left-2 bg-dark-text/80 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-lg text-[11px] font-bold">
              Ruang Podcast
            </span>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <p className="text-xs text-muted-text leading-relaxed">
              Studio kedap suara untuk konten siniar edukasi teknologi dan diskusi audio visual.
            </p>
          </div>
        </div>

        {/* Room 3: Ruang Praktik */}
        <div className="rounded-2xl border border-soft-blue overflow-hidden bg-page-canvas flex flex-col">
          <div className="h-44 relative overflow-hidden bg-gradient-to-br from-soft-blue/50 via-page-canvas to-soft-blue/30 flex items-center justify-center p-6 text-center border-b border-soft-blue/60">
            <div className="space-y-1.5">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white shadow-xs border border-soft-blue flex items-center justify-center text-deep-blue">
                <span className="material-symbols-outlined text-2xl text-deep-blue">devices_fold</span>
              </div>
              <h4 className="text-sm font-bold text-dark-text mt-1">Ruang Praktik</h4>
              <p className="text-[11px] font-semibold text-tech-blue">Riset Hardware & Robotik</p>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <p className="text-xs text-muted-text leading-relaxed">
              Area uji coba robotika, testing perangkat mobile, IoT, dan teknologi imersif VR.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Interactive Icon Chips/Cards for the 9 Equipment Items */}
      <div className="pt-4 border-t border-soft-blue/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
          <span className="text-xs font-bold text-dark-text block uppercase tracking-wider">
            9 Peralatan Utama Lab:
          </span>
          <span className="text-[11px] text-tech-blue font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">touch_app</span>
            Klik kartu untuk melihat foto dokumentasi asli
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-2">
          {equipments.map((item) => {
            const isSelected = selectedEquipment?.name === item.name;
            return (
              <button 
                key={item.name}
                type="button"
                onClick={() => setSelectedEquipment(item)}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer group relative ${
                  isSelected
                    ? 'bg-soft-blue/40 border-tech-blue shadow-xs scale-102 ring-2 ring-tech-blue/20'
                    : 'bg-page-canvas border-soft-blue hover:border-tech-blue/60 hover:bg-white hover:shadow-xs hover:-translate-y-0.5'
                }`}
                title={`Klik untuk melihat foto dokumentasi ${item.name}`}
              >
                <div className="relative mb-1">
                  <span className={`material-symbols-outlined text-xl transition-colors ${
                    isSelected ? 'text-deep-blue' : 'text-tech-blue group-hover:text-deep-blue'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-tech-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[11px] font-bold text-dark-text group-hover:text-deep-blue transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] text-muted-text mt-0.5 group-hover:text-tech-blue flex items-center gap-0.5 transition-colors">
                  <span className="material-symbols-outlined text-[10px]">photo_camera</span>
                  Foto
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox Popup for Equipment Documentation */}
      {selectedEquipment && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-text/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEquipment(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-3xl border border-soft-blue shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col max-h-[90vh] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-soft-blue/60 flex items-center justify-between bg-page-canvas">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-soft-blue/50 flex items-center justify-center text-tech-blue">
                  <span className="material-symbols-outlined text-xl">{selectedEquipment.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-dark-text leading-tight">
                      {selectedEquipment.title}
                    </h4>
                  </div>
                  <p className="text-xs text-tech-blue font-semibold">
                    {selectedEquipment.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-soft-blue/50 text-deep-blue text-[11px] font-bold">
                  {currentIndex + 1} / {equipments.length}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedEquipment(null)}
                  className="w-9 h-9 rounded-full bg-white border border-soft-blue hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors flex items-center justify-center text-muted-text cursor-pointer"
                  title="Tutup (Esc)"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden min-h-[260px] max-h-[420px]">
              <img 
                src={selectedEquipment.image} 
                alt={`Foto dokumentasi ${selectedEquipment.title}`}
                className="w-full h-full max-h-[420px] object-contain transition-opacity duration-300"
              />

              {/* Prev & Next Floating Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-text/60 hover:bg-dark-text text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                title="Peralatan Sebelumnya (Panah Kiri)"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-text/60 hover:bg-dark-text text-white backdrop-blur-xs flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                title="Peralatan Selanjutnya (Panah Kanan)"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>

              {/* Badge Overlay */}
              <div className="absolute bottom-3 left-3 bg-dark-text/80 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                <span className="material-symbols-outlined text-sm text-cyan-300">verified</span>
                Dokumentasi Otentik Lab PK RPL SMKN 12
              </div>
            </div>

            {/* Modal Description & Controls */}
            <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1 pr-2">
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  {selectedEquipment.description}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
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
                  onClick={() => setSelectedEquipment(null)}
                  className="px-4 py-2 rounded-xl bg-deep-blue text-white text-xs font-bold hover:bg-tech-blue transition-colors cursor-pointer shadow-xs"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

