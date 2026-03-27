<template>
  <div class="flex justify-center space-x-6 mb-8">
    <a v-for="link in links" :key="link.href" :href="link.href" :aria-label="link.label">
      <span class="sr-only">{{ link.label }}</span>
      <component :is="link.icon" class="w-8 h-8"/>
    </a>
  </div>
</template>

<script setup>
defineProps({
  links: Array
});
</script>