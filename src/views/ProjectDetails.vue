<script setup>
import { useProjectStore } from '@/stores/projectStore'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'

import { useUiStore } from '@/stores/uiStore';
const uiStore = useUiStore();

const projectStore = useProjectStore()
const route = useRoute()

uiStore.setShowNavbar(true)
uiStore.setShowFooter(true)

// Set selected project based on URL
onMounted(() => {
  projectStore.selectProject(route.params.id)
})

const project = computed(() => projectStore.selectedProject)
</script>

<template>
  <div v-if="project" class="text-text bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-6">{{ project.title }}</h1>

      <img :src="project.image" class="w-full h-64 object-cover rounded-lg mb-6" alt="project image" />

      <h3 class="text-lg text-gray-300 mb-4">{{ project.heading }}</h3>
      <p class="text-gray-300 mb-4">{{ project.description }}</p>

      <div class="flex flex-wrap mb-6">
        <span v-for="tech in project.technologies" :key="tech"
              class="bg-gray-700 text-sm text-indigo-300 px-3 py-1 rounded mr-2 mb-2">
          {{ tech }}
        </span>
      </div>

      <div class="space-x-4">
        <a v-if="project.code" :href="project.code" target="_blank" class="text-indigo-400 hover:text-indigo-300 underline">View Code</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="text-indigo-400 hover:text-indigo-300 underline">Live Demo</a>
      </div>

      <div class=" text-center py-10 text-3xl">
        <router-link to="/projects" class="border mt-3 border-indigo-400 hover:bg-indigo-600 text-red-400 text-xl rounded-lg transition duration-200 py-4 px-8">Back to Projects</router-link>
      </div>
    </div>
  </div>

  <div v-else class=" text-center py-125 text-3xl">
    <p class="text-indigo-400">Project not found.</p>
    <router-link to="/projects" class="inline-block mt-3 text-red-400 !p-0">Back to Projects</router-link>
  </div>
</template>
