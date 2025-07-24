<script setup>
import confetti from 'canvas-confetti'
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'


const parent = ref(null)

onMounted(() => {
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  })
})
</script>

<template>
  <div class="text-text bg-background flex flex-col items-center justify-center px-4 py-20 min-h-[calc(100vh-10rem)]">
    <div
        class="w-full max-w-xl p-8 text-center rounded-xl border border-border bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md shadow-2xl transition-colors duration-300"
    >
      <div class="flex justify-center mb-4">
        <div class="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
          <svg class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h1 class="text-2xl font-semibold text-foreground">Message Sent!</h1>
      <p class="mt-2 text-muted-foreground">
        Thanks for reaching out — I'll get back to you as soon as possible.
      </p>
      <router-link to="/" class="mt-6 inline-block">
        <Button class="btn-outline" as="span">Return Home</Button>
      </router-link>
    </div>
  </div>
</template>
