<script setup lang="ts">
import experiences from "@/experiences.json";
import {Icon} from "@iconify/vue";

const experienceIcons: { [key: string]: string } = {
  "education": "material-symbols:school",
  "work": "material-symbols:work"
}
</script>

<template>
  <div class="container mx-auto max-w-5xl px-4">
    <h1 class="text-4xl font-bold text-center mb-6">About Me</h1>
    <h3 class="text-2xl font-semibold text-muted-foreground text-center mb-12">Learn more about my background, experience, and journey.</h3>

    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Who am I?</h2>
      <div class="card rounded-lg shadow-lg  p-6 leading-relaxed backdrop-blur-sm">
        <p class="mb-4">
          I'm a passionate computer science student with a strong interest in building software that solves real-world problems.
          My journey into technology began when I was younger, playing video games, and I've been fascinated by how code can create powerful tools and experiences ever since.
        </p>
        <p>
          When I'm not coding, you might find me exploring open-source projects, playing video games with friends, or tinkering with new technologies.
          I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
        </p>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-6">My Journey</h2>
      <div class="flex gap-4" v-for="experience in experiences" :key="experience.title">
        <div class="flex flex-col items-center">
          <Icon
              v-if="experienceIcons[experience.type]"
              :icon="experienceIcons[experience.type]"
              class="mt-2" />
          <div class="w-0.5 h-full bg-muted-foreground mt-2"/>
        </div>

        <div class="mb-8">
          <h3 class="text-xl font-bold">{{ experience.title }}</h3>
          <p class="text-primary">{{ experience.organization }}</p>
          <p class="text-muted-foreground text-sm mb-2">{{ experience.period }}</p>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>