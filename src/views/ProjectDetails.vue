<script setup>
import { useProjectStore } from '@/stores/projectStore'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

const projectStore = useProjectStore()
const route = useRoute()

// Set selected project based on URL
onMounted(() => {
  projectStore.selectProject(route.params.id)
})

const project = computed(() => projectStore.selectedProject)
</script>

<template>
  <div v-if="project" class="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">{{ project.title }}</h1>

      <img :src="project.image" class="w-full h-64 object-cover rounded-lg mb-6" alt="project image" />

      <p class="text-lg text-gray-300 mb-4">{{ project.description }}</p>

      <div class="flex flex-wrap mb-6">
        <span v-for="tech in project.technologies" :key="tech"
              class="bg-gray-700 text-sm text-indigo-300 px-3 py-1 rounded mr-2 mb-2">
          {{ tech }}
        </span>
      </div>

      <div class="space-x-4">
        <a :href="project.link" target="_blank" class="text-indigo-400 hover:text-indigo-300 underline">View Code</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="text-indigo-400 hover:text-indigo-300 underline">Live Demo</a>
      </div>
    </div>
  </div>

  <div v-else class=" text-center py-125 text-3xl">
    <p class="text-indigo-400">Project not found.</p>
    <router-link to="/projects" class="inline-block mt-3 text-red-400 !p-0">Back to Projects</router-link>
  </div>
</template>
