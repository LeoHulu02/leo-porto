<template>
  <section id="home" class="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-white overflow-hidden selection:bg-violet-500/30 font-sans">
    
    <!-- Background blur effect - responsive sizing -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[800px] lg:w-[800px] 
                  rounded-full bg-violet-600/10 blur-[140px] animate-pulse-slow"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid dengan breakpoint lebih baik -->
      <div class="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
        
        <!-- Left Content -->
        <div class="order-2 lg:order-1 lg:col-span-5 flex flex-col items-center lg:items-start 
                    text-center lg:text-left space-y-6 md:space-y-8">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full 
                      bg-white/5 border border-white/10 backdrop-blur-md
                      hover:bg-white/10 transition-colors duration-300">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full 
                         rounded-full bg-violet-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span class="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-violet-300">
              Saya Leo
            </span>
          </div>
          
          <!-- Heading dengan clamp untuk mobile -->
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] 
                     font-black tracking-tighter leading-[0.85] transition-all">
            Fullstack <br class="hidden sm:block" /> 
            <span class="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              Developer
            </span>
          </h1>
          
          <!-- Description dengan max-width dinamis -->
          <p class="max-w-[280px] sm:max-w-sm text-gray-400 
                    text-sm sm:text-base md:text-lg leading-relaxed">
            Saya membangun <span class="text-white font-medium border-b border-violet-500/50 
                                       hover:border-violet-400 transition-colors">
              aplikasi web yang skalabel
            </span> dan pengalaman pengguna yang mulus.
          </p>
        </div>

        <!-- Center Image -->
        <div class="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center 
                    relative py-6 sm:py-8 lg:py-0">
          <div class="relative group w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-none">
            <div class="absolute inset-0 bg-violet-600/20 blur-[80px] rounded-full 
                        scale-90 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <img
              :src="heroPhoto"
              alt="Foto Leo"
              class="relative z-10 w-full h-auto max-h-[400px] sm:max-h-[500px] 
                     md:max-h-[600px] lg:max-h-[720px] object-contain 
                     drop-shadow-[0_20px_80px_rgba(0,0,0,1)] 
                     group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>

        <!-- Right Content -->
        <div class="order-3 lg:order-3 lg:col-span-3 flex flex-col 
                    items-center lg:items-end space-y-6 md:space-y-8 lg:space-y-10">
          
          <!-- Quote Card - hidden on smallest mobile if needed -->
          <div class="relative w-full max-w-[280px] sm:max-w-sm group hidden sm:block">
            <div class="p-4 sm:p-5 md:p-6 rounded-2xl border border-white/5 
                        bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm
                        hover:border-white/10 transition-all duration-300">
              <p class="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed italic">
                "Saya senang bekerja di seluruh stack – mulai dari merancang 
                <span class="text-violet-400 font-medium font-mono">REST API</span> 
                hingga mengirim antarmuka yang responsif dan rapi."
              </p>
            </div>
          </div>

          <!-- CTA Button - lebih compact di mobile -->
          <a
            href="#about"
            class="group relative overflow-hidden inline-flex items-center gap-3 sm:gap-5 
                   rounded-full bg-white px-6 sm:px-8 md:px-10 
                   py-3 sm:py-4 md:py-5 text-black transition-all 
                   hover:bg-violet-500 hover:text-white active:scale-95 
                   shadow-xl shadow-white/5 hover:shadow-violet-500/20"
          >
            <span class="text-xs sm:text-sm font-extrabold uppercase tracking-widest">
              Tentang Saya
            </span>
            <div class="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 items-center justify-center 
                        rounded-full bg-black text-white 
                        group-hover:bg-white group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                   stroke-width="3" stroke="currentColor" 
                   class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 
                          group-hover:rotate-45 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" 
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

sc
<script setup>
import heroPhoto from '../public/foto_profile.webp'
</script>