<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUiStore } from '@/stores/uiStore';
import ProjectCard from "@/components/ProjectCard.vue";
import SkillCard from "@/components/SkillCard.vue";

// State for controlling animations
const commandText = ref('');
const commandResult = ref('');
const animationStage = ref(0);
// 0: Initial state
// 1: Command typing
// 2: Command executed, showing result
// 3: Hello World appearing
// 4: Content fading in
// 5: Animation completed

// Development mode toggle - set to true to skip animations
const devMode = ref(false);

const showTerminal = computed(() => !devMode.value && animationStage.value < 5);
const showHelloWorld = computed(() => !devMode.value && animationStage.value >= 3 && animationStage.value < 5);
const showContent = computed(() => devMode.value || animationStage.value >= 4);
const uiStore = useUiStore();

// Keyboard shortcut to toggle dev mode
const toggleDevMode = () => {
  devMode.value = !devMode.value;
  if (devMode.value) {
    // Skip to the end state when enabling dev mode
    animationStage.value = 5;
    uiStore.setShowNavbar(true);
  }
};

// Register keyboard shortcut (Ctrl+Shift+D)
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      toggleDevMode();
      e.preventDefault();
    }
  });
  
  // Check URL parameter for dev mode
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('dev') === 'true') {
    devMode.value = true;
  }
  
  // Initialize page
  if (devMode.value) {
    // Skip animation in dev mode
    animationStage.value = 5;
    uiStore.setShowNavbar(true);
  } else {
    // Start with navbar hidden and begin animation
    uiStore.setShowNavbar(false);
    startAnimation();
  }
});

const startAnimation = async () => {
  // Skip animation if in dev mode
  if (devMode.value) {
    animationStage.value = 5;
    uiStore.setShowNavbar(true);
    return;
  }
  
  // Start typing command
  animationStage.value = 1;
  
  const fullCommand = "> cd ~/portfolio && ./welcome.sh";
  const typingSpeed = 50; // Faster typing (milliseconds per character)
  
  // Type command with faster speed
  for (let i = 0; i < fullCommand.length; i++) {
    commandText.value += fullCommand.charAt(i);
    await new Promise(resolve => setTimeout(resolve, typingSpeed));
  }
  
  // Short pause before execution
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Show command result
  animationStage.value = 2;
  
  // Type out the command result character by character
  const result = "Loading personal portfolio...\nInitializing content...\nWelcome!";
  for (let i = 0; i < result.length; i++) {
    commandResult.value += result.charAt(i);
    // Type result faster than the command
    await new Promise(resolve => setTimeout(resolve, Math.random() * 20 + 10));
  }
  
  // Short pause before showing Hello World
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Show Hello World
  animationStage.value = 3;
  
  // Show navbar with Hello World
  uiStore.setShowNavbar(true);
  
  // Wait for Hello World to be visible for a moment
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Start fading in main content
  animationStage.value = 4;
  
  // Complete animation and remove terminal after content has faded in
  setTimeout(() => {
    animationStage.value = 5;
  }, 800); // This matches the duration of the content fade-in
};
</script>

