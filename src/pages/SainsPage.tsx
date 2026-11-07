import React, { useState } from 'react';
import { Atom, Sparkles, Sliders, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { Article } from '../data/articles';

interface SainsPageProps {
  articles: Article[];
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export const SainsPage: React.FC<SainsPageProps> = ({ articles, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  
  // Interactive Lab State
  const [mass1, setMass1] = useState(5.972e24); // Earth mass
  const [mass2, setMass2] = useState(70); // 70kg human
  const [radius, setRadius] = useState(6371000); // Earth radius (m)

  const G = 6.67430e-11;
  const force = (G * mass1 * mass2) / (radius * radius);
  const surfaceGravity = (G * mass1) / (radius * radius);

  const scienceArticles = articles.filter((a) => a.category === 'sains');

  const filteredArticles = scienceArticles.filter((a) => {
    if (activeFilter === 'Semua') return true;
    if (activeFilter === 'Fisika') return a.subCategory.includes('Fisika') || a.subCategory.includes('Kosmologi');
    if (activeFilter === 'Biologi') return a.subCategory.includes('Biologi') || a.subCategory.includes('Genom');
    if (activeFilter === 'Astronomi') return a.subCategory.includes('Astronomi') || a.subCategory.includes('Kosmologi');
    return true;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* Category Banner Hero */}
      <section className="pt-10 pb-14 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/70 via-indigo-50/20 to-transparent dark:from-blue-950/20 dark:via-transparent dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-900">
            <Atom className="w-3.5 h-3.5" />
            <span>pages/sains.html &bull; Modul Sains Terbuka</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Sains & <span className="text-blue-600 dark:text-blue-400">Teknologi Modern</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Menjelajahi keajaiban mikrokosmos genetika, superkonduktivitas bebas hambatan, gravitasi kosmik, dan astrofisika modern berdasarkan studi peer-reviewed.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {['Semua', 'Fisika', 'Biologi', 'Astronomi'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'Semua' ? 'Semua Sains' : `🔬 ${cat}`}
            </button>
          ))}
        </div>

        {/* Interactive Gravity Simulation Lab */}
        <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-blue-100 dark:border-blue-950/60 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Laboratorium Mini: Simulasi Gaya Gravitasi Universal Newton
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Formula: <span className="font-mono font-semibold">F = G &times; (m₁ &times; m₂) / r²</span> di mana G = 6.6743 &times; 10⁻¹¹ N&middot;m²/kg²
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Massa Benda 1 (kg):
              </label>
              <input
                type="number"
                value={mass1}
                onChange={(e) => setMass1(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
              <div className="flex gap-1.5 pt-1">
                <button 
                  onClick={() => { setMass1(5.972e24); setRadius(6371000); }} 
                  className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 font-semibold"
                >
                  Bumi
                </button>
                <button 
                  onClick={() => { setMass1(7.342e22); setRadius(1737400); }} 
                  className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 font-semibold"
                >
                  Bulan
                </button>
                <button 
                  onClick={() => { setMass1(1.898e27); setRadius(69911000); }} 
                  className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 font-semibold"
                >
                  Jupiter
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Massa Benda 2 (kg):
              </label>
              <input
                type="number"
                value={mass2}
                onChange={(e) => setMass2(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
              <span className="text-[10px] text-slate-400">Standar massa manusia: 70 kg</span>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Jarak Antar Pusat Massa r (meter):
              </label>
              <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
              <span className="text-[10px] text-slate-400">Jari-jari rata-rata Bumi: 6.371.000 meter</span>
            </div>
          </div>

          {/* Results Box */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Gaya Tarik Gravitasi (F):
              </div>
              <div className="text-2xl font-extrabold text-blue-900 dark:text-blue-100 font-mono mt-0.5">
                {force.toFixed(2)} <span className="text-sm font-sans font-semibold">Newton (N)</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Percepatan Gravitasi Permukaan (g):
              </div>
              <div className="text-2xl font-extrabold text-blue-900 dark:text-blue-100 font-mono mt-0.5">
                {surfaceGravity.toFixed(3)} <span className="text-sm font-sans font-semibold">m/s²</span>
              </div>
            </div>
          </div>
        </div>

        {/* Science Article Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Koleksi Modul & Kajian Sains
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {filteredArticles.length} Modul Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('artikel-detail', { id: article.id })}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 relative overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-600 text-white">
                        {article.subCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2">
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium truncate max-w-[150px]">
                      {article.author.name}
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      Pelajari &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
