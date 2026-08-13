<template>
  <header class="fixed inset-x-0 top-0 z-50 
                 bg-white/70 backdrop-blur-md 
                 border-b border-zinc-900/8
                 transition-all duration-300
                 dark:bg-black/40 dark:border-white/5"
          :class="{ 'bg-white/85 dark:bg-black/60 backdrop-blur-lg': scrolled }">
    <nav ref="navRef" class="mx-auto flex max-w-7xl items-center justify-between 
                px-4 sm:px-6 lg:px-8 
                py-2 sm:py-3 md:py-4">
      
      <!-- Logo dengan ukuran responsive -->
      <a href="#home" 
         class="flex items-center hover:opacity-85 transition-opacity
                active:scale-95 touch-manipulation"
         @click="onNavClick($event, '#home')">
        <img :src="logoNavbar" 
             alt="Logo Leo" 
             class="h-6 w-auto sm:h-7 md:h-8 object-contain" />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-5 lg:gap-7">
        <template v-for="item in navItems" :key="item.label">
          <!-- Glassmorphic Pill Action Buttons for CV & Certificate -->
          <button v-if="item.pdfKey"
             type="button"
             class="text-xs lg:text-sm text-violet-700 hover:text-white font-bold font-techno
                    px-4 py-1.5 rounded-lg border border-violet-600/25 bg-violet-500/8 hover:bg-violet-600 
                    hover:border-violet-500 shadow-md shadow-violet-500/5 transition-all active:scale-95 duration-200 touch-manipulation
                    dark:text-violet-300 dark:border-violet-500/20 dark:bg-violet-500/5"
             @click="openPdfPreview(item.pdfKey)">
            {{ item.label }}
          </button>
          <!-- Standard Smooth Section Anchor Links -->
          <a v-else
             :href="item.href"
             class="text-sm lg:text-base text-zinc-600 hover:text-zinc-900 
                    transition-colors relative group py-1.5
                    after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:w-0 after:h-0.5 after:bg-violet-600
                    after:transition-all after:duration-300
                    hover:after:w-full
                    dark:text-gray-300 dark:hover:text-white dark:after:bg-violet-500"
             @click="onNavClick($event, item.href)">
            {{ item.label }}
          </a>
        </template>

        <button
          type="button"
          class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-violet-600/25 bg-violet-500/8 text-violet-700 transition-all hover:bg-violet-600 hover:text-white hover:border-violet-500 active:scale-95 touch-manipulation dark:border-violet-500/20 dark:bg-violet-500/5 dark:text-violet-300"
          :aria-label="isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'"
          :aria-pressed="isDark"
          @click="toggleTheme"
        >
          <!-- Sun (show when dark → switch to light) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <!-- Moon (show when light → switch to dark) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="h-4 w-4" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>
      </div>

      <!-- Mobile: theme + menu -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg border border-violet-600/25 bg-violet-500/8 p-2.5 sm:p-3 text-violet-700 hover:bg-violet-600 hover:text-white active:scale-95 transition-all duration-200 touch-manipulation dark:border-violet-500/20 dark:bg-violet-500/5 dark:text-violet-300"
          :aria-label="isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'"
          :aria-pressed="isDark"
          @click="toggleTheme"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </button>

        <button type="button"
                class="inline-flex items-center justify-center 
                       rounded-lg border border-zinc-900/15 bg-zinc-900/5 
                       p-2.5 sm:p-3 text-zinc-800 
                       hover:bg-zinc-900/10 active:scale-95 
                       transition-all duration-200
                       touch-manipulation
                       dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:hover:bg-white/10"
                @click="isOpen = !isOpen"
                :aria-expanded="isOpen"
                aria-label="Toggle navigation menu">
          <span class="sr-only">Toggle navigation</span>
          <svg v-if="!isOpen" 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               stroke-width="2" 
               stroke="currentColor" 
               class="h-5 w-5 sm:h-6 sm:w-6"
               fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               stroke-width="2" 
               stroke="currentColor" 
               class="h-5 w-5 sm:h-6 sm:w-6"
               fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" 
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu - dengan animasi smooth -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div v-if="isOpen" 
           class="md:hidden border-t border-zinc-900/10 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-black/95">
        <div class="mx-auto max-w-7xl flex flex-col px-4 py-3 space-y-1">
          <template v-for="item in navItems" :key="item.label">
            <!-- Mobile list items (all flat, clean links) -->
            <button v-if="item.pdfKey"
               type="button"
               class="w-full py-2.5 px-4 text-violet-700 font-semibold hover:text-zinc-900 hover:bg-zinc-900/5 rounded-lg transition-all
                      active:scale-[0.98] touch-manipulation text-sm font-medium font-sans flex items-center justify-between text-left
                      dark:text-violet-400 dark:hover:text-white dark:hover:bg-white/5"
               @click="handlePdfClick(item.pdfKey)">
              <span>{{ item.label }}</span>
              <span class="text-[9px] font-bold text-violet-700/90 border border-violet-600/25 px-1.5 py-0.5 rounded bg-violet-500/8 uppercase font-techno dark:text-violet-400/90 dark:border-violet-500/25 dark:bg-violet-500/5">PDF</span>
            </button>
            <a v-else
               :href="item.href"
               class="py-2.5 px-4 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-900/5 rounded-lg transition-all
                      active:scale-[0.98] touch-manipulation text-sm font-medium font-sans flex items-center justify-between
                      dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/5"
               @click="onNavClick($event, item.href)">
              <span>{{ item.label }}</span>
            </a>
          </template>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logoNavbar from '../public/logo-navbar.png'
import { usePdfPreview } from '../composables/usePdfPreview.js'
import { handleSectionNavClick, updateSiteHeaderOffset } from '../composables/useSectionScroll.js'
import { useTheme } from '../composables/useTheme.js'

const { openPdfPreview } = usePdfPreview()
const { isDark, toggleTheme } = useTheme()

const isOpen = ref(false)
const scrolled = ref(false)
const navRef = ref(null)

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#projects', label: 'Proyek' },
  { href: '#', label: 'CV', pdfKey: 'cv' },
  { href: '#', label: 'Sertifikat', pdfKey: 'certificate' },
  { href: '#connect', label: 'Kontak' }
]

const handlePdfClick = (pdfKey) => {
  isOpen.value = false
  openPdfPreview(pdfKey)
}

const onNavClick = (event, href) => {
  handleSectionNavClick(event, href, () => {
    isOpen.value = false
  })
}

const syncHeaderOffset = () => {
  updateSiteHeaderOffset(navRef.value)
}

// Handle scroll effect
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  syncHeaderOffset()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', syncHeaderOffset, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', syncHeaderOffset)
})
</script>

<style scoped>
/* Touch-friendly transitions */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Mobile menu transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Prevent body scroll when mobile menu is open */
body:has(header [aria-expanded="true"]) {
  overflow: hidden;
}

@media (max-width: 768px) {
  header {
    backdrop-filter: blur(8px);
  }
  
  /* Better touch targets */
  a, button {
    min-height: 44px;
    min-width: 44px;
  }
}
</style>
