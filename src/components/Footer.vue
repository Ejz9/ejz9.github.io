<script setup>
 import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/vue";

const links = [
  { label: 'GitHub', href: 'https://github.com/ejz9', icon: "mdi:github"},
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edward-zurakowski/', icon: "mdi:linkedin" },
  { label: 'MailTo', href: 'mailto:ejz11@proton.me', icon: "material-symbols:mail-rounded"}
];
</script>

<template>
  <footer class="container mx-auto">
    <div class="flex flex-row justify-between items-center gap-6">

      <div>
        <span class="text-xl font-bold">Edward<span class="text-primary">Z</span></span>
        <p class="mt-2 text-sm">Full Stack Tinkerer & Cybersecurity Enthusiast</p>
      </div>

      <div class="flex gap-2">
        <Button as-child variant="ghost" size="icon" v-for="link in links" :key="link.label">
          <a
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
          >
            <Icon :icon="link.icon" class="size-6" />
          </a>
        </Button>
      </div>

    </div>
    <div class="my-4 pt-4 border-t flex justify-center items-center gap-1 text-sm text-muted-foreground">
      <Icon icon="mdi:copyright" class="size-4" />
      <span>{{ new Date().getFullYear() }} Edward Zurakowski. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>

</style>