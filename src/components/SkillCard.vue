<template>
  <div class="bg-slate-800/50 p-4 rounded-lg text-center">
    <div class="text-indigo-400 text-2xl mb-2 flex justify-center">
      <slot name="icon" />
    </div>
    <h3 class="font-medium">{{ name }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
});
</script>
