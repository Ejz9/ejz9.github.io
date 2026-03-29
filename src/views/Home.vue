<script setup>
import {Button} from "@/components/ui/button/index.ts";
import {Icon} from "@iconify/vue";
import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/projects.json";
</script>

<template>
  <div class="flex flex-col items-center text-center mx-4">
    <section class="mb-20">
      <h1 class="text-5xl font-extrabold font-mono text-gradient typing-text mb-4">Hello World!</h1>
      <h1 class="text-5xl font-bold mb-4">Edward Zurakowski</h1>
      <h3 class="text-2xl font-light mb-8">Full Stack Tinkerer</h3>
      <div class="mt-8 inline-flex gap-4">
        <Button as-child variant="default" class="text-lg p-8">
          <router-link to="/projects">
            View Projects
          </router-link>
        </Button>
        <Button as-child variant="outline" class="text-lg p-8">
          <router-link to="/contact">
            Contact Me
          </router-link>
        </Button>
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-3xl text-gradient font-bold">About Me</h2>
      <p class="text-lg mt-4 px-4">
        I'm a passionate computer science student focused on cybersecurity and full-stack development. <br>
        I love building tools, contributing to open-source projects, and learning by doing.
      </p>
      <Button as-child variant="link" class="font-bold underline-highlight mt-4 ">
        <router-link to="/About">
          Learn More
          <Icon icon="material-symbols:arrow-right-alt" />
        </router-link>
      </Button>
    </section>

    <section class="mb-20">
      <h2 class="text-3xl text-gradient font-bold">Projects</h2>
      <div class="grid md:grid-cols-3 gap-6 mt-4">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            :title="project.name"
            :description="project.heading"
            :technologies="project.technologies"
            :link="project.id"
        />
      </div>
    </section>

    <section class="mb-20">
      <h2 class="text-2xl text-gradient font-bold">Let's Work Together!</h2>
      <p class="text-lg mt-4 px-4">Whether it's a personal project, open-source idea, or just to connect - feel free to reach out.</p>
      <Button as-child variant="default" class="text-lg mt-8 p-8">
        <router-link to="/contact">
          Contact Me
        </router-link>
      </Button>
    </section>
  </div>
</template>

<style scoped>
.typing-text {
  width: 12ch;
  justify-self: center;
  white-space: nowrap;
  animation: typing 1.2s steps(12) forwards, blink 0.5s step-end infinite alternate;
}

@keyframes typing {
  from { width: 0 }
}

@keyframes blink {
  50% { border-color: transparent }
}
</style>