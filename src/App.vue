<script setup>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <router-view />
    <Footer class="hidden md:block"/>
  </div>
</template>

<style scoped>

</style>