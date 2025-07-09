<template>
  <nav v-if="uiStore.showNavbar" :class="[
    'fixed w-full z-10 transition-all duration-300',
    scrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <!-- Desktop nav -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link to="/" class="relative px-3 py-2 text-sm font-medium text-text hover:text-indigo-300 transition-colors duration-200">
            Home
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/projects" class="relative px-3 py-2 text-sm font-medium text-text hover:text-indigo-300 transition-colors duration-200">
            Projects
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/projects' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/skills" class="relative px-3 py-2 text-sm font-medium text-text hover:text-indigo-300 transition-colors duration-200">
            Skills
            <span :class="[
              'absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 origin-left transition-transform duration-300',
              route.path === '/skills' ? 'scale-x-100' : ''
            ]"></span>
          </router-link>
          <router-link to="/about" class="relative px-3 py-2 text-sm font-medium text-text hover:text-indigo-300 transition-colors duration-200">
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
          <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Mobile nav -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-soft animate-slideDown">
        <router-link to="/" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-background-mute">Home</router-link>
        <router-link to="/projects" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-background-mute">Projects</router-link>
        <router-link to="/skills" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-background-mute">Skills</router-link>
        <router-link to="/about" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-text hover:bg-background-mute">About</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Contact</router-link>
      </div>
    </div>
  </nav>
  <div v-if="uiStore.showNavbar" class="h-16"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useUiStore } from '@/stores/uiStore';
import ThemeToggle from "@/components/ThemeToggle.vue";

const route = useRoute();
const uiStore = useUiStore();
const isMenuOpen = ref(false);
const scrolled = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50;
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(route, () => {
  isMenuOpen.value = false;
});
</script>
