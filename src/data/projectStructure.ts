import JSZip from 'jszip';

export interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  description: string;
  badge?: string;
  children?: FileNode[];
  contentUrl?: string;
}

export const ILMUPEDIA_STRUCTURE_TREE: FileNode = {
  name: 'ilmupedia',
  path: '/',
  type: 'folder',
  description: 'Folder akar proyek website Ilmupedia (siap deploy di GitHub Pages / Web Hosting).',
  children: [
    {
      name: 'index.html',
      path: '/index.html',
      type: 'file',
      badge: 'Entry Point',
      description: 'Entry point utama web. Pada GitHub Pages berfungsi mendeteksi halaman awal dan memuat / me-redirect ke home.html.',
    },
    {
      name: 'home.html',
      path: '/home.html',
      type: 'file',
      badge: 'Homepage',
      description: 'Halaman Utama (Landing Page) Ilmupedia. Berisi Header navigasi, Banner Hero dengan Search Bar, Kategori Populer, Featured Articles, dan Footer.',
    },
    {
      name: 'css',
      path: '/css',
      type: 'folder',
      description: 'Folder penampung stylesheet dan desain visual.',
      children: [
        {
          name: 'style.css',
          path: '/css/style.css',
          type: 'file',
          badge: 'CSS Utama',
          description: 'File CSS utama: tipografi akademik, card grid, palet warna light/dark, layout responsif, komponen form & kalkulator.',
        }
      ]
    },
    {
      name: 'js',
      path: '/js',
      type: 'folder',
      description: 'Folder skrip logika dan interaktivitas.',
      children: [
        {
          name: 'main.js',
          path: '/js/main.js',
          type: 'file',
          badge: 'Script Logika',
          description: 'Script interaktif utama: Mobile Nav Drawer, Filter Pencarian Real-Time, Kalkulator Matematika (Pythagoras & Kuadrat), Reader Bookmark & Text-to-Speech, LocalStorage Komentar, dan Form Kontak.',
        }
      ]
    },
    {
      name: 'pages',
      path: '/pages',
      type: 'folder',
      description: 'Folder khusus halaman konten terpisah (Multi-page architecture).',
      children: [
        {
          name: 'sains.html',
          path: '/pages/sains.html',
          type: 'file',
          badge: 'Kategori',
          description: 'Halaman Kategori Sains & Teknologi. Menampilkan modul belajar Fisika, Biologi, Kimia, Astronomi, dan Mini-Lab Gravitasi Newton.',
        },
        {
          name: 'sejarah.html',
          path: '/pages/sejarah.html',
          type: 'file',
          badge: 'Kategori',
          description: 'Halaman Kategori Sejarah & Peradaban. Dokumentasi sejarah dunia, peradaban kuno, kerajaan maritim Nusantara, dan Linimasa Kronik Interaktif.',
        },
        {
          name: 'matematika.html',
          path: '/pages/matematika.html',
          type: 'file',
          badge: 'Kategori',
          description: 'Halaman Kategori Matematika & Logika. Konsep matematika, formula, kalkulator interaktif Pythagoras & persamaan kuadrat, serta pembahasan soal.',
        },
        {
          name: 'artikel-detail.html',
          path: '/pages/artikel-detail.html',
          type: 'file',
          badge: 'Template Baca',
          description: 'Template standar untuk membaca artikel utuh: judul, penulis, tanggal, isi lengkap, rumus LaTeX, toolbar pembaca (font resize, bookmark, audio reader), dan kolom diskusi/komentar dinamis.',
        },
        {
          name: 'tentang.html',
          path: '/pages/tentang.html',
          type: 'file',
          badge: 'Profil',
          description: 'Halaman Tentang Kami (About Us). Informasi mengenai visi, misi, nilai integritas sains, dan dewan kurator Ilmupedia.',
        },
        {
          name: 'kontak.html',
          path: '/pages/kontak.html',
          type: 'file',
          badge: 'Formulir',
          description: 'Halaman Hubungi Kami / Formulir Feedback. Formulir pengunjung untuk masukan, erata data, dan pengiriman naskah kontribusi tulisan.',
        }
      ]
    },
    {
      name: 'assets',
      path: '/assets',
      type: 'folder',
      description: 'Folder aset media grafis dan vektor.',
      children: [
        {
          name: 'images',
          path: '/assets/images',
          type: 'folder',
          description: 'Menyimpan banner, diagram ilmiah, foto arsip sejarah, dan grafis ilustrasi artikel.',
        },
        {
          name: 'icons',
          path: '/assets/icons',
          type: 'folder',
          description: 'Menyimpan logo Ilmupedia (logo.svg), ikon kategori sains (science.svg), sejarah (history.svg), dan matematika (math.svg).',
        }
      ]
    },
    {
      name: '.github',
      path: '/.github',
      type: 'folder',
      description: 'Konfigurasi otomatisasi GitHub Actions & CI/CD deployment.',
      children: [
        {
          name: 'workflows',
          path: '/.github/workflows',
          type: 'folder',
          description: 'Folder alur kerja (workflow) GitHub Actions.',
          children: [
            {
              name: 'publish-config.yaml',
              path: '/.github/workflows/publish-config.yaml',
              type: 'file',
              badge: 'CI/CD Pages',
              description: 'Workflow GitHub Actions otomatis untuk membangun dan men-deploy situs Ilmupedia ke GitHub Pages setiap ada commit/push ke branch main.',
            }
          ]
        }
      ]
    }
  ]
};

