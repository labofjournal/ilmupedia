import React, { useState } from 'react';
import { 
  FolderTree, 
  Folder, 
  FileCode, 
  FileText, 
  Download, 
  X, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  ChevronDown,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { ILMUPEDIA_STRUCTURE_TREE, FileNode, downloadGitHubPagesZip } from '../data/projectStructure';

interface ProjectStructureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFile: (pageId: string) => void;
}

export const ProjectStructureModal: React.FC<ProjectStructureModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFile
}) => {
  const [selectedNode, setSelectedNode] = useState<FileNode>(
    ILMUPEDIA_STRUCTURE_TREE.children?.[1] || ILMUPEDIA_STRUCTURE_TREE
  );
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    const success = await downloadGitHubPagesZip();
    setIsDownloading(false);
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }
  };

  const getPageIdFromPath = (path: string): string | null => {
    if (path === '/home.html' || path === '/index.html') return 'home';
    if (path === '/pages/sains.html') return 'sains';
    if (path === '/pages/sejarah.html') return 'sejarah';
    if (path === '/pages/matematika.html') return 'matematika';
    if (path === '/pages/artikel-detail.html') return 'artikel-detail';
    if (path === '/pages/tentang.html') return 'tentang';
    if (path === '/pages/kontak.html') return 'kontak';
    return null;
  };

  const renderTreeItem = (node: FileNode, level: number = 0) => {
    const isSelected = selectedNode.path === node.path;
    const isFolder = node.type === 'folder';
    const pageId = getPageIdFromPath(node.path);

    return (
      <div key={node.path} className="select-none">
        <div
          onClick={() => setSelectedNode(node)}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          className={`flex items-center gap-2 py-1.5 px-2 rounded-lg cursor-pointer text-xs font-mono transition-colors ${
            isSelected 
              ? 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 font-bold border border-blue-300 dark:border-blue-800' 
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {isFolder ? (
            <Folder className="w-4 h-4 text-amber-500 fill-amber-500/20 shrink-0" />
          ) : node.name.endsWith('.html') ? (
            <FileCode className="w-4 h-4 text-blue-500 shrink-0" />
          ) : node.name.endsWith('.css') ? (
            <FileText className="w-4 h-4 text-teal-500 shrink-0" />
          ) : (
            <FileCode className="w-4 h-4 text-emerald-500 shrink-0" />
          )}

          <span className="truncate">{node.name}</span>

          {node.badge && (
            <span className="ml-auto text-[10px] font-sans px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {node.badge}
            </span>
          )}
        </div>

        {node.children && (
          <div className="space-y-0.5 my-0.5 border-l border-slate-200 dark:border-slate-800 ml-3">
            {node.children.map((child) => renderTreeItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const targetPageId = getPageIdFromPath(selectedNode.path);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400">
              <FolderTree className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                Struktur Proyek Ilmupedia (GitHub Pages Ready)
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  Resmi
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Sesuai dokumen spesifikasi rancangan multi-page untuk deployment GitHub Pages.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 flex-1 overflow-hidden min-h-0">
          
          {/* Left Tree Explorer */}
          <div className="md:col-span-2 border-r border-slate-200 dark:border-slate-800 p-4 overflow-y-auto bg-slate-50/50 dark:bg-slate-950/40">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-1">
              <span>Pohon Direktori</span>
              <span className="font-mono text-[10px]">10 Files</span>
            </div>

            <div className="space-y-1">
              {renderTreeItem(ILMUPEDIA_STRUCTURE_TREE)}
            </div>
          </div>

          {/* Right Node Details */}
          <div className="md:col-span-3 p-6 overflow-y-auto flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                  {selectedNode.path}
                </span>
                {selectedNode.badge && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {selectedNode.badge}
                  </span>
                )}
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {selectedNode.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              {/* Special specs for this file based on prompt doc */}
              {selectedNode.name === 'index.html' && (
                <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-blue-600" />
                    Fungsi GitHub Pages:
                  </div>
                  <div>
                    Menjadi entry point utama yang mendeteksi URL awal dan secara otomatis melakukan pengalihan (meta refresh & script redirect) langsung ke <code>home.html</code>.
                  </div>
                </div>
              )}

              {selectedNode.name === 'home.html' && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    Komponen Utama:
                  </div>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>Header / Navigation Bar (Logo Ilmupedia, Menu Navigasi)</li>
                    <li>Banner Hero: Salam pembuka dan bilah pencarian artikel (Search Bar)</li>
                    <li>Kategori Populer (Sains, Sejarah, Matematika)</li>
                    <li>Artikel Terbaru & Artikel Pilihan (Featured Articles)</li>
                    <li>Footer dengan tautan navigasi dan informasi hak cipta</li>
                  </ul>
                </div>
              )}

              {targetPageId && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onNavigateToFile(targetPageId);
                      onClose();
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Tampilan Halaman ({selectedNode.name})</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Summary of the prompt's architecture */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-500" />
                Relasi Navigasi Antar Halaman:
              </div>
              <p className="text-slate-500 dark:text-slate-400">
                Dari <strong>home.html</strong>, pengguna dapat mengakses seluruh kategori di folder <strong>pages/</strong> via Navbar. Setiap kartu artikel mengarah ke <strong>pages/artikel-detail.html</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer with ZIP Download */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Semua file HTML, CSS, JS, dan ikon telah dibuat di workspace sesuai struktur.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ZIP Berhasil Diunduh!</span>
                </>
              ) : isDownloading ? (
                <span>Menyiapkan ZIP...</span>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Unduh Seluruh Proyek (.ZIP)</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
