<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Constellation from "./components/Constellation.vue";
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

// Only show particles on specific pages
const overrideParticles = ref(false)
const showParticles = computed(() => {
  if (overrideParticles.value) return false
  return route.meta.showParticles === true
})
</script>

<template>
  <div class="flex flex-col min-h-screen relative overflow-hidden">
    <transition name="particles-fade" mode="out-in">
      <Constellation v-if="showParticles" />
    </transition>

    <NavBar />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" @override-particles="overrideParticles = $event" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* Fade transition for particles */
.particles-fade-enter-active,
.particles-fade-leave-active {
  transition: opacity 0.6s ease;
}
.particles-fade-enter-from,
.particles-fade-leave-to {
  opacity: 0;
}
</style>
