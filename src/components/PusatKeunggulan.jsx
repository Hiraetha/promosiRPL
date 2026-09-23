import React from 'react';
import ruangProduksiImg from '../assets/images/ruang-produksi.jpg';
import ruangPodcastImg from '../assets/images/ruang-podcast.jpg';

export default function PusatKeunggulan() {
  const equipments = [
    { name: 'Laptop', icon: 'laptop_chromebook' },
    { name: 'HP', icon: 'phone_iphone' },
    { name: 'Kamera', icon: 'photo_camera' },
    { name: '3D Printer', icon: 'view_in_ar' },
    { name: 'PC', icon: 'desktop_windows' },
    { name: 'Sablon Baju', icon: 'checkroom' },
    { name: 'Press Mug', icon: 'local_cafe' },
    { name: 'VR', icon: 'vrpano' },
    { name: 'Lean Bot', icon: 'smart_toy' },
  ];

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

      {/* Modern Icon Chips/Cards for the 9 Equipment Items */}
      <div className="pt-4 border-t border-soft-blue/60">
        <span className="text-xs font-bold text-dark-text block mb-3 uppercase tracking-wider">
          9 Peralatan Utama Lab:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-2">
          {equipments.map((item) => (
            <div 
              key={item.name}
              className="p-2.5 rounded-xl bg-page-canvas border border-soft-blue flex flex-col items-center justify-center text-center hover:border-tech-blue/50 transition-colors"
            >
              <span className="material-symbols-outlined text-tech-blue text-xl mb-1">{item.icon}</span>
              <span className="text-[11px] font-bold text-dark-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
