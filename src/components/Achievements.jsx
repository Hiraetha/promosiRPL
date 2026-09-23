import React, { useState } from 'react';
import { achievements, achievementLevels } from '../data/achievements';

export default function Achievements() {
  const [selectedLevel, setSelectedLevel] = useState('Semua');

  const filteredAchievements = selectedLevel === 'Semua'
    ? achievements
    : achievements.filter(item => item.level === selectedLevel);

  const getRankBadgeClass = (rank) => {
    const r = rank.toLowerCase();
    if (r.includes('1') && !r.includes('harapan')) {
      return 'bg-deep-blue text-white shadow-xs';
    } else if (r.includes('2') || r.includes('runner')) {
      return 'bg-tech-blue text-white shadow-xs';
    } else {
      return 'bg-page-canvas text-deep-blue border border-soft-blue';
    }
  };

  const getRankIcon = (rank) => {
    const r = rank.toLowerCase();
    if (r.includes('1') && !r.includes('harapan')) return 'trophy';
    if (r.includes('2') || r.includes('runner')) return 'military_tech';
    return 'award_star';
  };

  return (
    <section className="space-y-6" id="prestasi">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-blue/40 text-deep-blue text-xs font-bold uppercase tracking-wider mb-2">
            Rekam Jejak Kejuaraan
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-text tracking-tight">
            Prestasi & Kompetisi
          </h2>
        </div>

        {/* Filter by Level */}
        <div className="flex flex-wrap items-center gap-1.5">
          {achievementLevels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-colors ${
                selectedLevel === lvl
                  ? 'font-bold text-white bg-deep-blue shadow-xs'
                  : 'font-semibold text-muted-text bg-page-canvas hover:bg-soft-blue hover:text-deep-blue'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Data List/Cards (Strictly: Kategori lomba, Juara/peringkat, Tingkat kompetisi, Tahun pelaksanaan) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAchievements.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-2xl p-5 border border-soft-blue flex items-center justify-between card-lift shadow-xs gap-3"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div className="w-11 h-11 rounded-xl bg-soft-blue/50 text-deep-blue flex items-center justify-center font-bold shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-2xl">
                  {getRankIcon(item.rank)}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-dark-text leading-snug">
                  {item.category}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-text">
                  <span className="font-medium text-tech-blue">Tingkat {item.level}</span>
                  <span>•</span>
                  <span>Tahun {item.year}</span>
                </div>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${getRankBadgeClass(item.rank)}`}>
              {item.rank}
            </span>
          </div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-soft-blue text-sm text-muted-text">
          Belum ada catatan kejuaraan untuk tingkat ini.
        </div>
      )}
    </section>
  );
}
