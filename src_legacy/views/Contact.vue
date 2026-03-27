<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { vAutoAnimate } from '@formkit/auto-animate/vue'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000)
}))

const { handleSubmit } = useForm({ validationSchema: formSchema })
const onSubmit = () => {
  // let FormSubmit handle it
}
</script>


<template>
  <div class="text-text bg-background py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12">Get In Touch</h1>

      <div class="rounded-xl border border-border bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md shadow-2xl p-8 transition-colors duration-300">
        <form
            @submit="handleSubmit(onSubmit)"
            method="POST"
            action="https://formsubmit.co/2578e0bf107458213b1057fc8c9700ab"
            class="space-y-6"
        >
          <input type="text" name="_honey" style="display: none" tabindex="-1" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ztree.dev/#/thank-you" />

          <FormField name="name" v-slot="{ componentField }">
            <FormItem v-auto-animate>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Jane Doe" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-red-500 dark:text-red-400 transition-colors duration-200"/>
            </FormItem>
          </FormField>

          <FormField name="email" v-slot="{ componentField }">
            <FormItem v-auto-animate>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane@example.com" v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-red-500 dark:text-red-400 transition-colors duration-200"/>
            </FormItem>
          </FormField>

          <FormField name="message" v-slot="{ componentField }">
            <FormItem v-auto-animate>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea rows="5" placeholder="Your message..." v-bind="componentField" />
              </FormControl>
              <FormMessage class="text-red-500 dark:text-red-400 transition-colors duration-200"/>
            </FormItem>
          </FormField>

          <Button class="btn-outline" type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  </div>
</template>
