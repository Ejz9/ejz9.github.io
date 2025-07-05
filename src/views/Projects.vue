<!-- src/views/Projects.vue -->
<script setup>
const projects = [
  {
    title: 'Project Title 1',
    description: 'A brief description of this project and what technologies were used.',
    technologies: ['Vue', 'TailwindCSS', 'JavaScript'],
    image: '/project1.jpg', // Add project images to your public folder
    link: 'https://github.com/yourusername/project1',
    demo: 'https://demo-link.com'
  },
  // Add more projects
];
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="index"
             class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-indigo-400">{{ project.title }}</h3>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="bg-gray-700 text-xs text-indigo-300 px-2 py-1 rounded mr-2 mb-2">
                {{ tech }}
              </span>
            </div>

            <div class="flex space-x-4 mt-4">
              <a :href="project.link" target="_blank" class="text-indigo-400 hover:text-indigo-300">View Code</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="text-indigo-400 hover:text-indigo-300">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
