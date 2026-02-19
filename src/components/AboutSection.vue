<template>
  <section id="about" class="relative w-full bg-[#08080b] text-white py-20 md:py-28">
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute -top-32 right-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-3xl"
      ></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-0">
      <div class="mb-12 md:mb-16 max-w-xl space-y-4" data-reveal>
        <p class="text-xs font-semibold tracking-[0.3em] text-violet-300 uppercase">
          About
        </p>
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
          Tentang Leo Saputra Hulu
        </h2>
        <p class="text-sm md:text-base text-gray-300 leading-relaxed">
          Saya seorang fullstack developer yang nyaman bermain di frontend maupun backend,
          dengan fokus pada performa, kualitas kode, dan kebutuhan pengguna serta klien.
        </p>
      </div>

      <div
        class="grid gap-8 md:grid-cols-12 md:gap-10 items-start"
      >
        <div class="md:col-span-5 space-y-6 text-sm text-gray-300">
          <div class="space-y-3" data-reveal data-reveal-delay="50">
            <p class="text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase">
              01 · Arsenal
            </p>
            <h3 class="text-lg md:text-xl font-semibold text-white">
              Senjata Utama
            </h3>
            <p class="leading-relaxed">
              <span class="font-semibold text-gray-100">Core:</span>
              Vue.js, Node.js, Express, PostgreSQL.
              <br />
              <span class="font-semibold text-gray-100">Pendukung:</span>
              React, Laravel, Python.
            </p>
            <p class="leading-relaxed">
              Saya fokus di ekosistem JavaScript untuk membangun aplikasi end-to-end:
              dari antarmuka yang responsif, API yang rapi, sampai pengelolaan data di database.
            </p>
            <div class="flex flex-wrap gap-2 pt-1">
              <span
                class="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-500/20 hover:border-violet-400/70"
              >
                Vue.js
              </span>
              <span
                class="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-500/20 hover:border-violet-400/70"
              >
                Node.js
              </span>
              <span
                class="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-500/20 hover:border-violet-400/70"
              >
                Express
              </span>
              <span
                class="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-500/20 hover:border-violet-400/70"
              >
                PostgreSQL
              </span>
            </div>
          </div>

          <div class="space-y-3" data-reveal data-reveal-delay="120">
            <p class="text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase">
              03 · The Journey
            </p>
            <h3 class="text-lg md:text-xl font-semibold text-white">
              Perjalanan Singkat
            </h3>
            <p class="leading-relaxed">
              Saya mulai dari mengerjakan proyek kecil secara freelance, lalu perlahan terlibat
              di proyek-proyek yang lebih besar dan kompleks.
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

        <div class="md:col-span-7 space-y-6">
          <div
            class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            data-reveal
          >
            <div class="flex items-start justify-between gap-4">
              <div class="space-y-2">
                <p class="text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase">
                  02 · Showcase
                </p>
                <h3 class="text-lg md:text-xl font-semibold text-white">
                  Beberapa Proyek yang Pernah Saya Garap
                </h3>
              </div>
              <div class="hidden sm:flex flex-col items-end text-right text-[11px] text-violet-300">
                <span class="text-xl font-bold text-white">3+</span>
                <span>kategori proyek</span>
              </div>
            </div>

            <div class="mt-5 space-y-4 text-sm text-gray-300">
              <div class="flex gap-3 rounded-xl -mx-2 px-2 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5">
                <div class="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-violet-500/15 text-[11px] font-semibold text-violet-200">
                  SEO
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-gray-100">
                    SEO Masterpiece · Web Reklame
                  </p>
                  <p class="leading-relaxed">
                    Fokus pada kecepatan loading dan struktur SEO yang bersih agar website
                    lebih ringan dan siap bersaing di hasil pencarian.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 rounded-xl -mx-2 px-2 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5">
                <div class="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-violet-500/15 text-[11px] font-semibold text-violet-200">
                  50+
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-gray-100">
                    Enterprise Tool · Dailies
                  </p>
                  <p class="leading-relaxed">
                    Sistem kolaborasi harian untuk sekitar 50+ pengguna, menangani alur kerja tim
                    dan pembaruan rutin tanpa mengorbankan performa.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 rounded-xl -mx-2 px-2 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5">
                <div class="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-violet-500/15 text-[11px] font-semibold text-violet-200">
                  Data
                </div>
                <div class="space-y-1">
                  <p class="font-medium text-gray-100">
                    Data Expert · Web Scraping
                  </p>
                  <p class="leading-relaxed">
                    Membangun pipeline untuk mengambil, membersihkan, dan mengolah data dari berbagai
                    sumber web sehingga siap dipakai untuk analisis.
                  </p>
                </div>
              </div>

              <p class="pt-1 text-xs text-gray-500">
                Beberapa proyek bersifat privat, jadi saya lebih menonjolkan pencapaian teknis
                seperti performa, skala pengguna, dan pengolahan data.
              </p>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md text-sm text-gray-300 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10" data-reveal data-reveal-delay="80">
              <p class="text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase">
                04 · Philosophy
              </p>
              <h3 class="text-lg font-semibold text-white">
                Cara Saya Memandang Proyek
              </h3>
              <p class="leading-relaxed">
                Buat saya, <span class="font-semibold text-gray-100">“klien senang = proyek berhasil”</span>.
                Kode yang rapi penting, tapi yang lebih penting adalah masalah klien benar-benar selesai.
              </p>
              <p class="leading-relaxed">
                Karena itu saya terbiasa memahami kebutuhan bisnis dulu, lalu memilih solusi teknis
                yang realistis dan bisa dirawat jangka panjang.
              </p>
            </div>

            <div id="connect" class="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-5 backdrop-blur-md text-sm text-gray-300 transition-all duration-500 hover:-translate-y-1 hover:border-white/20" data-reveal data-reveal-delay="140">
              <p class="text-xs font-semibold tracking-[0.25em] text-violet-300 uppercase">
                05 · Connect
              </p>
              <h3 class="text-lg font-semibold text-white">
                Yuk Terhubung
              </h3>
              <p class="leading-relaxed">
                Tertarik ngobrol soal proyek, kolaborasi, atau peluang kerja? Anda bisa melihat
                beberapa karya saya di GitHub atau langsung menghubungi saya lewat WhatsApp.
              </p>

              <div class="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://github.com/LeoHulu02"
                  class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-medium text-gray-100 hover:bg-white/10 transition-colors"
                >
                  <span class="h-2 w-2 rounded-full bg-white/70"></span>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://wa.me/6281264351062"
                  target="_blank"
                  rel="noreferrer"
                  class="whatsapp-pulse inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition-colors"
                >
                  <span class="h-2 w-2 rounded-full bg-white"></span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <p class="text-[11px] text-gray-400 pt-1">
                Silakan kirim pesan singkat siapa Anda dan apa yang ingin didiskusikan,
                saya akan berusaha merespons secepat mungkin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

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
      threshold: 0.2,
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
    transform: scale(1.03);
    box-shadow: 0 0 0 12px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.whatsapp-pulse {
  animation: whatsapp-pulse 2.8s ease-out infinite;
}

.reveal-init {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
