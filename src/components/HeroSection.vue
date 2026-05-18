<template>
  <section
    id="home"
    class="relative flex min-h-[100dvh] w-full flex-col justify-center overflow-x-hidden bg-[#030308] pb-20 pt-24 text-white selection:bg-violet-500/30 xs:pt-28 sm:pb-24 sm:pt-32 lg:pb-24 lg:pt-16"
  >
    <div class="pointer-events-none absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_38%,rgba(76,29,149,0.14),transparent_58%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_70%_60%,rgba(139,92,246,0.06),transparent_50%)]"
      />
    </div>

    <!-- HUD corners -->
    <svg
      class="pointer-events-none absolute left-3 top-20 z-[5] h-14 w-14 text-violet-400/50 motion-safe:animate-hud-pulse motion-reduce:opacity-35 hidden sm:block sm:left-5 sm:top-24 sm:h-[4.5rem] sm:w-[4.5rem]"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 28V6h22" stroke="currentColor" stroke-width="0.75" stroke-linecap="square" />
      <path d="M10 6h8M6 14v8" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.7" />
      <circle cx="6" cy="6" r="1.25" fill="currentColor" />
      <path d="M14 22h12M22 14v10" stroke="currentColor" stroke-width="0.45" stroke-opacity="0.45" />
      <circle cx="28" cy="28" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>
    <svg
      class="pointer-events-none absolute right-3 top-20 z-[5] h-14 w-14 scale-x-[-1] text-violet-400/50 motion-safe:animate-hud-pulse motion-reduce:opacity-35 hidden sm:block sm:right-5 sm:top-24 sm:h-[4.5rem] sm:w-[4.5rem]"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 28V6h22" stroke="currentColor" stroke-width="0.75" stroke-linecap="square" />
      <path d="M10 6h8M6 14v8" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.7" />
      <circle cx="6" cy="6" r="1.25" fill="currentColor" />
      <path d="M14 22h12M22 14v10" stroke="currentColor" stroke-width="0.45" stroke-opacity="0.45" />
      <circle cx="28" cy="28" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>
    <svg
      class="pointer-events-none absolute bottom-28 left-3 z-[5] h-14 w-14 scale-y-[-1] text-violet-400/50 motion-safe:animate-hud-pulse motion-reduce:opacity-35 hidden sm:block sm:bottom-24 sm:left-5 sm:h-[4.5rem] sm:w-[4.5rem]"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 28V6h22" stroke="currentColor" stroke-width="0.75" stroke-linecap="square" />
      <path d="M10 6h8M6 14v8" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.7" />
      <circle cx="6" cy="6" r="1.25" fill="currentColor" />
      <path d="M14 22h12M22 14v10" stroke="currentColor" stroke-width="0.45" stroke-opacity="0.45" />
      <circle cx="28" cy="28" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>
    <svg
      class="pointer-events-none absolute bottom-28 right-3 z-[5] h-14 w-14 scale-[-1] text-violet-400/50 motion-safe:animate-hud-pulse motion-reduce:opacity-35 hidden sm:block sm:bottom-24 sm:right-5 sm:h-[4.5rem] sm:w-[4.5rem]"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 28V6h22" stroke="currentColor" stroke-width="0.75" stroke-linecap="square" />
      <path d="M10 6h8M6 14v8" stroke="currentColor" stroke-width="0.5" stroke-opacity="0.7" />
      <circle cx="6" cy="6" r="1.25" fill="currentColor" />
      <path d="M14 22h12M22 14v10" stroke="currentColor" stroke-width="0.45" stroke-opacity="0.45" />
      <circle cx="28" cy="28" r="0.9" fill="currentColor" opacity="0.5" />
    </svg>

    <div class="container relative z-10 mx-auto flex flex-1 flex-col px-4 sm:px-6 lg:px-8">
      <div
        class="grid flex-1 grid-cols-1 items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-10"
      >
        <div
          class="order-2 flex flex-col items-center space-y-4 text-center lg:order-1 lg:col-span-4 lg:items-start lg:text-left lg:space-y-7"
        >
          <div
            class="inline-flex items-center gap-2.5 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 motion-reduce:hidden"
              />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            <span
              class="text-[10px] font-bold uppercase tracking-[0.35em] text-violet-200/90 sm:text-xs font-techno"
            >
              Saya Leo
            </span>
          </div>

          <h1
            class="max-w-xl text-5xl font-black tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[5rem] leading-[0.92] font-techno"
          >
            <span
              class="block bg-gradient-to-br from-white via-white to-white/55 bg-clip-text text-transparent drop-shadow-[0_0_42px_rgba(167,139,250,0.35)] motion-reduce:drop-shadow-none"
            >
              Fullstack
            </span>
            <span
              class="block bg-gradient-to-br from-violet-200 via-fuchsia-200 to-violet-400/90 bg-clip-text text-transparent drop-shadow-[0_0_48px_rgba(139,92,246,0.45)] motion-reduce:drop-shadow-none"
            >
              Developer
            </span>
          </h1>

          <p class="max-w-xs text-sm leading-relaxed text-zinc-400 sm:max-w-sm sm:text-base">
            Front-end · Back-end · Siap skala produksi
          </p>
        </div>

        <div
          class="relative order-1 flex w-full justify-center lg:order-2 lg:col-span-4 lg:py-2"
        >
          <!-- Scattered tech icons (curated layout) + per-icon GSAP float — no orbit rotation -->
          <div
            ref="orbitStage"
            class="orbit-stage relative mx-auto flex w-full max-w-[min(96vw,640px)] justify-center"
          >
            <div
              class="relative w-[210px] xs:w-[240px] sm:w-[280px] md:w-[320px] lg:w-full overflow-visible"
            >
              <!-- Wide scatter field: centered on portrait so icons sit around the figure -->
              <div
                class="pointer-events-none absolute left-1/2 top-[50%] lg:top-[44%] z-[15] h-[280px] w-[280px] xs:h-[320px] xs:w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[min(82vh,620px)] lg:w-[min(205%,640px)] lg:max-w-[640px] -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <div
                  v-for="(item, i) in techStack"
                  :key="item.label"
                  class="tech-scatter absolute"
                  :style="scatterStyle(i)"
                >
                  <div class="tech-scatter-animate will-change-transform">
                    <div
                      class="tech-icon-pill flex h-9 w-9 xs:h-10 xs:w-10 items-center justify-center rounded-2xl border bg-gradient-to-b from-zinc-800/95 to-[#07070e]/98 backdrop-blur-md sm:h-11 sm:w-11 md:h-12 md:w-12"
                      :style="iconPillStyle(item)"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        class="h-[16px] w-[16px] xs:h-[18px] xs:w-[18px] sm:h-5 sm:w-5 md:h-6 md:w-6"
                        :style="{ color: `#${item.icon.hex}` }"
                      >
                        <title>{{ item.label }}</title>
                        <path :d="item.icon.path" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative z-[25] flex flex-col items-center">
                <div
                  class="pointer-events-none absolute inset-x-[-28%] bottom-[6%] top-[14%] rounded-[50%] bg-gradient-to-t from-fuchsia-600/30 via-violet-600/22 to-transparent blur-[72px] motion-safe:animate-aura-pulse motion-reduce:opacity-55"
                />
                <div
                  class="pointer-events-none absolute inset-x-[-18%] bottom-[10%] top-[20%] rounded-full bg-[radial-gradient(circle,rgba(180,160,255,0.38)_0%,rgba(88,28,135,0.12)_50%,transparent_72%)] blur-xl motion-safe:animate-aura-pulse motion-reduce:opacity-45"
                  style="animation-delay: 1s"
                />

                <img
                  :src="heroPhoto"
                  alt="Leo Saputra Hulu — Fullstack Developer"
                  class="relative h-auto max-h-[220px] xs:max-h-[260px] sm:max-h-[340px] lg:max-h-[560px] w-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] lg:drop-shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
                  loading="eager"
                  fetchpriority="high"
                  width="520"
                  height="680"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          class="order-3 flex flex-col items-center space-y-4 sm:space-y-6 lg:col-span-4 lg:items-end lg:space-y-8"
        >
          <div class="relative w-full max-w-md lg:max-w-sm">
            <div
              class="rounded-2xl p-[1px] shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              style="
                background: linear-gradient(
                  135deg,
                  rgba(167, 139, 250, 0.55),
                  rgba(88, 28, 135, 0.35) 40%,
                  rgba(12, 12, 20, 0.9) 100%
                );
              "
            >
              <div
                class="relative rounded-[15px] bg-[#08080f]/95 px-4 py-4 xs:px-5 xs:py-5 backdrop-blur-md sm:px-6 sm:py-6"
              >
                <span
                  class="absolute -left-px -top-px h-4 w-4 border-l border-t border-violet-400/70"
                />
                <span
                  class="absolute -right-px -top-px h-4 w-4 border-r border-t border-violet-400/70"
                />
                <span
                  class="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-violet-400/50"
                />
                <span
                  class="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-violet-400/50"
                />
                <p
                  class="text-center text-xs xs:text-sm leading-relaxed text-zinc-300 lg:text-left sm:text-base"
                >
                  <span class="text-violet-300/90">“</span>Dari
                  <span class="font-semibold text-white">API</span> hingga
                  <span class="font-semibold text-white">UI</span>
                  — full stack yang rapi dan siap skala.<span class="text-violet-300/90">”</span>
                </p>
              </div>
            </div>
          </div>

          <a
            href="#about"
            class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-violet-400/50 bg-violet-950/40 px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.2em] text-violet-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-violet-300/70 hover:bg-violet-900/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)] active:scale-[0.98] motion-reduce:transition-none sm:px-10 sm:py-4 font-techno"
          >
            <span>Tentang Saya</span>
            <span
              class="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/40 bg-violet-600/30 text-white transition group-hover:rotate-45 group-hover:border-violet-300/60 motion-reduce:group-hover:rotate-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div
      class="pointer-events-none w-full border-t border-violet-500/10 bg-gradient-to-t from-[#030308]/90 to-transparent px-4 py-6 mt-12 sm:mt-16 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:z-20 lg:py-4 lg:mt-0"
    >
      <nav
        class="pointer-events-auto mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 xs:gap-x-8 sm:gap-x-10"
        aria-label="Tautan cepat"
      >
        <a
          :href="certificatePdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-1 text-zinc-500 transition hover:text-violet-300"
        >
          <svg
            class="h-6 w-6 text-zinc-400 transition group-hover:text-violet-400 sm:h-7 sm:w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 14.25v7.5L12 19.5l3.75 2.25v-7.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9 1.5 1.5 3-3"
            />
          </svg>
          <span class="text-[10px] font-medium uppercase tracking-wider sm:text-[11px] font-techno">
            Sertifikat
          </span>
        </a>

        <a
          :href="cvPdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-1 text-zinc-500 transition hover:text-violet-300"
        >
          <svg
            class="h-6 w-6 text-zinc-400 transition group-hover:text-violet-400 sm:h-7 sm:w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.5 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.5 16.5c0-.8.8-1.5 3-1.5s3 .7 3 1.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5h3.5m-3.5 2.5h3.5m-3.5 2.5h3.5m-10.5 3h11"
            />
          </svg>
          <span class="text-[10px] font-medium uppercase tracking-wider sm:text-[11px] font-techno">CV</span>
        </a>

        <a
          href="https://github.com/LeoHulu02"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-1 text-zinc-500 transition hover:text-violet-300"
        >
          <svg
            class="h-6 w-6 text-zinc-400 transition group-hover:text-violet-400 sm:h-7 sm:w-7"
            role="img"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="siGithub.path" fill="currentColor" />
          </svg>
          <span class="text-[10px] font-medium uppercase tracking-wider sm:text-[11px] font-techno">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/leo-saputra-hulu-9449b0331"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-1 text-zinc-500 transition hover:text-violet-300"
        >
          <svg
            class="h-6 w-6 text-zinc-400 transition group-hover:text-violet-400 sm:h-7 sm:w-7"
            role="img"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="LINKEDIN_ICON_PATH" fill="currentColor" />
          </svg>
          <span class="text-[10px] font-medium uppercase tracking-wider sm:text-[11px] font-techno">
            LinkedIn
          </span>
        </a>

        <a
          href="https://www.instagram.com/leo_hulu/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-1 text-zinc-500 transition hover:text-violet-300"
        >
          <svg
            class="h-6 w-6 text-zinc-400 transition group-hover:text-violet-400 sm:h-7 sm:w-7"
            role="img"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path :d="siInstagram.path" fill="currentColor" />
          </svg>
          <span class="text-[10px] font-medium uppercase tracking-wider sm:text-[11px] font-techno">
            Instagram
          </span>
        </a>
      </nav>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import {
  siVuedotjs,
  siReact,
  siLaravel,
  siNodedotjs,
  siTailwindcss,
  siPostgresql,
  siTypescript,
  siDocker,
  siGithub,
  siInstagram,
} from 'simple-icons'

