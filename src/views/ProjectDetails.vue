<script setup lang="ts">

import {computed, onMounted} from "vue";
import { useProjectStore } from "../stores/projectStore";
import {useRoute} from "vue-router";
const projectStore = useProjectStore()

const route = useRoute()

onMounted(() => {
  projectStore.selectProject(route.params.id)
})

const project = computed(() => projectStore.selectedProject)
</script>

<template>
<div v-if="project" class="mx-auto md:py-16 md:px-0 max-w-4xl">
  <div class="block p-6 text-text">
    <h1 class="text-4xl font-bold mb-6">{{ project.name }}</h1>

    <img :src="project.image" class="w-full h-64 object-cover rounded-lg mb-6" alt="Project Image">

    <h3 class="text-lg font-semibold mb-4">{{ project.heading }}</h3>
    <p class="mb-4">{{ project.description }}</p>

    <div>
    <span  v-for="tech in project.technologies" :key="tech" class="inline-flex bg-accent text-text text-sm px-3 py-1 rounded mr-2 mb-2">
      {{ tech }}
    </span>
    </div>

    <div class="space-x-4 mt-4">
      <a v-if="project.code" :href="project.code" target="_blank" class="text-accent hover:text-accent-hover underline">View Code</a>
      <a v-if="project.demo" :href="project.demo" target="_blank" class="text-accent hover:text-accent-hover underline">Live Demo</a>
    </div>

    <div class="text-center my-10 text-3xl">
      <router-link to="/projects" class="btn btn-primary mt-3">
        Back to Projects
      </router-link>
    </div>
  </div>
</div>

  <div v-else class="text-center my-125 text-3xl">
    <p class="text-text">Project not found.</p>
    <router-link to="/projects" class="inline-block btn btn-primary mt-3">Back to Projects</router-link>
  </div>
</template>

<style scoped>

</style>