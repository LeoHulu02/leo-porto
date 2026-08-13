<template>
  <footer class="border-t border-zinc-900/10 dark:border-white/10 bg-[#F4F5F8] dark:bg-[#050505] text-zinc-700 dark:text-gray-300">
    <div class="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 lg:px-0">
      <div class="space-y-1 text-xs md:text-sm">
        <p class="font-semibold text-zinc-900 dark:text-white">
          Leo Saputra Hulu
        </p>
        <p class="text-zinc-600 dark:text-gray-400">
          Fullstack Developer (Front-end &amp; Back-end) · Fokus pada performa, kualitas kode, dan kebutuhan klien.
        </p>
        <p class="text-[11px] text-zinc-500 dark:text-gray-500">
          © {{ new Date().getFullYear() }} · Dibangun dengan Vue dan Tailwind CSS.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm">
        <a
          href="https://github.com/LeoHulu02"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-zinc-900/15 bg-white/60 dark:border-white/15 dark:bg-white/5 px-4 py-2 hover:bg-zinc-900/5 dark:hover:bg-white/10 transition-colors"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-zinc-800 dark:bg-white/80"></span>
          <span>GitHub</span>
        </a>
        <a
          href="https://wa.me/6281264351062"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-500/20 transition-colors"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300"></span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
