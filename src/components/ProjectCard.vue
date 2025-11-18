<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  tags: Array,
  technologies: Array
})
</script>
bg-white/10 dark:bg-zinc-900/50 shadow-lg hover:shadow-indigo-500/20 backdrop-blur-md hover:shadow-2xl transition-colors duration-300
<template>
  <div class="card-glass rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/20 hover:shadow-2xl transition duration-200 hover:-translate-y-2">
    <img v-if="image" :src="image" class="w-full h-48 object-cover" alt="Project Image">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="">{{ description }}</p>
    </div>
    <div class="flex flex-wrap gap-2 mb-4 text-center px-6">
      <span v-if="tags" v-for="tag in tags.slice(0,4)" class="bg-accent text-text text-xs px-3 py-1 rounded-full">{{ tag }}</span>
      <span v-if="technologies" v-for="tech in technologies.slice(0,4)" class="bg-accent text-text text-xs px-2 py-1 rounded">{{ tech }}</span>
      <span v-if="technologies.length > 4" class="bg-accent text-text text-xs px-2 py-1 rounded">+{{ technologies.length - 4 }}</span>
    </div>
    <div>
      <router-link :to="`/projects/${link}`" class="btn items-center">
        View Project
        <span class="sr-only">View Project</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
    </div>
  </div>
</template>