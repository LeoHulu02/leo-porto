<template>
  <section id="projects" class="relative w-full bg-[#08080c] text-white 
                                 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden border-b border-violet-500/10">
    
    <!-- Background futuristic lights -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-32 left-0 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl"></div>
      <div class="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl"></div>
    </div>

    <!-- Container -->
    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header Section -->
      <div class="mb-10 text-center space-y-4" data-reveal>
        <p class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] 
                  text-violet-400 uppercase font-techno">
          02 · PROYEK
        </p>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-techno">
          Kurasi Solusi Rekayasa & <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">Produk Digital</span>
        </h2>
        <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto font-sans">
          Mencakup kontribusi proyek open-source publik hingga sistem internal bisnis di bawah jaminan kerahasiaan data klien (NDA).
        </p>
      </div>

      <!-- Project Filters (Futuristic Pill Tabs) -->
      <div class="flex flex-wrap justify-center gap-2 mb-8" data-reveal>
        <button v-for="filter in filters"
                :key="filter.value"
                @click="changeFilter(filter.value)"
                :class="[
                  'px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold font-techno transition-all uppercase tracking-wider active:scale-95 duration-200',
                  activeFilter === filter.value
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20 border border-violet-500'
                    : 'bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-zinc-200 border border-white/5'
                ]">
          {{ filter.label }} <span class="text-[9px] opacity-60 ml-1">({{ getCount(filter.value) }})</span>
        </button>
      </div>

      <!-- Single-Card Cinematic Carousel (Desktop, Tablet, Mobile) -->
      <div class="relative max-w-3xl mx-auto" data-reveal>
        
        <!-- Main Slider Window -->
        <div class="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 
                    shadow-2xl transition-all duration-300 group h-72 sm:h-96 md:h-[460px]"
             @mouseenter="pauseAutoplay"
             @mouseleave="startAutoplay"
             @touchstart="handleTouchStart"
             @touchend="handleTouchEnd">
          
          <!-- Slide Transitions -->
          <transition name="slide-fade" mode="out-in">
            <div :key="currentProject.id" class="relative w-full h-full">
              
              <!-- Cover Image Area (Full-bleed Card) -->
              <div class="relative w-full h-full overflow-hidden">
                <!-- Skeleton Loader -->
                <div v-if="imageLoading[currentProject.id]" 
                     class="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                </div>
                
                <img
                  :src="currentProject.image"
                  :alt="currentProject.title"
                  class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  :class="imageLoading[currentProject.id] ? 'opacity-0' : 'opacity-100'"
                  @load="handleImageLoad(currentProject.id)"
                  loading="lazy"
                />

                <!-- Dark Gradient Overlay (For Title Readability) -->
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <!-- Floating Badges (Top-Left) -->
                <div class="absolute left-6 top-6 flex items-center gap-2">
                  <span class="inline-flex items-center rounded-md border border-white/10 
                               bg-black/60 px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider
                               text-white backdrop-blur-md">
                    {{ currentProject.privacyLabel }}
                  </span>
                  <span v-if="currentProject.isWip"
                        class="inline-flex items-center rounded-md border border-fuchsia-400/30 
                               bg-fuchsia-500/20 px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider text-fuchsia-200">
                    WIP
                  </span>
                </div>

                <!-- Floating Project Title (Normal State - Bottom-Left) -->
                <div class="absolute bottom-0 inset-x-0 p-6 sm:p-8 space-y-1.5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 class="text-xl sm:text-2xl font-black text-white font-techno tracking-tight">
                    {{ currentProject.title }}
                  </h3>
                  <div class="flex items-center justify-between gap-4">
                    <p class="text-xs sm:text-sm text-zinc-300 font-medium font-sans">
                      {{ currentProject.subtitle }}
                    </p>
                    <span class="rounded bg-violet-500/20 border border-violet-500/30 
                                 px-2.5 py-1 text-[9px] font-bold font-techno uppercase tracking-wider text-violet-300">
                      {{ currentProject.role }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Hover Slide-Up Glassmorphic Explanation Overlay (Inside Image Frame) -->
              <div class="absolute inset-0 translate-y-full group-hover:translate-y-0 
                          transition-transform duration-500 bg-[#08080ceb] backdrop-blur-lg 
                          p-6 sm:p-8 flex flex-col justify-between z-10 overflow-y-auto">
                
                <div class="space-y-4">
                  <!-- Header inside overlay -->
                  <div class="space-y-1">
                    <h4 class="text-lg sm:text-xl font-bold text-violet-400 font-techno">
                      {{ currentProject.title }}
                    </h4>
                    <p class="text-xs text-zinc-400 font-sans">
                      {{ currentProject.subtitle }}
                    </p>
                  </div>

                  <!-- Metrics -->
                  <div v-if="currentProject.metrics?.length" class="flex flex-wrap gap-1.5">
                    <span v-for="metric in currentProject.metrics" :key="metric"
                          class="rounded border border-violet-400/20 bg-violet-500/5 
                                 px-2.5 py-1 text-[9px] font-bold font-techno uppercase tracking-wider text-violet-300">
                      {{ metric }}
                    </span>
                  </div>

                  <!-- Short Explanation -->
                  <p class="text-xs sm:text-sm leading-relaxed text-zinc-200 font-sans">
                    {{ currentProject.description }}
                  </p>

                  <!-- Bullet highlights -->
                  <ul class="space-y-2 text-xs text-zinc-400 font-sans">
                    <li v-for="(item, idx) in currentProject.highlights" :key="idx" 
                        class="flex gap-2">
                      <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400"></span>
                      <span class="leading-relaxed text-zinc-300">{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Overlay Actions Button -->
                <div class="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <!-- Stack list in overlay -->
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="tag in currentProject.stack" :key="tag"
                          class="rounded bg-white/[0.04] px-2 py-0.5 text-[9px] font-bold font-techno text-zinc-400">
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Primary spec trigger button -->
                  <button
                    type="button"
                    :aria-label="`Lihat detail spesifikasi proyek ${currentProject.title}`"
                    class="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 
                           px-5 py-2.5 text-xs font-black font-techno uppercase tracking-wider text-white 
                           shadow-lg shadow-violet-500/20 transition-all hover:bg-violet-500 active:scale-95"
                    @click.stop="openProject(currentProject)">
                    <span>Lihat Spesifikasi</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                         stroke-width="2.5" stroke="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          </transition>

        </div>

        <!-- Left/Right Glassy Arrow Navigation Buttons (hidden on extra small screens) -->
        <button
          type="button"
          aria-label="Slide sebelumnya"
          class="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20
                 hidden sm:flex h-11 w-11 items-center justify-center rounded-lg 
                 border border-white/10 bg-black/40 text-white backdrop-blur-md 
                 transition-all hover:bg-violet-600 hover:border-violet-500 active:scale-90"
          @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               stroke-width="2.5" stroke="currentColor" class="h-5 w-5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Slide berikutnya"
          class="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20
                 hidden sm:flex h-11 w-11 items-center justify-center rounded-lg 
                 border border-white/10 bg-black/40 text-white backdrop-blur-md 
                 transition-all hover:bg-violet-600 hover:border-violet-500 active:scale-90"
          @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               stroke-width="2.5" stroke="currentColor" class="h-5 w-5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      <!-- Slide dots indicator -->
      <div class="flex justify-center items-center gap-2.5 mt-6" data-reveal>
        <button v-for="(project, index) in filteredProjects"
                :key="project.id"
                @click="goToSlide(index)"
                :aria-label="`Lompat ke slide ${index + 1}`"
                class="h-2 rounded-full transition-all duration-300 focus:outline-none"
                :class="index === currentIndex 
                  ? 'w-6 bg-violet-500' 
                  : 'w-2 bg-white/20 hover:bg-white/40'">
        </button>
      </div>

      <!-- Footer NDA Disclaimer -->
      <div class="mt-12 text-center" data-reveal>
        <p class="text-[11px] text-zinc-500 italic max-w-xl mx-auto font-sans leading-relaxed">
          *Catatan Kerahasiaan Data (NDA): Beberapa sistem manajemen dirancang eksklusif untuk kepentingan internal korporat. Saya hanya menyajikan screenshot antarmuka, ringkasan arsitektur, dan metrik hasil tanpa membagikan repositori source code publik.
        </p>
      </div>

    </div>
  </section>

  <!-- Project Detail Modal (Full Accessibility) -->
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="activeProject"
           class="fixed inset-0 z-50 flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
           role="dialog"
           aria-modal="true"
           :aria-label="`Spesifikasi Proyek ${activeProject.title}`"
           @click.self="closeProject">
        
        <!-- Modal Content Container -->
        <div class="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 
                    bg-[#08080c] shadow-2xl"
             role="document">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
            <div class="min-w-0">
              <h3 class="truncate text-base sm:text-lg font-bold text-white font-techno">
                {{ activeProject.title }}
              </h3>
              <p class="truncate text-xs text-zinc-400 font-sans">
                {{ activeProject.subtitle }}
              </p>
            </div>
            <button
              type="button"
              class="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center 
                     rounded-lg border border-white/10 bg-white/5 text-white 
                     transition-colors hover:bg-white/10 active:scale-95"
              aria-label="Tutup dialog"
              @click="closeProject">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke-width="2.5" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="grid gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-6">
            
            <!-- Left Column - Image & Tags -->
            <div class="space-y-4">
              <img :src="activeProject.image"
                   :alt="`Preview ${activeProject.title}`"
                   class="h-48 w-full rounded-xl object-cover object-top sm:h-56 shadow-lg border border-white/5" />

              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in activeProject.stack" :key="tag"
                      class="rounded bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold font-techno text-zinc-400">
                  {{ tag }}
                </span>
              </div>

              <div v-if="activeProject.metrics?.length" class="flex flex-wrap gap-1.5">
                <span v-for="metric in activeProject.metrics" :key="metric"
                      class="rounded border border-violet-400/20 bg-violet-500/5 
                             px-2.5 py-1 text-[10px] font-bold font-techno text-violet-300 uppercase tracking-wider">
                  {{ metric }}
                </span>
              </div>
            </div>

            <!-- Right Column - Specifications -->
            <div class="space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <p class="text-xs leading-relaxed text-zinc-300 sm:text-sm font-sans">
                  {{ activeProject.description }}
                </p>

                <ul class="space-y-2 text-xs text-zinc-400 font-sans">
                  <li v-for="(item, index) in activeProject.highlights" :key="index" 
                      class="flex gap-2.5">
                    <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400" aria-hidden="true"></span>
                    <span class="leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Action Links inside Modal -->
              <div class="pt-4 border-t border-white/5 space-y-3">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-violet-500/10 border border-violet-500/20 
                               px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider text-violet-300">
                    {{ activeProject.role }}
                  </span>

                  <template v-if="activeProject.isPublic">
                    <a :href="activeProject.links.demo" 
                       target="_blank" 
                       rel="noopener"
                       :aria-label="`Demo proyek ${activeProject.title}`"
                       class="inline-flex items-center gap-1 rounded-md bg-white 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-black 
                              transition-colors hover:bg-violet-600 hover:text-white 
                              active:scale-95">
                      <span>Demo</span>
                    </a>
                    <a :href="activeProject.links.github" 
                       target="_blank" 
                       rel="noopener"
                       :aria-label="`Source code proyek ${activeProject.title}`"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-white/10 bg-white/5 px-3.5 py-1.5 
                              text-[10px] font-bold font-techno uppercase tracking-wider text-zinc-200 
                              transition-colors hover:bg-white/10 active:scale-95">
                      <span>GitHub</span>
                    </a>
                  </template>

                  <!-- Contact Actions for NDA systems -->
                  <template v-else-if="activeProject.isWip">
                    <a href="#connect" @click="closeProject"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-fuchsia-400/20 bg-fuchsia-500/10 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-fuchsia-300 
                              hover:bg-fuchsia-500/20 active:scale-95">
                      <span>Minta Akses Awal</span>
                    </a>
                  </template>
                  <template v-else>
                    <a href="#connect" @click="closeProject"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-violet-500/20 bg-violet-600/10 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-violet-300 
                              hover:bg-violet-500/20 active:scale-95">
                      <span>Minta Demo Privat</span>
                    </a>
                  </template>
                </div>

                <!-- Keyboard Shortcut Hint -->
                <p class="text-[9px] text-zinc-500 font-sans">
                  *Tekan <kbd class="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[8px] font-mono text-zinc-400">ESC</kbd> atau klik area luar untuk menutup panel spesifikasi.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import scrapingImage from '../public/image_private1.webp'
import internalImage from '../public/image_private2.webp'
import reklameImage from '../public/reklame.webp'

// ============ DATA PORTOFOLIO ============
const projects = [
  {
    id: 'scraping-analytics',
    title: 'Bandar Lavin — Data Scraping & Analytics',
    subtitle: 'Pipeline scraping + dashboard (privat)',
    description: 'Pipeline data-scraping dinamis dan dashboard analytics untuk monitoring harga pasar terotomatisasi serta analisis tren eksplorasi data.',
    highlights: [
      'Alur lengkap scraping otomatis → data cleansing → visualisasi siap analisis.',
      'Sistem penyimpanan handal di Cloudflare Workers/Storage untuk stabilitas data.',
      'Progress: 2 dari 7 modul inti operasional (WIP).'
    ],
    metrics: ['CLEANSING PIPELINE', 'CLOUDFLARE BACKEND', 'NDA-COMPLIANT'],
    role: 'Full-stack · Solo',
    stack: ['Node.js', 'Vue 3', 'Tailwind CSS', 'Cloudflare'],
    image: scrapingImage,
    isPublic: false,
    isWip: true,
    privacyLabel: 'Privat'
  },
  {
    id: 'internal-management',
    title: 'Dailies — Manajemen Kerja Internal',
    subtitle: 'Web internal untuk tim perusahaan (privat)',
    description: 'Aplikasi portal internal perusahaan untuk koordinasi task terintegrasi, log absensi harian, dan monitoring visual progress lintas-tim.',
    highlights: [
      'Digunakan harian secara aktif oleh sekitar 40–50 karyawan perusahaan.',
      'Fitur utama: Kanban board interaktif, timeline log, absensi otomatis, & penugasan.',
      'Role-based access control (RBAC) aman untuk PM, Admin, HR, Direktur, & Investor.'
    ],
    metrics: ['40-50 STAFF AKTIF', 'RBAC SECURITY', 'KANBAN INTEGRATION'],
    role: 'Front-end · Team',
    stack: ['Vue 3', 'Tailwind CSS', 'Vite', 'Pinia'],
    image: internalImage,
    isPublic: false,
    isWip: false,
    privacyLabel: 'Privat'
  },
  {
    id: 'reklame',
    title: 'Reklame Sukaria Makmur',
    subtitle: 'Landing page bisnis lokal (publik)',
    description: 'Landing page komersial berkinerja tinggi untuk agen reklame lokal, dirancang khusus dengan optimasi SEO tinggi dan arsitektur UX berorientasi konversi.',
    highlights: [
      'Ranking #1 organik Google untuk keyword “reklame motor nias selatan”.',
      'Integrasi CTA WhatsApp dan alur penawaran konten cerdas untuk peningkatan konversi.',
      'Performa rendering mobile maksimal dengan skor SEO dan aksesibilitas prima.'
    ],
    metrics: ['RANKING #1 GOOGLE', 'CONVERSION-FOCUSED UX', '100% MOBILE RESPONSIVE'],
    role: 'Full-stack · Solo',
    stack: ['Next.js', 'Tailwind CSS', 'SEO Engine'],
    image: reklameImage,
    isPublic: true,
    isWip: false,
    privacyLabel: 'Publik',
    links: {
      demo: 'http://reklame-sukaria-makmur.vercel.app/',
      github: 'https://github.com/LeoHulu02/reklame'
    }
  }
]

// ============ FILTER SYSTEM ============
const filters = [
  { label: 'Semua', value: 'all' },
  { label: 'Publik', value: 'public' },
  { label: 'Privat (NDA)', value: 'private' },
  { label: 'Dalam Proses', value: 'wip' }
]

const activeFilter = ref('all')
const currentIndex = ref(0)

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  if (activeFilter.value === 'public') return projects.filter(p => p.isPublic)
  if (activeFilter.value === 'private') return projects.filter(p => !p.isPublic)
  if (activeFilter.value === 'wip') return projects.filter(p => p.isWip)
  return projects
})

const getCount = (filterValue) => {
  if (filterValue === 'all') return projects.length
  if (filterValue === 'public') return projects.filter(p => p.isPublic).length
  if (filterValue === 'private') return projects.filter(p => !p.isPublic).length
  if (filterValue === 'wip') return projects.filter(p => p.isWip).length
  return 0
}

const currentProject = computed(() => {
  if (filteredProjects.value.length === 0) return {}
  // Adjust index if out of range
  if (currentIndex.value >= filteredProjects.value.length) {
    currentIndex.value = 0
  }
  return filteredProjects.value[currentIndex.value]
})

const changeFilter = (value) => {
  activeFilter.value = value
  currentIndex.value = 0 // reset slider index on filter change
}

// ============ CAROUSEL AUTOPLAY SYSTEM ============
let autoplayTimer = null

const startAutoplay = () => {
  stopAutoplay()
  if (filteredProjects.value.length <= 1) return
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const pauseAutoplay = () => {
  stopAutoplay()
}

const nextSlide = () => {
  if (filteredProjects.value.length <= 1) return
  currentIndex.value = (currentIndex.value + 1) % filteredProjects.value.length
}

const prevSlide = () => {
  if (filteredProjects.value.length <= 1) return
  currentIndex.value = (currentIndex.value - 1 + filteredProjects.value.length) % filteredProjects.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// ============ SWIPE SYSTEM FOR MOBILE ============
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event) => {
  touchStartX = event.changedTouches[0].screenX
}

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].screenX
  handleSwipeGesture()
}

const handleSwipeGesture = () => {
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 50) { // minimum distance to count as swipe
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

// Watch filters to toggle autoplay if list is single item
watch(filteredProjects, (newList) => {
  if (newList.length <= 1) {
    stopAutoplay()
  } else {
    startAutoplay()
  }
}, { immediate: true })

// ============ IMAGE LOADING SYSTEM ============
const imageLoading = ref({})

const handleImageLoad = (projectId) => {
  imageLoading.value[projectId] = false
}

// Initialize loading states
projects.forEach(project => {
  imageLoading.value[project.id] = true
})

// ============ MODAL SYSTEM ============
const activeProject = ref(null)

const openProject = (project) => {
  activeProject.value = project
  // Screen Reader Accessibility Announcement
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.classList.add('sr-only')
  announcement.textContent = `Membuka detail spesifikasi proyek ${project.title}`
  document.body.appendChild(announcement)
  setTimeout(() => announcement.remove(), 1000)
}

const closeProject = () => {
  activeProject.value = null
}

// ============ KEYBOARD ACCESSIBILITY ============
const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeProject.value) {
    closeProject()
  } else if (event.key === 'ArrowRight' && !activeProject.value) {
    nextSlide()
  } else if (event.key === 'ArrowLeft' && !activeProject.value) {
    prevSlide()
  }
}

// Lock body scroll when modal is active
watch(activeProject, (value) => {
  if (typeof document === 'undefined') return
  
  if (value) {
    document.documentElement.style.overflow = 'hidden'
    setTimeout(() => {
      const modal = document.querySelector('[role="dialog"]')
      if (modal) modal.focus()
    }, 100)
  } else {
    document.documentElement.style.overflow = ''
  }
})

// ============ REVEAL ANIMATION SYSTEM ============
let observer

onMounted(() => {
  startAutoplay()

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
  }

  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return
  }

  const elements = document.querySelectorAll('[data-reveal]')
  if (!elements.length) return

  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.05,
      rootMargin: '40px',
    }
  )

  elements.forEach(el => {
    const delay = el.getAttribute('data-reveal-delay')
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }
    el.classList.add('reveal-init')
    observer.observe(el)
  })
})

onBeforeUnmount(() => {
  stopAutoplay()
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
  }
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
/* Slide transition styling */
.slide-fade-enter-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}

/* Reveal animations */
.reveal-init {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .reveal-init {
    transform: translateY(12px);
    transition-duration: 0.5s;
  }
  
  a, button {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
  border-radius: 6px;
}

/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
