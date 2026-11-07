import React from 'react';
import { BookOpen, FolderTree, ExternalLink, Github, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenStructureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenStructureModal }) => {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white shadow-sm">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 7v14" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Ilmupedia</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Platform ensiklopedia pengetahuan terbuka Indonesia yang menyajikan literatur kurasi di bidang Sains & Teknologi, Sejarah & Peradaban Nusantara/Dunia, serta penalaran Matematika & Logika.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenStructureModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-all cursor-pointer"
              >
                <FolderTree className="w-3.5 h-3.5 text-emerald-400" />
                <span>Inspeksi Struktur Proyek</span>
              </button>
            </div>
          </div>

          {/* Kategori */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Kategori Ilmu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('sains')} 
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Sains & Teknologi</span>
                  <span className="text-[11px] font-mono text-slate-600">pages/sains.html</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sejarah')} 
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Sejarah & Peradaban</span>
                  <span className="text-[11px] font-mono text-slate-600">pages/sejarah.html</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('matematika')} 
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Matematika & Logika</span>
                  <span className="text-[11px] font-mono text-slate-600">pages/matematika.html</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('artikel-detail')} 
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Detail Baca Artikel</span>
                  <span className="text-[11px] font-mono text-slate-600">pages/artikel-detail.html</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Informasi & Kontak
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('tentang')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Visi & Misi Ilmupedia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tentang')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Dewan Kurator & Redaksi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('kontak')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Kirim Naskah Tulisan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('kontak')} 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Hubungi Kami & Erata
                </button>
              </li>
            </ul>
          </div>

          {/* Arsitektur GitHub Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Arsitektur Web
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Dibangun dengan arsitektur multi-page terstruktur rapi untuk kemudahan hosting di GitHub Pages.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
              <div className="text-emerald-400 font-semibold">ilmupedia/</div>
              <div className="pl-2 text-slate-400">├── index.html (redirect)</div>
              <div className="pl-2 text-slate-400">├── home.html (landing)</div>
              <div className="pl-2 text-slate-400">├── pages/*.html</div>
              <div className="pl-2 text-slate-400">└── css/ & js/</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Ilmupedia. Hak Cipta Konten Terbuka (CC BY-SA 4.0).</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Dibuat dengan dedikasi untuk literasi Indonesia
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
