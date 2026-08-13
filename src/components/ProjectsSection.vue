<template>
  <section id="projects" class="relative w-full bg-[#E8EBF1] dark:bg-[#08080c] text-zinc-900 dark:text-white 
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
                  text-violet-600 dark:text-violet-400 uppercase font-techno">
          02 · PROYEK
        </p>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-techno">
          Kurasi Solusi Rekayasa & <span class="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-700 dark:from-violet-400 dark:via-fuchsia-400 dark:to-violet-300 bg-clip-text text-transparent">Produk Digital</span>
        </h2>
        <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto font-sans">
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
                    : 'bg-zinc-900/5 text-zinc-600 border border-zinc-900/8 dark:bg-white/[0.03] dark:text-zinc-400 dark:border-white/5 hover:bg-zinc-900/10 hover:text-zinc-800 dark:hover:bg-white/[0.08] dark:hover:text-zinc-200'
                ]">
          {{ filter.label }} <span class="text-[9px] opacity-60 ml-1">({{ getCount(filter.value) }})</span>
        </button>
      </div>

      <!-- Single-Card Cinematic Carousel (Desktop, Tablet, Mobile) -->
      <div class="relative max-w-4xl mx-auto" data-reveal>
        
        <!-- Main Slider Window -->
        <div class="group relative h-72 overflow-hidden rounded-[1.75rem] border border-zinc-900/10 bg-zinc-200 dark:border-white/10 dark:bg-zinc-950 
                    shadow-2xl shadow-violet-500/5 ring-1 ring-zinc-900/5 dark:ring-white/5 transition-all duration-300 sm:h-96 md:h-[480px]"
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
                  class="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  :class="imageLoading[currentProject.id] ? 'opacity-0' : 'opacity-100'"
                  @load="handleImageLoad(currentProject.id)"
                  loading="lazy"
                />

                <!-- Premium vignette: menjaga cover tetap terbaca tanpa menutup detail UI. -->
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/20 to-zinc-900/30 dark:from-black/82 dark:via-black/22 dark:to-black/35" />
                <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_34%)]" />

                <!-- Floating Badges -->
                <div class="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-6 sm:top-6">
                  <span class="inline-flex items-center rounded-md border border-white/15 
                               bg-black/40 px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider
                               text-white backdrop-blur-sm">
                    {{ currentProject.privacyLabel }}
                  </span>
                  <span class="inline-flex items-center rounded-md border px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider backdrop-blur-sm"
                        :class="getStatusClass(currentProject.statusLabel)">
                    {{ currentProject.statusLabel }}
                  </span>
                  <span v-if="currentProject.isWip && currentProject.statusLabel !== 'WIP'"
                        class="inline-flex items-center rounded-md border border-fuchsia-400/30 
                               bg-fuchsia-500/15 px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider text-fuchsia-200 backdrop-blur-sm">
                    WIP
                  </span>
                </div>

                <div class="absolute right-4 top-4 hidden rounded-md border border-white/10 bg-black/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-zinc-200 backdrop-blur-sm font-techno sm:block sm:right-6 sm:top-6">
                  {{ currentProject.category }}
                </div>

                <!-- Always-visible transparent footer: title + detail CTA -->
                <div class="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-7">
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/85 via-zinc-900/50 to-transparent dark:from-black/90 dark:via-black/54 sm:from-zinc-900/75 sm:via-zinc-900/15 dark:sm:from-black/78 dark:sm:via-black/18" />
                  <div class="relative flex flex-col gap-4">
                    <div class="max-w-2xl space-y-2">
                      <p class="text-[10px] font-bold uppercase tracking-[0.24em] text-violet-200/90 font-techno">
                        {{ currentProject.category }}
                      </p>
                      <h3 class="line-clamp-2 min-w-0 text-base font-black leading-snug tracking-tight text-white font-techno sm:text-2xl md:text-[1.8rem]">
                        {{ currentProject.title }}
                      </h3>
                      <p class="line-clamp-2 max-w-xl text-xs leading-relaxed text-zinc-300 sm:text-sm">
                        {{ currentProject.subtitle }}
                      </p>
                    </div>

                    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="tag in currentProject.stack.slice(0, 3)" :key="tag"
                              class="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-200 backdrop-blur-sm font-techno">
                          {{ tag }}
                        </span>
                      </div>

                      <button
                        type="button"
                        :aria-label="`Lihat detail proyek ${currentProject.title}`"
                        class="inline-flex min-h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:border-violet-400/40 hover:bg-violet-600/90 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98] font-techno touch-manipulation sm:w-auto sm:min-w-[148px] sm:text-[11px]"
                        @click.stop="openProject(currentProject)">
                        <span>Lihat Detail</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                             stroke-width="2.5" stroke="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
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
                 border border-zinc-900/10 bg-white/80 text-zinc-900 dark:border-white/10 dark:bg-black/40 dark:text-white backdrop-blur-md 
                 transition-all hover:bg-violet-600 hover:border-violet-500 hover:text-white active:scale-90"
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
                 border border-zinc-900/10 bg-white/80 text-zinc-900 dark:border-white/10 dark:bg-black/40 dark:text-white backdrop-blur-md 
                 transition-all hover:bg-violet-600 hover:border-violet-500 hover:text-white active:scale-90"
          @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
               stroke-width="2.5" stroke="currentColor" class="h-5 w-5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      <!-- Slide dots indicator -->
      <div class="mt-6 space-y-3" data-reveal>
        <div class="flex items-center justify-center gap-3">
          <span class="rounded-full border border-zinc-900/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.04] px-3 py-1 text-[10px] font-bold text-zinc-600 dark:text-zinc-400 font-techno">
            {{ currentIndex + 1 }} / {{ filteredProjects.length }}
          </span>
          <button v-for="(project, index) in filteredProjects"
                  :key="project.id"
                  @click="goToSlide(index)"
                  :aria-label="`Lompat ke slide ${index + 1}`"
                  class="h-2.5 rounded-full transition-all duration-300 focus:outline-none touch-manipulation"
                  :class="index === currentIndex 
                    ? 'w-7 bg-violet-500' 
                    : 'w-2.5 bg-zinc-900/20 hover:bg-zinc-900/40 dark:bg-white/20 dark:hover:bg-white/40'">
          </button>
        </div>
        <p class="text-center text-[10px] text-zinc-600 dark:text-zinc-500 font-sans sm:hidden">
          Geser kiri/kanan pada card untuk melihat proyek lain
        </p>
      </div>

      <!-- Footer NDA Disclaimer -->
      <div class="mt-12 text-center" data-reveal>
        <p class="text-[11px] text-zinc-600 dark:text-zinc-500 italic max-w-xl mx-auto font-sans leading-relaxed">
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
           class="fixed inset-0 z-[100] flex items-end justify-center bg-zinc-900/50 dark:bg-black/60 p-0 backdrop-blur-md sm:items-center sm:p-4"
           role="dialog"
           aria-modal="true"
           :aria-label="`Detail Proyek ${activeProject.title}`"
           @click.self="closeProject">
        
        <!-- Modal Content Container -->
        <div class="flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-zinc-900/10 dark:border-white/10 
                    bg-white dark:bg-[#08080c] shadow-2xl shadow-violet-500/10 sm:rounded-2xl"
             role="document">
          
          <!-- Modal Header -->
          <div class="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-900/10 dark:border-white/10 px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1">
              <div class="mb-1.5 flex flex-wrap items-center gap-2">
                <span class="rounded border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 font-techno">
                  {{ activeProject.privacyLabel }}
                </span>
                <span class="rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider font-techno"
                      :class="getStatusClass(activeProject.statusLabel)">
                  {{ activeProject.statusLabel }}
                </span>
                <span class="rounded border border-zinc-900/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.04] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-techno">
                  {{ activeProject.category }}
                </span>
                <span v-if="activeProject.isWip && activeProject.statusLabel !== 'WIP'" class="rounded border border-fuchsia-400/25 bg-fuchsia-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-fuchsia-700 dark:text-fuchsia-300 font-techno">
                  WIP
                </span>
              </div>
              <h3 class="text-base font-bold leading-snug text-zinc-900 dark:text-white font-techno sm:text-lg">
                {{ activeProject.title }}
              </h3>
              <p class="mt-0.5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans sm:text-sm">
                {{ activeProject.subtitle }}
              </p>
            </div>
            <button
              type="button"
              class="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center 
                     rounded-lg border border-zinc-900/10 bg-zinc-900/5 text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white 
                     transition-colors hover:bg-zinc-900/10 dark:hover:bg-white/10 active:scale-95 touch-manipulation"
              aria-label="Tutup dialog"
              @click="closeProject">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke-width="2.5" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body (scrollable on mobile) -->
          <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div class="grid gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6">
            
            <!-- Left Column - Image & Tags -->
            <div class="space-y-4">
              <figure class="overflow-hidden rounded-2xl border border-zinc-900/10 bg-white/70 dark:border-white/10 dark:bg-white/[0.03] shadow-lg shadow-black/30">
                <img :src="activeProject.image"
                     :alt="`Preview ${activeProject.title}`"
                     class="h-48 w-full object-cover object-center sm:h-56" />
                <figcaption class="flex items-center justify-between gap-3 border-t border-zinc-900/10 dark:border-white/10 px-3 py-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-techno">
                    Project Preview
                  </span>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300 font-techno">
                    {{ activeProject.statusLabel }}
                  </span>
                </figcaption>
              </figure>

              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in activeProject.stack" :key="tag"
                      class="rounded bg-zinc-900/5 dark:bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold font-techno text-zinc-600 dark:text-zinc-400">
                  {{ tag }}
                </span>
              </div>

              <div v-if="activeProject.metrics?.length" class="flex flex-wrap gap-1.5">
                <span v-for="metric in activeProject.metrics" :key="metric"
                      class="rounded border border-violet-400/20 bg-violet-500/5 
                             px-2.5 py-1 text-[10px] font-bold font-techno text-violet-700 dark:text-violet-300 uppercase tracking-wider">
                  {{ metric }}
                </span>
              </div>
            </div>

            <!-- Right Column - Specifications -->
            <div class="space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <p class="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-sm font-sans">
                  {{ activeProject.description }}
                </p>

                <ul class="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                  <li v-for="(item, index) in activeProject.highlights" :key="index" 
                      class="flex gap-2.5">
                    <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-600 dark:bg-violet-400" aria-hidden="true"></span>
                    <span class="leading-relaxed">{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- Action Links inside Modal -->
              <div class="pt-4 border-t border-zinc-900/8 dark:border-white/5 space-y-3">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded bg-violet-500/10 border border-violet-500/20 
                               px-3 py-1.5 text-[9px] font-bold font-techno uppercase tracking-wider text-violet-700 dark:text-violet-300">
                    {{ activeProject.role }}
                  </span>

                  <template v-if="activeProject.links?.demo">
                    <a :href="activeProject.links.demo" 
                       target="_blank" 
                       rel="noopener"
                       :aria-label="`Demo proyek ${activeProject.title}`"
                       class="inline-flex items-center gap-1 rounded-md bg-zinc-900 dark:bg-white 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-white dark:text-black 
                              transition-colors hover:bg-violet-600 hover:text-white 
                              active:scale-95">
                      <span>Demo</span>
                    </a>
                  </template>

                  <template v-if="activeProject.links?.github">
                    <a :href="activeProject.links.github" 
                       target="_blank" 
                       rel="noopener"
                       :aria-label="`Source code proyek ${activeProject.title}`"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-zinc-900/10 bg-zinc-900/5 dark:border-white/10 dark:bg-white/5 px-3.5 py-1.5 
                              text-[10px] font-bold font-techno uppercase tracking-wider text-zinc-700 dark:text-zinc-200 
                              transition-colors hover:bg-zinc-900/10 dark:hover:bg-white/10 active:scale-95">
                      <span>GitHub</span>
                    </a>
                  </template>

                  <!-- Contact Actions for NDA systems -->
                  <template v-if="!activeProject.links?.demo && !activeProject.links?.github && activeProject.isWip">
                    <a href="#connect"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-fuchsia-400/20 bg-fuchsia-500/10 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-fuchsia-700 dark:text-fuchsia-300 
                              hover:bg-fuchsia-500/20 active:scale-95"
                       @click="goToContact">
                      <span>Minta Akses Awal</span>
                    </a>
                  </template>
                  <template v-else-if="!activeProject.links?.demo && !activeProject.links?.github">
                    <a href="#connect"
                       class="inline-flex items-center gap-1 rounded-md 
                              border border-violet-500/20 bg-violet-600/10 
                              px-3.5 py-1.5 text-[10px] font-bold font-techno uppercase tracking-wider text-violet-700 dark:text-violet-300 
                              hover:bg-violet-500/20 active:scale-95"
                       @click="goToContact">
                      <span>Minta Demo Privat</span>
                    </a>
                  </template>
                </div>

                <!-- Keyboard Shortcut Hint -->
                <p class="hidden text-[9px] text-zinc-600 dark:text-zinc-500 font-sans sm:block">
                  *Tekan <kbd class="rounded border border-zinc-900/10 bg-zinc-900/5 dark:border-white/10 dark:bg-white/5 px-1 py-0.5 text-[8px] font-mono text-zinc-600 dark:text-zinc-400">ESC</kbd> atau klik area luar untuk menutup detail proyek.
                </p>
                <p class="text-[10px] text-zinc-600 dark:text-zinc-500 font-sans sm:hidden">
                  Geser ke bawah untuk membaca selengkapnya · ketuk luar modal untuk menutup
                </p>
              </div>

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
import { scrollToSection } from '../composables/useSectionScroll.js'
import scrapingImage from '../public/image_private1.webp'
import internalImage from '../public/image_private2.webp'
import reklameImage from '../public/reklame.webp'
import hearingCareImage from '../public/hearing_care.png'
import sanuImage from '../public/sistem_pakar.png'

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
    category: 'Data Platform',
    statusLabel: 'WIP',
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
    category: 'Internal Tool',
    statusLabel: 'Privat',
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
    category: 'Landing Page',
    statusLabel: 'Live',
    isPublic: true,
    isWip: false,
    privacyLabel: 'Publik',
    links: {
      demo: 'http://reklame-sukaria-makmur.vercel.app/',
      github: 'https://github.com/LeoHulu02/reklame'
    }
  },
  {
    id: 'sanu-expert-system',
    title: 'Sanu — Sistem Pakar Analisis Minat Belajar',
    subtitle: 'Dashboard sistem pakar berbasis Forward Chaining + ID3',
    description: 'Aplikasi dashboard admin untuk menganalisis minat belajar siswa dengan kombinasi rule-based inference, ID3 decision tree, Supabase Auth, dan laporan konsultasi.',
    highlights: [
      'Menyatukan manajemen siswa, gejala, rules, dataset training, konsultasi, dan laporan dalam satu dashboard.',
      'Menggabungkan hasil Forward Chaining dan ID3 untuk perbandingan diagnosa yang lebih transparan.',
      'Sudah deploy di Vercel dengan Supabase sebagai auth dan database PostgreSQL.'
    ],
    metrics: ['FORWARD CHAINING', 'ID3 DECISION TREE', 'SUPABASE AUTH'],
    role: 'Full-stack · Solo',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    image: sanuImage,
    category: 'Expert System',
    statusLabel: 'Live',
    isPublic: true,
    isWip: false,
    privacyLabel: 'Publik',
    links: {
      demo: 'https://sistem-pakar-analisis-minat-belajar.vercel.app/',
      github: 'https://github.com/LeoHulu02/sistem-pakar-analisis-minat-belajar'
    }
  },
  {
    id: 'hearing-care-management',
    title: 'Hearing Care Management System',
    subtitle: 'Sistem manajemen klinik hearing care berbasis Laravel',
    description: 'Aplikasi manajemen operasional hearing care untuk mengelola data klinik, alur layanan, dan administrasi berbasis Laravel dengan struktur backend konvensional.',
    highlights: [
      'Dibangun dengan Laravel, Blade, PHP, dan struktur MVC yang familiar untuk sistem operasional.',
      'Repo publik tersedia sebagai bukti implementasi, sementara deployment belum disiapkan.',
      'Cocok diposisikan sebagai sistem administrasi healthcare dengan fokus maintainability.'
    ],
    metrics: ['LARAVEL MVC', 'BLADE UI', 'GITHUB PUBLIC'],
    role: 'Full-stack · Solo',
    stack: ['Laravel', 'PHP', 'Blade', 'MySQL'],
    image: hearingCareImage,
    category: 'Healthcare System',
    statusLabel: 'Belum Deploy',
    isPublic: true,
    isWip: false,
    privacyLabel: 'Publik',
    links: {
      github: 'https://github.com/LeoHulu02/hearing-care-management-system'
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

const getStatusClass = (status) => {
  const styles = {
    Live: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-emerald-300',
    WIP: 'border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-700 dark:border-fuchsia-400/25 dark:bg-fuchsia-500/10 dark:text-fuchsia-300',
    Privat: 'border-violet-500/30 bg-violet-500/15 text-violet-700 dark:border-violet-400/25 dark:bg-violet-500/10 dark:text-violet-300',
    'Belum Deploy': 'border-amber-500/30 bg-amber-500/15 text-amber-800 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-300',
  }

  return styles[status] || 'border-zinc-900/10 bg-zinc-900/5 text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300'
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
  announcement.textContent = `Membuka detail proyek ${project.title}`
  document.body.appendChild(announcement)
  setTimeout(() => announcement.remove(), 1000)
}

const closeProject = () => {
  activeProject.value = null
}

const goToContact = (event) => {
  event.preventDefault()
  closeProject()
  requestAnimationFrame(() => scrollToSection('#connect'))
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
