<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import PdfPreviewModal from './components/PdfPreviewModal.vue'
import { useTheme } from './composables/useTheme.js'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen bg-[#F4F5F8] text-zinc-900 dark:bg-black dark:text-white selection:bg-violet-500/25 dark:selection:bg-violet-500/30">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
    <PdfPreviewModal />
  </div>
</template>

<style scoped>
</style>
