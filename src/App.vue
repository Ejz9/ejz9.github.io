<script setup lang="ts">
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Constellation from "@/components/Constellation.vue";
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <Constellation />
    <Navbar />
    <main class="grow mt-16 mb-8">
      <router-view />
    </main>
    <Footer class="hidden md:block"/>
  </div>
</template>

<style scoped>

</style>