<!-- src/views/Contact.vue -->
<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  // This is a placeholder - you would typically connect to a real API/backend
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    submitSuccess.value = true;
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    submitError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h1>

      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <div v-if="submitSuccess" class="text-center py-8">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
            <svg class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="mt-3 text-lg font-medium text-gray-900 dark:text-white">Message Sent!</h3>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <div class="mt-6">
            <button @click="submitSuccess = false" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Send Another Message
            </button>
          </div>
        </div>

        <form v-else @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input v-model="formData.name" type="text" id="name" required
                   class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-2 px-3 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="formData.email" type="email" id="email" required
                   class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-2 px-3 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500">
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea v-model="formData.message" id="message" rows="5" required
                      class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm py-2 px-3 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>

          <div class="flex justify-end">
            <button type="submit" :disabled="isSubmitting"
                    class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center">
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>

          <div v-if="submitError" class="text-red-600 dark:text-red-400 text-center">
            There was an error sending your message. Please try again.
          </div>
        </form>
      </div>

      <!-- Social Links & Other Contact Info -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Email</h3>
          <a href="mailto:your.email@example.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">your.email@example.com</a>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Location</h3>
          <p class="text-gray-600 dark:text-gray-400">Wisconsin, United States</p>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Social</h3>
          <div class="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
