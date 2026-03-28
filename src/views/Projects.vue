<script setup>

import projects from "../projects.json";
import ProjectCard from "@/components/ProjectCard.vue";
</script>

<template>
  <div class="container mx-auto py-16 text-center">
    <h1 class="text-4xl font-bold mb-12">My Projects</h1>
    
    <div class="grid grid-cols-1 gap-8 mx-8 md:grid-cols-2 lg:grid-cols-3">
      <router-link
          v-for="project in projects"
          :key="project.id"
          :to="`/projects/${project.id}`"
      >
        <ProjectCard
            :title="project.name"
            :description="project.heading"
            :technologies="project.technologies"
            :link="project.id"
            :image="project.image || project.images[0]"
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>