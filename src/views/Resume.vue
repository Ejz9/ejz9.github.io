<script setup>
import { onMounted, ref } from 'vue';
import {useUiStore} from "@/stores/uiStore.js";

const uiStore = useUiStore();
uiStore.setShowNavbar(true)
uiStore.setShowFooter(true)

const resume = ref(null);

onMounted(async () => {
  const res = await fetch('/resume.json');
  resume.value = await res.json();
});
</script>

<template>
  <div class="text-text bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto" v-if="resume">
      <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
        <h1 class="text-4xl font-bold mb-2">{{ resume.basics.name }}</h1>
        <a
            href="/edward-resume-public.pdf"
            download
            class="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:text-white dark:hover:bg-indigo-700 text-sm font-medium rounded-md transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 011-1h4v2H5v12h10V4h-3V2h4a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3z"/>
            <path d="M9 7v4H7l3 3 3-3h-2V7H9z"/>
          </svg>
          Download Resume (PDF)
        </a>
      </div>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">{{ resume.basics.headline }}</p>

      <!-- Contact Info -->
      <div class="text-sm text-gray-500 dark:text-gray-400 space-y-1 mb-6">
        <p><strong>Email:</strong> <a :href="`mailto:${resume.basics.email}`" class="text-indigo-500 hover:underline">{{ resume.basics.email }}</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Ejz9" class="text-indigo-500 hover:underline">github.com/Ejz9</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/edward-zurakowski" class="text-indigo-500 hover:underline">linkedin.com/in/edward-zurakowski</a></p>
        <p class="italic text-sm mt-2">This version is redacted for privacy. A full version is available upon request.</p>
      </div>

      <!-- Education -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Education</h2>
        <div v-for="edu in resume.sections.education.items" :key="edu.id">
          <p class="font-medium">{{ edu.institution }}</p>
          <p class="text-sm text-gray-500">{{ edu.studyType }}, {{ edu.area }} – {{ edu.date }}</p>
        </div>
      </section>

      <!-- Experience -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Experience</h2>
        <div v-for="exp in resume.sections.experience.items" :key="exp.id">
          <p class="font-medium">{{ exp.company }}</p>
          <p class="text-sm text-gray-500">{{ exp.position }} | {{ exp.date }}</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300" >
            <li v-for="item in exp.summary" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- Skills -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div v-for="skill in resume.sections.skills.items" :key="skill.id">
            <p class="font-semibold">{{ skill.name }}</p>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-2">Projects</h2>
        <div v-for="project in resume.sections.projects.items" :key="project.id">
          <p class="font-medium">{{ project.name }}</p>
          <p class="text-sm text-gray-500">{{ project.date }}</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
            <li v-for="item in project.summary" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <!-- Certifications & Awards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <section>
          <h2 class="text-2xl font-semibold mb-2">Certifications</h2>
          <ul class="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li v-for="cert in resume.sections.certifications.items" :key="cert.id">
              {{ cert.name }} – {{ cert.date }}
            </li>
          </ul>
        </section>
        <section>
          <h2 class="text-2xl font-semibold mb-2">Awards</h2>
          <ul class="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li v-for="award in resume.sections.awards.items" :key="award.id">
              {{ award.title }} – {{ award.date }}
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>