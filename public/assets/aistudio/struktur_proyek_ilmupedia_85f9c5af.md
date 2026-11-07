# Struktur Proyek Website Ilmupedia

Berikut adalah rincian struktur folder dan file HTML terpisah untuk proyek **Ilmupedia**, dirancang agar rapi dan mudah di-deploy di GitHub Pages.

---

## 📁 Struktur Folder & File

```text
ilmupedia/
├── index.html                 # Entry point utama (Pengalihan/Redirect ke home.html untuk GitHub Pages)
├── home.html                  # Halaman Utama (Homepage)
├── css/
│   └── style.css              # File CSS utama (opsional jika menggunakan Tailwind/CSS terpisah)
├── js/
│   └── main.js                # Logic & Script interaktif utama
├── pages/                     # Folder khusus halaman konten terpisah
│   ├── sains.html             # Halaman Kategori Sains & Teknologi
│   ├── sejarah.html           # Halaman Kategori Sejarah & Peradaban
│   ├── matematika.html        # Halaman Kategori Matematika & Logika
│   ├── artikel-detail.html    # Template Halaman Baca Artikel
│   ├── tentang.html           # Halaman Tentang Kami (About Us)
│   └── kontak.html            # Halaman Hubungi Kami / Formulir Feedback
└── assets/
    ├── images/                # Folder simpan gambar/logo
    └── icons/                 # Icon aset
```

---

## 📄 Deskripsi & Fungsi File HTML

### 1. `index.html`
- **Fungsi:** Menjadi syarat utama GitHub Pages untuk mendeteksi halaman awal. 
- **Isi Utama:** Berisi pengalihan otomatis (*meta refresh* / Script redirect) langsung menuju `home.html` atau memuat file `home.html`.

### 2. `home.html` (Halaman Utama)
- **Fungsi:** Landing page utama website Ilmupedia.
- **Komponen Utama:**
  - Header / Navigation Bar (Logo Ilmupedia, Menu Navigasi).
  - Banner Hero: Salam pembuka dan bilah pencarian artikel (*Search Bar*).
  - Kategori Populer (Sains, Sejarah, Matematika, dll).
  - Artikel Terbaru & Artikel Pilihan (*Featured Articles*).
  - Footer dengan tautan navigasi dan informasi hak cipta.

### 3. `pages/sains.html`
- **Fungsi:** Menampilkan daftar artikel, modul belajar, dan fenomena seputar Fisika, Biologi, Kimia, dan Teknologi modern.

### 4. `pages/sejarah.html`
- **Fungsi:** Halaman khusus dokumentasi sejarah dunia, peradaban kuno, serta sejarah Indonesia.

### 5. `pages/matematika.html`
- **Fungsi:** Halaman berisi konsep matematika, formula, kalkulator interaktif sederhana, dan pembahasan soal.

### 6. `pages/artikel-detail.html`
- **Fungsi:** Template standar untuk membaca satu artikel secara utuh.
- **Komponen Utama:** Judul artikel, nama penulis, tanggal rilis, isi konten lengkap (teks, gambar, rumus $\LaTeX$), serta kolom komentar/diskusi.

### 7. `pages/tentang.html`
- **Fungsi:** Informasi mengenai visi dan misi platform Ilmupedia dalam menyebarkan ilmu pengetahuan.

### 8. `pages/kontak.html`
- **Fungsi:** Formulir untuk pengunjung yang ingin memberikan masukan, pertanyaan, atau berkontribusi menulis di Ilmupedia.

---

## 🔗 Navigasi & Relasi Antar Halaman

- Dari **`home.html`**, pengguna dapat mengakses seluruh kategori di folder `pages/` via Navigation Bar.
- Setiap kartu artikel di `home.html` maupun di halaman kategori akan mengarah ke **`pages/artikel-detail.html`**.
- Navigasi Header dan Footer dibuat konsisten di setiap file HTML untuk kemudahan navigasi pengguna.