<template>
  <vue-particles
      :key="particleKey"
      id="tsparticles"
      class="absolute inset-0 -z-10"
      :options="particleOptions"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const particleOptions = ref({})
const particleKey = ref(0)

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

const getScreenCategory = () => {
  const width = window.innerWidth
  if (width < breakpoints.sm) return 'xs'
  if (width < breakpoints.md) return 'sm'
  if (width < breakpoints.lg) return 'md'
  if (width < breakpoints.xl) return 'lg'
  if (width < breakpoints['2xl']) return 'xl'
  return '2xl'
}

const setParticleOptions = () => {
  const screen = getScreenCategory()

  const particleCount = screen === 'xs' ? 40
      : screen === 'sm' ? 60
          : screen === 'md' ? 100
              : 160

  particleOptions.value = {
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 1 }
        }
      }
    },
    particles: {
      number: { value: particleCount },
      color: { value: '#3b82f6' },
      links: {
        enable: true,
        distance: 120,
        color: '#f4f4f5',
        opacity: 0.5,
        width: 1
      },
      move: { enable: true, speed: 1 },
      size: { value: 2 },
      opacity: { value: 0.5 }
    }
  }
  particleKey.value++
}

let resizeTimeout
const onResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(setParticleOptions, 150)
}

onMounted(() => {
  setParticleOptions()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  clearTimeout(resizeTimeout)
})
</script>