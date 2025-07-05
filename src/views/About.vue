<!-- src/views/About.vue -->
<script setup>
const experiences = [
  {
    title: 'Computer Science Student',
    organization: 'University of Wisconsin-Whitewater',
    period: 'Expected Graduation: May 2024',
    description: 'Pursuing a Bachelor\'s of Science in Computer Science with a minor in Cybersecurity.',
    type: 'education'
  },
  // Add more education/experience items as needed
  {
    title: 'Sample Work Experience',
    organization: 'Company Name',
    period: 'June 2023 - Present',
    description: 'Description of your responsibilities and achievements in this role.',
    type: 'work'
  },
];
</script>

<template>
  <div class="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-4 text-white">About Me</h1>
      <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Learn more about my background, experience, and journey.
      </p>

      <!-- Personal Bio -->
      <div class="mb-16">
        <h2 class="text-2xl font-semibold mb-6 text-white">Who Am I?</h2>
        <div class="bg-slate-800 rounded-lg shadow-md p-6 text-gray-300 leading-relaxed">
          <p class="mb-4">
            I'm a passionate computer science student with a strong interest in building software that solves real-world problems.
            My journey into technology began when I was young, and I've been fascinated by how code can create powerful tools and experiences ever since.
          </p>
          <p>
            When I'm not coding, you might find me exploring open-source projects, learning about cybersecurity, or tinkering with new technologies.
            I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
          </p>
        </div>
      </div>

      <!-- Timeline -->
      <h2 class="text-2xl font-semibold mb-6 text-white">My Journey</h2>
      <div class="relative border-l-2 border-indigo-500 ml-3 pl-8 pb-8">
        <div v-for="(item, index) in experiences" :key="index" class="mb-12 relative">
          <!-- Timeline dot -->
          <div class="absolute -left-[41px] w-6 h-6 rounded-full bg-indigo-500 border-4 border-slate-900"></div>

          <!-- Content -->
          <div class="bg-slate-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 class="text-xl font-semibold text-white">{{ item.title }}</h3>
              <span :class="[
                'px-3 py-1 text-xs rounded-full mt-2 sm:mt-0 inline-block',
                item.type === 'education' ? 'bg-blue-900 text-blue-200' : 'bg-green-900 text-green-200'
              ]">
                {{ item.type === 'education' ? 'Education' : 'Experience' }}
              </span>
            </div>
            <div class="text-gray-400 mb-1">{{ item.organization }}</div>
            <div class="text-sm text-gray-500 mb-4">{{ item.period }}</div>
            <p class="text-gray-300">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>