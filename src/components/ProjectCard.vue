<template>
  <div class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition duration-300">
    <div class="p-6 text-center">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-300 mb-4">{{ description }}</p>
      <div class="inline-flex flex-wrap gap-2 mb-4">
        <span
            v-for="(tag, index) in tags"
            :key="index"
            class="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <div>
        <a :href="link" class="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
          View Project
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  tags: Array,
  link: String,
});
</script>