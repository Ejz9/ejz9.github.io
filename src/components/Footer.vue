<template>
  <footer class="bg-background text-text-muted pb-8 mt-auto">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-4 md:mb-0">
          <div class="flex items-center">
            <span class="text-xl font-bold">Edward<span class="text-indigo-400">Z</span></span>
          </div>
          <p class="mt-2 text-sm">
            Full Stack Tinkerer & Cybersecurity Enthusiast
          </p>
        </div>

        <div class="flex space-x-6">
          <ContactIcons :links="[
            { label: 'GitHub', href: 'https://github.com/ejz9', icon: GitHubIcon },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/edwardzurakowski', icon: LinkedInIcon },
            { label: 'Email', href: 'mailto:your.email@example.com', icon: MailIcon }
          ]" />
        </div>
      </div>

      <div class="mt-2 border-t border-border pt-4 text-sm text-center">
        © {{ new Date().getFullYear() }} Edward Zurakowski. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ContactIcons from "@/components/ContactIcons.vue";
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
import MailIcon from "@/components/icons/MailIcon.vue";
import GitHubIcon from "@/components/icons/GitHubIcon.vue";
</script>
