<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
const mode = useColorMode()

defineProps({
  mobile: Boolean,
})
</script>

<template>
  <Button
      v-if="mobile"
      variant="ghost"
      @click="mode = mode === 'light' ? 'dark' : 'light'"
  >
    <Icon icon="radix-icons:moon" v-if="mode === 'light'" />
    <Icon icon="radix-icons:sun" v-else />
    <span class="sr-only">Toggle Color Mode</span>
    <span>Toggle {{ mode === 'light' ? 'Dark' : 'Light' }}</span>
  </Button>
  <Button
      v-else
      variant="ghost"
      size="icon"
      @click="mode = mode === 'light' ? 'dark' : 'light'"
  >
    <Icon icon="radix-icons:moon" v-if="mode === 'light'" />
    <Icon icon="radix-icons:sun" v-else />
  </Button>
</template>
