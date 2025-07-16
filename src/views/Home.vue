<script setup>
import {ref, onMounted, computed, watchEffect, nextTick} from 'vue';
import { useUiStore } from '@/stores/uiStore';
import ProjectCard from "@/components/ProjectCard.vue";

// UI state
const uiStore = useUiStore();
const devMode = ref(false);
const animationStage = ref(0); // 0 = init, 1 = typing command, ..., 5 = finished

// Terminal text
const commandText = ref('');
const commandResult = ref('');

// Page title typing
const fullTypedTitle = "Hello World!";
const typedTitle = ref('');

// Constants
const TYPING_SPEED = 50;
const RESULT_TYPING_MIN = 10;
const RESULT_TYPING_MAX = 30;

// Animation visibility
const terminalReady = ref(false);
const showTerminal = computed(() => !devMode.value && animationStage.value < 5);
const showContent = computed(() => devMode.value || uiStore.animationHasRun || animationStage.value >= 4);

// Content animation class
const contentAnimationClass = computed(() => {
  return devMode.value || showContent.value
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-4';
});

// Typewriter effect for the main heading
watchEffect(async () => {
  if ((animationStage.value === 4 || devMode.value || uiStore.animationHasRun) && typedTitle.value === '') {
    for (let i = 0; i < fullTypedTitle.length; i++) {
      typedTitle.value += fullTypedTitle[i];
      await new Promise(resolve => setTimeout(resolve, 75));
    }
  }
});

// Dev mode toggle (Ctrl+Shift+D)
const toggleDevMode = () => {
  devMode.value = !devMode.value;
  if (devMode.value) {
    animationStage.value = 5;
    uiStore.setShowNavbar(true);
  }
};

// Start animation sequence
const startAnimation = async () => {
  if (devMode.value) {
    animationStage.value = 5;
    uiStore.setShowNavbar(true);
    return;
  }

  animationStage.value = 1;

  const fullCommand = "> cd ~/portfolio && ./welcome.sh";
  for (let i = 0; i < fullCommand.length; i++) {
    commandText.value += fullCommand.charAt(i);
    await new Promise(resolve => setTimeout(resolve, TYPING_SPEED));
  }

  await new Promise(resolve => setTimeout(resolve, 300));

  animationStage.value = 2;

  const result = "Loading personal portfolio...\nInitializing content...\n> echo Hello World!";
  for (let i = 0; i < result.length; i++) {
    commandResult.value += result.charAt(i);
    await new Promise(resolve =>
        setTimeout(resolve, Math.random() * (RESULT_TYPING_MAX - RESULT_TYPING_MIN) + RESULT_TYPING_MIN)
    );
  }

  await new Promise(resolve => setTimeout(resolve, 100));

  animationStage.value = 3;
  uiStore.setShowNavbar(true);
  uiStore.setShowFooter(true);

  //await new Promise (resolve => setTimeout(resolve, 400));

  animationStage.value = 4;

  await new Promise(resolve => setTimeout(resolve, 400));
  animationStage.value = 5;

  uiStore.setAnimationHasRun(true);
};

// Page load
onMounted(() => {
  // Listen for Ctrl+Shift+D to toggle dev mode
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      toggleDevMode();
      e.preventDefault();
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('dev') === 'true') {
    devMode.value = true;
  }

  // Wait until page assets are fully loaded (fonts, styles, etc.)
  window.onload = async () => {
    await nextTick();
    requestAnimationFrame(() => {
      terminalReady.value = true;
    });

    if (devMode.value || uiStore.animationHasRun) {
      animationStage.value = 4;
      uiStore.setShowNavbar(true);
      uiStore.setShowFooter(true);
    } else {
      uiStore.setShowNavbar(false);
      uiStore.setShowFooter(false);
      await startAnimation();
    }
  };
});
</script>