import heroPhoto from '../public/foto_profile.webp'
import certificatePdfUrl from '../public/FULL STACK DEVELOPER - Leo Saputra Hulu - E-certificate Harisenin Bootcamp Full Stack Developer Batch 18.pdf?url'
import cvPdfUrl from '../public/CV - Leo Saputra Hulu.pdf?url'

/** LinkedIn was removed from simple-icons (trademark); path matches classic SI glyph (CC0). */
const LINKEDIN_ICON_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.668H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

/**
 * Order = render index; matches dual-orbit layout (inner cardinals + outer diagonals).
 * Inner: Vue 12h, Node 3h, Laravel 6h, TS 9h — Outer: React, PostgreSQL, Docker, Tailwind between hours.
 */
const techStack = [
  { icon: siVuedotjs, label: 'Vue.js', tier: 'inner' },
  { icon: siReact, label: 'React', tier: 'outer' },
  { icon: siNodedotjs, label: 'Node.js', tier: 'inner' },
  { icon: siPostgresql, label: 'PostgreSQL', tier: 'outer' },
  { icon: siLaravel, label: 'Laravel', tier: 'inner' },
  { icon: siDocker, label: 'Docker', tier: 'outer' },
  { icon: siTypescript, label: 'TypeScript', tier: 'inner' },
  { icon: siTailwindcss, label: 'Tailwind CSS', tier: 'outer' },
]

