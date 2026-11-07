/**
 * Ilmupedia - Main JavaScript Logic
 * Mengatur interaktivitas: Navigasi, Pencarian, Kalkulator Matematika,
 * Simulasi Eksperimen Sains, Linimasa Sejarah, dan Komentar.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSearch();
  initTheme();
  initArticleReader();
  initCalculators();
  initComments();
  initContactForm();
});

// 1. Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}

// 2. Real-time Search Filter for Article Cards
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.article-card, .searchable-item');
    let visibleCount = 0;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(term)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const noResults = document.getElementById('no-search-results');
    if (noResults) {
      noResults.style.display = (visibleCount === 0 && term !== '') ? 'block' : 'none';
    }
  });
}

// 3. Theme Toggle (Light / Dark)
function initTheme() {
  const savedTheme = localStorage.getItem('ilmupedia_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('ilmupedia_theme', next);
    });
  });
}

// 4. Article Reader Toolbar (Font size & bookmark & speech)
function initArticleReader() {
  const readingContent = document.querySelector('.reading-content');
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');
  const btnBookmark = document.getElementById('btn-bookmark');
  const btnSpeech = document.getElementById('btn-speech');

  let currentFontSize = 18;

  if (readingContent && btnFontIncrease && btnFontDecrease) {
    btnFontIncrease.addEventListener('click', () => {
      if (currentFontSize < 26) {
        currentFontSize += 2;
        readingContent.style.fontSize = currentFontSize + 'px';
      }
    });

    btnFontDecrease.addEventListener('click', () => {
      if (currentFontSize > 14) {
        currentFontSize -= 2;
        readingContent.style.fontSize = currentFontSize + 'px';
      }
    });
  }

  if (btnBookmark) {
    const articleId = window.location.pathname;
    const isBookmarked = localStorage.getItem('bm_' + articleId) === 'true';
    if (isBookmarked) {
      btnBookmark.classList.add('bookmarked');
      btnBookmark.innerHTML = '★ Tersimpan';
    }

    btnBookmark.addEventListener('click', () => {
      const currentState = localStorage.getItem('bm_' + articleId) === 'true';
      localStorage.setItem('bm_' + articleId, !currentState);
      if (!currentState) {
        btnBookmark.classList.add('bookmarked');
        btnBookmark.innerHTML = '★ Tersimpan';
      } else {
        btnBookmark.classList.remove('bookmarked');
        btnBookmark.innerHTML = '☆ Simpan';
      }
    });
  }

  if (btnSpeech && readingContent) {
    let isSpeaking = false;
    btnSpeech.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) {
        alert('Fitur pembaca suara tidak didukung di browser ini.');
        return;
      }
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btnSpeech.textContent = '🔊 Dengarkan';
      } else {
        const text = readingContent.innerText;
        const utterance = new SpeechSynthesisUtterance(text.substring(0, 1000));
        utterance.lang = 'id-ID';
        utterance.onend = () => {
          isSpeaking = false;
          btnSpeech.textContent = '🔊 Dengarkan';
        };
        window.speechSynthesis.speak(utterance);
        isSpeaking = true;
        btnSpeech.textContent = '⏹ Berhenti';
      }
    });
  }
}

// 5. Interactive Math Calculators
function initCalculators() {
  // Pythagoras
  const btnPyth = document.getElementById('calc-pyth-btn');
  if (btnPyth) {
    btnPyth.addEventListener('click', () => {
      const a = parseFloat(document.getElementById('side-a')?.value || '0');
      const b = parseFloat(document.getElementById('side-b')?.value || '0');
      const resEl = document.getElementById('pyth-result');
      if (a > 0 && b > 0 && resEl) {
        const c = Math.sqrt(a * a + b * b);
        resEl.innerHTML = `<strong>Hipotenusa (c):</strong> ${c.toFixed(2)} satuan (c² = ${a}² + ${b}² = ${(a*a + b*b)})`;
      } else if (resEl) {
        resEl.textContent = 'Harap masukkan nilai sisi A dan B yang valid (> 0).';
      }
    });
  }

  // Quadratic
  const btnQuad = document.getElementById('calc-quad-btn');
  if (btnQuad) {
    btnQuad.addEventListener('click', () => {
      const a = parseFloat(document.getElementById('quad-a')?.value || '1');
      const b = parseFloat(document.getElementById('quad-b')?.value || '0');
      const c = parseFloat(document.getElementById('quad-c')?.value || '0');
      const resEl = document.getElementById('quad-result');
      if (!resEl) return;

      if (a === 0) {
        resEl.textContent = 'Nilai "a" tidak boleh 0 pada persamaan kuadrat.';
        return;
      }

      const d = b * b - 4 * a * c;
      if (d > 0) {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        resEl.innerHTML = `Diskriminan (D) = ${d} (D > 0: Dua akar riil berbeda)<br><strong>x₁ = ${x1.toFixed(3)}, x₂ = ${x2.toFixed(3)}</strong>`;
      } else if (d === 0) {
        const x = -b / (2 * a);
        resEl.innerHTML = `Diskriminan (D) = 0 (Akar kembar riil)<br><strong>x₁ = x₂ = ${x.toFixed(3)}</strong>`;
      } else {
        const real = (-b / (2 * a)).toFixed(3);
        const imag = (Math.sqrt(-d) / (2 * a)).toFixed(3);
        resEl.innerHTML = `Diskriminan (D) = ${d} (D < 0: Akar kompleks / imajiner)<br><strong>x = ${real} ± ${imag}i</strong>`;
      }
    });
  }
}

// 6. Comments System (LocalStorage backed)
function initComments() {
  const form = document.getElementById('comment-form');
  const container = document.getElementById('comments-list');
  if (!form || !container) return;

  const storageKey = 'comments_' + (window.location.pathname || 'default');
  const loadComments = () => {
    const raw = localStorage.getItem(storageKey);
    const comments = raw ? JSON.parse(raw) : [
      { name: 'Dr. Hendra Wijaya', date: '2 hari lalu', text: 'Penjelasan yang sangat komprehensif dan mudah dicerna bagi siswa maupun akademisi.' },
      { name: 'Nadia Putri', date: '1 hari lalu', text: 'Sangat terbantu untuk materi riset karya tulis ilmiah saya. Terima kasih Ilmupedia!' }
    ];
    container.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div style="display:flex; justify-content:space-between; margin-bottom: 0.25rem;">
          <strong style="color:var(--text-main); font-size:0.95rem;">${escapeHTML(c.name)}</strong>
          <span style="font-size:0.8rem; color:var(--text-muted);">${escapeHTML(c.date)}</span>
        </div>
        <p style="color:var(--text-muted); font-size:0.9rem;">${escapeHTML(c.text)}</p>
      </div>
    `).join('');
  };

  loadComments();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    if (!nameInput.value.trim() || !textInput.value.trim()) return;

    const raw = localStorage.getItem(storageKey);
    const comments = raw ? JSON.parse(raw) : [];
    comments.unshift({
      name: nameInput.value.trim(),
      date: 'Baru saja',
      text: textInput.value.trim()
    });
    localStorage.setItem(storageKey, JSON.stringify(comments));
    nameInput.value = '';
    textInput.value = '';
    loadComments();
  });
}

// 7. Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedbackMsg = document.getElementById('contact-feedback');
  if (form && feedbackMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedbackMsg.style.display = 'block';
      feedbackMsg.textContent = 'Pesan Anda berhasil dikirim! Tim kurator Ilmupedia akan meninjau dan membalas melalui email.';
      form.reset();
      setTimeout(() => {
        feedbackMsg.style.display = 'none';
      }, 6000);
    });
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
