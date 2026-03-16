<template>
  <header class="fixed inset-x-0 top-0 z-50 
                 bg-black/40 backdrop-blur-md 
                 border-b border-white/5
                 transition-all duration-300"
          :class="{ 'bg-black/60 backdrop-blur-lg': scrolled }">
    <nav class="mx-auto flex max-w-7xl items-center justify-between 
                px-4 sm:px-6 lg:px-8 
                py-2 sm:py-3 md:py-4">
      
      <!-- Logo dengan ukuran responsive -->
      <a href="#home" 
         class="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white 
                hover:text-violet-400 transition-colors
                active:scale-95 touch-manipulation">
        Leo<span class="text-violet-400">.</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6 lg:gap-8">
        <a v-for="item in navItems" 
           :key="item.href"
           :href="item.href"
           class="text-sm lg:text-base text-gray-300 hover:text-white 
                  transition-colors relative group
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-0.5 after:bg-violet-500
                  after:transition-all after:duration-300
                  hover:after:w-full">
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile Menu Button - ukuran lebih besar untuk touch -->
      <button type="button"
              class="inline-flex items-center justify-center 
                     rounded-full border border-white/15 bg-white/5 
                     p-2.5 sm:p-3 text-gray-100 
                     hover:bg-white/10 active:scale-95 
                     transition-all duration-200
                     md:hidden touch-manipulation"
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
           class="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
        <div class="mx-auto max-w-7xl flex flex-col px-4 py-3 sm:py-4 space-y-2">
          <a v-for="item in navItems" 
             :key="item.href"
             :href="item.href"
             class="py-3 px-4 text-gray-200 hover:text-white 
                    hover:bg-white/5 rounded-lg transition-all
                    active:scale-[0.98] touch-manipulation"
             @click="isOpen = false">
            {{ item.label }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#connect', label: 'Kontak' }
]

// Handle scroll effect
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Touch-friendly transitions */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
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