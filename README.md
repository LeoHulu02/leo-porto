# Portfolio Leo Saputra Hulu

> Fullstack developer portfolio — presisi arsitektur, UI premium, performa siap produksi.

[![Live Demo](https://img.shields.io/badge/demo-leo--hulu.vercel.app-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://leo-hulu.vercel.app/)
[![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## Tentang Proyek

**porto-leo** adalah website portfolio personal milik **Leo Saputra Hulu** — fullstack developer dengan fokus front-end & back-end. Situs ini dirancang sebagai showcase profesional: cepat, responsif di semua perangkat, dan enak dinavigasi tanpa mengorbankan estetika futuristik (dark theme + aksen violet).

Live: **[leo-hulu.vercel.app](https://leo-hulu.vercel.app/)**

---

## Highlights

| Fitur | Deskripsi |
|-------|-----------|
| **Hero cinematic** | Profil, orbit tech stack (GSAP), quick links sosial & dokumen |
| **About & tech stack** | Value proposition + grid keahlian dengan animasi reveal |
| **Project carousel** | Filter proyek, swipe mobile, card transparan + modal detail |
| **PDF preview modal** | CV & sertifikat — pratinjau dulu, unduh kalau mau |
| **Contact section** | Form EmailJS + WhatsApp + channel sosial |
| **Smart scroll** | Navigasi section tidak menutupi judul (offset navbar dinamis) |
| **Aksesibilitas** | Keyboard (`ESC`, arrow keys), ARIA labels, touch-friendly |

---

## Tech Stack

**Core**
- [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

**Libraries**
- [GSAP](https://gsap.com/) — animasi hero & micro-interactions
- [simple-icons](https://simpleicons.org/) — ikon brand teknologi
- [@emailjs/browser](https://www.emailjs.com/) — form kontak tanpa backend

**Fonts**
- **Oxanium** — heading / label futuristik (`font-techno`)
- **Space Grotesk** — body text (`font-sans`)

---

## Struktur Folder

```
porto-leo/
├── public/                  # Asset statis (PDF, gambar, favicon)
├── src/
│   ├── assets/              # CSS global (Tailwind entry)
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ContactSection.vue
│   │   ├── PdfPreviewModal.vue
│   │   └── Footer.vue
│   ├── composables/
│   │   ├── usePdfPreview.js
│   │   └── useSectionScroll.js
│   ├── constants/
│   │   └── documents.js     # Metadata CV & sertifikat
│   ├── App.vue
│   └── main.js
├── .env.example             # Template environment variables
├── index.html               # SEO, OG tags, JSON-LD
├── tailwind.config.js
└── vite.config.js
```

---

## Mulai Cepat

### Prasyarat

- **Node.js** 18+ (disarankan LTS)
- **npm** / pnpm / yarn

### Instalasi

```bash
git clone https://github.com/LeoHulu02/porto-leo.git
cd porto-leo
npm install
```

### Development

```bash
npm run dev
```

Buka `http://localhost:5173`

### Build produksi

```bash
npm run build
npm run preview   # preview build lokal
```

Output ada di folder `dist/`.

---

## Konfigurasi Form Kontak (EmailJS)

Form di section **Kontak** membutuhkan kredensial EmailJS. Copy `.env.example` → `.env`:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_CONTACT_EMAIL=email-kamu@gmail.com
```

| Variable | Lokasi di EmailJS |
|----------|-------------------|
| `VITE_EMAILJS_PUBLIC_KEY` | Account → API Keys → **Public Key** |
| `VITE_EMAILJS_SERVICE_ID` | Email Services → **Service ID** |
| `VITE_EMAILJS_TEMPLATE_ID` | Email Templates → **Template ID** |
| `VITE_CONTACT_EMAIL` | *(opsional)* email tampilan di UI |

**Variable template EmailJS** (harus match):

```
{{from_name}}
{{from_email}}
{{reply_to}}
{{subject}}
{{message}}
```

> Tanpa `.env`, form tetap tampil tapi nonaktif — WhatsApp tetap berfungsi sebagai fallback.

### Troubleshooting error 400 (Vercel / production)

1. **`VITE_EMAILJS_SERVICE_ID` harus `service_xxxxx`** — **bukan** Public Key.  
   - Public Key → `VITE_EMAILJS_PUBLIC_KEY`  
   - Service ID → Email Services → copy ID yang diawali `service_`

2. **Redeploy wajib** setelah mengubah env di Vercel.  
   Variabel `VITE_*` Vite **dibake saat `npm run build`**, bukan saat runtime.

3. **Allowed origins** di EmailJS:  
   Account → Security → tambahkan `https://leo-hulu.vercel.app`

4. **Template variables** di dashboard harus ada (salah satu set):  
   `from_name`, `from_email`, `message` **atau** `name`, `email`, `message`

5. Cek **EmailJS dashboard → Email Log** untuk pesan error detail.

---

## Scripts

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Dev server + HMR |
| `npm run build` | Build production ke `dist/` |
| `npm run preview` | Serve build lokal |

---

## Deploy

Proyek ini siap di-deploy sebagai **static site**. Saat ini di-host di **Vercel**:

1. Push repo ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Tambahkan environment variables EmailJS di dashboard Vercel
5. Deploy

Build command: `npm run build`  
Output directory: `dist`

---

## Section Map

| Anchor | Section | Isi |
|--------|---------|-----|
| `#home` | Hero | Intro, foto, tech orbit, quick links |
| `#about` | Tentang | Profil, tech stack grid |
| `#projects` | Proyek | Carousel + filter + modal detail |
| `#connect` | Kontak | Form, WhatsApp, sosial media |

Navbar juga menyediakan preview **CV** & **Sertifikat** via modal PDF.

---

## Kontak & Sosial

- **Website:** [leo-hulu.vercel.app](https://leo-hulu.vercel.app/)
- **GitHub:** [@LeoHulu02](https://github.com/LeoHulu02)
- **LinkedIn:** [Leo Saputra Hulu](https://www.linkedin.com/in/leo-saputra-hulu-9449b0331)
- **Instagram:** [@leo_hulu](https://www.instagram.com/leo_hulu/)
- **WhatsApp:** [+62 812-6435-1062](https://wa.me/6281264351062)

---

## Lisensi

Proyek ini bersifat **private/personal**. Hubungi pemilik repo jika ingin reuse bagian signifikan dari codebase.

---

<p align="center">
  <sub>Dibangun dengan Vue 3 + Tailwind CSS · © Leo Saputra Hulu</sub>
</p>

<p align="center">
  <strong>Fullstack Developer</strong> — Front-end · Back-end · Siap skala produksi
</p>
