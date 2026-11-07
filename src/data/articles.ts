export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'sains' | 'sejarah' | 'matematika';
  categoryLabel: string;
  subCategory: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
  image: string;
  imageCaption: string;
  snippet: string;
  paragraphs: string[];
  formula?: {
    latex: string;
    description: string;
  };
  callout?: {
    title: string;
    text: string;
  };
  references: string[];
}

export const ARTICLES_DATA: Article[] = [
  {
    id: 'sains-1',
    title: 'Misteri Materi Gelap (Dark Matter) dan Nasib Akhir Struktur Alam Semesta',
    subtitle: 'Menyingkap komponen tak kasat mata yang menyusun 85% massa materi kosmos, bukti pelensaan gravitasi, serta pencarian partikel WIMPs.',
    category: 'sains',
    categoryLabel: 'Sains & Kosmologi',
    subCategory: 'Astronomi & Astrofisika',
    author: {
      name: 'Dr. Alamsyah Pratama, Ph.D.',
      title: 'Peneliti Astrofisika Observasional & Dosen Tamu Institut Astronomi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    },
    date: '4 November 2026',
    readTime: '8 Menit Baca',
    views: 14250,
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Simulasi superkomputer filamen jaring kosmik (Cosmic Web) dan distribusi halo materi gelap.',
    snippet: 'Sekitar 85% massa materi di alam semesta tidak memancarkan cahaya maupun radiasi elektromagnetik. Mengapa bintang di tepi galaksi berputar begitu cepat?',
    paragraphs: [
      'Ketika kita menatap langit malam bertabur bintang, instrumen optik terhebat manusia hanya menangkap sebagian sangat kecil dari realitas fisik kosmos. Seluruh bintang, planet, debu nebula, dan galaksi yang tampak hanyalah sekitar 5% dari total densitas energi alam semesta. Sisanya dikuasai dua entitas misterius: Materi Gelap (Dark Matter, ~27%) dan Energi Gelap (Dark Energy, ~68%).',
      'Pada dekade 1970-an, astronom Vera Rubin mengamati kurva rotasi bintang di pinggiran galaksi spiral. Hukum gravitasi Newton memprediksi kecepatan orbit bintang semestinya menurun drastis seiring bertambahnya jarak dari pusat galaksi yang padat massa.',
      'Namun, data spektroskopi menunjukkan kecepatan orbit di tepi galaksi tetap datar (flat rotation curve). Galaksi semestinya tercerai-berai bila hanya diikat oleh massa bintang yang tampak. Satu-satunya penjelasan logis: ada halo materi tak kasat mata yang membungkus galaksi dengan gaya gravitasi dahsyat.',
      'Konfirmasi independen diperoleh melalui fenomena pelensaan gravitasi (Gravitational Lensing) yang diprediksi Relativitas Umum Einstein. Gugus galaksi Bullet Cluster (1E 0657-56) menjadi bukti tak terbantahkan: ketika dua gugus bertabrakan, peta gravitasi menunjukkan materi gelap melintasi satu sama lain tanpa hambatan tumbukan elektromagnetik.',
      'Kini, perburuan diarahkan pada deteksi partikel WIMPs (Weakly Interacting Massive Particles) dan Axion di laboratorium bawah tanah terdalam bumi seperti Laboratorium Gran Sasso di Italia dan Jinping di Tiongkok.'
    ],
    formula: {
      latex: 'v(r) = \\sqrt{\\frac{G \\cdot M(r)}{r}} \\quad \\xrightarrow{\\text{Observasi Vera Rubin}} \\quad v(r) \\approx \\text{konstan}',
      description: 'Kurva Kecepatan Rotasi Orbit Galaksi menunjukkan keberadaan massa tersembunyi M(r) yang membesar proporsional terhadap jarak r.'
    },
    callout: {
      title: 'Fakta Menarik: Gugus Peluru (Bullet Cluster)',
      text: 'Gugus Peluru membuktikan materi gelap dan gas baryonic terpisah secara spasial pasca-tabrakan kosmik, menyanggah teori yang menganggap anomali ini hanya kekeliruan perhitungan gravitasi biasa.'
    },
    references: [
      'Rubin, V. C., & Ford, W. K. (1970). Rotation of the Andromeda Nebula. The Astrophysical Journal, 159, 379.',
      'Clowe, D., et al. (2006). A Direct Empirical Proof of the Existence of Dark Matter. ApJ Letters, 648(2), L109.',
      'Planck Collaboration (2020). Planck 2018 results: Cosmological parameters. Astronomy & Astrophysics, 641, A6.'
    ]
  },
  {
    id: 'sains-2',
    title: 'CRISPR-Cas9: Merevolusi Rekayasa Genetika dan Masa Depan Terapi',
    subtitle: 'Prinsip kerja gunting molekuler RNA pemandu yang memenangkan Hadiah Nobel dan potensinya menyembuhkan kelainan bawaan.',
    category: 'sains',
    categoryLabel: 'Sains & Bioteknologi',
    subCategory: 'Biologi Molekuler',
    author: {
      name: 'dr. Nadia Saraswati, M.Biomed',
      title: 'Spesialis Rekayasa Genomika & Peneliti Terapi Gen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    },
    date: '2 November 2026',
    readTime: '6 Menit Baca',
    views: 9810,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi mikroskopik untaian heliks ganda DNA yang disunting menggunakan kompleks enzim Cas9.',
    snippet: 'Mekanisme pertahanan alami bakteri melawan virus yang kini menjadi alat paling presisi untuk menyunting genom organisme hidup.',
    paragraphs: [
      'CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) awalnya ditemukan sebagai sistem imun adaptif bakteri. Ketika bakteriofag (virus pemangsa bakteri) menyerang, bakteri menyimpan fragmen DNA virus tersebut ke dalam genomnya sebagai arsip memori.',
      'Ketika virus sejenis menyerang kembali, bakteri memproduksi RNA pemandu (guide RNA) yang cocok persis dengan sekuens musuh, lalu mengerahkan enzim endonuklease Cas9 untuk memotong heliks ganda DNA virus hingga lumpuh.',
      'Ilmuwan Emmanuelle Charpentier dan Jennifer Doudna menyadari potensi revolusioner ini: dengan mendesain RNA pemandu secara sintetis, manusia dapat memprogram enzim Cas9 untuk memotong sekuens gen apapun pada sel hidup dengan presisi tingkat basa nukleotida tunggal.',
      'Saat ini, terapi berbasis CRISPR telah disetujui untuk menyembuhkan penyakit sel sabit (sickle cell disease) dan beta-thalassemia, membuka fajar baru pengobatan presisi tanpa transplantasi sumsum tulang yang berisiko tinggi.'
    ],
    references: [
      'Doudna, J. A., & Charpentier, E. (2014). The new frontier of genome engineering with CRISPR-Cas9. Science, 346(6213).',
      'Jinek, M., et al. (2012). A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. Science, 337(6096).'
    ]
  },
  {
    id: 'sains-3',
    title: 'Superkonduktor Suhu Ruang: Mengapa Menjadi Cawan Suci Fisika Material?',
    subtitle: 'Transmisi energi tanpa rugi resistansi, levitasi magnetik fluks kuantum, dan tantangan tekanan tinggi pada hidrida logam.',
    category: 'sains',
    categoryLabel: 'Sains & Fisika',
    subCategory: 'Fisika Terapan & Material',
    author: {
      name: 'Prof. Bambang Subroto, Ph.D.',
      title: 'Guru Besar Fisika Zat Padat & Material Maju',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
    date: '22 Oktober 2026',
    readTime: '7 Menit Baca',
    views: 11520,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Efek Meissner: sampel superkonduktor melayang sempurna di atas susunan magnet permanen Neodymium.',
    snippet: 'Menghilangkan hambatan listrik pada suhu kamar dapat menyelamatkan milyaran gigawatt energi yang terbuang sia-sia sebagai panas.',
    paragraphs: [
      'Dalam konduktor logam biasa seperti tembaga, elektron yang mengalir bertumbukan dengan getaran kisi kristal (fonon), menimbulkan hambatan (resistansi) dan melepaskan energi sebagai panas disipasi.',
      'Namun pada bahan superkonduktor di bawah suhu kritis (Tc), elektron membentuk pasangan Cooper melalui interaksi fonon terkuantisasi, bergerak serempak tanpa satupun tumbukan penghambat.',
      'Bila superkonduktor suhu dan tekanan ruang (LK-99 atau analog hidrida yang terverifikasi) berhasil diproduksi massal, seluruh jaringan transmisi listrik global akan beroperasi dengan efisiensi 100%, komputasi super bebas panas, dan kereta maglev dapat mengapung tanpa pendingin nitrogen cair mahal.'
    ],
    references: [
      'Bardeen, J., Cooper, L. N., & Schrieffer, J. R. (1957). Theory of Superconductivity. Physical Review, 108(5), 1175.',
      'Tinkham, M. (2004). Introduction to Superconductivity. Dover Publications.'
    ]
  },
  {
    id: 'sejarah-1',
    title: 'Kemaharajaan Sriwijaya: Penguasa Jalur Rempah Selat Malaka & Pusat Ilmu Buddha',
    subtitle: 'Rekonstruksi hegemoni maritim abad ke-7 berdasarkan prasasti Kedukan Bukit, Telaga Batu, dan catatan perjalanan biksu I-Tsing.',
    category: 'sejarah',
    categoryLabel: 'Sejarah & Nusantara',
    subCategory: 'Sejarah Maritim Nusantara',
    author: {
      name: 'Ki Bagus Suryo, M.Hum.',
      title: 'Filolog Kuno & Peneliti Pusat Arkeologi Maritim Asia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    },
    date: '2 November 2026',
    readTime: '7 Menit Baca',
    views: 18400,
    featured: true,
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Relief candi yang menggambarkan kapal bercadik layar Nusantara yang mengarungi Samudra Hindia.',
    snippet: 'Sriwijaya bukan sekadar kekuatan militer laut, tetapi juga universitas kosmopolitan di mana sarjana dari Tiongkok mendalami tata bahasa Sanskerta.',
    paragraphs: [
      'Berpusat di hilir Sungai Musi (Palembang modern) dan Jambi, Kemaharajaan Sriwijaya berkembang menjadi thalassokrasi (kekuatan maritim) paling dominan di kawasan Selat Malaka dan Selat Sunda antara abad ke-7 hingga ke-11 Masehi.',
      'Prasasti Kedukan Bukit berangka tahun 683 M mengisahkan perjalanan suci (siddhayatra) Dapunta Hyang memimpin 20.000 bala tentara dengan perahu untuk mendirikan peradaban makmur bernama Sriwijaya.',
      'Biksu musafir Dinasti Tang, I-Tsing (Yijing), yang bermukim di Sriwijaya pada tahun 671 M dan 685–689 M, mencatat lebih dari 1.000 biksu Buddha tekun mempelajari disiplin logika (Hetuvidya) dan tata bahasa Sanskerta (Sabdavidya) di bawah bimbingan guru agung Sakyakirti.',
      'Hubungan internasional Sriwijaya terbentang dari pertukaran upeti persahabatan dengan Kaisar Tang di Chang’an, pembangunan biara di Nagapattinam atas izin Raja Chola di India Selatan, hingga prasasti Nalanda yang mencatat wakaf Raja Balaputradewa bagi asrama mahasiswa Nusantara di India.'
    ],
    callout: {
      title: 'Catatan I-Tsing mengenai Sriwijaya (Fo-shi):',
      text: '"Jika seorang rahib Tiongkok ingin pergi ke India Barat untuk mendengarkan dan membaca kitab suci asli, ia lebih baik tinggal di Fo-shi selama satu atau dua tahun untuk mempraktikkan aturan yang tepat..."'
    },
    references: [
      'Coedes, G. (1968). The Indianized States of Southeast Asia. East-West Center Press.',
      'Wolters, O. W. (1967). Early Indonesian Commerce: A Study of the Origins of Sriwijaya. Cornell University Press.',
      'Takakusu, J. (1896). A Record of the Buddhist Religion as Practised in India and the Malay Archipelago by I-Tsing. Oxford Clarendon Press.'
    ]
  },
  {
    id: 'sejarah-2',
    title: 'Tragedi Perpustakaan Alexandria: Hilangnya Ribuan Gulungan Ilmu Dunia Kuno',
    subtitle: 'Kisah pusat kecendekiaan terbesar era Hellenistik dan misteri kebakaran yang melenyapkan naskah Archimedes, Eratosthenes, dan Euklides.',
    category: 'sejarah',
    categoryLabel: 'Sejarah & Peradaban',
    subCategory: 'Peradaban Klasik Mediterania',
    author: {
      name: 'Maya Saraswati, M.Hum.',
      title: 'Dosen Sejarah Peradaban Kuno & Kurator Arsip',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    },
    date: '28 Oktober 2026',
    readTime: '8 Menit Baca',
    views: 12900,
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Arsitektur kolosal pilar batu yang merefleksikan kemegahan perpustakaan era Dinasti Ptolemaios.',
    snippet: 'Didirikan oleh Ptolemaios I Soter, perpustakaan ini bermisi mengumpulkan seluruh naskah yang pernah ditulis peradaban manusia.',
    paragraphs: [
      'Pada abad ke-3 Sebelum Masehi, kota pelabuhan Alexandria di tepi Laut Mediterania menjadi magnet cendekiawan terhebat dari Yunani, Mesir, Persia, dan Babilonia berkat keberadaan Musaeum dan Perpustakaan Kerajaan Alexandria.',
      'Perpustakaan ini memiliki kebijakan agresif: setiap kapal dagang yang bersandar di pelabuhan Alexandria diwajibkan menyerahkan semua gulungan naskah yang dibawanya untuk disalin oleh para juru tulis istana. Naskah asli disimpan di perpustakaan, sementara pemilik kapal hanya diberikan salinannya.',
      'Di sinilah Eratosthenes berhasil mengukur keliling planet Bumi hanya dengan membandingkan bayangan tongkat di Alexandria dan Syene (Aswan), mencapai akurasi luar biasa sekitar 40.000 kilometer.',
      'Tragedi kemusnahan perpustakaan tidak terjadi dalam satu malam malapetaka tunggal, melainkan degradasi bertahap: kebakaran tidak sengaja oleh armada Julius Caesar (48 SM), penindasan kaisar Romawi Aurelian (272 M), dan perusakan Serapeum (391 M).'
    ],
    references: [
      'Canfora, L. (1989). The Vanished Library: A Wonder of the Ancient World. University of California Press.',
      'MacLeod, R. (2000). The Library of Alexandria: Centre of Learning in the Ancient World. I.B. Tauris.'
    ]
  },
  {
    id: 'matematika-1',
    title: 'Pesona Rasio Emas (Golden Ratio φ): Harmoni Angka dalam Spiral Alam dan Seni',
    subtitle: 'Eksplorasi bilangan irasional 1.618033... yang muncul pada proporsi bunga matahari, cangkang nautilus, hingga arsitektur Parthenon.',
    category: 'matematika',
    categoryLabel: 'Matematika & Geometri',
    subCategory: 'Geometri & Teori Bilangan',
    author: {
      name: 'Dra. Ratna Kusuma, M.Sc.',
      title: 'Pendidik Matematika Murni & Pengkaji Estetika Geometri',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    },
    date: '30 Oktober 2026',
    readTime: '5 Menit Baca',
    views: 16700,
    featured: true,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Spiral logaritmik emas yang membagi ruang bidang berdasarkan rasio proporsi Fibonacci.',
    snippet: 'Dua kuantitas berada dalam rasio emas jika perbandingannya sama dengan perbandingan jumlah keduanya terhadap kuantitas yang lebih besar.',
    paragraphs: [
      'Rasio Emas, dilambangkan dengan huruf Yunani phi (φ), adalah salah satu konstanta matematika paling memesona dalam sejarah penalaran manusia. Didefinisikan secara geometris sejak Euklides membagi garis lurus menjadi "rasio ekstrem dan rata-rata":',
      'Jika panjang segmen garis total (a + b) dibagi segmen panjang (a) sama nilainya dengan segmen panjang (a) dibagi segmen pendek (b), maka nilai perbandingannya tepat sama dengan φ = (1 + √5) / 2 ≈ 1,6180339887...',
      'Keunikan angka ini terkait erat dengan Deret Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... Jika kita membagi suku ke-(n) dengan suku ke-(n-1), limit rasio tersebut akan konvergen tepat menuju angka emas φ.',
      'Dalam biologi, susunan biji bunga matahari dan kelopak bunga mengikuti sudut emas 137,5° agar pengepakan biji mencapai kerapatan ruang maksimum tanpa tumpang tindih. Para seniman Renaisans seperti Leonardo da Vinci memanfaatkan proporsi ini dalam karya legendaris De Divina Proportione.'
    ],
    formula: {
      latex: '\\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.6180339887... \\quad \\text{dengan sifat unik:} \\quad \\phi^2 = \\phi + 1 \\; \\text{dan} \\; \\frac{1}{\\phi} = \\phi - 1',
      description: 'Definisi Aljabar Rasio Emas dan persamaan karakteristik kuadrat x² - x - 1 = 0.'
    },
    references: [
      'Livio, M. (2002). The Golden Ratio: The Story of Phi, The World\'s Most Astonishing Number. Broadway Books.',
      'Huntley, H. E. (1970). The Divine Proportion: A Study in Mathematical Beauty. Dover Publications.'
    ]
  },
  {
    id: 'matematika-2',
    title: 'Paradoks Hotel Hilbert: Sifat Mengejutkan dari Himpunan Tak Hingga',
    subtitle: 'Bagaimana hotel dengan kamar tak hingga yang terisi penuh masih dapat menampung tak hingga rombongan tamu baru?',
    category: 'matematika',
    categoryLabel: 'Matematika & Logika',
    subCategory: 'Teori Himpunan & Kardinalitas',
    author: {
      name: 'Arya Wicaksana, M.Sc.',
      title: 'Peneliti Logika Matematika & Analisis Riil',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    },
    date: '25 Oktober 2026',
    readTime: '6 Menit Baca',
    views: 11200,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ilustrasi abstraksi koridor tak terbatas yang menggambarkan kardinalitas bilangan asli Aleph-Nol.',
    snippet: 'Eksperimen pikiran David Hilbert membuktikan bahwa aritmatika ketakhinggaan berbeda total dari intuisi himpunan hingga.',
    paragraphs: [
      'Bayangkan sebuah hotel hipotetis yang dirancang oleh matematikawan agung David Hilbert. Hotel ini memiliki kamar dengan nomor tak berhingga: Kamar 1, Kamar 2, Kamar 3, ... hingga seterusnya tanpa batas (kardinalitas Aleph-Nol, ℵ₀).',
      'Suatu malam, seluruh kamar hotel telah terisi penuh oleh tamu. Tiba-tiba seorang pelancong baru datang ingin memesan kamar. Pada hotel biasa dengan jumlah kamar terbatas, resepsionis tentu menolaknya.',
      'Namun di Hotel Hilbert, resepsionis yang cerdas hanya perlu meminta tamu di Kamar n untuk pindah ke Kamar (n + 1). Tamu kamar 1 pindah ke kamar 2, kamar 2 pindah ke kamar 3, dan seterusnya. Kamar 1 kini kosong dan pelancong baru dapat menginap!',
      'Bagaimana jika datang bus dengan tak terhingga penumpang baru? Manajer meminta tamu kamar n pindah ke kamar (2n). Seluruh kamar bernomor ganjil (1, 3, 5, 7, ...) otomatis kosong dan siap menampung penumpang bus baru. Inilah sifat bijeksi himpunan tak terhingga terbilang (countable infinity).'
    ],
    formula: {
      latex: 'f(n) = 2n \\implies \\text{Semua kamar genap terisi tamu lama, kamar ganjil } 2k-1 \\text{ bebas untuk tamu baru}',
      description: 'Pemetaan satu-ke-satu (Bijeksi) yang membuktikan himpunan bilangan genap memiliki ukuran kardinalitas yang sama dengan bilangan asli.'
    },
    references: [
      'Hilbert, D. (1924). Über das Unendliche (On the Infinite). Mathematische Annalen.',
      'Rucker, R. (1982). Infinity and the Mind: The Science and Philosophy of the Infinite. Birkhäuser.'
    ]
  }
];
