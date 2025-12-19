<template>
  <vue-particles
      id="tsparticles"
      class="absolute inset-0 -z-10"
      :options="particleOptions"
  />
</template>

<script setup>
import { ref } from 'vue'

const particleOptions = ref({
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
      number: { value: 160 },
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
    }, //Need to find a more robust solution for handling particle recalculation because of scroll bar
    responsive: [
      {
        maxWidth: 1024,
        options: {
          particles: { number: { value: 100 } }
        }
      },
      {
        maxWidth: 768,
        options: {
          particles: { number: { value: 60 } }
        }
      },
      {
        maxWidth: 640,
        options: {
          particles: { number: { value: 40 } }
        }
      }
    ]
})
</script>