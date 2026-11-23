(function () {
  'use strict';

  /* ----------------------------------------------------------------------
     1. BILINGUAL I18N (ID / EN)
     ---------------------------------------------------------------------- */
  const translations = {
    id: {
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.projects': 'Proyek',
      'nav.contact': 'Kontak',
      'hero.status': 'Terbuka untuk Kolaborasi',
      'hero.role': 'Mahasiswa Teknik Informatika & Developer',
      'hero.bio': 'Membangun aplikasi web, alat otomasi dokumen berbasis Python, antarmuka yang bersih, serta mengeksplorasi ekosistem Linux untuk alur kerja yang efisien.',
      'hero.ctaProjects': 'Lihat Proyek',
      'hero.ctaContact': 'Hubungi Saya',
      'hero.uploadPhoto': 'Muat Foto',
      'hero.previewPhotoHint': 'Pilih foto lokal untuk preview',
      'about.kicker': 'Profil & Keahlian',
      'about.title': 'Tentang Saya',
      'about.bioHeading': 'Latar Belakang',
      'about.bioP1': 'Saya Hazwan Fahmi Ghailan, mahasiswa Teknik Informatika yang fokus pada pengembangan web, pembuatan perangkat bantu berbasis Python, desain UI yang bersih, serta oprek sistem Linux.',
      'about.bioP2': 'Saya senang membangun tools praktis yang memangkas pekerjaan manual berulang—seperti otomasi penyusunan dokumen dan konversi format tulisan akademik—sambil menjaga kode tetap rapi dan mudah dikembangkan.',
      'about.bioP3': 'Di luar proyek, saya mengerjakan praktikum Pemrograman Web (Laravel), Basis Data Lanjut, dan Jaringan Lanjut (MikroTik), merakit desktop Linux sendiri dengan CachyOS dan Hyprland, serta menjalankan layanan self-hosted lewat Docker dan Tailscale. Saya juga berkarya sebagai kreator dengan nama chigusa.',
      'about.skillsHeading': 'Tech Stack',
      'about.skillsNote': 'Fokus pada arsitektur bersih & performa ringan.',
      'projects.kicker': 'Karya Pilihan',
      'projects.title': 'Proyek Unggulan',
      'projects.subtitle': 'Proyek pilihan saya, mulai dari otomasi dokumen dan penulisan akademik, desktop Linux, hingga platform belajar dan jaringan.',
      'projects.p1Desc': 'Alat otomasi pembuatan dokumen Microsoft Word (.docx) terstruktur berbasis template agar format laporan dan surat selalu rapi dan konsisten.',
      'projects.p2Desc': 'Aplikasi web yang mengonversi format skripsi/tugas akhir menjadi tata letak artikel e-journal siap publikasi secara otomatis.',
      'projects.qsDesc': 'Restyling antarmuka end-4 (illogical-impulse) di Hyprland menjadi kartu kaca melayang di atas wallpaper menggunakan QML dan Quickshell.',
      'projects.lfsDesc': 'Rencana membangun Linux From Scratch 12.4 dengan systemd dan Labwc bertema Sekai Pop untuk laptop 8 GB, dengan sistem inti yang ringan dan terpisah dari aplikasi.',
      'projects.eduDesc': 'Platform belajar IT untuk kelas, berisi materi, quiz, dan lab interaktif yang dibagi ke tiga tingkat: beginner, pro, dan advance.',
      'projects.netDesc': 'Praktikum Jaringan Lanjut: memblokir IP dan situs web lewat address list dan firewall rule di MikroTik CHR, diuji pada klien Windows 10 di VirtualBox.',
      'projects.appDesc': 'Aplikasi Android (APK) yang saya kembangkan sendiri.',
      'projects.srvDesc': 'Server pribadi yang saya hosting sendiri lewat Tailscale. Isinya berganti-ganti, tergantung apa yang sedang ingin saya kerjakan.',
      'projects.openServer': 'Buka Server',
      'projects.viewGithub': 'Lihat di GitHub',
      'projects.detailsBtn': 'Detail',
      'contact.kicker': 'Mari Terhubung',
      'contact.title': 'Hubungi Saya',
      'contact.subtitle': 'Terbuka untuk diskusi proyek web, tools Python, maupun kolaborasi lainnya.',
      'contact.openProfile': 'Buka Profil →',
      'contact.copyEmail': 'Salin Email',
      'footer.backTop': 'Kembali ke Atas',
      'modal.highlights': 'Sorotan Fitur',
      'modal.close': 'Tutup',
      'toast.copied': 'Email berhasil disalin ke clipboard!',
      'toast.copyFail': 'Gagal menyalin email, silakan salin secara manual.',
      'toast.photoUpdated': 'Foto profil berhasil diperbarui!'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.status': 'Available for Collaboration',
      'hero.role': 'Informatics Student & Developer',
      'hero.bio': 'Building web applications, Python-based document automation tools, clean user interfaces, and tinkering with Linux systems for efficient workflows.',
      'hero.ctaProjects': 'Explore Projects',
      'hero.ctaContact': 'Get in Touch',
      'hero.uploadPhoto': 'Load Photo',
      'hero.previewPhotoHint': 'Select local photo for preview',
      'about.kicker': 'Profile & Skills',
      'about.title': 'About Me',
      'about.bioHeading': 'Background',
      'about.bioP1': 'I am Hazwan Fahmi Ghailan, an Informatics Engineering student focused on web development, Python utilities, clean UI craftsmanship, and Linux/systems tinkering.',
      'about.bioP2': 'I enjoy building practical tools that eliminate repetitive manual tasks—such as structured document generation and academic formatting conversion—while keeping code clean and maintainable.',
      'about.bioP3': 'Outside projects, I work through practicums in Web Programming (Laravel), Advanced Databases, and Advanced Networking (MikroTik), build my own Linux desktop on CachyOS and Hyprland, and run self-hosted services with Docker and Tailscale. I also create as a creator under the name chigusa.',
      'about.skillsHeading': 'Tech Stack',
      'about.skillsNote': 'Focused on clean architecture & lightweight performance.',
      'projects.kicker': 'Selected Works',
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Selected projects, from document automation and academic writing to Linux desktops, learning platforms, and networking.',
      'projects.p1Desc': 'Automated document generation tool for structured Microsoft Word (.docx) files based on reusable templates for consistent formatting.',
      'projects.p2Desc': 'Web application that converts thesis/skripsi manuscripts into ready-to-publish e-journal article layouts automatically.',
      'projects.qsDesc': 'A restyle of the end-4 (illogical-impulse) interface on Hyprland into floating glass cards over the wallpaper, built with QML and Quickshell.',
      'projects.lfsDesc': 'A plan to build Linux From Scratch 12.4 with systemd and a Sekai Pop themed Labwc desktop for an 8 GB laptop, keeping the core system light and separate from apps.',
      'projects.eduDesc': 'An IT learning platform for my class with lessons, quizzes, and interactive labs, organized into three tiers: beginner, pro, and advance.',
      'projects.netDesc': 'Advanced Networking practicum: blocking IPs and websites with address lists and firewall rules on a MikroTik CHR, tested on a Windows 10 client in VirtualBox.',
      'projects.appDesc': 'An Android app (APK) that I develop myself.',
      'projects.srvDesc': 'A personal server that I host myself through Tailscale. What runs on it changes with whatever I feel like working on.',
      'projects.openServer': 'Open Server',
      'projects.viewGithub': 'View on GitHub',
      'projects.detailsBtn': 'Details',
      'contact.kicker': 'Let’s Connect',
      'contact.title': 'Get in Touch',
      'contact.subtitle': 'Open to discussing web projects, Python tools, or collaboration opportunities.',
      'contact.openProfile': 'Open Profile →',
      'contact.copyEmail': 'Copy Email',
      'footer.backTop': 'Back to Top',
      'modal.highlights': 'Key Highlights',
      'modal.close': 'Close',
      'toast.copied': 'Email copied to clipboard!',
      'toast.copyFail': 'Could not copy email, please copy manually.',
      'toast.photoUpdated': 'Profile photo updated!'
    }
  };

  const projectDetails = {
    docx: {
      category: 'Document Automation',
      title: 'DOCX Generator',
      id: {
        desc: 'Alat otomasi pembuatan dokumen Microsoft Word (.docx) terstruktur berbasis template agar format laporan dan surat selalu rapi dan konsisten.',
        highlights: [
          'Pengisian data otomatis ke template .docx tanpa merusak gaya tipografi asli.',
          'Mempercepat pembuatan dokumen berulang dengan hasil terstruktur.',
          'Ringan dan mudah diintegrasikan dalam alur kerja berbasis Python.',
          'Berkembang menjadi dashboard web FastAPI + WebSocket dengan lapisan AI yang tidak terikat satu penyedia (Ollama atau API kompatibel OpenAI).',
          'Engine render memakai Node.js (docx-js) untuk kontrol tata letak multi-seksi, dengan pembuat kuesioner Likert, tabel markdown, dan grafik.'
        ]
      },
      en: {
        desc: 'Automated document generation tool for structured Microsoft Word (.docx) files based on reusable templates for consistent formatting.',
        highlights: [
          'Injects dynamic data into .docx templates while preserving original typography.',
          'Speeds up repetitive document creation with structured output.',
          'Lightweight and easy to integrate into Python-based workflows.',
          'Grew into a FastAPI + WebSocket web dashboard with a provider-agnostic AI layer (Ollama or OpenAI-compatible APIs).',
          'Renders with a Node.js (docx-js) engine for multi-section layout control, plus a Likert questionnaire builder, markdown tables, and charts.'
        ]
      }
    },
    thesis: {
      category: 'Academic Web App',
      title: 'Thesis-to-E-Journal Converter',
      id: {
        desc: 'Aplikasi web yang mengonversi format skripsi/tugas akhir menjadi tata letak artikel e-journal siap publikasi secara otomatis.',
        highlights: [
          'Memetakan struktur bab skripsi ke dalam bagian artikel jurnal ilmiah.',
          'Menyesuaikan tata letak dan format akademik secara otomatis.',
          'Menghemat waktu penyuntingan manual sebelum publikasi e-journal.',
          'Memakai API Gemini dan Claude untuk memproses isi naskah.'
        ]
      },
      en: {
        desc: 'Web application that converts thesis/skripsi manuscripts into ready-to-publish e-journal article layouts automatically.',
        highlights: [
          'Maps thesis chapters into concise e-journal article sections.',
          'Automates academic layout and formatting adjustments.',
          'Reduces manual formatting effort prior to e-journal submission.',
          'Uses the Gemini and Claude APIs to process manuscript content.'
        ]
      }
    },
    qs: {
      category: 'Linux Desktop Rice',
      title: 'Glassmorphic Quickshell Desktop',
      id: {
        desc: "Restyling antarmuka end-4 (illogical-impulse) di Hyprland menjadi kartu kaca melayang di atas wallpaper menggunakan QML dan Quickshell.",
        highlights: [
          'Kartu cuaca dengan prakiraan, gauge CPU/RAM/GPU melingkar, statistik jaringan dan disk, pemutar media, serta jam analog bulat.',
          'Komponen QML buatan sendiri (GlassCard, SysmonWidget, NetDiskWidget, MediaWidget) dengan skrip bash untuk statistik sistem.',
          'Bisa berpindah antar-rice lewat fungsi fish dan symlink.'
        ]
      },
      en: {
        desc: "A restyle of the end-4 (illogical-impulse) interface on Hyprland into floating glass cards over the wallpaper, built with QML and Quickshell.",
        highlights: [
          'Weather card with forecast, circular CPU/RAM/GPU gauges, network and disk stats, a media player, and a round analog clock.',
          'Custom QML components (GlassCard, SysmonWidget, NetDiskWidget, MediaWidget) with bash scripts for system stats.',
          'Switches between rices through a fish function and symlinks.'
        ]
      }
    },
    lfs: {
      category: 'Linux From Scratch',
      title: 'Chigusa OS (LFS + Labwc)',
      id: {
        desc: "Rencana membangun Linux From Scratch 12.4 dengan systemd dan Labwc bertema Sekai Pop untuk laptop 8 GB, dengan sistem inti yang ringan dan terpisah dari aplikasi.",
        highlights: [
          'Tata letak tiga lapis: inti beku di /, desktop di /opt/labwc, remote di /opt/remote, dan aplikasi di /opt/apps.',
          'Btrfs dengan subvolume @home, dan Kali Linux lewat Distrobox di /container.',
          'Akses remote lewat Tailscale dan OpenSSH.',
          'Status: masih tahap perencanaan dan persiapan build.'
        ]
      },
      en: {
        desc: "A plan to build Linux From Scratch 12.4 with systemd and a Sekai Pop themed Labwc desktop for an 8 GB laptop, keeping the core system light and separate from apps.",
        highlights: [
          'Three-layer layout: frozen core at /, desktop in /opt/labwc, remote tools in /opt/remote, and apps in /opt/apps.',
          'Btrfs with an @home subvolume, and Kali Linux through Distrobox in /container.',
          'Remote access through Tailscale and OpenSSH.',
          'Status: still in planning and build preparation.'
        ]
      }
    },
    edu: {
      category: 'Educational Platform',
      title: 'Web Edukasi IT',
      id: {
        desc: "Platform belajar IT untuk kelas, berisi materi, quiz, dan lab interaktif yang dibagi ke tiga tingkat: beginner, pro, dan advance.",
        highlights: [
          'Tiga tingkat belajar: beginner, pro, dan advance, dengan tahap yang terkunci sampai tahap sebelumnya selesai (dicek di server).',
          'Mata kuliah dianggap selesai setelah semua materi dibaca dan quiz lulus.',
          'Materi dikelola dari halaman admin dan disimpan di database.',
          'Login lewat akun Google atau GitHub, serta lab keamanan interaktif berbasis simulasi shell.',
          'Status: sedang dikembangkan dengan Laravel.'
        ]
      },
      en: {
        desc: "An IT learning platform for my class with lessons, quizzes, and interactive labs, organized into three tiers: beginner, pro, and advance.",
        highlights: [
          'Three learning tiers: beginner, pro, and advance, with stages locked until the previous one is finished (enforced on the server).',
          'A course counts as complete after all lessons are read and the quiz is passed.',
          'Content is managed from an admin page and stored in a database.',
          'Sign-in with a Google or GitHub account, plus interactive security labs based on a simulated shell.',
          'Status: in development with Laravel.'
        ]
      }
    },
    net: {
      category: 'Networking Lab',
      title: 'Lab Blokir IP & Website MikroTik',
      id: {
        desc: "Praktikum Jaringan Lanjut: memblokir IP dan situs web lewat address list dan firewall rule di MikroTik CHR, diuji pada klien Windows 10 di VirtualBox.",
        highlights: [
          'Topologi CHR di VirtualBox dengan satu adapter NAT dan satu host-only, ditambah satu klien Windows 10.',
          'Klien mendapat IP dari DHCP VirtualBox, lalu diuji lewat address list dan rule firewall.',
          'Dikonfigurasi lewat Winbox dan didokumentasikan sebagai laporan praktikum.'
        ]
      },
      en: {
        desc: "Advanced Networking practicum: blocking IPs and websites with address lists and firewall rules on a MikroTik CHR, tested on a Windows 10 client in VirtualBox.",
        highlights: [
          'CHR topology in VirtualBox with one NAT and one host-only adapter, plus a Windows 10 client.',
          'The client gets its IP from the VirtualBox DHCP and is tested through an address list and firewall rules.',
          'Configured through Winbox and documented as a practicum report.'
        ]
      }
    },
    app: {
      category: 'Android App',
      title: 'Basuwi',
      id: {
        desc: "Aplikasi Android (APK) yang saya kembangkan sendiri.",
        highlights: [
          'Berupa aplikasi Android dalam format APK.'
        ]
      },
      en: {
        desc: "An Android app (APK) that I develop myself.",
        highlights: [
          'An Android app packaged as an APK.'
        ]
      }
    }
  };

  let currentLang = 'id';
  try {
    const savedLang = localStorage.getItem('watatsumi_lang');
    if (savedLang === 'en' || savedLang === 'id') currentLang = savedLang;
  } catch (e) {}

  const langToggleBtn = document.getElementById('lang-toggle');
  const langIdPill = document.getElementById('lang-id-pill');
  const langEnPill = document.getElementById('lang-en-pill');

  function applyLanguage(lang, animate = true) {
    currentLang = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem('watatsumi_lang', lang); } catch (e) {}

    if (lang === 'id') {
      langIdPill.className = 'px-2.5 py-1 rounded-full transition-all duration-300 bg-gradient-to-r from-hydro/35 to-coral-deep/35 text-pearl shadow-sm';
      langEnPill.className = 'px-2.5 py-1 rounded-full transition-all duration-300 text-pearl/60';
    } else {
      langEnPill.className = 'px-2.5 py-1 rounded-full transition-all duration-300 bg-gradient-to-r from-hydro/35 to-coral-deep/35 text-pearl shadow-sm';
      langIdPill.className = 'px-2.5 py-1 rounded-full transition-all duration-300 text-pearl/60';
    }

    const els = document.querySelectorAll('[data-i18n]');
    if (animate) {
      els.forEach(el => el.classList.add('i18n-fading'));
      setTimeout(() => {
        els.forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
          el.classList.remove('i18n-fading');
        });
      }, 150);
    } else {
      els.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }
  }

  applyLanguage(currentLang, false);
  langToggleBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'id' ? 'en' : 'id', true);
  });

  /* ----------------------------------------------------------------------
     2. TOAST HELPER (NO ALERT())
     ---------------------------------------------------------------------- */
  const toastBox = document.getElementById('toast-box');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(msg) {
    toastMessage.textContent = msg;
    toastBox.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBox.classList.remove('show');
    }, 2800);
  }

  /* ----------------------------------------------------------------------
     3. PROFILE PICTURE FALLBACK + LIVE UPLOAD WITH LOCALSTORAGE PERSISTENCE
     ---------------------------------------------------------------------- */
  const profileImg = document.getElementById('profile-img');
  const avatarFallback = document.getElementById('avatar-fallback');
  const avatarUploadTrigger = document.getElementById('avatar-upload-trigger');
  const avatarHintBtn = document.getElementById('avatar-hint-btn');
  const avatarFileInput = document.getElementById('avatar-file-input');
  const AVATAR_STORAGE_KEY = 'watatsumi_profile_avatar_v1';

  function showProfileImage() {
    profileImg.classList.remove('hidden');
    avatarFallback.classList.add('hidden');
    avatarHintBtn.classList.add('hidden');
  }

  function showAvatarFallback() {
    profileImg.classList.add('hidden');
    avatarFallback.classList.remove('hidden');
    avatarHintBtn.classList.remove('hidden');
  }

  // Check if user previously loaded a preview image into localStorage
  let savedAvatar = null;
  try {
    savedAvatar = localStorage.getItem(AVATAR_STORAGE_KEY);
  } catch (e) {}

  profileImg.addEventListener('load', () => {
    if (profileImg.naturalWidth > 0) {
      showProfileImage();
    } else {
      showAvatarFallback();
    }
  });

  profileImg.addEventListener('error', () => {
    showAvatarFallback();
  });

  if (savedAvatar) {
    profileImg.src = savedAvatar;
  } else if (profileImg.complete) {
    if (profileImg.naturalWidth > 0) {
      showProfileImage();
    } else {
      showAvatarFallback();
    }
  }

  function triggerFilePicker() {
    avatarFileInput.click();
  }

  avatarUploadTrigger.addEventListener('click', triggerFilePicker);
  avatarHintBtn.addEventListener('click', triggerFilePicker);

  avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
      const dataUrl = evt.target && evt.target.result;
      if (typeof dataUrl === 'string') {
        profileImg.src = dataUrl;
        showProfileImage();
        try {
          localStorage.setItem(AVATAR_STORAGE_KEY, dataUrl);
        } catch (err) {
          // Ignore quota errors on very large images, still preview live
        }
        showToast(translations[currentLang]['toast.photoUpdated']);
      }
    };
    reader.readAsDataURL(file);
  });

  /* ----------------------------------------------------------------------
     4. FLOATING HEADER, MOBILE MENU & SECTION PROGRESS TRACKER
     ---------------------------------------------------------------------- */
  const floatingNav = document.getElementById('floating-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  function setMobileMenu(open) {
    mobileMenuBtn.setAttribute('aria-expanded', String(open));
    mobileDrawer.classList.toggle('hidden', !open);
    hamburgerIcon.classList.toggle('hidden', open);
    closeIcon.classList.toggle('hidden', !open);
  }

  mobileMenuBtn.addEventListener('click', () => {
    setMobileMenu(mobileDrawer.classList.contains('hidden'));
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  window.addEventListener('scroll', () => {
    floatingNav.classList.toggle('scrolled', window.scrollY > 28);
  }, { passive: true });

  const sectionIds = ['home', 'about', 'projects', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const progressDots = document.querySelectorAll('.progress-dot-btn');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  progressDots.forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.getAttribute('data-target'));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        progressDots.forEach(dot => dot.classList.toggle('active', dot.getAttribute('data-target') === id));
        desktopNavLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
      }
    });
  }, { rootMargin: '-32% 0px -48% 0px', threshold: 0.05 });

  sections.forEach(sec => sectionObserver.observe(sec));

  // Scroll reveal for below-the-fold sections only
  const revealEls = document.querySelectorAll('.reveal-section');
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ----------------------------------------------------------------------
     5. PROJECT MODAL & EMAIL COPY
     ---------------------------------------------------------------------- */
  const modal = document.getElementById('project-modal');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalHighlights = document.getElementById('modal-highlights');

  function openProjectModal(key) {
    const data = projectDetails[key];
    if (!data) return;
    const loc = data[currentLang] || data.id;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = loc.desc;
    modalHighlights.innerHTML = '';
    loc.highlights.forEach(text => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5';
      li.innerHTML = `<span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-hydro shrink-0"></span><span>${text}</span>`;
      modalHighlights.appendChild(li);
    });
    modal.classList.remove('modal-hidden');
    modal.classList.add('modal-visible');
  }

  function closeProjectModal() {
    modal.classList.remove('modal-visible');
    modal.classList.add('modal-hidden');
  }

  document.querySelectorAll('[data-modal-project]').forEach(btn => {
    btn.addEventListener('click', () => openProjectModal(btn.getAttribute('data-modal-project')));
  });
  document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
  document.getElementById('modal-close-secondary').addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

  document.getElementById('copy-email-btn').addEventListener('click', () => {
    const emailText = 'hazwan.fahmi@email.com';
    try {
      const ta = document.createElement('textarea');
      ta.value = emailText;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, 99999);
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(translations[currentLang][ok ? 'toast.copied' : 'toast.copyFail']);
    } catch (err) {
      showToast(translations[currentLang]['toast.copyFail']);
    }
  });

  /* ----------------------------------------------------------------------
     6. INTERACTIVE BUBBLE-CLICK EFFECT
     ---------------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    document.addEventListener('click', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const ripple = document.createElement('span');
      ripple.className = 'hydro-ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 680);

      for (let i = 0; i < 6; i++) {
        const b = document.createElement('span');
        b.className = 'click-bubble';
        const size = 5 + Math.random() * 8;
        const angle = (Math.PI * 2 * i) / 6 + (Math.random() - 0.5) * 0.5;
        const dist = 24 + Math.random() * 34;
        b.style.width = `${size}px`;
        b.style.height = `${size}px`;
        b.style.left = `${x}px`;
        b.style.top = `${y}px`;
        b.style.setProperty('--tx', `${(Math.cos(angle) * dist).toFixed(1)}px`);
        b.style.setProperty('--ty', `${(Math.sin(angle) * dist - 14).toFixed(1)}px`);
        document.body.appendChild(b);
        setTimeout(() => b.remove(), 880);
      }
    });
  }

  /* ----------------------------------------------------------------------
     7. FULL-SCREEN 60FPS WATATSUMI CANVAS ENGINE
        (Caustic Rays, 5 Glowing Bake-Kurage Jellyfish, Motes, Micro-Bubbles)
     ---------------------------------------------------------------------- */
  const canvas = document.getElementById('watatsumi-canvas');
  const ctx = canvas.getContext('2d');
  let width = 0, height = 0, dpr = 1;
  let rays = [], bubbles = [], motes = [], jellies = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initScene();
  }

  function initScene() {
    const rayCount = width < 640 ? 4 : 6;
    rays = Array.from({ length: rayCount }, (_, i) => ({
      x: (width / rayCount) * i + Math.random() * 100,
      w: 75 + Math.random() * 120,
      angle: 0.12 + Math.random() * 0.14,
      speed: 0.0004 + Math.random() * 0.0004,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.025 + Math.random() * 0.028
    }));

    const bubbleCount = width < 640 ? 22 : 38;
    bubbles = Array.from({ length: bubbleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.6 + Math.random() * 4,
      vy: 0.25 + Math.random() * 0.52,
      amp: 0.3 + Math.random() * 0.7,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.18 + Math.random() * 0.34
    }));

    const moteColors = [
      'rgba(100, 232, 255,',
      'rgba(255, 183, 213,',
      'rgba(255, 142, 196,',
      'rgba(196, 181, 253,'
    ];
    const moteCount = width < 640 ? 26 : 48;
    motes = Array.from({ length: moteCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.2 + Math.random() * 2.3,
      vx: (Math.random() - 0.5) * 0.26,
      vy: (Math.random() - 0.5) * 0.22,
      color: moteColors[Math.floor(Math.random() * moteColors.length)],
      pulse: 0.015 + Math.random() * 0.025,
      phase: Math.random() * Math.PI * 2
    }));

    const jfCount = width < 768 ? 4 : 5;
    const palettes = [
      { core: 'rgba(100, 232, 255, 0.32)', rim: 'rgba(100, 232, 255, 0.65)', glow: 'rgba(100, 232, 255, 0.16)' },
      { core: 'rgba(255, 183, 213, 0.30)', rim: 'rgba(255, 142, 196, 0.62)', glow: 'rgba(255, 142, 196, 0.15)' },
      { core: 'rgba(196, 181, 253, 0.30)', rim: 'rgba(196, 181, 253, 0.62)', glow: 'rgba(196, 181, 253, 0.15)' }
    ];
    jellies = Array.from({ length: jfCount }, (_, idx) => ({
      x: (width / (jfCount + 1)) * (idx + 1) + (Math.random() - 0.5) * 70,
      y: height * (0.15 + Math.random() * 0.72),
      size: (width < 640 ? 20 : 26) + Math.random() * 13,
      vx: (Math.random() - 0.5) * 0.16,
      vy: -0.13 - Math.random() * 0.15,
      phase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.022 + Math.random() * 0.012,
      pal: palettes[idx % palettes.length]
    }));
  }

  function renderCanvas(time) {
    ctx.clearRect(0, 0, width, height);

    // 1. Caustic Light Rays
    rays.forEach(r => {
      const xTop = r.x + Math.sin(time * r.speed + r.phase) * 42;
      const grad = ctx.createLinearGradient(xTop, 0, xTop + height * r.angle, height * 0.85);
      grad.addColorStop(0, `rgba(100, 232, 255, ${r.alpha * 1.4})`);
      grad.addColorStop(0.55, `rgba(196, 181, 253, ${r.alpha * 0.55})`);
      grad.addColorStop(1, 'rgba(6, 13, 36, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(xTop - r.w * 0.35, 0);
      ctx.lineTo(xTop + r.w * 0.35, 0);
      ctx.lineTo(xTop + height * r.angle + r.w, height * 0.9);
      ctx.lineTo(xTop + height * r.angle - r.w * 0.6, height * 0.9);
      ctx.closePath();
      ctx.fill();
    });

    // 2. Bioluminescent Motes
    motes.forEach(m => {
      m.x += m.vx;
      m.y += m.vy;
      if (m.x < -10) m.x = width + 10;
      if (m.x > width + 10) m.x = -10;
      if (m.y < -10) m.y = height + 10;
      if (m.y > height + 10) m.y = -10;
      const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(time * m.pulse * 0.06 + m.phase));
      const rad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4);
      rad.addColorStop(0, `${m.color} ${a})`);
      rad.addColorStop(1, `${m.color} 0)`);
      ctx.fillStyle = rad;
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // 3. Glowing Bake-Kurage Jellyfish
    jellies.forEach(jf => {
      const p = Math.sin(time * jf.pulseSpeed * 0.06 + jf.phase);
      const sx = 1 + p * 0.08;
      const sy = 1 - p * 0.07;

      jf.x += jf.vx + Math.sin(time * 0.0006 + jf.phase) * 0.14;
      jf.y += jf.vy - (p > 0 ? p * 0.14 : 0);

      if (jf.y < -jf.size * 3.5) { jf.y = height + jf.size * 2.5; jf.x = Math.random() * width; }
      if (jf.x < -jf.size * 2) jf.x = width + jf.size * 2;
      if (jf.x > width + jf.size * 2) jf.x = -jf.size * 2;

      ctx.save();
      ctx.translate(jf.x, jf.y);

      const halo = ctx.createRadialGradient(0, 0, 2, 0, 0, jf.size * 2.2);
      halo.addColorStop(0, jf.pal.glow);
      halo.addColorStop(1, 'rgba(6, 13, 36, 0)');
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(0, 0, jf.size * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Tentacles
      for (let t = 0; t < 5; t++) {
        const ox = ((t / 4) - 0.5) * jf.size * 1.1;
        const len = jf.size * (1.75 + (t % 2) * 0.5);
        ctx.beginPath();
        ctx.moveTo(ox * sx, jf.size * 0.12);
        for (let s = 1; s <= 10; s++) {
          const prog = s / 10;
          const wave = Math.sin(time * 0.0028 + jf.phase + t * 0.9 + prog * 4.2) * (5 + prog * 8);
          ctx.lineTo(ox * sx + wave, jf.size * 0.12 + prog * len);
        }
        ctx.strokeStyle = jf.pal.rim;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = 0.45;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.scale(sx, sy);

      const bellGrad = ctx.createRadialGradient(0, -jf.size * 0.3, 2, 0, 0, jf.size);
      bellGrad.addColorStop(0, 'rgba(240, 248, 255, 0.55)');
      bellGrad.addColorStop(0.55, jf.pal.core);
      bellGrad.addColorStop(1, 'rgba(11, 22, 54, 0.12)');

      ctx.beginPath();
      ctx.arc(0, 0, jf.size * 0.85, Math.PI, 0, false);
      ctx.quadraticCurveTo(jf.size * 0.85, jf.size * 0.24, jf.size * 0.42, jf.size * 0.18);
      ctx.quadraticCurveTo(0, jf.size * 0.34, -jf.size * 0.42, jf.size * 0.18);
      ctx.quadraticCurveTo(-jf.size * 0.85, jf.size * 0.24, -jf.size * 0.85, 0);
      ctx.closePath();
      ctx.fillStyle = bellGrad;
      ctx.fill();
      ctx.strokeStyle = jf.pal.rim;
      ctx.lineWidth = 1.25;
      ctx.stroke();

      ctx.restore();
    });

    // 4. Rising Micro-Bubbles
    bubbles.forEach(b => {
      b.y -= b.vy;
      b.x += Math.sin(time * 0.0015 + b.phase) * b.amp * 0.35;
      if (b.y < -15) { b.y = height + 15; b.x = Math.random() * width; }
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 232, 255, ${b.alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, Math.max(0.7, b.r * 0.26), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240, 248, 255, ${b.alpha + 0.25})`;
      ctx.fill();
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(renderCanvas);
    }
  }

  window.addEventListener('resize', resizeCanvas);
  window.onload = function () {
    resizeCanvas();
    if (prefersReducedMotion) {
      renderCanvas(0);
    } else {
      requestAnimationFrame(renderCanvas);
    }
  };
})();
