import React from 'react';
import { 
  Atom, 
  Landmark, 
  Binary, 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Eye, 
  Sparkles,
  BookOpen,
  Award,
  Users,
  Compass,
  FolderTree
} from 'lucide-react';
import { Article } from '../data/articles';

interface HomePageProps {
  articles: Article[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigate: (page: string, params?: { id?: string }) => void;
  onOpenStructureModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  articles,
  searchQuery,
  onSearchChange,
  onNavigate,
  onOpenStructureModal
}) => {
  const featuredArticle = articles.find((a) => a.featured && a.id === 'sains-1') || articles[0];

  const filteredArticles = articles.filter((a) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      a.title.toLowerCase().includes(q) ||
      a.snippet.toLowerCase().includes(q) ||
      a.categoryLabel.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/60 via-slate-50/30 to-transparent dark:from-slate-900/60 dark:via-slate-900/20 dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 text-xs font-semibold mb-6 shadow-xs border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Ensiklopedia Terbuka & Edukasi Terpadu</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Jelajahi Cakrawala <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Ilmu Pengetahuan
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Temukan ratusan modul terverifikasi, artikel mendalam, dan laboratorium kalkulator interaktif seputar <strong>Sains & Teknologi</strong>, <strong>Sejarah & Peradaban</strong>, serta <strong>Matematika & Logika</strong>.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-6">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 absolute left-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cari konsep ilmiah, tokoh sejarah, atau rumus matematika..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-base transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-4 text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white"
                >
                  Bersihkan
                </button>
              )}
            </div>
          </div>

          {/* Quick chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Pencarian populer:</span>
            {['Materi Gelap', 'Sriwijaya', 'Rasio Emas', 'CRISPR', 'Hotel Hilbert'].map((chip) => (
              <button
                key={chip}
                onClick={() => onSearchChange(chip)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 3 Kategori Utama */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Kategori Utama Pengetahuan
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Jelajahi disiplin keilmuan berdasarkan struktur halaman spesifik
              </p>
            </div>
            <button
              onClick={onOpenStructureModal}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <FolderTree className="w-3.5 h-3.5" />
              <span>Lihat Struktur File</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Sains */}
            <div 
              onClick={() => onNavigate('sains')}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 dark:hover:border-blue-500/60 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">pages/sains.html</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Sains & Teknologi
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fisika kuantum, misteri alam semesta, rekayasa genetika CRISPR, reaksi kimia, dan laboratorium gravitasi Newton.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Buka Modul Sains</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card Sejarah */}
            <div 
              onClick={() => onNavigate('sejarah')}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/60 dark:hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">pages/sejarah.html</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Sejarah & Peradaban
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Peradaban kuno Alexandria, kejayaan maritim Sriwijaya & Majapahit, linimasa kronik interaktif, dan revolusi industri.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Telusuri Sejarah</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card Matematika */}
            <div 
              onClick={() => onNavigate('matematika')}
              className="group relative p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <Binary className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">pages/matematika.html</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Matematika & Logika
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Keindahan Rasio Emas (φ), paradoks hotel Hilbert, kalkulator teorema Pythagoras, dan pemecah persamaan kuadrat.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Pelajari Matematika</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>

        {/* Featured Article of the Week */}
        {featuredArticle && !searchQuery && (
          <section>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Artikel Sorotan Minggu Ini
              </h2>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Edisi Pilihan Editor</span>
            </div>

            <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 h-72 lg:h-auto relative overflow-hidden bg-slate-900">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/20">
                    {featuredArticle.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredArticle.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredArticle.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {featuredArticle.author.name}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {featuredArticle.author.title.split('&')[0]}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate('artikel-detail', { id: featuredArticle.id })}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-md"
                  >
                    <span>Baca Penuh</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles Grid */}
        <section>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {searchQuery ? `Hasil Pencarian untuk "${searchQuery}"` : 'Artikel & Modul Terbaru'}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Daftar bacaan yang dapat dibuka melalui template <code>pages/artikel-detail.html</code>
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {filteredArticles.length} Artikel
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                Tidak ada artikel yang cocok
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Coba gunakan kata kunci lain seperti "kuantum", "sriwijaya", atau "rasio".
              </p>
              <button
                onClick={() => onSearchChange('')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onNavigate('artikel-detail', { id: article.id })}
                  className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="h-48 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-white">
                          {article.subCategory}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
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
                      <span className="font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                        Baca &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
