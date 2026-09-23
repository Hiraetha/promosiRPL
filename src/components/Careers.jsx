import React from 'react';

export default function Careers() {
  const careers = [
    {
      title: 'Software Developer',
      desc: 'Membangun arsitektur perangkat lunak yang andal dan terstruktur.',
      icon: 'terminal',
    },
    {
      title: 'Web Developer',
      desc: 'Merancang aplikasi web modern dari sisi tampilan dan fungsionalitas server.',
      icon: 'code',
    },
    {
      title: 'Mobile Developer',
      desc: 'Membuat aplikasi Android dan iOS native maupun cross-platform.',
      icon: 'smartphone',
    },
    {
      title: 'UI/UX Designer',
      desc: 'Meriset alur kenyamanan user dan merancang antarmuka produk digital.',
      icon: 'palette',
    },
    {
      title: 'Database Developer',
      desc: 'Mengelola penyimpanan basis data skala besar dan query optimal.',
      icon: 'database',
    },
    {
      title: 'IT Support',
      desc: 'Memastikan keandalan infrastruktur perangkat keras dan lunak instansi.',
      icon: 'support_agent',
    },
    {
      title: 'Game Developer',
      desc: 'Menciptakan gameplay interaktif, mekanik fisika, dan aset game 2D/3D.',
      icon: 'sports_esports',
    },
    {
      title: 'Wirausaha Teknologi',
      desc: 'Mendirikan software agency dan layanan digital mandiri inovatif.',
      icon: 'trending_up',
    },
  ];

  return (
    <section className="rounded-[32px] bg-surface-container-low border border-soft-blue text-dark-text p-8 sm:p-12 relative overflow-hidden shadow-sm" id="karier">
      <div className="relative z-10 max-w-2xl mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/60 text-deep-blue text-xs font-bold uppercase tracking-wider mb-3">
          Peluang Masa Depan
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-dark-text">
          Dari Kelas Menuju Dunia Teknologi
        </h2>
        <p className="text-sm sm:text-base text-muted-text mt-2 leading-relaxed">
          Lulusan Rekayasa Perangkat Lunak SMKN 12 Jakarta dibekali kesiapan kerja tinggi di berbagai sektor industri digital, perusahaan multinasional, maupun startup mandiri.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {careers.map((career) => (
          <div 
            key={career.title}
            className="p-5 rounded-2xl bg-white border border-soft-blue shadow-xs card-lift transition-all flex flex-col justify-between"
          >
            <div>
              <span className="material-symbols-outlined text-tech-blue text-2xl mb-2.5 block">
                {career.icon}
              </span>
              <h4 className="text-base font-bold text-dark-text">
                {career.title}
              </h4>
              <p className="text-xs text-muted-text mt-1 leading-relaxed">
                {career.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
