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
        class="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 p-0 backdrop-blur-sm sm:items-center sm:p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="`Pratinjau ${activeDocument.title}`"
        @click.self="closePdfPreview"
      >
        <div
          class="flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden rounded-none border border-white/10 bg-[#08080c] shadow-2xl sm:h-auto sm:max-h-[92dvh] sm:rounded-xl"
          role="document"
          tabindex="-1"
          ref="modalRef"
        >
          <!-- Header -->
          <div
            class="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 px-4 py-3.5 sm:px-6 sm:py-4"
          >
            <div class="min-w-0 flex-1">
              <div class="mb-1 flex flex-wrap items-center gap-2">
                <span
                  class="rounded border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-300 font-techno"
                >
                  PDF
                </span>
                <span class="text-[10px] text-zinc-500 font-sans sm:text-xs">Pratinjau dokumen</span>
              </div>
              <h2 class="truncate text-base font-bold text-white font-techno sm:text-lg">
                {{ activeDocument.title }}
              </h2>
              <p class="truncate text-xs text-zinc-400 font-sans sm:text-sm">
                {{ activeDocument.subtitle }}
              </p>
            </div>

            <button
              type="button"
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 active:scale-95 touch-manipulation"
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

          <!-- Preview -->
          <div class="relative min-h-0 flex-1 bg-[#050508]">
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

            <p
              class="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050508] via-[#050508]/90 to-transparent px-4 pb-3 pt-8 text-center text-[10px] leading-relaxed text-zinc-500 font-sans sm:hidden"
            >
              Geser di dalam pratinjau untuk melihat halaman lainnya.
            </p>
          </div>

          <!-- Footer -->
          <div class="shrink-0 border-t border-white/10 px-4 py-3.5 sm:px-6 sm:py-4">
            <p class="mb-3 hidden text-xs leading-relaxed text-zinc-400 font-sans sm:block">
              {{ activeDocument.description }}
            </p>

            <div class="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-[11px] leading-relaxed text-zinc-500 font-sans sm:max-w-sm sm:text-xs">
                Unduh jika ingin menyimpan salinan dokumen ke perangkat Anda.
              </p>

              <div class="flex flex-col gap-2 sm:flex-row sm:justify-end">
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
  return `${activeDocument.value.url}#view=FitH&toolbar=0&navpanes=0`
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
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
</style>
