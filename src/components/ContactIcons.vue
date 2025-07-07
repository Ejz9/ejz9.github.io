<template>
  <div class="flex justify-center space-x-6 mb-8">
    <a v-for="link in links" :key="link.href" :href="link.href" class="text-gray-300 hover:text-indigo-400 transition" :aria-label="link.label">
      <span class="sr-only">{{ link.label }}</span>
      <component :is="link.icon" class="h-8 w-8" />
    </a>
  </div>
</template>

<script setup>
import { h } from 'vue';

const props = defineProps({
  links: Array,
});
</script>