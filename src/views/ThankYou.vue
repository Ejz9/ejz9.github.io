<script setup >
import confetti from 'canvas-confetti';
import { onMounted } from 'vue';
import {useUiStore} from "@/stores/uiStore.js";

const uiStore = useUiStore();
uiStore.setShowNavbar(true)
uiStore.setShowFooter(true)

onMounted(() => {
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });
});
</script>

<template>
  <div class="text-text bg-background flex flex-col items-center justify-center px-4 py-16">
    <div class="bg-white dark:bg-slate-800 rounded-xl shadow-lg max-w-xl w-full p-8 text-center">
      <div class="flex justify-center mb-4">
        <div class="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
          <svg class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
      </div>
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Message Sent!</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Thanks for reaching out — I'll get back to you as soon as possible.
      </p>
      <router-link to="/" class="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-200">
        Return Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>