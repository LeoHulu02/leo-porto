<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
