<template>
  <section id="about" class="relative w-full bg-[#08080b] text-white 
                              py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
    
    <!-- Background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-32 right-0 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 
                  rounded-full bg-violet-600/10 blur-3xl"></div>
      <div class="absolute -bottom-40 left-10 h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 
                  rounded-full bg-fuchsia-500/5 blur-3xl"></div>
    </div>

    <!-- Container -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
      
      <!-- Header Section with Stats (Point 4) -->
      <div class="mb-10 sm:mb-12 md:mb-16 max-w-2xl space-y-3 sm:space-y-4" data-reveal>
        <p class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] 
                  text-violet-300 uppercase">
          Tentang
        </p>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   font-extrabold tracking-tight">
          Tentang Leo Saputra Hulu
        </h2>
        <p class="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
          Saya seorang fullstack developer (front-end dan back-end) yang fokus membangun produk web yang cepat, rapi,
          dan mudah dirawat dengan pendekatan yang berorientasi pada kebutuhan pengguna dan tujuan bisnis.
        </p>
      </div>

      <!-- Statistics Cards (Point 4) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12" data-reveal>
        <div v-for="stat in statistics" :key="stat.label"
             class="text-center p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10
                    hover:border-violet-500/30 transition-all duration-300
                    hover:-translate-y-1 hover:bg-white/10">
          <span class="text-lg sm:text-2xl font-bold text-violet-400">{{ stat.value }}</span>
          <p class="text-[10px] sm:text-xs text-gray-400 mt-1">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Grid Layout -->
      <div class="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12 items-start">
        
        <!-- Left Column -->
        <div class="lg:col-span-5 space-y-6 sm:space-y-8 text-sm text-gray-300">
          
          <!-- Arsenal Section -->
          <div class="space-y-3 sm:space-y-4" data-reveal data-reveal-delay="50">
            <p class="text-[10px] sm:text-xs font-semibold tracking-[0.25em] 
                      text-violet-300 uppercase">
              01 · Arsenal
            </p>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold text-white">
              Senjata Utama
            </h3>
            <div class="space-y-3">
              <p class="leading-relaxed text-sm">
                <span class="font-semibold text-gray-100">Core:</span>
                Vue.js, Node.js, Express, PostgreSQL.
                <br />
                <span class="font-semibold text-gray-100">Pendukung:</span>
                React, Laravel, Python.
              </p>
              <p class="leading-relaxed text-sm">
                Saya fokus di ekosistem JavaScript sebagai fullstack developer untuk membangun aplikasi end-to-end:
                dari antarmuka front-end yang responsif, API back-end yang rapi, sampai pengelolaan data di database.
              </p>
              
              <!-- Skills Tags -->
              <div class="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                <span v-for="skill in skills" :key="skill"
                  class="rounded-full border border-violet-500/40 bg-violet-500/10 
                         px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium 
                         transition-all duration-200 hover:-translate-y-0.5 
                         hover:bg-violet-500/20 hover:border-violet-400/70
                         cursor-default">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <!-- Journey Section -->
          <div class="space-y-3 sm:space-y-4" data-reveal data-reveal-delay="120">
            <p class="text-[10px] sm:text-xs font-semibold tracking-[0.25em] 
                      text-violet-300 uppercase">
              03 · Perjalanan
            </p>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold text-white">
              Perjalanan Singkat
            </h3>
            <div class="space-y-3 text-sm">
              <p class="leading-relaxed">
                Saya mulai dari mengerjakan proyek kecil secara freelance sebagai developer front-end dan back-end,
                lalu perlahan terlibat di proyek-proyek yang lebih besar dan kompleks.
              </p>
              <p class="leading-relaxed">
                Saya terbiasa bekerja mandiri, tapi juga sering berkolaborasi dengan developer yang lebih
                senior. Dari mereka saya belajar tentang standar industri, review kode, dan cara menjaga
                kualitas sambil tetap tepat waktu.
              </p>
              <p class="leading-relaxed">
                Terbiasa bekerja dengan standar industri tinggi berkat bimbingan para mentor senior
                membuat saya lebih peduli pada detail-detail kecil yang sering diabaikan.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-7 space-y-6 sm:space-y-8">
          
          <!-- Project Filters (Point 2) -->
          <div class="flex flex-wrap gap-2 mb-4" data-reveal>
            <button v-for="filter in filters"
                    :key="filter.value"
                    @click="activeFilter = filter.value"
                    :class="[
                      'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all',
                      activeFilter === filter.value
                        ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                    ]">
              {{ filter.label }} ({{ getCount(filter.value) }})
            </button>
          </div>

          <!-- Showcase Card with Projects -->
          <div class="relative overflow-hidden rounded-xl sm:rounded-2xl 
                      border border-white/10 bg-white/5 backdrop-blur-md 
                      p-5 sm:p-6 md:p-7 
                      transition-all duration-500 hover:-translate-y-1 
                      hover:border-white/20 hover:bg-white/10"
               data-reveal>
            
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-5">
              <div class="space-y-1.5 sm:space-y-2">
                <p class="text-[10px] sm:text-xs font-semibold tracking-[0.25em] 
                          text-violet-300 uppercase">
                  02 · Portofolio
                </p>
                <h3 class="text-base sm:text-lg md:text-xl font-semibold text-white">
                  Sorotan Proyek
                </h3>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-1 
                          text-[10px] sm:text-[11px] text-violet-300">
                <span class="text-lg sm:text-xl font-bold text-white">{{ filteredProjects.length }}</span>
                <span>proyek ditampilkan</span>
              </div>
            </div>

            <!-- Project Grid (Point 1 - Loading States + Point 6 - Lazy Loading) -->
            <div class="mt-5 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
              <div v-for="(project, index) in filteredProjects" 
                   :key="project.id"
                   v-motion
                   :initial="{ opacity: 0, y: 20 }"
                   :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
                   :hover="{ y: -4 }"
                   class="group relative overflow-hidden rounded-2xl border border-white/10 
                          bg-white/5 backdrop-blur-md transition-all duration-500
                          hover:border-white/20 hover:bg-white/10">
                
                <!-- Image Container dengan Loading State (Point 1) -->
                <div class="relative h-40 w-full sm:h-44 overflow-hidden bg-gray-800">
                  <!-- Skeleton Loader -->
                  <div v-if="imageLoading[project.id]" 
                       class="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
                  </div>
                  
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="h-full w-full cursor-zoom-in object-cover object-top
                           transition-opacity duration-300"
                    :class="imageLoading[project.id] ? 'opacity-0' : 'opacity-100'"
                    @load="handleImageLoad(project.id)"
                    @click="openProject(project)"
                    loading="lazy"
                  />

                  <!-- Gradient Overlay -->
                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080b]/80 via-transparent to-transparent"></div>
                  
                  <!-- Badges -->
                  <div class="absolute left-3 top-3 flex items-center gap-2">
                    <span class="inline-flex items-center rounded-full border border-white/15 
                                 bg-black/40 px-2.5 py-1 text-[10px] font-semibold tracking-wide 
                                 text-white backdrop-blur-md">
                      {{ project.privacyLabel }}
                    </span>
                    <span v-if="project.isWip"
                          class="inline-flex items-center rounded-full border border-violet-400/30 
                                 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold 
                                 tracking-wide text-violet-200">
                      WIP
                    </span>
                  </div>

                  <!-- View Details Button -->
                  <button
                    type="button"
                    :aria-label="`Lihat detail proyek ${project.title}`"
                    class="absolute bottom-3 left-3 inline-flex items-center gap-2 
                           rounded-full border border-white/10 bg-black/35 px-3 py-1 
                           text-[10px] font-semibold text-white backdrop-blur-md 
                           transition-colors hover:bg-black/50 active:scale-95
                           focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    @click="openProject(project)">
                    <span class="h-1.5 w-1.5 rounded-full bg-white/90"></span>
                    <span>Lihat detail</span>
                  </button>
                </div>

                <!-- Project Content -->
                <div class="space-y-3 p-4 sm:p-5">
                  <div class="space-y-1">
                    <p class="text-sm font-semibold text-white sm:text-base">
                      {{ project.title }}
                    </p>
                    <p class="text-xs text-gray-400">
                      {{ project.subtitle }}
                    </p>
                  </div>

                  <!-- Tech Stack -->
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="tag in project.stack" :key="tag"
                          class="rounded-full border border-white/10 bg-white/5 
                                 px-2.5 py-1 text-[10px] font-medium text-gray-200">
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Metrics -->
                  <div v-if="project.metrics?.length" class="flex flex-wrap gap-1.5">
                    <span v-for="metric in project.metrics" :key="metric"
                          class="rounded-full border border-violet-400/25 bg-violet-500/10 
                                 px-2.5 py-1 text-[10px] font-semibold text-violet-200">
                      {{ metric }}
                    </span>
                  </div>

                  <!-- Description -->
                  <p class="text-xs leading-relaxed text-gray-300 line-clamp-2 sm:text-sm">
                    {{ project.description }}
                  </p>

                  <!-- Highlights -->
                  <ul class="space-y-1.5 text-xs text-gray-300 sm:text-sm">
                    <li v-for="(item, idx) in project.highlights.slice(0, 2)" :key="idx" 
                        class="flex gap-2">
                      <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-300/80"></span>
                      <span class="leading-relaxed line-clamp-1">{{ item }}</span>
                    </li>
                  </ul>

                  <!-- Role & Links dengan ARIA Labels (Point 7) -->
                  <div class="flex flex-wrap items-center gap-2 pt-1">
                    <span class="rounded-full border border-white/10 bg-white/5 
                                 px-3 py-1 text-[10px] font-semibold text-gray-100">
                      {{ project.role }}
                    </span>

                    <!-- Public Project Links -->
                    <template v-if="project.isPublic">
                      <a :href="project.links.demo" 
                         target="_blank" 
                         rel="noopener"
                         :aria-label="`Demo proyek ${project.title}`"
                         class="inline-flex items-center gap-2 rounded-full bg-white 
                                px-3 py-1 text-[10px] font-semibold text-black 
                                transition-colors hover:bg-violet-400 hover:text-white 
                                active:scale-95 focus:outline-none focus:ring-2 
                                focus:ring-violet-500 focus:ring-offset-2">
                        <span aria-hidden="true">Demo</span>
                        <span class="sr-only">Buka demo di tab baru</span>
                      </a>
                      <a :href="project.links.github" 
                         target="_blank" 
                         rel="noopener"
                         :aria-label="`Source code proyek ${project.title}`"
                         class="inline-flex items-center gap-2 rounded-full 
                                border border-white/15 bg-white/5 px-3 py-1 
                                text-[10px] font-semibold text-gray-100 
                                transition-colors hover:bg-white/10 active:scale-95
                                focus:outline-none focus:ring-2 focus:ring-violet-500 
                                focus:ring-offset-2">
                        <span aria-hidden="true">GitHub</span>
                        <span class="sr-only">Buka repository di tab baru</span>
                      </a>
                    </template>

                    <!-- Private/WIP Project CTA (Point 8) -->
                    <template v-else-if="project.isWip">
                      <button @click="requestEarlyAccess(project)"
                              :aria-label="`Minta akses awal untuk ${project.title}`"
                              class="inline-flex items-center gap-2 rounded-full 
                                     border border-violet-400/30 bg-violet-500/10 
                                     px-3 py-1 text-[10px] font-semibold text-violet-200 
                                     hover:bg-violet-500/20 active:scale-95
                                     focus:outline-none focus:ring-2 focus:ring-violet-500">
                        <span aria-hidden="true">Minta akses awal</span>
                      </button>
                    </template>
                    
                    <template v-else>
                      <button @click="requestDemo(project)"
                              :aria-label="`Minta demo privat untuk ${project.title}`"
                              class="inline-flex items-center gap-2 rounded-full 
                                     border border-white/15 bg-white/5 px-3 py-1 
                                     text-[10px] font-medium text-gray-200 
                                     hover:bg-white/10 active:scale-95
                                     focus:outline-none focus:ring-2 focus:ring-violet-500">
                        <span aria-hidden="true">Minta demo privat</span>
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Note -->
            <p class="pt-4 text-[10px] text-gray-500 italic sm:text-xs">
              Sebagian proyek bersifat privat (NDA). Saya hanya menampilkan tampilan UI dan ringkasan pencapaian tanpa source code maupun link publik.
            </p>
          </div>

          <!-- Bottom Grid Cards -->
          <div class="grid gap-4 sm:gap-6 md:grid-cols-2">
            
            <!-- Philosophy Card -->
            <div class="space-y-2 sm:space-y-3 rounded-xl sm:rounded-2xl 
                        border border-white/10 bg-white/5 p-4 sm:p-5 
                        backdrop-blur-md text-sm text-gray-300 
                        transition-all duration-500 hover:-translate-y-1 
                        hover:border-white/20 hover:bg-white/10"
                 data-reveal data-reveal-delay="80">
              <p class="text-[10px] sm:text-xs font-semibold tracking-[0.25em] 
                        text-violet-300 uppercase">
                04 · Filosofi
              </p>
              <h3 class="text-base sm:text-lg font-semibold text-white">
                Cara Saya Memandang Proyek
              </h3>
              <div class="space-y-2 text-xs sm:text-sm">
                <p class="leading-relaxed">
                  Buat saya, <span class="font-semibold text-gray-100">“klien senang = proyek berhasil”</span>.
                  Kode yang rapi penting, tapi yang lebih penting adalah masalah klien benar-benar selesai.
                </p>
                <p class="leading-relaxed">
                  Karena itu saya terbiasa memahami kebutuhan bisnis dulu, lalu memilih solusi teknis
                  yang realistis dan bisa dirawat jangka panjang.
                </p>
              </div>
            </div>

            <!-- Connect Card -->
            <div id="connect" class="space-y-3 sm:space-y-4 rounded-xl sm:rounded-2xl 
                                     border border-white/10 bg-gradient-to-br from-white/10 to-white/0 
                                     p-4 sm:p-5 backdrop-blur-md text-sm text-gray-300 
                                     transition-all duration-500 hover:-translate-y-1 
                                     hover:border-white/20"
                 data-reveal data-reveal-delay="140">
              <p class="text-[10px] sm:text-xs font-semibold tracking-[0.25em] 
                        text-violet-300 uppercase">
                05 · Kontak
              </p>
              <h3 class="text-base sm:text-lg font-semibold text-white">
                Mari Terhubung
              </h3>
              <p class="leading-relaxed text-xs sm:text-sm">
                Tertarik berdiskusi soal proyek, kolaborasi, atau peluang kerja?
                Anda bisa melihat karya publik saya di GitHub atau menghubungi saya lewat WhatsApp.
              </p>

              <!-- Social Links dengan ARIA Labels -->
              <div class="flex flex-wrap gap-2 sm:gap-3 pt-2">
                <a href="https://github.com/LeoHulu02" 
                   target="_blank" 
                   rel="noopener"
                   aria-label="Kunjungi profil GitHub"
                   class="inline-flex items-center gap-1.5 sm:gap-2 
                          rounded-full border border-white/20 bg-white/5 
                          px-3 sm:px-4 py-1.5 sm:py-2 
                          text-[10px] sm:text-xs font-medium text-gray-100 
                          hover:bg-white/10 transition-colors
                          active:scale-95 touch-manipulation
                          focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white/70" aria-hidden="true"></span>
                  <span>GitHub</span>
                </a>

                <a href="https://wa.me/6281264351062" 
                   target="_blank" 
                   rel="noopener"
                   aria-label="Hubungi via WhatsApp"
                   class="whatsapp-pulse inline-flex items-center gap-1.5 sm:gap-2 
                          rounded-full bg-emerald-500 
                          px-4 sm:px-5 py-1.5 sm:py-2 
                          text-[10px] sm:text-xs font-semibold text-white 
                          shadow-lg shadow-emerald-500/40 
                          hover:bg-emerald-400 transition-colors
                          active:scale-95 touch-manipulation
                          focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <span class="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white" aria-hidden="true"></span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <p class="text-[9px] sm:text-[10px] text-gray-400 pt-1">
                Sertakan nama dan konteks singkat. Saya akan merespons secepat mungkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Detail Modal dengan Accessibility (Point 3 & 7) -->
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="activeProject"
           class="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
           role="dialog"
           aria-modal="true"
           :aria-label="`Detail proyek ${activeProject.title}`"
           @click.self="closeProject">
        
        <!-- Modal Content -->
        <div class="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 
                    bg-[#0b0b10] shadow-2xl"
             role="document">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-white sm:text-base">
                {{ activeProject.title }}
              </p>
              <p class="truncate text-xs text-gray-400">
                {{ activeProject.subtitle }}
              </p>
            </div>
            <button
              type="button"
              class="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center 
                     rounded-full border border-white/10 bg-white/5 text-white 
                     transition-colors hover:bg-white/10 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Tutup dialog"
              @click="closeProject">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke-width="2.5" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="grid gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
            <!-- Left Column - Image & Tags -->
            <div class="space-y-3">
              <img :src="activeProject.image"
                   :alt="`Preview ${activeProject.title}`"
                   class="h-52 w-full rounded-xl object-cover object-top sm:h-64" />

              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in activeProject.stack" :key="tag"
                      class="rounded-full border border-white/10 bg-white/5 
                             px-2.5 py-1 text-[10px] font-medium text-gray-200">
                  {{ tag }}
                </span>
              </div>

              <div v-if="activeProject.metrics?.length" class="flex flex-wrap gap-1.5">
                <span v-for="metric in activeProject.metrics" :key="metric"
                      class="rounded-full border border-violet-400/25 bg-violet-500/10 
                             px-2.5 py-1 text-[10px] font-semibold text-violet-200">
                  {{ metric }}
                </span>
              </div>
            </div>

            <!-- Right Column - Details -->
            <div class="space-y-3">
              <p class="text-xs leading-relaxed text-gray-300 sm:text-sm">
                {{ activeProject.description }}
              </p>

              <ul class="space-y-1.5 text-xs text-gray-300 sm:text-sm">
                <li v-for="(item, index) in activeProject.highlights" :key="index" 
                    class="flex gap-2">
                  <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-300/80" 
                        aria-hidden="true"></span>
                  <span class="leading-relaxed">{{ item }}</span>
                </li>
              </ul>

              <!-- Role & Links -->
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <span class="rounded-full border border-white/10 bg-white/5 
                             px-3 py-1 text-[10px] font-semibold text-gray-100">
                  {{ activeProject.role }}
                </span>

                <template v-if="activeProject.isPublic">
                  <a :href="activeProject.links.demo" 
                     target="_blank" 
                     rel="noopener"
                     :aria-label="`Demo proyek ${activeProject.title}`"
                     class="inline-flex items-center gap-2 rounded-full bg-white 
                            px-3 py-1 text-[10px] font-semibold text-black 
                            transition-colors hover:bg-violet-400 hover:text-white 
                            active:scale-95 focus:outline-none focus:ring-2 
                            focus:ring-violet-500">
                    Demo
                  </a>
                  <a :href="activeProject.links.github" 
                     target="_blank" 
                     rel="noopener"
                     :aria-label="`Source code proyek ${activeProject.title}`"
                     class="inline-flex items-center gap-2 rounded-full 
                            border border-white/15 bg-white/5 px-3 py-1 
                            text-[10px] font-semibold text-gray-100 
                            transition-colors hover:bg-white/10 active:scale-95
                            focus:outline-none focus:ring-2 focus:ring-violet-500">
                    GitHub
                  </a>
                </template>
                <template v-else>
                  <span class="rounded-full border border-white/10 bg-white/5 
                               px-3 py-1 text-[10px] font-medium text-gray-200">
                    Privat · Demo sesuai permintaan
                  </span>
                </template>
              </div>

              <!-- Keyboard Shortcut Hint (Accessibility) -->
              <p class="text-[10px] text-gray-500">
                <span class="sr-only">Tekan</span>
                <kbd class="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px]">ESC</kbd>
                <span class="ml-1">atau klik area gelap untuk menutup</span>
              </p>
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

// ============ DATA ============

const statistics = computed(() => [
  { value: projects.length, label: 'Proyek ditampilkan' },
  { value: projects.filter(p => p.isPublic).length, label: 'Proyek publik' },
  { value: projects.filter(p => !p.isPublic).length, label: 'Proyek privat (NDA)' },
  { value: projects.filter(p => p.isWip).length, label: 'Dalam proses' }
])

const skills = ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Laravel', 'Python']

const projects = [
  {
    id: 'scraping-analytics',
    title: 'Bandar Lavin — Data Scraping & Analytics',
    subtitle: 'Pipeline scraping + dashboard (privat)',
    description: 'Pipeline scraping dan dashboard analytics untuk monitoring serta eksplorasi data.',
    highlights: [
      'Alur scraping → cleansing → penyajian data siap analisis.',
      'Storage di Cloudflare untuk akses data yang stabil.',
      'Progress: 2/7 fitur selesai (WIP).'
    ],
    metrics: ['2/7 fitur', 'Scraping + dashboard'],
    role: 'Full-stack · Solo',
    stack: ['Node.js', 'Vue.js', 'Tailwind CSS', 'Cloudflare'],
    image: scrapingImage,
    isPublic: false,
    isWip: true,
    privacyLabel: 'Privat'
  },
  {
    id: 'internal-management',
    title: 'Dailies — Manajemen Kerja Internal',
    subtitle: 'Web internal untuk tim perusahaan (privat)',
    description: 'Aplikasi internal untuk manajemen task, kolaborasi, dan monitoring progress lintas role.',
    highlights: [
      'Digunakan internal oleh sekitar 40–50 staff.',
      'Fitur utama: Kanban, timeline, kolaborasi, dan absensi.',
      'Role-based access untuk PM/Admin/HR/Direktur/Stakeholder.'
    ],
    metrics: ['40–50 staff', 'Role-based access'],
    role: 'Front-end · Team',
    stack: ['Vue.js', 'Tailwind CSS'],
    image: internalImage,
    isPublic: false,
    isWip: false,
    privacyLabel: 'Privat'
  },
  {
    id: 'reklame',
    title: 'Reklame Sukaria Makmur',
    subtitle: 'Landing page bisnis lokal (publik)',
    description: 'Landing page bisnis lokal dengan fokus pada performa, CTA, dan struktur SEO.',
    highlights: [
      'Ranking #1 untuk keyword “reklame motor nias selatan”.',
      'CTA WhatsApp dan alur konten dirancang untuk mendorong konversi.',
      'Optimized untuk mobile dan loading cepat.'
    ],
    metrics: ['SEO #1', 'Landing page'],
    role: 'Full-stack · Solo',
    stack: ['Next.js', 'Tailwind CSS'],
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

// ============ FILTER SYSTEM (Point 2) ============

const filters = [
  { label: 'Semua', value: 'all' },
  { label: 'Publik', value: 'public' },
  { label: 'Privat', value: 'private' },
  { label: 'Dalam proses', value: 'wip' }
]

const activeFilter = ref('all')

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

// ============ LOADING STATES (Point 1) ============

const imageLoading = ref({})

const handleImageLoad = (projectId) => {
  imageLoading.value[projectId] = false
}

// Initialize loading states
projects.forEach(project => {
  imageLoading.value[project.id] = true
})

// ============ LAZY LOADING (Point 6) ============

// ============ MODAL (Point 3) ============

const activeProject = ref(null)

const openProject = (project) => {
  activeProject.value = project
  // Announce to screen readers
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

// ============ CONTEXTUAL CTA (Point 8) ============

const requestEarlyAccess = (project) => {
  // Implement your early access request logic
  window.location.href = `#connect?project=${project.id}&type=early-access`
}

const requestDemo = (project) => {
  // Implement your demo request logic
  window.location.href = `#connect?project=${project.id}&type=demo`
}

// ============ KEYBOARD & ACCESSIBILITY (Point 7) ============

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeProject.value) {
    closeProject()
  }
}

// Lock body scroll when modal is open
watch(activeProject, (value) => {
  if (typeof document === 'undefined') return
  
  if (value) {
    document.documentElement.style.overflow = 'hidden'
    // Set focus to modal when opened
    setTimeout(() => {
      const modal = document.querySelector('[role="dialog"]')
      if (modal) modal.focus()
    }, 100)
  } else {
    document.documentElement.style.overflow = ''
  }
})

// ============ REVEAL ANIMATION ============

let observer

onMounted(() => {
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
      threshold: 0.1,
      rootMargin: '50px',
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
@keyframes whatsapp-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45);
  }
  70% {
    transform: scale(1.02);
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.whatsapp-pulse {
  animation: whatsapp-pulse 2.8s ease-out infinite;
}

/* Reveal animations */
.reveal-init {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), 
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Loading animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .reveal-init {
    transform: translateY(15px);
    transition-duration: 0.5s;
  }
  
  a, button {
    min-height: 44px;
    min-width: 44px;
  }
  
  h1, h2, h3, p {
    word-break: break-word;
  }
}

/* Better hover states */
@media (hover: hover) {
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
  border-radius: 4px;
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

/* Tablet optimization */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    max-width: 90%;
  }
}

/* Line clamp utilities */
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
</style>
