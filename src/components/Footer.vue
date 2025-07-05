<template>
  <footer class="bg-slate-900 text-white py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <!-- GitHub Icon -->
          <a href="https://github.com/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6 flex-shrink-0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
              <title>GitHub</title>
              <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.911 1.23 3.221 0 4.609-2.807 5.625-5.48 5.921.429.372.81 1.103.81 2.222 0 1.604-.015 2.896-.015 3.293 0 .315.195.694.801.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          <!-- LinkedIn Icon -->
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-6 w-6 flex-shrink-0" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.35V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.368-1.848 3.599 0 4.264 2.368 4.264 5.448v6.291zm-15.34-11.51c-1.144 0-2.07-.926-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.145 0 2.07.925 2.07 2.07 0 1.144-.925 2.07-2.07 2.07zM4.885 20.452h3.555V9H4.885v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-800 pt-4 text-sm text-gray-400 text-center">
        © {{ new Date().getFullYear() }} Edward Zurakowski. All rights reserved.
      </div>
    </div>
  </footer>
</template>