/** % positions in scatter box; center ≈ portrait. Polar: inner R≈31%, outer R≈40% from center (50,50). */
const SCATTER_POSITIONS = [
  { left: 50, top: 19 },
  { left: 78, top: 22 },
  { left: 81, top: 50 },
  { left: 78, top: 78 },
  { left: 50, top: 81 },
  { left: 22, top: 78 },
  { left: 19, top: 50 },
  { left: 22, top: 22 },
]

function iconPillStyle(item) {
  const h = item.icon.hex
  return {
    borderColor: `#${h}55`,
    boxShadow: `0 6px 28px rgba(0,0,0,0.45), 0 0 24px #${h}44, 0 0 48px #${h}18`,
  }
}

const orbitStage = ref(null)
let gsapCtx = null

function scatterStyle(index) {
  const p = SCATTER_POSITIONS[index] ?? { left: 50, top: 50 }
  return {
    left: `${p.left}%`,
    top: `${p.top}%`,
    transform: 'translate(-50%, -50%)',
  }
}

onMounted(() => {
  const stage = orbitStage.value
  if (!stage) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return

  gsapCtx = gsap.context(() => {
    const nodes = stage.querySelectorAll('.tech-scatter-animate')
    gsap.set(nodes, { transformOrigin: '50% 50%', force3D: true })

    nodes.forEach((el, i) => {
      const item = techStack[i]
      const isOuter = item?.tier === 'outer'
      const dir = i % 2 === 0 ? 1 : -1
      const floatY = (isOuter ? 12 : 7) + (i % 4) * (isOuter ? 4 : 2.5)
      const floatX = dir * ((isOuter ? 7 : 4) + (i % 3) * 2.8)
      const rot = dir * ((isOuter ? 6 : 3) + (i % 3))
      const dur = (isOuter ? 2.85 : 2.2) + (i % 5) * 0.28

      gsap.fromTo(
        el,
        { y: 0, x: 0, rotation: 0, scale: 1 },
        {
          y: floatY,
          x: floatX,
          rotation: rot,
          scale: isOuter ? 1.08 : 1.055,
          duration: dur,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.22,
        }
      )
    })
  }, stage)
})

onUnmounted(() => {
  gsapCtx?.revert()
  gsapCtx = null
})
</script>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .tech-scatter-animate {
    animation: none !important;
  }
}
</style>
