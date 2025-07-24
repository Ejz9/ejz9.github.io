<script setup>
import {ref, computed, onMounted, onBeforeUnmount, watch, nextTick} from 'vue'
import { useRoute } from 'vue-router'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const route = useRoute()
const isScrolled = ref(false)
const isOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const externalLinks = [
  { name: 'ByteStash', href: 'https://bytes.ztree.dev/public/snippets' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
watch(isOpen, async (open) => {
  await nextTick()
  document.body.style.overflow = open ? 'hidden' : ''
})
watch(() => route.fullPath, () => {
  isOpen.value = false
  document.body.style.overflow = ''
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = '' // Reset on component destroy
})
</script>

<template>
  <nav :class="['fixed w-full z-20 transition-all duration-300', isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4']">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-4 items-center">
        <li v-for="item in navItems" :key="item.path">
          <router-link
              :to="item.path"
              class="relative px-3 py-2 text-sm font-medium text-text hover:text-text-accent transition-colors"
          >
            {{ item.name }}
            <span
                :class="[
                'absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300',
                route.path === item.path ? 'scale-x-100' : 'scale-x-0'
              ]"
            />
          </router-link>
        </li>
        <li v-for="link in externalLinks" :key="link.href">
          <a
              :href="link.href"
              class="btn-outline px-3 py-2 text-sm text-text hover:text-text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <!-- Mobile Sheet Nav -->
      <div class="md:hidden ml-auto">
        <Sheet v-model:open="isOpen">
          <SheetTrigger as-child>
            <!-- Inside <SheetTrigger as-child> -->
            <Button variant="ghost" size="icon" class="text-text hover:text-accent">
              <svg
                  v-if="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 transition-transform duration-300"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-6 transition-transform duration-300"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>

          </SheetTrigger>
          <SheetContent
              side="right"
              class="w-64 h-full p-6 bg-bg text-text shadow-lg flex flex-col gap-6 transition-transform duration-300"
          >
            <router-link
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="text-lg font-medium hover:text-accent transition"
                @click="isOpen = false"
            >
              {{ item.name }}
            </router-link>
            <a
                v-for="link in externalLinks"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg font-medium hover:text-accent transition"
                @click="isOpen = false"
            >
              {{ link.name }}
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>

  <!-- Spacer -->
  <div class="h-16"></div>
</template>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in {
  animation: slide-in 0.3s ease-out forwards;
}
</style>
