import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';
import labImg from '../assets/images/lab-komputer.jpg';
import podcastImg from '../assets/images/ruang-podcast.jpg';
import produksiImg from '../assets/images/ruang-produksi.jpg';
import semudahImg from '../assets/images/ruangan-semudah.jpg';
import lksSoftwareImg from '../assets/images/lks-it-software-solution.jpg';
import lksWebImg from '../assets/images/lks-web-technology.jpg';
import lksSuasanaImg from '../assets/images/lks-pelaksanaan-kompetisi.jpg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModal(null);
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const filterChips = [
    'Semua',
    'Laboratorium',
    'Pembelajaran',
    'Project',
    'Workshop',
    'Lomba',
  ];

  const galleryData = [
    {
      id: 1,
      image: labImg,
      tag: 'Praktik Pemrograman',
      tagBg: 'bg-sky-azure text-white',
      title: 'Sesi Koding & Kolaborasi di Lab Komputer',
      desc: 'Siswa memprogram website terintegrasi API dan sistem database relasional.',
      colSpan: 'md:col-span-7',
      height: 'h-80',
      category: ['Laboratorium', 'Pembelajaran'],
    },
    {
      id: 2,
      image: podcastImg,
      tag: 'Project Presentation',
      tagBg: 'bg-sky-azure text-white',
      title: 'Diskusi Konsep & Rekaman Konten',
      desc: 'Ruang podcast untuk presentasi project dan ideasi produk teknologi digital.',
      colSpan: 'md:col-span-5',
      height: 'h-80',
      category: ['Project', 'Pembelajaran'],
    },
    {
      id: 3,
      image: produksiImg,
      tag: 'Workshop & Fabrikasi',
      tagBg: 'bg-sky-azure text-white',
      title: 'Produksi Merchandise Digital',
      desc: 'Eksplorasi mesin press mug dan sablon baju digital.',
      colSpan: 'md:col-span-5',
      height: 'h-72',
      category: ['Workshop'],
    },
    {
      id: 4,
      image: semudahImg,
      tag: 'Teaching Factory',
      tagBg: 'bg-sky-azure text-white',
      title: 'Praktik Layanan Pelanggan & Kasir SEMUDAH',
      desc: 'Siswa melayani transaksi cetak, fotocopy, dan top-up secara profesional.',
      colSpan: 'md:col-span-7',
      height: 'h-72',
      category: ['Workshop', 'Pembelajaran'],
    },
    {
      id: 5,
      image: lksWebImg,
      tag: 'LKS Web Technology',
      tagBg: 'bg-sky-azure text-white',
      title: 'Kontingen LKS SMK Bidang Web Technology',
      desc: 'Siswa dan guru pembimbing RPL SMKN 12 Jakarta pada ajang LKS Jakarta Utara.',
      colSpan: 'md:col-span-6',
      height: 'h-80',
      category: ['Lomba', 'Pembelajaran'],
    },
    {
      id: 6,
      image: lksSoftwareImg,
      tag: 'LKS IT Software Solution',
      tagBg: 'bg-sky-azure text-white',
      title: 'Kontingen LKS IT Software Solution for Business',
      desc: 'Kompetisi perancangan software enterprise tingkat wilayah Jakarta Utara.',
      colSpan: 'md:col-span-6',
      height: 'h-80',
      category: ['Lomba', 'Project'],
    },
    {
      id: 7,
      image: lksSuasanaImg,
      tag: 'Arena Kompetisi LKS',
      tagBg: 'bg-sky-azure text-white',
      title: 'Suasana Pelaksanaan Kompetisi LKS Jakarta Utara',
      desc: 'Dokumentasi perjuangan peserta saat menyelesaikan tantangan coding dan live test di hadapan dewan juri.',
      colSpan: 'md:col-span-12',
      height: 'h-96',
      category: ['Lomba'],
    },
  ];

  const filteredItems = activeFilter === 'Semua'
    ? galleryData
    : galleryData.filter(item => item.category.includes(activeFilter));

  return (
    <section className="space-y-8" id="galeri">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
            Dokumentasi & Portofolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
            Galeri Aktivitas RPL
          </h2>
        </div>
        <p className="text-sm text-muted-text max-w-md">
          Dokumentasi nyata kegiatan coding, riset tim, workshop industri, dan pembuatan proyek solutif.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {filterChips.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveFilter(chip)}
            className={`px-4 py-1.5 rounded-full text-xs transition-colors ${
              activeFilter === chip
                ? 'font-bold text-white bg-deep-blue shadow-xs'
                : 'font-semibold text-muted-text bg-page-canvas hover:bg-soft-blue/50 hover:text-deep-blue'
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Masonry Editorial Layout Featuring Authentic Photos */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModal(item)}
            className={`${item.colSpan} relative ${item.height} rounded-[24px] overflow-hidden border border-soft-blue group card-lift cursor-pointer shadow-xs`}
          >
            <img 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src={item.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/85 via-dark-text/30 to-transparent"></div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs p-2 rounded-xl text-deep-blue shadow-xs">
              <ZoomIn className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className={`px-2.5 py-0.5 rounded-md ${item.tagBg} text-[10px] font-bold uppercase tracking-wide inline-block shadow-xs`}>
                {item.tag}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-soft-blue mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-soft-blue text-sm text-muted-text">
          Belum ada foto dokumentasi untuk kategori ini.
        </div>
      )}

      {/* Lightbox Modal (Portal to document.body) */}
      {activeModal && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-dark-text/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-[28px] max-w-2xl w-full overflow-hidden shadow-2xl border border-soft-blue relative my-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[65vh] min-h-[260px] bg-slate-950 flex items-center justify-center relative overflow-hidden">
              <img src={activeModal.image} alt={activeModal.title} className="w-full h-full max-h-[65vh] object-contain" />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-tech-blue uppercase tracking-wider block">
                {activeModal.tag}
              </span>
              <h3 className="text-xl font-bold text-dark-text">
                {activeModal.title}
              </h3>
              <p className="text-sm text-muted-text">
                {activeModal.desc}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
