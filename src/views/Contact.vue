<script setup>
import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";
import {useForm} from "vee-validate";

import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field/index.ts";
import {Input} from "@/components/ui/input/index.ts";
import {Textarea} from "@/components/ui/textarea/index.ts";
import {Button} from "@/components/ui/button/index.ts";
import {ref} from "vue";

const formSchema = toTypedSchema(z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000)
}))

const { handleSubmit, errors, defineField } = useForm({ validationSchema: formSchema })

const [name, nameProps] = defineField("name")
const [email, emailProps] = defineField("email")
const [message, messageProps] = defineField("message")

const formRef = ref(null)

const onSubmit = handleSubmit((values) => {
  if (formRef.value) formRef.value.submit();
})
</script>

<template>
  <div class="container mx-auto px-4 max-w-4xl">
    <h1 class="text-4xl font-bold text-center mb-12">Get In Touch</h1>
    <form
        ref="formRef"
        @submit="onSubmit()"
        method="POST"
        action="https://formsubmit.co/2578e0bf107458213b1057fc8c9700ab"
    >
      <input type="text" name="_honey" style="display: none" tabindex="-1" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://ztree.dev/#/thank-you" />

      <FieldGroup class="rounded-xl bg-secondary/50 backdrop-blur-md shadow-2xl p-8">
        <Field>
          <FieldLabel for="name">Name</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="Jane Doe" v-model="name" v-bind="nameProps"/>
          <FieldError v-if="errors.name" class="text-red-500">{{ errors.name }}</FieldError>
        </Field>
        <Field>
          <FieldLabel for="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="jane@example.com" v-model="email" v-bind="emailProps"/>
          <FieldError v-if="errors.email" class="text-red-500">{{ errors.email }}</FieldError>
        </Field>
        <Field>
          <FieldLabel for="message">Message</FieldLabel>
          <Textarea id="message" name="message" :rows="5" placeholder="Your message..." v-model="message" v-bind="messageProps"/>
          <FieldError v-if="errors.message" class="text-red-500">{{ errors.message }}</FieldError>
        </Field>
        <Button type="submit">Send Message</Button>
      </FieldGroup>
    </form>
  </div>
</template>

<style scoped>

</style>