import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Eye, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Share2, 
  ArrowLeft, 
  Send, 
  Check, 
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { Article } from '../data/articles';

interface Comment {
  id: string;
  name: string;
  date: string;
  text: string;
}

interface ArtikelDetailPageProps {
  articles: Article[];
  currentArticleId?: string;
  onNavigate: (page: string, params?: { id?: string }) => void;
}

export const ArtikelDetailPage: React.FC<ArtikelDetailPageProps> = ({
  articles,
  currentArticleId = 'sains-1',
  onNavigate
}) => {
  const article = articles.find((a) => a.id === currentArticleId) || articles[0];

  // Reader state
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(1); // 0 = sm, 1 = md, 2 = lg, 3 = xl
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  // Comments state
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentName, setCommentName] = useState<string>('');
  const [commentText, setCommentText] = useState<string>('');

  // Storage keys
  const bookmarkKey = `ilmupedia_bm_${article.id}`;
  const commentsKey = `ilmupedia_comments_${article.id}`;

  useEffect(() => {
    // Check bookmark
    const savedBm = localStorage.getItem(bookmarkKey) === 'true';
    setIsBookmarked(savedBm);

    // Load comments
    const savedComments = localStorage.getItem(commentsKey);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch {
        setDefaultComments();
      }
    } else {
      setDefaultComments();
    }

    // Cancel speech on unmount/article change
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [article.id]);

  const setDefaultComments = () => {
    const defaults: Comment[] = [
      {
        id: '1',
        name: 'Dr. Hendra Wijaya',
        date: '2 hari lalu',
        text: 'Penjelasan yang sangat komprehensif dan mudah dicerna bagi siswa maupun akademisi yang ingin memahami fondasi materi ini.'
      },
      {
        id: '2',
        name: 'Nadia Putri',
        date: '1 hari lalu',
        text: 'Sangat terbantu untuk materi riset karya tulis ilmiah saya. Format dan visualnya sangat memudahkan pemahaman.'
      }
    ];
    setComments(defaults);
  };

  const handleToggleBookmark = () => {
    const next = !isBookmarked;
    setIsBookmarked(next);
    localStorage.setItem(bookmarkKey, String(next));
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Browser Anda tidak mendukung Web Speech API.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const fullText = `${article.title}. ${article.paragraphs.slice(0, 3).join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'id-ID';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 3000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name: commentName.trim(),
      date: 'Baru saja',
      text: commentText.trim()
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(commentsKey, JSON.stringify(updated));
    setCommentName('');
    setCommentText('');
  };

  // Font class mapping
  const fontSizes = [
    'text-base leading-relaxed',
    'text-lg leading-[1.8]',
    'text-xl leading-[1.85]',
    'text-2xl leading-[1.9]'
  ];

  return (
    <div className="pb-24">
      
      {/* Top Bar Navigation & Reader Controls */}
      <div className="sticky top-18 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 transition-colors">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between gap-4">
          
          <button
            onClick={() => onNavigate(article.category)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Kembali ke Kategori ({article.categoryLabel})</span>
            <span className="sm:hidden">Kembali</span>
          </button>

          {/* Reader toolbar */}
          <div className="flex items-center gap-2">
            
            {/* Font scaling */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setFontSizeLevel(Math.max(0, fontSizeLevel - 1))}
                className="px-2 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                title="Perkecil Font"
              >
                A-
              </button>
              <span className="px-1.5 text-[11px] text-slate-400 font-mono">
                {fontSizeLevel === 0 ? 'S' : fontSizeLevel === 1 ? 'M' : fontSizeLevel === 2 ? 'L' : 'XL'}
              </span>
              <button
                onClick={() => setFontSizeLevel(Math.min(3, fontSizeLevel + 1))}
                className="px-2 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                title="Perbesar Font"
              >
                A+
              </button>
            </div>

            {/* Audio reader */}
            <button
              onClick={handleToggleSpeech}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isSpeaking 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="Dengarkan Artikel (Text-to-Speech)"
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Hentikan' : 'Dengarkan'}</span>
            </button>

            {/* Bookmark */}
            <button
              onClick={handleToggleBookmark}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title={isBookmarked ? 'Artikel Tersimpan' : 'Simpan Artikel'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              title="Salin Tautan Artikel"
            >
              {shareCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Article Breadcrumbs & Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span>pages/artikel-detail.html</span> &bull; <span>{article.categoryLabel}</span>
          </div>

          {/* Quick Article Switcher */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Pilih Bacaan:</span>
            <select
              value={article.id}
              onChange={(e) => onNavigate('artikel-detail', { id: e.target.value })}
              className="text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white outline-none cursor-pointer"
            >
              {articles.map((a) => (
                <option key={a.id} value={a.id}>
                  [{a.category.toUpperCase()}] {a.title.slice(0, 32)}...
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
              {article.categoryLabel}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {article.subCategory}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            {article.title}
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {article.subtitle}
          </p>

          {/* Author Box */}
          <div className="pt-4 pb-4 border-y border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
              />
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {article.author.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {article.author.title}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[460px] object-cover"
          />
          <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 italic">
            Gambar: {article.imageCaption}
          </div>
        </div>

        {/* Reading Content */}
        <div className={`space-y-6 font-serif-read text-slate-800 dark:text-slate-200 ${fontSizes[fontSizeLevel]}`}>
          {article.paragraphs.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}

          {/* Mathematical / Scientific Formula Box */}
          {article.formula && (
            <div className="my-8 p-6 rounded-2xl bg-slate-900 text-blue-300 border border-slate-800 shadow-inner not-italic font-sans">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Rumus & Persamaan Terkait:
              </div>
              <div className="text-lg sm:text-xl font-mono-math text-center py-3 overflow-x-auto text-white">
                {article.formula.latex}
              </div>
              <div className="text-xs text-slate-400 text-center mt-2">
                {article.formula.description}
              </div>
            </div>
          )}

          {/* Callout Box */}
          {article.callout && (
            <div className="my-8 p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-600 text-slate-800 dark:text-slate-200 not-italic font-sans">
              <h4 className="font-bold text-sm text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                {article.callout.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {article.callout.text}
              </p>
            </div>
          )}
        </div>

        {/* References */}
        {article.references && article.references.length > 0 && (
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-white">
              Daftar Pustaka & Referensi Ilmiah
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono leading-relaxed">
              {article.references.map((ref, idx) => (
                <li key={idx}>{ref}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Interactive Discussion & Comments Section */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">
                Kolom Diskusi & Komentar ({comments.length})
              </h3>
            </div>
            <span className="text-xs text-slate-500">Tersimpan di LocalStorage</span>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Tinggalkan Tanggapan atau Pertanyaan Ilmiah
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  Nama Anda / Gelar:
                </label>
                <input
                  type="text"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="contoh: Budi Santoso, M.Si."
                  className="w-full px-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                Tanggapan / Komentar:
              </label>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={3}
                placeholder="Tuliskan pandangan, sanggahan, atau pertanyaan terkait isi artikel..."
                className="w-full px-3 py-2 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Komentar</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {c.name}
                  </span>
                  <span className="text-slate-400">{c.date}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </article>

    </div>
  );
};
