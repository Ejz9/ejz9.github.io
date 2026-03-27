<script setup>
import {ref} from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
}
</script>

<template>
  <div class="relative w-full max-w-4xl mx-auto group">

    <div class="overflow-hidden rounded-xl shadow-lg relative">
      <div
          class="flex transition-transform duration-700 ease-in-out h-full"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
            v-for="(image, index) in images"
            :key="index"
            class="min-w-full h-full flex items-center justify-center bg-gray-900"
        >
          <img
              :src="image"
              class="max-w-full max-h-[500px] object-contain cursor-pointer hover:opacity-95 transition-opacity"
              :alt="`Slide ${index + 1}`"
          />
        </div>
      </div>
    </div>

    <button @click="prevImage" class="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
    </button>
    <button @click="nextImage" class="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
    </button>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button v-for="(img, idx) in images" :key="idx" @click="currentIndex = idx" :class="['w-3 h-3 rounded-full transition-all', idx === currentIndex ? 'bg-white scale-110' : 'bg-white/50']"></button>
    </div>
  </div>
</template>

<style scoped>

</style>