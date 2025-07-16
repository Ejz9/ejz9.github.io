<script setup>
import { ref } from 'vue';
import {useUiStore} from "@/stores/uiStore.js";

const uiStore = useUiStore();
uiStore.setShowNavbar(true)
uiStore.setShowFooter(true)

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

  try {
    const response = await fetch("https://formsubmit.co/contact@ztree.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData.value)
    })

    if (response.ok) {
      submitSuccess.value = true;
      formData.value = { name: '', email: '', message: '' };
    } else {
      submitError.value = true;
    }
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
          <input type="text" name="_honey" style="display: none" tabindex="-1" autocomplete="off" >
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
    </div>
  </div>
</template>
