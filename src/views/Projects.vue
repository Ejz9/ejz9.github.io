<!-- src/views/Projects.vue -->
<script setup>
import { useUiStore } from '@/stores/uiStore';
const uiStore = useUiStore();
uiStore.setShowNavbar(true)
uiStore.setShowFooter(true)

import { useProjectStore } from '@/stores/projectStore'
import { computed } from 'vue'

const projectStore = useProjectStore()
const projects = computed(() => projectStore.projects)
</script>

<template>
  <div class="text-text bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
            v-for="project in projects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-indigo-400">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.heading }}</p>

            <div class="flex flex-wrap mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-gray-700 text-xs text-indigo-300 px-2 py-1 rounded mr-2 mb-2">
                {{ tech }}
              </span>
            </div>

            <div class="flex space-x-4 mt-4">
              <span class="text-indigo-400 hover:text-indigo-300">View Project</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