<template>
  <div class="text-text bg-background py-16">
    <!-- Dev mode indicator -->
    <div v-if="devMode" class="fixed top-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md z-50">
      DEV MODE (Ctrl+Shift+D to toggle)
    </div>

    <!-- Terminal -->
    <div v-if="showTerminal"
         class="fixed left-1/2 -translate-x-1/2 w-[90vw] sm:w-[500px] bg-black/95 p-6 rounded-lg font-mono text-sm text-green-400 shadow-2xl border border-green-500 z-50 transition duration-300 ease-in-out scale-100 pointer-events-none"
         :class="{
       'invisible opacity-0': !terminalReady,
       'visible opacity-100': terminalReady && animationStage < 3,
       'opacity-0 scale-105': animationStage >= 3
     }"
         style="top: 25vh">
      <!-- Terminal window -->
      <div
          class="w-[90vw] sm:w-[500px] bg-black/95 p-6 rounded-lg font-mono text-sm text-green-400 shadow-2xl border border-green-500 transition-transform duration-500 ease-in-out animate-terminal-pulse"
          :class="{ 'scale-105 opacity-0': animationStage >= 3, 'scale-100 opacity-100': animationStage < 3 }"
      >
        <div class="flex items-center mb-1 border-b border-border pb-1">
          <div class="flex space-x-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="ml-2 text-gray-400 text-xs">terminal</div>
        </div>

        <div class="terminal-content">
          <div>{{ commandText }}<span v-if="animationStage === 1" class="animate-blink">▌</span></div>
          <div v-if="animationStage >= 2" class="whitespace-pre-line">{{ commandResult }}<span v-if="animationStage === 2" class="animate-pulse">▌</span></div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto">
      <div class="relative">
        <div v-if="showContent"
             :class="['transition-all duration-800 transform', contentAnimationClass]">
          <div id="hero" class="text-center">
            <!-- Hero section -->
            <h1 class="text-5xl font-bold pb-4 text-indigo-400 drop-shadow-[0_0_0.3rem_#7c3aed]">
              {{ typedTitle }}<span v-if="typedTitle.length < fullTypedTitle.length" class="animate-blink">▌</span>
            </h1>
            <h1 class="text-5xl font-bold pb-4">Edward Zurakowski</h1>
            <h3 class="text-2xl font-light text-text-muted mb-8">Full Stack Tinkerer</h3>

            <div class="mt-8 inline-flex gap-4">
              <router-link to="/projects" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xl py-4 px-8 rounded-lg transition duration-200">
                View Projects
              </router-link>
              <router-link to="/contact" class="border border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white font-medium text-xl py-4 px-8 rounded-lg transition duration-200">
                Contact Me
              </router-link>
            </div>
          </div>

          <!-- About Me -->
          <section id="aboutMe" class="mt-20 text-center">
            <h2 class="text-3xl font-semibold text-indigo-300 mb-4">About Me</h2>
            <p class="text-text-muted text-lg leading-relaxed">
              I’m a passionate Computer Science student focused on cybersecurity and full-stack development. <br>
              I love building tools, contributing to open-source projects, and learning by doing.
            </p>
            <router-link to="/about" class="inline-block mt-4 text-indigo-400 hover:text-white underline">
              Learn more →
            </router-link>
          </section>

          <!-- Projects -->
          <section id="projects" class="mt-20 text-center">
            <h2 class="text-3xl font-bold text-indigo-300 mb-4">Projects</h2>
            <div class="flex flex-wrap justify-center gap-6">
              <ProjectCard
                  title="My Portfolio"
                  description="My personal site built with Vue and Tailwind."
                  :tags="['Vite','Vue.js', 'TailwindCSS', 'Pinia']"
                  link="https://ztree.dev"
              />
              <ProjectCard
                  title="Dota-2-Stats"
                  description="A game statistic web application for Dota 2."
                  :tags="['Vite', 'Vue.js', 'Bootstrap', 'MongoDB']"
                  link="#"
              />
            </div>
          </section>

          <!-- Skills
          <section id="skills" class="mt-20">
            <h2 class="text-3xl font-bold text-center text-indigo-300 mb-4">Skills</h2>
            <div class="flex flex-wrap justify-center gap-6">
              <SkillCard name="Web Development">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H2V4zM2 9h20v11a1 1 0 01-1 1H3a1 1 0 01-1-1V9z" />
                  </svg>
                </template>
              </SkillCard>
              <SkillCard name="Cybersecurity">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 11c1.657 0 3-1.343 3-3V5a3 3 0 10-6 0v3c0 1.657 1.343 3 3 3zM5 20h14a2 2 0 002-2v-5a9 9 0 00-18 0v5a2 2 0 002 2z" />
                  </svg>
                </template>
              </SkillCard>
            </div>
          </section>
          -->

          <!-- CTA -->
          <section id="cta" class="mt-20 text-center">
            <h2 class="text-2xl font-semibold text-indigo-300 mb-4">Let’s Work Together</h2>
            <p class="text-text-muted text-lg mb-4">
              Whether it’s a personal project, open-source idea, or just to connect — feel free to reach out.
            </p>
            <router-link to="/contact" class="inline-block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xl py-4 px-8 rounded-lg transition duration-200">
              Contact Me
            </router-link>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-content {
  min-height: 60px;
  line-height: 1.5;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-start infinite;
}

@keyframes terminal-pulse {
  0%, 100% {
    box-shadow: 0 0 1rem rgba(34, 197, 94, 0.2), 0 0 0.5rem rgba(34, 197, 94, 0.1);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 1.5rem rgba(34, 197, 94, 0.3), 0 0 0.75rem rgba(34, 197, 94, 0.15);
    transform: scale(1.01);
  }
}
.animate-terminal-pulse {
  animation: terminal-pulse 2.5s ease-in-out infinite;
}


</style>