/**
 * Generate dan unduh bundle ZIP lengkap untuk GitHub Pages
 */
export async function downloadGitHubPagesZip() {
  const zip = new JSZip();

  // Fetch or construct file contents
  try {
    const fetchText = async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Gagal memuat ${url}`);
      return await res.text();
    };

    // Index
    const indexRedirectHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=home.html">
  <script type="text/javascript">
    window.location.href = "home.html";
  </script>
  <title>Mengarahkan ke Ilmupedia...</title>
</head>
<body>
  <p>Mengarahkan ke <a href="home.html">Halaman Utama Ilmupedia</a>...</p>
</body>
</html>`;

    zip.file('index.html', indexRedirectHtml);

    // Ambil file static jika tersedia atau masukkan konten default
    const homeContent = await fetchText('/home.html').catch(() => '<!-- Ilmupedia Home -->');
    zip.file('home.html', homeContent);

    const faviconSvg = await fetchText('/favicon.svg').catch(() => '<svg></svg>');
    zip.file('favicon.svg', faviconSvg);

    // CSS
    const cssContent = await fetchText('/css/style.css').catch(() => '/* Style Ilmupedia */');
    zip.folder('css')?.file('style.css', cssContent);

    // JS
    const jsContent = await fetchText('/js/main.js').catch(() => '// Ilmupedia Logic');
    zip.folder('js')?.file('main.js', jsContent);

    // GitHub Actions Workflow (.github/workflows)
    const workflowContent = await fetchText('/.github/workflows/publish-config.yaml').catch(() => '');
    if (workflowContent) {
      zip.folder('.github')?.folder('workflows')?.file('publish-config.yaml', workflowContent);
    }

    // Pages
    const pagesFolder = zip.folder('pages');
    const sainsHtml = await fetchText('/pages/sains.html').catch(() => '<!-- Sains -->');
    const sejarahHtml = await fetchText('/pages/sejarah.html').catch(() => '<!-- Sejarah -->');
    const matematikaHtml = await fetchText('/pages/matematika.html').catch(() => '<!-- Matematika -->');
    const artikelHtml = await fetchText('/pages/artikel-detail.html').catch(() => '<!-- Artikel Detail -->');
    const tentangHtml = await fetchText('/pages/tentang.html').catch(() => '<!-- Tentang -->');
    const kontakHtml = await fetchText('/pages/kontak.html').catch(() => '<!-- Kontak -->');

    pagesFolder?.file('sains.html', sainsHtml);
    pagesFolder?.file('sejarah.html', sejarahHtml);
    pagesFolder?.file('matematika.html', matematikaHtml);
    pagesFolder?.file('artikel-detail.html', artikelHtml);
    pagesFolder?.file('tentang.html', tentangHtml);
    pagesFolder?.file('kontak.html', kontakHtml);

    // Assets
    const iconsFolder = zip.folder('assets')?.folder('icons');
    const logoSvg = await fetchText('/assets/icons/logo.svg').catch(() => '<svg></svg>');
    const scienceSvg = await fetchText('/assets/icons/science.svg').catch(() => '<svg></svg>');
    const historySvg = await fetchText('/assets/icons/history.svg').catch(() => '<svg></svg>');
    const mathSvg = await fetchText('/assets/icons/math.svg').catch(() => '<svg></svg>');

    iconsFolder?.file('logo.svg', logoSvg);
    iconsFolder?.file('science.svg', scienceSvg);
    iconsFolder?.file('history.svg', historySvg);
    iconsFolder?.file('math.svg', mathSvg);

    // README.md untuk panduan GitHub Pages
    const readmeContent = `# Ilmupedia - Portal Edukasi & Ensiklopedia Pengetahuan

Proyek website edukasi terstruktur rapi, siap di-deploy langsung ke **GitHub Pages**.

## 📁 Struktur Folder
- \`index.html\`: Otomatis me-redirect pengunjung ke \`home.html\`
- \`home.html\`: Landing page utama dengan hero search dan ringkasan kategori
- \`css/style.css\`: Lembar gaya terpadu
- \`js/main.js\`: Logika pencarian, filter, pembaca audio, komentar, dan kalkulator
- \`pages/\`:
  - \`sains.html\`: Modul sains, lab gravitasi Newton, dan artikel ilmiah
  - \`sejarah.html\`: Dokumentasi peradaban dan linimasa interaktif
  - \`matematika.html\`: Konsep logika dan kalkulator matematika
  - \`artikel-detail.html\`: Template baca artikel lengkap dengan komentar
  - \`tentang.html\`: Visi misi dan dewan kurator
  - \`kontak.html\`: Formulir masukan dan kontribusi naskah
- \`assets/\`: Ikon vektor dan grafis

## 🚀 Cara Deploy ke GitHub Pages
1. Ekstrak file zip ini ke folder lokal Anda.
2. Buat repositori baru di GitHub (misal: \`ilmupedia\`).
3. Unggah seluruh file ke repositori (branch \`main\`).
4. Buka **Settings** repositori > **Pages**.
5. Di bagian **Build and deployment**, pilih Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**.
6. Tunggu 1 menit, website Anda telah daring!
`;
    zip.file('README.md', readmeContent);

    // Trigger download
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ilmupedia-github-pages-ready.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return true;
  } catch (error) {
    console.error('Gagal generate zip:', error);
    return false;
  }
}
