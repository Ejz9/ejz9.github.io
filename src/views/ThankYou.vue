<script setup>
import {Icon} from "@iconify/vue";
import {Button} from "@/components/ui/button/index.js";
import confetti from "canvas-confetti";
import {onMounted} from "vue";

onMounted(() => {
  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  })
})
</script>

<template>
  <div class="container mx-auto px-4 max-w-4xl text-center flex flex-col items-center justify-center min-h-[75vh]">
    <Icon icon="material-symbols:check-circle" class="text-primary size-12"/>
    <h1 class="text-2xl font-bold mb-4">Message Sent!</h1>
    <p class="text-xl mb-4">Thanks for reaching out! I'll get back to you as soon as possible.</p>
    <Button as-child variant="ghost">
      <router-link to="/">
        <Icon icon="material-symbols:arrow-left-alt" />
        Return Home
      </router-link>
    </Button>
  </div>
</template>

<style scoped>

</style>