/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectStructureModal } from './components/ProjectStructureModal';
import { HomePage } from './pages/HomePage';
import { SainsPage } from './pages/SainsPage';
import { SejarahPage } from './pages/SejarahPage';
import { MatematikaPage } from './pages/MatematikaPage';
import { ArtikelDetailPage } from './pages/ArtikelDetailPage';
import { TentangPage } from './pages/TentangPage';
import { KontakPage } from './pages/KontakPage';
import { ARTICLES_DATA } from './data/articles';
import { downloadGitHubPagesZip } from './data/projectStructure';
import { FolderTree, Download, Check, Sparkles, X, Layers } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentArticleId, setCurrentArticleId] = useState<string>('sains-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isStructureModalOpen, setIsStructureModalOpen] = useState<boolean>(false);
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Dark mode state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('ilmupedia_theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('ilmupedia_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('ilmupedia_theme', 'light');
    }
  }, [isDark]);

  // Read URL params / paths on load
  useEffect(() => {
    const syncFromUrl = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const articleId = params.get('id');

      if (articleId) {
        setCurrentArticleId(articleId);
      }

      if (path.includes('sains') || hash.includes('sains')) {
        setCurrentPage('sains');
      } else if (path.includes('sejarah') || hash.includes('sejarah')) {
        setCurrentPage('sejarah');
      } else if (path.includes('matematika') || hash.includes('matematika')) {
        setCurrentPage('matematika');
      } else if (path.includes('artikel-detail') || hash.includes('artikel')) {
        setCurrentPage('artikel-detail');
      } else if (path.includes('tentang') || hash.includes('tentang')) {
        setCurrentPage('tentang');
      } else if (path.includes('kontak') || hash.includes('kontak')) {
        setCurrentPage('kontak');
      } else {
        setCurrentPage('home');
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const handleNavigate = (page: string, params?: { id?: string }) => {
    setCurrentPage(page);
    if (params?.id) {
      setCurrentArticleId(params.id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update history state without reloading
    const newPath = page === 'home' ? '/home.html' : `/pages/${page}.html`;
    const searchParam = params?.id ? `?id=${params.id}` : '';
    try {
      window.history.pushState({}, '', `${newPath}${searchParam}`);
    } catch {
      // In restricted iframe environments
    }
  };

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    const ok = await downloadGitHubPagesZip();
    setIsDownloading(false);
    if (ok) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors font-sans antialiased">
      
      {/* Top Project Structure Notification Banner */}
      {isBannerVisible && (
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs px-4 py-2.5 border-b border-blue-800/60 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-blue-500/20 text-blue-300">
                <FolderTree className="w-3.5 h-3.5" />
              </span>
              <span>
                <strong>Struktur Proyek Ilmupedia Lengkap:</strong> Tersedia file HTML terpisah (<code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">home.html</code>, <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">pages/*.html</code>, <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">css/</code>, <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">js/</code>, <code className="bg-black/30 px-1 py-0.5 rounded font-mono text-[11px]">assets/</code>) siap deploy di GitHub Pages.
              </span>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setIsStructureModalOpen(true)}
                className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Layers className="w-3 h-3 text-emerald-400" />
                <span>Pohon Direktori</span>
              </button>

              <button
                onClick={handleDownloadZip}
                disabled={isDownloading}
                className="px-2.5 py-1 rounded-md bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Terunduh!</span>
                  </>
                ) : isDownloading ? (
                  <span>Memproses...</span>
                ) : (
                  <>
                    <Download className="w-3 h-3" />
                    <span>Unduh .ZIP</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsBannerVisible(false)}
                className="p-1 text-slate-400 hover:text-white"
                title="Tutup pengumuman"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenStructureModal={() => setIsStructureModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            articles={ARTICLES_DATA}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onNavigate={handleNavigate}
            onOpenStructureModal={() => setIsStructureModalOpen(true)}
          />
        )}

        {currentPage === 'sains' && (
          <SainsPage
            articles={ARTICLES_DATA}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'sejarah' && (
          <SejarahPage
            articles={ARTICLES_DATA}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'matematika' && (
          <MatematikaPage
            articles={ARTICLES_DATA}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'artikel-detail' && (
          <ArtikelDetailPage
            articles={ARTICLES_DATA}
            currentArticleId={currentArticleId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'tentang' && (
          <TentangPage
            onNavigate={handleNavigate}
            onOpenStructureModal={() => setIsStructureModalOpen(true)}
          />
        )}

        {currentPage === 'kontak' && (
          <KontakPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStructureModal={() => setIsStructureModalOpen(true)}
      />

      {/* Interactive Project Structure Tree Modal */}
      <ProjectStructureModal
        isOpen={isStructureModalOpen}
        onClose={() => setIsStructureModalOpen(false)}
        onNavigateToFile={(pageId) => handleNavigate(pageId)}
      />

    </div>
  );
}
