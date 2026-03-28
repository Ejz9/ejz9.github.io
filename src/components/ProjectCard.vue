<script setup>
import {Button} from "@/components/ui/button/index.ts";
import {Icon} from "@iconify/vue";

defineProps({
  title: String,
  description: String,
  image: String,
  link: String,
  technologies: Array
})
</script>

<template>
  <div class="card shadow-lg hover:shadow-indigo-500/20 hover:shadow-2xl transition duration-200 hover:-translate-y-2 overflow-hidden">
    <img v-if="image" :src="image" alt="Project Image" class="w-full h-48 object-cover">
    <div class="m-6">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="flex flex-wrap gap-2 m-4 justify-center text-xs">
      <span v-if="technologies" v-for="tech in technologies.slice(0,4)" :key="tech" class="bg-primary px-2 py-1 rounded-full text-white">
        {{ tech }}
      </span>
      <span v-if="technologies.length > 4" class="bg-primary px-2 py-1 rounded-full text-white">
        +{{ technologies.length - 4 }}
      </span>
    </div>
    <Button as-child variant="link" class="text-lg font-semibold m-4 ">
      <router-link :to="`/projects/${link}`">
        View Project
        <Icon icon="material-symbols:arrow-right-alt" />
      </router-link>
    </Button>
  </div>
</template>