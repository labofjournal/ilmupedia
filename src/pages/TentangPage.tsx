import React from 'react';
import { BookOpen, Target, Compass, Award, ShieldCheck, Users, Sparkles, FolderTree } from 'lucide-react';

interface TentangPageProps {
  onNavigate: (page: string) => void;
  onOpenStructureModal: () => void;
}

export const TentangPage: React.FC<TentangPageProps> = ({ onNavigate, onOpenStructureModal }) => {
  const curators = [
    {
      name: 'Dr. Alamsyah Pratama, Ph.D.',
      role: 'Kurator Bidang Sains & Astronomi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
      bio: 'Doktor astrofisika lulusan Universitas Kyoto dengan spesialisasi pelensaan gravitasi dan kosmologi kuantum.'
    },
    {
      name: 'Ki Bagus Suryo, M.Hum.',
      role: 'Kurator Bidang Sejarah & Filologi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
      bio: 'Filolog naskah lontara kuno dan sejarawan maritim Asia Tenggara dengan pengalaman ekskavasi prasasti Sriwijaya.'
    },
    {
      name: 'Dra. Ratna Kusuma, M.Sc.',
      role: 'Kurator Bidang Matematika & Logika',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
      bio: 'Pendidik aljabar murni dan pengembang media kalkulator visual interaktif untuk pendidikan nasional.'
    }
  ];

  return (
    <div className="space-y-16 pb-24">
      
      {/* Banner Hero */}
      <section className="pt-10 pb-14 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-100/70 via-slate-50/20 to-transparent dark:from-slate-900/40 dark:via-transparent dark:to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-900">
            <BookOpen className="w-3.5 h-3.5" />
            <span>pages/tentang.html &bull; Mengenal Ilmupedia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Menyalakan Api <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Keingintahuan Ilmiah</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Ilmupedia didirikan dengan keyakinan bahwa pemahaman terhadap sains, sejarah, dan matematika adalah hak asasi setiap warga negara Indonesia tanpa sekat ekonomi maupun geografis.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Visi Kami
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Menjadi rujukan ensiklopedia pengetahuan terbuka nomor satu di Indonesia yang independen, berbasis bukti ilmiah, dan mampu menginspirasi generasi ilmuwan, sejarawan, serta pemikir logis masa depan.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Misi Pokok
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                <span>Menyajikan materi ilmiah yang telah diverifikasi dengan standar peer-review.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                <span>Mengembangkan simulasi interaktif agar konsep abstrak menjadi visual dan intuitif.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></span>
                <span>Mendokumentasikan kearifan peradaban Nusantara dan ilmuwan dunia secara berimbang.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nilai-Nilai Integritas */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Nilai-Nilai Integritas Akademik
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Prinsip etis yang memandu setiap kurasi artikel dan modul di Ilmupedia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                Akurasi Empiris
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Setiap klaim didukung data observasional dan sumber literatur primer terverifikasi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <BookOpen className="w-6 h-6 text-teal-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                Bahasa Komunikatif
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Menerjemahkan bahasa teknis menjadi narasi yang jernih tanpa mereduksi akurasi esensinya.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Award className="w-6 h-6 text-amber-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                Bebas Bias
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Netral terhadap spektrum ideologi dan menghormati dialektika ilmiah secara terbuka.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <Users className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                Akses Terbuka
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Konten dibagikan di bawah lisensi Creative Commons untuk memajukan pendidikan universal.
              </p>
            </div>
          </div>
        </section>

        {/* Tim Kurator */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Dewan Kurator & Redaksi
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Para akademisi dan peneliti yang mengawal mutu artikel ilmiah Ilmupedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curators.map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs flex flex-col items-center"
              >
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800 mb-4"
                />
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                  {c.name}
                </h4>
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {c.role}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Project Structure Inspector */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold">
              Arsitektur Multi-Page Terstandar
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Proyek Ilmupedia dirancang sesuai struktur dokumen <code>struktur_proyek_ilmupedia.md</code> dengan file HTML, CSS, dan JS terpisah yang siap di-deploy langsung ke GitHub Pages.
            </p>
          </div>

          <button
            onClick={onOpenStructureModal}
            className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shadow-lg"
          >
            <FolderTree className="w-4 h-4 text-emerald-600" />
            <span>Lihat Struktur File Lengkap</span>
          </button>
        </div>

      </div>
    </div>
  );
};
