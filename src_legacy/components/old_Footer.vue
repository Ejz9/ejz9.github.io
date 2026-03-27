<script setup lang="ts">
import ContactIcons from "./ContactIcons.vue";
import GitHubIcon from "./icons/GitHub.vue";
import LinkedInIcon from "./icons/LinkedIn.vue";
import MailIcon from "./icons/Mail.vue";

const links = [
  { label: 'GitHub', href: 'https://github.com/ejz9', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edward-zurakowski/', icon: LinkedInIcon},
  { label: 'MailTo', href: 'mailto:contact@ztree.dev', icon: MailIcon}
];
</script>

<template>
  <footer class="container my-8 mx-auto px-4 md:px-0 text-center">
    <div class="flex flex-col justify-between items-center md:flex-row gap-4">
      <div class="text-center md:text-left mb-2">
        <span class="text-xl font-bold">Edward<span class="text-accent">Z</span></span>
        <p class="mt-2 text-sm">Full Stack Tinkerer & Cybersecurity Enthusiast</p>
      </div>
      <ContactIcons :links="links" class="mt-auto"/>
    </div>
    <div class="mt-2 border-t border-border pt-4 text-sm text-center">
      © {{ new Date().getFullYear() }} Edward Zurakowski. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>

</style>