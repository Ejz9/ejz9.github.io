<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Button } from '@/components/ui/button'
const mode = useColorMode()
</script>

<template>
  <Button
      variant="ghost"
      size="icon"
      @click="mode = mode === 'light' ? 'dark' : 'light'"
  >
    <Icon icon="radix-icons:moon" v-if="mode === 'light'" />
    <Icon icon="radix-icons:sun" v-else />
  </Button>
</template>
