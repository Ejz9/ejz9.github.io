<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import {useProjectStore} from "../stores/projectStore.js";
import {computed} from "vue";

const projectStore = useProjectStore()
const projects = computed(() => projectStore.projects)
</script>

<template>
<div class="mx-auto py-16 md:px-0 text-center justify-center max-w-6xl">
  <h1 class="text-4xl font-bold mb-12">My Projects</h1>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <router-link v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`">
      <ProjectCard
          :title= "project.name"
          :description="project.heading"
          :technologies="project.technologies"
          :link="project.id"
          :image="project.image"
      />
    </router-link>
  </div>
</div>
</template>

<style scoped>

</style>