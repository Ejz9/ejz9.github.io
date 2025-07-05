<script setup>
// You can import any components you need here
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-16 text-center">
        <h2 class="text-center font-mono text-lg mb-4 text-indigo-400 animate-pulse drop-shadow-[0_0_0.3rem_#7c3aed]">
          Hello World!
        </h2>
        <h1 class="text-5xl font-bold mb-4">Edward Zurakowski</h1>
        <h3 class="text-2xl font-light text-gray-300 mb-8">Full Stack Tinkerer</h3>

        <p class="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          I am an aspiring professional with an interest in Computer Science and Cybersecurity.
          Currently I am a student in my senior year attending the University of Wisconsin-Whitewater.
          I am pursuing a Bachelor's of Science in Computer Science with a minor in Cybersecurity.
        </p>

        <p class="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          I have a keen interest in coding software, and building tools to help achieve specific goals.
          Also, I am an enthusiast for Open-Source and everything under its' umbrella.
        </p>

        <div class="mt-8">
          <a href="#projects" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg mr-4 transition duration-200">View Projects</a>
          <a href="#contact" class="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-medium py-3 px-6 rounded-lg transition duration-200">Contact Me</a>
        </div>
      </div>

      <!-- Projects Section -->
      <section id="projects" class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Project Card 1 -->
          <div class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition duration-300">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Project Name</h3>
              <p class="text-gray-300 mb-4">Brief description of the project and the technologies used.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full">Vue.js</span>
                <span class="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full">TailwindCSS</span>
              </div>
              <a href="#" class="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                View Project <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              </a>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition duration-300">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Project Name</h3>
              <p class="text-gray-300 mb-4">Brief description of the project and the technologies used.</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full">Python</span>
                <span class="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full">Cybersecurity</span>
              </div>
              <a href="#" class="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                View Project <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div class="bg-slate-800/50 p-4 rounded-lg text-center">
            <div class="text-indigo-400 text-2xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="font-medium">Web Development</h3>
          </div>
          <div class="bg-slate-800/50 p-4 rounded-lg text-center">
            <div class="text-indigo-400 text-2xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="font-medium">Cybersecurity</h3>
          </div>
          <div class="bg-slate-800/50 p-4 rounded-lg text-center">
            <div class="text-indigo-400 text-2xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-medium">Programming</h3>
          </div>
          <div class="bg-slate-800/50 p-4 rounded-lg text-center">
            <div class="text-indigo-400 text-2xl mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="font-medium">Open Source</h3>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div class="bg-slate-800/50 rounded-lg p-8 max-w-2xl mx-auto">
          <div class="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/yourusername" class="text-gray-300 hover:text-indigo-400 transition">
              <span class="sr-only">GitHub</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" class="text-gray-300 hover:text-indigo-400 transition">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="mailto:your.email@example.com" class="text-gray-300 hover:text-indigo-400 transition">
              <span class="sr-only">Email</span>
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p class="text-center text-gray-300">Feel free to reach out for collaborations, questions, or just to say hello!</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center text-gray-400 text-sm">
        <p>© 2023 Edward Zurakowski. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>