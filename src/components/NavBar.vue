<!-- src/components/NavBar.vue -->
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const scrolled = ref(false);

// Track scroll for navbar appearance
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close mobile menu when route changes
watch(route, () => {
  isMenuOpen.value = false;
});
</script>

<template>
  <nav :class="[
    'fixed w-full z-10 transition-all duration-300',
    scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo
        <router-link to="/" class="group flex items-center space-x-2">
          <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
            <span class="text-white font-bold">EZ</span>
          </div>
          <span class="text-white font-semibold tracking-wide">Edward<span class="text-indigo-400">Z</span></span>
        </router-link>
        -->

        <!-- Desktop menu with underline animations -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link to="/" class="relative px-3 py-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors duration-200">
            Home
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/projects" class="relative px-3 py-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors duration-200">
            Projects
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/projects' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/skills" class="relative px-3 py-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors duration-200">
            Skills
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/skills' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/about" class="relative px-3 py-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors duration-200">
            About
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/about' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/contact" class="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200">
            Contact
          </router-link>
          <a href="https://bytes.ztree.dev/" class="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200">
            ByteStash
          </a>
        </div>

        <!-- Mobile menu button - only visible on mobile
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-300 hover:text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        -->
      </div>
    </div>

    <!-- Mobile menu with slide-down animation -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 animate-slideDown">
        <router-link to="/" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-700">Home</router-link>
        <router-link to="/projects" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-700">Projects</router-link>
        <router-link to="/skills" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-700">Skills</router-link>
        <router-link to="/about" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-700">About</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600">Contact</router-link>
      </div>
    </div>
  </nav>
  <div class="h-16"></div> <!-- Spacer -->
</template>

<style scoped>
@keyframes slideDown {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}
</style>