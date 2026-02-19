<template>
  <section id="home" class="relative min-h-screen w-full flex items-center justify-center bg-[#050505] text-white overflow-hidden selection:bg-violet-500/30 font-sans">
    
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-violet-600/10 blur-[140px] animate-pulse-slow"></div>
    </div>

    <div class="container relative z-10 mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-0">
        
        <div class="order-2 lg:order-1 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span class="text-[10px] font-bold tracking-[0.4em] uppercase text-violet-300">
              Saya Leo
            </span>
          </div>
          
          <h1 class="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.8] transition-all">
            Fullstack <br/> 
            <span class="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
              Developer
            </span>
          </h1>
          
          <p class="max-w-xs text-gray-400 text-base md:text-lg leading-relaxed">
            Saya membangun <span class="text-white font-medium border-b border-violet-500/50">aplikasi web yang skalabel</span> dan pengalaman pengguna yang mulus.
          </p>
        </div>

        <div class="order-1 lg:order-2 lg:col-span-4 flex justify-center items-center relative py-10 lg:py-0">
          <div class="relative group">
            <div class="absolute inset-0 bg-violet-600/20 blur-[80px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <img
              :src="heroPhoto"
              alt="Foto Leo"
              class="relative z-10 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] w-auto object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,1)] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <div class="order-3 lg:order-3 lg:col-span-4 flex flex-col items-center lg:items-end space-y-10 lg:text-right">
          <div class="relative max-w-[280px] group">
            <div class="p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm">
               <p class="text-gray-400 text-sm md:text-base leading-relaxed italic">
                "Saya senang bekerja di seluruh stack – mulai dari merancang <span class="text-violet-400 font-medium font-mono">REST API</span> hingga mengirim antarmuka yang responsif dan rapi."
              </p>
            </div>
          </div>

          <a
            href="#about"
            class="group relative overflow-hidden inline-flex items-center gap-5 rounded-full bg-white px-10 py-5 text-black transition-all hover:bg-violet-500 hover:text-white active:scale-95 shadow-xl shadow-white/5"
          >
            <span class="text-sm font-extrabold uppercase tracking-widest">Tentang Saya</span>
            <div class="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4 group-hover:rotate-45 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import heroPhoto from '../public/foto-no_bg.png'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');

section {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
}

.animate-pulse-slow {
  animation: pulse-slow 10s infinite ease-in-out;
}

/* Memastikan gambar tetap tajam meski ukurannya diperbesar */
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>
