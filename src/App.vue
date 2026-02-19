<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