<template>
  <div class="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8 relative">
    <!-- Dev mode indicator -->
    <div v-if="devMode" class="fixed top-2 right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-md z-50">
      DEV MODE (Ctrl+Shift+D to toggle)
    </div>
    
    <!-- Terminal with more sophisticated styling -->
    <div v-if="showTerminal" 
         class="fixed top-4 left-4 w-auto max-w-md bg-black/90 p-4 rounded-md font-mono text-sm text-green-400 shadow-lg border border-gray-700 z-20 transition-opacity duration-300"
         :class="{'opacity-0': animationStage >= 3}">
      <div class="flex items-center mb-1 border-b border-gray-700 pb-1">
        <div class="flex space-x-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="ml-2 text-gray-400 text-xs">terminal</div>
      </div>
      <div class="terminal-content">
        <div>{{ commandText }}<span v-if="animationStage === 1" class="animate-pulse">▌</span></div>
        <div v-if="animationStage >= 2" class="whitespace-pre-line">{{ commandResult }}<span v-if="animationStage === 2" class="animate-pulse">▌</span></div>
      </div>
    </div>
    
    <div class="w-full mx-auto px-4">
      <!-- Fixed position transition elements -->
      <div class="relative min-h-[600px]">
        <!-- "echo Hello World" transition animation -->
        <div v-if="showHelloWorld"
            class="absolute inset-0 flex items-center justify-center transition-all duration-800"
            :class="[
              animationStage >= 4 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            ]">
          <h1 class="text-5xl font-bold text-red-400 drop-shadow-[0_0_0.3rem_#7c3aed] animate-pulse-slow">
            > echo Hello World!
          </h1>
        </div>

        <!-- Main content with fade-in animation -->
        <div
            v-if="showContent"
            class="absolute inset-0 transition-all duration-800 transform"
            :class="showContent && !devMode ? 'opacity-100 translate-y-0' : devMode ? 'opacity-100' : 'opacity-0 translate-y-4'"
        >
          <div class="text-center">
            <!-- Hero Section -->
            <h1 class="text-5xl font-bold pb-4 text-indigo-400 drop-shadow-[0_0_0.3rem_#7c3aed] animate-pulse-slow">
              Hello World!
            </h1>
            <h1 class="text-5xl font-bold pb-4">Edward Zurakowski</h1>
            <h3 class="text-2xl font-light text-gray-300 mb-8">Full Stack Tinkerer</h3>

            <div class="pt-8 inline-flex gap-2">
              <router-link to="/projects" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xl py-6 px-10 rounded-lg mr-4 transition duration-200">View Projects</router-link>
              <router-link to="/contact" class="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-medium text-xl py-6 px-10 rounded-lg transition duration-200">Contact Me</router-link>
            </div>
          </div>

          <!-- About Me Section -->
          <section class="text-center mx-auto pt-2 px-4">
            <h2 class="text-3xl font-semibold mb-4 text-indigo-300 flex">About Me</h2>
            <p class="text-gray-300 text-lg leading-relaxed">
              I’m a passionate Computer Science student focused on cybersecurity and full-stack development. <br>
              I love building tools, contributing to open-source projects, and learning by doing.
            </p>
            <router-link to="/about" class="inline-block mt-4 text-indigo-400 hover:text-white underline">
              Learn more →
            </router-link>
          </section>

          <!-- Projects Section -->
          <section id="projects" class="pt-6 mb-16 px-4">
            <h2 class="text-3xl font-bold pb-8 text-center text-indigo-300 flex">Projects</h2>
            <div class="inline-flex gap-6">
                <ProjectCard
                    title="Portfolio Site"
                    description="My personal site built with Vue and Tailwind."
                    :tags="['Vue.js', 'TailwindCSS']"
                    link="https://example.com"
                />
                <ProjectCard
                    title="Cybersecurity Tool"
                    description="A Python script that audits system security."
                    :tags="['Python', 'Cybersecurity']"
                    link="#"
                />
            </div>
          </section>

          <!-- Skills Section -->
          <section id="skills" class="mb-16 px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-indigo-300">Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
              <!-- Web Development -->
              <SkillCard name="Web Development">
                <template #icon>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H2V4zM2 9h20v11a1 1 0 01-1 1H3a1 1 0 01-1-1V9z" />
                  </svg>
                </template>
              </SkillCard>

              <!-- Cybersecurity -->
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


          <!-- Final CTA -->
          <section class="mt-24 px-4 text-center">
            <h2 class="text-2xl font-semibold mb-4 text-indigo-300">Let’s Work Together</h2>
            <p class="text-gray-300 text-lg mb-6">
              Whether it’s a personal project, open-source idea, or just to connect — feel free to reach out.
            </p>
            <router-link to="/contact" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xl py-4 px-8 rounded-lg transition duration-200">
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 1rem #7c3aed;
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 1.5rem #7c3aed;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
</style>