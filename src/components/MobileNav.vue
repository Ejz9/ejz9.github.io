<script setup>
import {Button} from "@/components/ui/button";
import {Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import {Icon} from "@iconify/vue";
import ModeToggle from "@/components/ModeToggle.vue";

defineProps({
  navItems: Array,
  externalLinks: Array,
  route: Object
})
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" size="icon">
        <Icon icon="material-symbols:menu" class="size-8 mr-auto"/>
      </Button>
    </SheetTrigger>
    <SheetContent side="right" class="w-full items-center backdrop-blur-xs p-6 flex flex-col gap-6">
      <router-link
          v-for="(item, index) in navItems"
          :key="item.path"
          :to="item.path"
          class="text-4xl relative px-2 py-2 font-medium w-fit animate-stagger"
          :style="{ animationDelay: `${index * 75}ms`}"
      >
        <SheetClose class="flex items-center gap-4">
          <Icon :icon="item.icon" class="size-6 mt-2" />
          {{ item.name }}
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300"
                :class="route.path === item.path ? 'scale-x-100' : 'scale-x-0'" />
        </SheetClose>
      </router-link>

      <a
        v-for="(link, index) in externalLinks"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="text-4xl px-2 py-2 font-medium animate-stagger"
        :style="{ animationDelay: `${(navItems.length + index) * 75}ms`}"
      >
        <SheetClose>
          {{ link.name }}
        </SheetClose>
      </a>

      <div class="mt-auto pt-8 border-t flex flex-col gap-4 animate-stagger" :style="{ animationDelay: `${(navItems.length + externalLinks.length + 1) * 75}ms` }">
        <p class="text-sm text-muted-foreground font-medium uppercase tracking-widest">Connect</p>
        <div class="flex gap-4">
          <a href="https://github.com/Ejz9" target="_blank" class="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground ">
            <Icon icon="mdi:github" class="size-6" />
          </a>
          <a href="https://www.linkedin.com/in/edward-zurakowski/" target="_blank" class="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
            <Icon icon="mdi:linkedin" class="size-6" />
          </a>
          <a href="mailto:ejz11@proton.me" class="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
            <Icon icon="material-symbols:mail-rounded" class="size-6" />
          </a>
          <ModeToggle mobile class="ml-auto"/>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<style scoped>
.animate-stagger {
  opacity: 0;
  transform: translateX(20px);
  animation: slide-in-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slide-in-fade {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>