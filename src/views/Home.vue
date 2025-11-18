<script setup>
import {computed, nextTick, onMounted, ref, watchEffect} from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import {useProjectStore} from "../stores/projectStore.js";

const projectStore = useProjectStore()
const projects = computed(() => projectStore.projects)
const emit = defineEmits(['override-particles'])

const fullTitle = "Hello World!"
const title = ref('')
const isTyping = ref(true);
watchEffect(async () => {
  if (title.value !== '') return;

  for (let i = 0; i < fullTitle.length; i++) {
    title.value += fullTitle[i];
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  isTyping.value = false;
});

const commandText = ref('');
const commandResult = ref('');
const terminalReady = ref(false);
const showTerminal = ref(true);
const showContent = ref(false);
const startAnimation = async () => {
  const fullCommand = '> cd ~/portfolio && ./welcome.sh';
  for (let i = 0; i < fullCommand.length; i++) {
    commandText.value += fullCommand.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  await new Promise((resolve) => setTimeout(resolve, 300));

  const result = 'Loading personal portfolio...\nInitializing content...\n> echo Hello World!';
  for (let i = 0; i < result.length; i++) {
    commandResult.value += result.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * (30 - 10) + 10));
  }

  await new Promise((resolve) => setTimeout(resolve, 400));
  showTerminal.value = false;
  showContent.value = true;
  localStorage.setItem('animationHasRun', 'true');
  emit('override-particles', false)
  document.querySelector('header')?.classList.remove('hidden');
  document.querySelector('footer')?.classList.remove('hidden');
};

onMounted(async () => {
  const hasRun = localStorage.getItem('animationHasRun') === 'true';
  if (hasRun) {
    showTerminal.value = false;
    showContent.value = true;
    return;
  }

  emit('override-particles', true)
  document.querySelector('nav')?.classList.add('hidden');
  document.querySelector('footer')?.classList.add('hidden');

  await nextTick();
  requestAnimationFrame(() => {
    terminalReady.value = true;
  });
  await startAnimation();
});
</script>

<!--drop-shadow-[0_0_0.3rem_#7c3aed] -->

<template>
  <div class="flex flex-col items-center justify-center text-center ">

    <div
        v-if="showTerminal"
        class="fixed top-1/4 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[500px] bg-black/90 text-green-400 font-mono text-sm p-6 rounded-lg border border-green-500 shadow-xl z-50 transition duration-300 ease-in-out"
        :class="{ 'opacity-0 invisible': !terminalReady, 'opacity-100 visible': terminalReady }"
    >
      <div class="flex items-center mb-2 border-b border-border pb-1">
        <div class="flex space-x-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="ml-2 text-gray-400 text-xs">terminal</div>
      </div>

      <div class="text-left whitespace-pre-wrap break-words">
        <div>
          {{ commandText }}<span v-if="commandText.length < commandText.length" class="animate-blink">▌</span>
        </div>
        <div v-if="commandResult">
          {{ commandResult }}<span v-if="showTerminal" class="animate-pulse">▌</span>
        </div>
      </div>
    </div>

    <section v-if="showContent">
      <h1 class="mt-20 mb-4 text-5xl text-gradient font-extrabold font-mono whitespace-pre text-[var(--color-highlight)] [filter:drop-shadow(0_0_0.3rem_var(--color-highlight))]">{{ title }}<span v-if="title.length < fullTitle.length" class="blinking-cursor text-gradient">▌</span></h1>
      <h1 class="text-5xl font-bold text-text-accent mb-4">Edward Zurakowski</h1>
      <h3 class="text-2xl font-light text-text-muted mb-8">Full Stack Tinkerer</h3>
      <div class="mt-8 inline-flex gap-4">
        <router-link to="/projects" class="btn btn-primary text-white">
          View Projects
        </router-link>
        <router-link to="/contact" class="btn btn-outline text-black">
          Contact Me
        </router-link>
      </div>
    </section>

    <section v-if="showContent">
      <h2 class="mt-20 text-3xl text-gradient font-bold">About Me</h2>
      <p class="mt-4 text-lg">
        I'm a passionate computer science student focused on cybersecurity and full-stack development. <br>
        I love building tools, contributing to open-source projects, and learning by doing.
      </p>
        <router-link to="/About" class="text-accent font-bold inline-flex items-center gap-2 mt-4 underline">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </router-link>
    </section>

    <section class="mt-20 text-center" v-if="showContent">
      <h2 class="text-3xl text-gradient font-bold mb-4">Projects</h2>
      <div class="flex flex-wrap justify-center gap-6">
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

    <section v-if="showContent">
      <h2 class="mt-20 text-2xl text-gradient font-semibold">Let's Work Together</h2>
      <p class="mt-4 text-lg">Whether it's a personal project, open-source idea, or just to connect - feel free to reach out.</p>
      <router-link to="/contact" class="btn btn-primary mt-8">
        Contact Me
      </router-link>
    </section>
  </div>
</template>

<style scoped>

</style>