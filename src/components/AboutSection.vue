<template>
  <section id="about" class="relative w-full bg-[#050508] text-white 
                              py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden border-b border-violet-500/10">
    
    <!-- Background futuristic lights -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -top-32 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl"></div>
      <div class="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-fuchsia-500/5 blur-3xl"></div>
    </div>

    <!-- Container -->
    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Profile & Value Proposition Header -->
      <div class="space-y-6 mb-12" data-reveal>
        <p class="text-[10px] sm:text-xs font-semibold tracking-[0.3em] 
                  text-violet-400 uppercase font-techno">
          01 · ABOUT ME / TENTANG SAYA
        </p>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight font-techno">
          Membangun Sistem Web Skala Tinggi dengan <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">Presisi Arsitektur</span>
        </h2>
        <p class="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-sans">
          Saya menjembatani arsitektur sistem backend yang tangguh dengan antarmuka frontend premium. Berfokus penuh pada kecepatan, skalabilitas, dan penyelesaian masalah bisnis secara pragmatis.
        </p>
      </div>

      <!-- Single Tech Stack Category with Beautiful Custom Icons & Hover Animations -->
      <div class="space-y-6 mb-12" data-reveal data-reveal-delay="50">
        
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>
            <h3 class="text-xs sm:text-sm font-bold tracking-[0.2em] text-violet-300 uppercase font-techno">
              TECH STACK / SENJATA PENGEMBANGAN
            </h3>
          </div>
          
          <!-- Grid of Custom Icon Tags -->
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <div v-for="tech in techStack" :key="tech.name"
                 class="group flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/5 
                        bg-white/[0.01] backdrop-blur-md transition-all duration-300
                        hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.03] 
                        hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] cursor-default">
              
              <!-- Custom Outline Tech Icon -->
              <span class="h-5 w-5 flex-shrink-0 text-zinc-400 transition-all duration-300 
                           group-hover:scale-115 group-hover:text-violet-400 group-hover:rotate-3">
                <component :is="tech.icon" class="w-full h-full" />
              </span>
              
              <!-- Tech Name -->
              <span class="text-xs sm:text-sm font-semibold font-techno text-zinc-300 group-hover:text-white transition-colors duration-300">
                {{ tech.name }}
              </span>

            </div>
          </div>
        </div>

      </div>

      <!-- Quick Connect Call to Action (Minimalist CTA Row) -->
      <div id="connect" class="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5" data-reveal data-reveal-delay="100">
        <a href="https://wa.me/6281264351062" 
           target="_blank" 
           rel="noopener"
           aria-label="Hubungi Leo via WhatsApp"
           class="whatsapp-pulse inline-flex items-center gap-2.5 rounded-full bg-emerald-500/90 
                  px-6 py-3 text-xs sm:text-sm font-extrabold font-techno text-white 
                  shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all 
                  active:scale-95 touch-manipulation">
          <span class="h-1.5 w-1.5 rounded-full bg-white animate-ping" aria-hidden="true"></span>
          <span>WhatsApp Business</span>
        </a>

        <a href="https://github.com/LeoHulu02" 
           target="_blank" 
           rel="noopener"
           aria-label="Kunjungi profil GitHub Leo"
           class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 
                  px-5 py-3 text-xs sm:text-sm font-semibold font-techno text-zinc-300 hover:text-white 
                  hover:bg-white/10 transition-all active:scale-95 touch-manipulation">
          <span class="h-1.5 w-1.5 rounded-full bg-zinc-500" aria-hidden="true"></span>
          <span>Kunjungi GitHub</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, h } from 'vue'

// ============ CUSTOM HIGH-TECH OUTLINE LOGO RENDERERS ============
const VueIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 21L3 5h4.5L12 13l4.5-8H21L12 21z' }),
      h('path', { d: 'M12 16L7.5 8h3L12 11l1.5-3h3L12 16z', opacity: '0.7' })
    ])
  }
}

const NuxtIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 4l9 16H3L12 4z' }),
      h('path', { d: 'M16.5 12l4.5 8h-9l4.5-8z', opacity: '0.8', fill: 'currentColor' })
    ])
  }
}

const ReactIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(0 12 12)' }),
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(60 12 12)' }),
      h('ellipse', { cx: '12', cy: '12', rx: '11', ry: '4.2', transform: 'rotate(120 12 12)' }),
      h('circle', { cx: '12', cy: '12', r: '1.8', fill: 'currentColor' })
    ])
  }
}

const NextIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M3 3v18h3.5v-8.5l9 8.5H19l-9-9 9-9h-3.5L6.5 11.5V3H3z' }),
      h('circle', { cx: '12', cy: '12', r: '10', opacity: '0.15' })
    ])
  }
}

const QuasarIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('circle', { cx: '12', cy: '12', r: '9' }),
      h('circle', { cx: '12', cy: '12', r: '5', 'stroke-dasharray': '2 2' }),
      h('path', { d: 'M12 3v4M12 17v4M3 12h4M17 12h4', opacity: '0.7' })
    ])
  }
}

const PrimeVueIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 3l4 8-4 2-4-2 4-8z' }),
      h('path', { d: 'M5 10l3 9h8l3-9M8 19l4-6 4 6' })
    ])
  }
}

const TailwindIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 6.5c-2.4 0-4 1.6-4.8 4.8 1.6-1.6 3.2-2.4 4.8-2.4 2.4 0 4 1.6 4.8 4.8-1.6-1.6-3.2-2.4-4.8-2.4zM7.2 12.7c-2.4 0-4 1.6-4.8 4.8 1.6-1.6 3.2-2.4 4.8-2.4 2.4 0 4 1.6 4.8 4.8-1.6-1.6-3.2-2.4-4.8-2.4z' })
    ])
  }
}

const BootstrapIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('rect', { x: '4', y: '4', width: '16', height: '16', rx: '3' }),
      h('path', { d: 'M9 8h3.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9v-4zM9 12h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9v-4z', opacity: '0.9' })
    ])
  }
}

const ExpressIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M4 12h6M4 8h6M4 16h6' }), 
      h('path', { d: 'M14 8l6 8M20 8l-6 8' })
    ])
  }
}

const LaravelIcon = {
  render() {
    return h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M12 2L4 6v12l8 4 8-4V6l-8-4z' }),
      h('path', { d: 'M12 22V10M4 6l8 4 8-4' }),
      h('path', { d: 'M8 11v4l4 2', opacity: '0.8' })
    ])
  }
}

// ============ UNIFIED TECH STACK DATA ============
const techStack = [
  { name: 'Vue.js', icon: VueIcon },
  { name: 'Nuxt.js', icon: NuxtIcon },
  { name: 'React.js', icon: ReactIcon },
  { name: 'Next.js', icon: NextIcon },
  { name: 'Quasar', icon: QuasarIcon },
  { name: 'PrimeVue', icon: PrimeVueIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
  { name: 'Express.js', icon: ExpressIcon },
  { name: 'Laravel', icon: LaravelIcon }
]

// ============ REVEAL ANIMATION SYSTEM ============
let observer

onMounted(() => {
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
  
  a {
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
</style>
