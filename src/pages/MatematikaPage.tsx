import React, { useState } from 'react';
import { Binary, Calculator, Sparkles, ArrowRight, BookOpen, Sigma, Hash } from 'lucide-react';
import { Article } from '../data/articles';

interface MatematikaPageProps {
  articles: Article[];
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export const MatematikaPage: React.FC<MatematikaPageProps> = ({ articles, onNavigate }) => {
  // 1. Pythagoras Calculator State
  const [sideA, setSideA] = useState<number>(3);
  const [sideB, setSideB] = useState<number>(4);

  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);

  // 2. Quadratic Equation Calculator State (ax^2 + bx + c = 0)
  const [quadA, setQuadA] = useState<number>(1);
  const [quadB, setQuadB] = useState<number>(-5);
  const [quadC, setQuadC] = useState<number>(6);

  const discriminant = quadB * quadB - 4 * quadA * quadC;
  let quadRootsText = '';
  if (quadA === 0) {
    quadRootsText = 'Bukan persamaan kuadrat (a = 0)';
  } else if (discriminant > 0) {
    const x1 = (-quadB + Math.sqrt(discriminant)) / (2 * quadA);
    const x2 = (-quadB - Math.sqrt(discriminant)) / (2 * quadA);
    quadRootsText = `Dua akar riil berbeda: x₁ = ${x1.toFixed(3)}, x₂ = ${x2.toFixed(3)}`;
  } else if (discriminant === 0) {
    const x = -quadB / (2 * quadA);
    quadRootsText = `Satu akar kembar riil: x₁ = x₂ = ${x.toFixed(3)}`;
  } else {
    const real = (-quadB / (2 * quadA)).toFixed(3);
    const imag = (Math.sqrt(-discriminant) / (2 * quadA)).toFixed(3);
    quadRootsText = `Dua akar imajiner (kompleks): x = ${real} ± ${imag}i`;
  }

  // 3. Arithmetic Sequence (Un = a + (n-1)b, Sn = n/2 * (2a + (n-1)b))
  const [seqA, setSeqA] = useState<number>(2); // first term
  const [seqB, setSeqB] = useState<number>(3); // common difference
  const [seqN, setSeqN] = useState<number>(10); // term index

  const termN = seqA + (seqN - 1) * seqB;
  const sumN = (seqN / 2) * (2 * seqA + (seqN - 1) * seqB);

  const mathArticles = articles.filter((a) => a.category === 'matematika');

  return (
    <div className="space-y-12 pb-20">
      
      {/* Category Banner Hero */}
      <section className="pt-10 pb-14 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-emerald-50/70 via-teal-50/20 to-transparent dark:from-emerald-950/20 dark:via-transparent dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-semibold mb-4 border border-emerald-200 dark:border-emerald-900">
            <Binary className="w-3.5 h-3.5" />
            <span>pages/matematika.html &bull; Keindahan Angka & Logika</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Matematika & <span className="text-emerald-600 dark:text-emerald-400">Logika Murni</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Menyelami harmoni Rasio Emas (φ), misteri ketakhinggaan Cantor & Hilbert, pembuktian Teorema Fermat, serta laboratorium kalkulator interaktif untuk memecahkan rumus instan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Interactive Math Lab & Calculators */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
            <Calculator className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Laboratorium Kalkulator Matematika Interaktif
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Calc 1: Pythagoras */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Geometri Bidang
                  </span>
                  <span className="font-mono text-xs text-slate-400">a² + b² = c²</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Teorema Pythagoras
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Hitung panjang sisi miring (hipotenusa c) segitiga siku-siku dari dua sisi tegak.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Sisi Alas (a):
                    </label>
                    <input
                      type="number"
                      value={sideA}
                      onChange={(e) => setSideA(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Sisi Tegak (b):
                    </label>
                    <input
                      type="number"
                      value={sideB}
                      onChange={(e) => setSideB(Math.max(0.1, parseFloat(e.target.value) || 0))}
                      className="w-full px-3 py-2 text-sm font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 bg-emerald-50 dark:bg-emerald-950/40 -mx-6 -mb-6 p-6 rounded-b-3xl">
                <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                  Hipotenusa (c):
                </div>
                <div className="text-2xl font-extrabold text-emerald-900 dark:text-emerald-100 font-mono mt-0.5">
                  {hypotenuse.toFixed(3)}
                </div>
                <div className="text-[11px] text-emerald-700/80 dark:text-emerald-400 font-mono mt-1">
                  c² = {sideA}² + {sideB}² = {(sideA * sideA + sideB * sideB).toFixed(2)}
                </div>
              </div>
            </div>

            {/* Calc 2: Persamaan Kuadrat */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    Aljabar
                  </span>
                  <span className="font-mono text-xs text-slate-400">ax² + bx + c = 0</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Solusi Persamaan Kuadrat
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Hitung nilai diskriminan D = b² - 4ac dan akar-akar persamaan x₁ dan x₂.
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Koef. a:
                    </label>
                    <input
                      type="number"
                      value={quadA}
                      onChange={(e) => setQuadA(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Koef. b:
                    </label>
                    <input
                      type="number"
                      value={quadB}
                      onChange={(e) => setQuadB(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Konst. c:
                    </label>
                    <input
                      type="number"
                      value={quadC}
                      onChange={(e) => setQuadC(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 bg-teal-50 dark:bg-teal-950/40 -mx-6 -mb-6 p-6 rounded-b-3xl">
                <div className="text-[11px] font-bold text-teal-800 dark:text-teal-300 uppercase">
                  Diskriminan (D): <span className="font-mono text-sm">{discriminant}</span>
                </div>
                <div className="text-xs font-bold text-teal-900 dark:text-teal-100 font-mono mt-1 leading-snug">
                  {quadRootsText}
                </div>
              </div>
            </div>

            {/* Calc 3: Barisan & Deret Aritmatika */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Aritmatika
                  </span>
                  <span className="font-mono text-xs text-slate-400">Un = a + (n-1)b</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  Barisan & Deret Aritmatika
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Hitung nilai suku ke-n (Un) dan jumlah n suku pertama (Sn).
                </p>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Suku 1 (a):
                    </label>
                    <input
                      type="number"
                      value={seqA}
                      onChange={(e) => setSeqA(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Beda (b):
                    </label>
                    <input
                      type="number"
                      value={seqB}
                      onChange={(e) => setSeqB(parseFloat(e.target.value) || 0)}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Suku ke-(n):
                    </label>
                    <input
                      type="number"
                      value={seqN}
                      onChange={(e) => setSeqN(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-2 py-1.5 text-xs font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 bg-blue-50 dark:bg-blue-950/40 -mx-6 -mb-6 p-6 rounded-b-3xl">
                <div className="text-[11px] font-bold text-blue-800 dark:text-blue-300 uppercase">
                  Suku ke-{seqN} (U{seqN}): <span className="font-mono text-base font-extrabold">{termN}</span>
                </div>
                <div className="text-[11px] font-bold text-blue-800 dark:text-blue-300 uppercase mt-1">
                  Jumlah S{seqN}: <span className="font-mono text-base font-extrabold">{sumN}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mathematics Articles */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Artikel & Pembahasan Konsep Matematika
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {mathArticles.length} Modul Tersedia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mathArticles.map((article) => (
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
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-600 text-white">
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

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
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
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      Pelajari Konsep &rarr;
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
