import React, { useState } from 'react';
import { Landmark, Calendar, Clock, MapPin, ArrowRight, BookOpen, Compass } from 'lucide-react';
import { Article } from '../data/articles';

interface SejarahPageProps {
  articles: Article[];
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export const SejarahPage: React.FC<SejarahPageProps> = ({ articles, onNavigate }) => {
  const [activeEraIndex, setActiveEraIndex] = useState(0);

  const historyArticles = articles.filter((a) => a.category === 'sejarah');

  const timelineEras = [
    {
      id: 'era-sriwijaya',
      title: 'Kemaharajaan Sriwijaya',
      period: 'Abad VII – XI Masehi',
      location: 'Sumatra, Selat Malaka, Semenanjung Melayu',
      summary: 'Thalassokrasi maritim terbesar yang mengontrol jalur perdagangan rempah internasional, pusat pendidikan teologi dan bahasa Sanskerta Asia yang dicatat oleh musafir Tiongkok I-Tsing.',
      highlights: ['Prasasti Kedukan Bukit (683 M)', 'Monopoli Selat Malaka & Selat Sunda', 'Hubungan Diplomatik dengan Dinasti Tang & Kerajaan Chola'],
      articleId: 'sejarah-1'
    },
    {
      id: 'era-majapahit',
      title: 'Imperium Wilwatikta (Majapahit)',
      period: '1293 – 1527 Masehi',
      location: 'Trowulan, Jawa Timur & Kepulauan Nusantara',
      summary: 'Kekaisaran agraris-maritim yang diproklamasikan Raden Wijaya pasca kekalahan armada Mongol Kublai Khan. Di bawah Prabu Hayam Wuruk dan Mahapatih Gajah Mada, memadukan hukum maritim dan persatuan Nusantara melalui Sumpah Palapa.',
      highlights: ['Sumpah Palapa Mahapatih Gajah Mada', 'Kitab Negarakretagama karya Mpu Prapanca', 'Arsitektur Bata Merah Candi Bajang Ratu']
    },
    {
      id: 'era-alexandria',
      title: 'Perpustakaan Kuno Alexandria',
      period: '283 Sebelum Masehi – 391 Masehi',
      location: 'Alexandria, Mesir Kuno (Era Hellenistik)',
      summary: 'Pusat kecendekiaan terbesar peradaban kuno yang mengumpulkan ratusan ribu gulungan papirus. Tempat Archimedes, Euklides, dan Eratosthenes merumuskan dasar geometri dan ukuran keliling bumi.',
      highlights: ['Pengukuran Keliling Bumi oleh Eratosthenes', 'Prinsip Salin Naskah Setiap Kapal Asing', 'Musaeum: Akademi Riset Pertama Dunia'],
      articleId: 'sejarah-2'
    },
    {
      id: 'era-revolusi',
      title: 'Revolusi Industri Global',
      period: '1760 – 1840 Masehi',
      location: 'Britania Raya & Eropa Barat',
      summary: 'Transformasi peradaban dari tenaga hewan dan otot menuju mekanisasi mesin uap James Watt, memicu ledakan urbanisasi massal, jalur kereta api, dan struktur sosial modern.',
      highlights: ['Penyempurnaan Mesin Uap James Watt', 'Pabrik Tekstil Mekanis & Jalur Kereta Api', 'Kelahiran Serikat Buruh & Ekonomi Modern']
    },
    {
      id: 'era-proklamasi',
      title: 'Fajar Kemerdekaan Indonesia',
      period: '17 Agustus 1945',
      location: 'Pegangsaan Timur 56, Jakarta',
      summary: 'Titik kulminasi perjuangan bangsa Indonesia melepaskan belenggu kolonialisme melalui konsensus pemuda di Rengasdengklok hingga pembacaan teks proklamasi oleh Soekarno dan Mohammad Hatta.',
      highlights: ['Peristiwa Rengasdengklok', 'Perumusan Naskah di Rumah Laksamana Maeda', 'Pengibaran Bendera Sang Saka Merah Putih']
    }
  ];

  const currentEra = timelineEras[activeEraIndex];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Category Banner Hero */}
      <section className="pt-10 pb-14 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-amber-50/70 via-orange-50/20 to-transparent dark:from-amber-950/20 dark:via-transparent dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 text-xs font-semibold mb-4 border border-amber-200 dark:border-amber-900">
            <Landmark className="w-3.5 h-3.5" />
            <span>pages/sejarah.html &bull; Dokumentasi Sejarah & Peradaban</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Jejak Peradaban & <span className="text-amber-600 dark:text-amber-400">Kronik Sejarah</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Menelusuri warisan maritim Nusantara kuno, monumen kebijaksanaan dunia lampau, serta momentum perubahan sosial yang membentuk peradaban hari ini.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Interactive Timeline Explorer */}
        <div className="p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  Linimasa Kronik Sejarah (Interactive Timeline)
                </h3>
                <p className="text-xs text-slate-500">Pilih era sejarah untuk membuka ikhtisar kronologi peristiwa</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full">
              5 Era Kunci
            </span>
          </div>

          {/* Era Navigation Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-100 dark:border-slate-800 scrollbar-thin">
            {timelineEras.map((era, idx) => (
              <button
                key={era.id}
                onClick={() => setActiveEraIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeEraIndex === idx
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {era.title}
              </button>
            ))}
          </div>

          {/* Active Era Spotlight Card */}
          <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {currentEra.period}
              </span>
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {currentEra.location}
              </span>
            </div>

            <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
              {currentEra.title}
            </h4>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentEra.summary}
            </p>

            <div className="pt-3 border-t border-amber-200/60 dark:border-amber-900/40">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-2">Sorotan & Artefak Penting:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {currentEra.highlights.map((h, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentEra.articleId && (
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('artikel-detail', { id: currentEra.articleId })}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer shadow-xs"
                >
                  <span>Baca Ulasan Lengkap ({currentEra.title})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* History Articles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Arsip & Dokumentasi Sejarah Terverifikasi
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {historyArticles.length} Kajian Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historyArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('artikel-detail', { id: article.id })}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 relative overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-600 text-white">
                        {article.subCategory}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{article.date}</span>
                      <span>&bull;</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {article.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2">
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {article.author.name}
                    </span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                      Buka Kajian &rarr;
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
