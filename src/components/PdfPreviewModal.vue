<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="activeDocument"
        class="pdf-modal-backdrop fixed inset-0 z-[100] flex items-stretch justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-3 md:p-4 lg:p-5"
        role="dialog"
        aria-modal="true"
        :aria-label="`Pratinjau ${activeDocument.title}`"
        @click.self="closePdfPreview"
      >
        <div
          class="pdf-modal-shell flex h-[100dvh] w-full max-w-full flex-col overflow-hidden border border-white/10 bg-[#08080c] shadow-2xl shadow-violet-500/10 sm:h-[96dvh] sm:max-h-[96dvh] sm:max-w-[min(98vw,720px)] sm:rounded-xl md:max-w-[min(96vw,960px)] md:rounded-2xl lg:max-w-[min(94vw,1140px)] xl:max-w-[min(92vw,1280px)]"
          role="document"
          tabindex="-1"
          ref="modalRef"
        >
          <!-- Header — compact on larger screens -->
          <div
            class="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3 md:px-6"
          >
            <div class="min-w-0 flex-1">
              <div class="mb-0.5 flex flex-wrap items-center gap-2 md:mb-1">
                <span
                  class="rounded border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-300 font-techno"
                >
                  PDF
                </span>
                <span class="hidden text-[10px] text-zinc-500 font-sans sm:inline sm:text-xs">
                  Pratinjau dokumen
                </span>
              </div>
              <h2 class="truncate text-sm font-bold text-white font-techno sm:text-base md:text-lg">
                {{ activeDocument.title }}
              </h2>
              <p class="truncate text-[11px] text-zinc-400 font-sans sm:text-xs md:text-sm">
                {{ activeDocument.subtitle }}
              </p>
            </div>

            <button
              type="button"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 active:scale-95 touch-manipulation md:h-11 md:w-11"
              aria-label="Tutup pratinjau"
              @click="closePdfPreview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Preview — takes all remaining space -->
          <div class="relative min-h-0 flex-1 bg-[#0a0a0f] p-0 sm:p-2 md:p-3">
            <div
              class="relative h-full overflow-hidden rounded-none border-0 bg-white sm:rounded-lg sm:border sm:border-white/10 md:rounded-xl"
            >
              <div
                v-if="isLoading"
                class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#050508]"
              >
                <div
                  class="h-9 w-9 animate-spin rounded-full border-2 border-violet-500/20 border-t-violet-400"
                  aria-hidden="true"
                />
                <p class="text-xs text-zinc-400 font-sans">Memuat pratinjau…</p>
              </div>

              <iframe
                :key="activeDocument.id"
                :src="iframeSrc"
                :title="`Pratinjau ${activeDocument.title}`"
                class="h-full w-full border-0 bg-white"
                @load="handleIframeLoad"
              />
            </div>

            <p
              class="pointer-events-none absolute bottom-1 left-0 right-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent px-4 pb-1 pt-6 text-center text-[10px] leading-relaxed text-zinc-500 font-sans sm:hidden"
            >
              Geser di dalam pratinjau untuk melihat halaman lainnya.
            </p>
          </div>

          <!-- Footer — slim toolbar -->
          <div class="shrink-0 border-t border-white/10 px-4 py-3 sm:px-5 sm:py-3 md:px-6">
            <div class="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between md:gap-4">
              <p class="hidden text-xs leading-relaxed text-zinc-400 font-sans lg:block lg:max-w-md">
                {{ activeDocument.description }}
              </p>
              <p class="text-[10px] leading-relaxed text-zinc-500 font-sans sm:text-[11px] lg:hidden">
                Unduh untuk menyimpan salinan ke perangkat Anda.
              </p>
              <p class="hidden text-[11px] text-zinc-500 font-sans lg:block lg:shrink-0">
                Simpan salinan dokumen ke perangkat Anda.
              </p>

              <div class="flex flex-col gap-2 sm:flex-row sm:justify-end md:shrink-0">
                <a
                  :href="activeDocument.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:bg-white/10 active:scale-[0.98] font-techno touch-manipulation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Buka Tab Baru
                </a>

                <a
                  :href="activeDocument.url"
                  :download="activeDocument.filename"
                  class="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-violet-500/30 bg-violet-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-violet-500/20 transition-all hover:bg-violet-500 active:scale-[0.98] font-techno touch-manipulation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Unduh PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { usePdfPreview } from '../composables/usePdfPreview.js'

const { activeDocument, closePdfPreview } = usePdfPreview()

const modalRef = ref(null)
const isLoading = ref(true)

const iframeSrc = computed(() => {
  if (!activeDocument.value) return ''
  // FitH = lebar penuh iframe; toolbar=1 agar zoom/navigasi halaman tersedia di desktop
  return `${activeDocument.value.url}#view=FitH&toolbar=1&navpanes=0&scrollbar=1`
})

const handleIframeLoad = () => {
  isLoading.value = false
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && activeDocument.value) {
    closePdfPreview()
  }
}

watch(activeDocument, (value) => {
  if (typeof document === 'undefined') return

  isLoading.value = true

  if (value) {
    document.documentElement.style.overflow = 'hidden'
    setTimeout(() => modalRef.value?.focus(), 100)
  } else {
    document.documentElement.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
  }
})
</script>

<style scoped>
.pdf-modal-shell {
  /* Explicit height chain so flex-1 preview always fills remaining space */
  min-height: 0;
}

.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>
