<template>
  <header
    class="fixed inset-x-0 top-0 z-40 bg-black/40 backdrop-blur-md border-b border-white/5"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 lg:px-0 py-3 md:py-4"
    >
      <a
        href="#home"
        class="text-sm md:text-base font-semibold tracking-tight text-white"
      >
        Leo<span class="text-violet-400">.</span>
      </a>

      <div class="hidden md:flex items-center gap-4 md:gap-6 text-xs md:text-sm">
        <a
          href="#home"
          class="text-gray-300 hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          class="text-gray-300 hover:text-white transition-colors"
        >
          Tentang
        </a>
        <a
          href="#connect"
          class="hidden sm:inline text-gray-400 hover:text-white transition-colors"
        >
          Kontak
        </a>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-gray-100 hover:bg-white/10 md:hidden"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-5 w-5"
          fill="none"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-5 w-5"
          fill="none"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div
      v-if="isOpen"
      class="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-md"
    >
      <div class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 text-sm">
        <a
          href="#home"
          class="py-1 text-gray-200 hover:text-white transition-colors"
          @click="isOpen = false"
        >
          Home
        </a>
        <a
          href="#about"
          class="py-1 text-gray-200 hover:text-white transition-colors"
          @click="isOpen = false"
        >
          Tentang
        </a>
        <a
          href="#connect"
          class="py-1 text-gray-400 hover:text-white transition-colors"
          @click="isOpen = false"
        >
          Kontak
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
</style>
