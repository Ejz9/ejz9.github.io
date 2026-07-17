<script setup lang="ts">
import projects from "@/projects.json"
import {computed} from "vue";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel/index";
import {Button} from "@/components/ui/button/index";
import {Icon} from "@iconify/vue";


const props = defineProps({
  id: String
})

const project = computed(() => projects.find(project => project.id === props.id))
</script>

<template>
  <div v-if="project" class="container mx-auto max-w-5xl px-4 flex flex-col items-center">

    <h1 class="text-4xl font-bold mb-6 text-center">{{ project.name }}</h1>

    <div class="mb-10">
      <img v-if="project.image" :src="project.image" alt="Project Image" class="rounded-lg object-cover shadow-lg" />
      <Carousel v-if="project.images" class="max-w-7xl">
        <CarouselContent>
          <CarouselItem v-for="(image, index) in project.images" :key="index">
            <img :src="image" alt="Project Image" class="rounded-lg" />
            <span class="backdrop-blur-sm font-medium mx-4 my-2 md:hidden pointer-events-none">{{ index + 1 }}/{{ project.images.length }}</span>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious class="hidden md:flex" />
        <CarouselNext class="hidden md:flex" />
      </Carousel>
    </div>

    <div class="mb-8">
        <div class="flex justify-between items-center mb-4 gap-4">
          <h3 class="text-2xl font-semibold">{{ project.heading }}</h3>
          <span 
          class="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm text-white"
          :class="{
            'bg-amber-600': project.status === 'inp',
            'bg-emerald-600': project.status === 'maintained',
            'bg-primary': project.status === 'complete'
            }"
            >
            {{ project.status === 'inp' ? 'In Progress' : project.status }}
          </span>
        </div>
      <p class="mb-4 text-muted-foreground leading-relaxed" v-for="paragraph in project.description" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>

    <div class="w-full flex flex-col md:flex-row justify-between items-start md:items-center">

      <div class="flex flex-wrap gap-2">
        <span
            v-for="tech in project.technologies"
            :key="tech"
            class="bg-secondary text-secondary-foreground text-sm font-medium rounded-md px-3 py-1"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex gap-4 mt-4 md:mt-0">
        <Button v-if="project.code" as="a" variant="outline" :href="project.code" target="_blank">
          <Icon icon="material-symbols:code" />
          View Code
        </Button>
        <Button v-if="project.demo" as="a" :href="project.demo" target="_blank">
          <Icon icon="material-symbols:open-in-new-rounded" />
          Live Demo
        </Button>
      </div>

    </div>

    <div class="mt-16">
      <Button as-child variant="ghost" class="gap-2">
        <router-link to="/projects">
          <Icon icon="material-symbols:arrow-left-alt" />
          Back to Projects
        </router-link>
      </Button>
    </div>

  </div>

  <div v-else class="container mx-auto flex flex-col min-h-[75vh] items-center justify-center">
    <p class="text-xl mb-4 text-muted-foreground">Project not found.</p>
    <Button as-child>
      <router-link to="/projects">
        <Icon icon="material-symbols:arrow-left-alt" />
        Back to Projects
      </router-link>
    </Button>
  </div>
</template>

<style scoped>

</style>