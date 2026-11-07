import React, { useState } from 'react';
import { Mail, Send, Check, MessageSquare, HelpCircle, FileText, MapPin, Globe } from 'lucide-react';

export const KontakPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitted(true);
    setName('');
    setEmail('');
    setCategory('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  const faqs = [
    {
      q: 'Bagaimana cara berkontribusi menulis artikel di Ilmupedia?',
      a: 'Anda dapat mengirimkan draf artikel lengkap atau ringkasan topik melalui formulir di samping dengan memilih kategori "Kirim Naskah Artikel Baru". Tim kurator akan meninjau orisinalitas dan kelayakan rujukan.'
    },
    {
      q: 'Apakah ada biaya untuk menerbitkan tulisan?',
      a: 'Tidak ada biaya apapun. Ilmupedia beroperasi secara nirlaba dengan semangat menyebarkan ilmu pengetahuan terbuka (open educational resources).'
    },
    {
      q: 'Berapa lama proses kurasi dan penerbitan naskah?',
      a: 'Proses review sejawat (peer review) awal oleh dewan kurator memerlukan waktu 3 hingga 5 hari kerja.'
    },
    {
      q: 'Bagaimana bila saya menemukan kekeliruan data pada artikel?',
      a: 'Kami sangat menghargai koreksi ilmiah (erata). Silakan pilih opsi "Koreksi Data / Erata" pada formulir dan sertakan tautan rujukan yang benar.'
    }
  ];

  return (
    <div className="space-y-16 pb-24">
      
      {/* Banner Hero */}
      <section className="pt-10 pb-14 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100/70 via-slate-50/20 to-transparent dark:from-slate-900/40 dark:via-transparent dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 text-xs font-semibold mb-4 border border-teal-200 dark:border-teal-900">
            <Mail className="w-3.5 h-3.5" />
            <span>pages/kontak.html &bull; Ruang Partisipasi & Umpan Balik</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Hubungi Kami & <span className="text-teal-600 dark:text-teal-400">Kirim Naskah</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Apakah Anda memiliki pertanyaan, usulan topik artikel baru, koreksi data ilmiah, atau ingin berkontribusi sebagai penulis di Ilmupedia? Kami siap mendengar.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom Formulir Interaktif */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Formulir Kontak & Pengajuan Naskah
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Harap lengkapi rincian di bawah ini dengan data yang valid.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200 flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="p-1.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">Pesan Anda Berhasil Terkirim!</div>
                    <div>Tim redaksi Ilmupedia akan meninjau pesan Anda dan membalas melalui email dalam 1-2 hari kerja.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Nama Lengkap:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nama Anda atau Peneliti"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-teal-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      Alamat Email Aktif:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@domain.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-teal-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Kategori Keperluan:
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-teal-500 cursor-pointer"
                    required
                  >
                    <option value="">-- Pilih Kategori Pesan --</option>
                    <option value="kontribusi">Kirim Naskah Artikel Baru</option>
                    <option value="koreksi">Koreksi Data / Rujukan Ilmiah (Erata)</option>
                    <option value="pertanyaan">Pertanyaan Konten & Materi</option>
                    <option value="kolaborasi">Kerja Sama Edukasi & Penelitian</option>
                    <option value="lainnya">Masukan Umum / Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Judul Pesan / Topik Naskah:
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Ringkasan inti pesan Anda"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    Isi Pesan / Abstrak Naskah:
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tuliskan pesan lengkap, abstrak artikel, atau tautan draf naskah beserta daftar pustaka rujukan Anda..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:border-teal-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirimkan Pesan ke Redaksi Ilmupedia</span>
                </button>
              </form>
            </div>
          </div>

          {/* Kolom Informasi & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Kantor & Surel */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                Saluran Kontak Resmi
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Surel Redaksi:</div>
                    <div className="text-slate-500 font-mono">redaksi@ilmupedia.id</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Sekretariat Ilmupedia:</div>
                    <div className="text-slate-500">Kompleks Laboratorium Literasi Ilmiah Nusantara, Indonesia</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <Globe className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Format Proyek:</div>
                    <div className="text-slate-500">HTML terpisah siap GitHub Pages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pedoman Penulis */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-600" />
                Pedoman Singkat Penulisan
              </h4>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc list-inside">
                <li>Panjang artikel 800 - 2.500 kata dalam Bahasa Indonesia baku.</li>
                <li>Menyertakan minimal 2 referensi jurnal atau buku bereputasi.</li>
                <li>Format penjelasan logis, sistematis, dan mudah dipahami.</li>
                <li>Lisensi naskah di bawah Creative Commons BY-SA 4.0.</li>
              </ul>
            </div>

            {/* FAQ List */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                Tanya Jawab (FAQ)
              </h4>

              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1"
                >
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
