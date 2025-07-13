<!-- src/views/Skills.vue -->
<script setup>
import { useUiStore } from '@/stores/uiStore';
const uiStore = useUiStore();
uiStore.setShowNavbar(true)

const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'Vue.js', level: 85, category: 'Frontend' },
  { name: 'HTML/CSS', level: 85, category: 'Frontend' },
  { name: 'React', level: 75, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Python', level: 75, category: 'Backend' },
  { name: 'Java', level: 70, category: 'Backend' },
  { name: 'SQL', level: 80, category: 'Database' },
  { name: 'Git', level: 85, category: 'DevOps' },
  { name: 'Docker', level: 65, category: 'DevOps' },
  { name: 'AWS', level: 60, category: 'Cloud' },
  { name: 'Cybersecurity', level: 75, category: 'Security' },
];
</script>

<template>
  <div class="text-text bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Skills</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="skill in skills" :key="skill.name"
             class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h3>
            <span class="px-2 py-1 text-xs rounded-full"
                  :class="{
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': skill.category === 'Frontend',
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': skill.category === 'Backend',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': skill.category === 'Database',
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200': skill.category === 'DevOps',
                    'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200': skill.category === 'Cloud',
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': skill.category === 'Security',
                  }">
              {{ skill.category }}
            </span>
          </div>

          <div class="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                 :style="{ width: `${skill.level}%` }"></div>
          </div>
          <div class="mt-1 text-right text-sm text-gray-600 dark:text-gray-400">{{ skill.level }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>
