<script setup>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer class="hidden md:block"/>
  </div>
</template>

<style scoped>

</style>