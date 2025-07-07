<template>
  <footer class="bg-slate-900 text-white py-8 mt-auto">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <div class="flex items-center">
            <span class="text-xl font-bold">Edward<span class="text-indigo-400">Z</span></span>
          </div>
          <p class="mt-2 text-sm text-gray-400">
            Full Stack Tinkerer & Cybersecurity Enthusiast
          </p>
        </div>

        <div class="flex space-x-6">
          <!-- Contact Section -->
          <ContactIcons :links="[
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:your.email@example.com', icon: MailIcon }
]" />
        </div>
      </div>

      <div class="mt-8 border-t border-gray-800 pt-4 text-sm text-gray-400 text-center">
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