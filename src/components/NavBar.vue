<script setup>
import ModeToggle from "@/components/ModeToggle.vue";
import {useRoute} from "vue-router";
import MobileNav from "@/components/MobileNav.vue";


const route = useRoute()

const navItems = [
  { name: 'Home', path: '/', icon: 'material-symbols:home'},
  { name: 'Projects', path: '/projects', icon: 'material-symbols:work'},
  { name: 'Resume', path: '/resume', icon: 'material-symbols:description'},
  { name: 'About', path: '/about', icon: 'material-symbols:person'},
  { name: 'Contact', path: '/contact', icon: 'material-symbols:contact-page'}
];

const externalLinks = [
  { name: 'ByteStash', href: 'https://bytes.ztree.dev/public/snippets' }
];
</script>

<template>
  <nav class="container mx-auto items-center bg-background/95 backdrop-blur-sm">
    <ul class="hidden md:flex space-x-4 my-4">
      <li v-for="item in navItems" :key="item.path">
        <router-link :to="item.path" class="relative px-2 py-2 font-medium">
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300"
                :class="route.path === item.path ? 'scale-x-100' : 'scale-x-0'" />
        </router-link>
      </li>
      <li v-for="link in externalLinks" :key="link.href">
        <a
          :href="link.href"
          class="px-2 py-2 font-medium hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
      </li>
      <li class="ml-auto"><ModeToggle /></li>
    </ul>
    <div class="md:hidden ml-auto">
      <MobileNav :navItems="navItems" :externalLinks="externalLinks" :route="route" />
    </div>
  </nav>
</template>

<style scoped>

</style>