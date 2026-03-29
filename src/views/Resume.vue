<script setup>
import resume from "/public/march-2026.json";
import {Button} from "@/components/ui/button/index.js";
import {Icon} from "@iconify/vue";
import {vAutoAnimate} from "@formkit/auto-animate/vue";

const skillIcons = {
  "Java": "mdi:language-java",
  "JavaScript": "mdi:language-javascript",
  "TypeScript": "mdi:language-typescript",
  "Python": "mdi:language-python",
  "HTML": "mdi:language-html5",
  "Tailwind CSS": "mdi:tailwind",
  "SQL": "mdi:database",
  "Vue.js": "mdi:vuejs",
  "Nuxt": "mdi:nuxt",
  "Docker": "mdi:docker",
  "Git": "mdi:git",
  "Woodpecker CI": "mdi:bird",
  "Linux": "mdi:linux",
  "REST APIs": "mdi:api",
  "Azure": "mdi:microsoft-azure",
  "MongoDB": "tabler:brand-mongodb",
  "Metasploit": "mdi:toolbox",
  "Multi-tier Clos Topologies": "mdi:layers",
  "Network Security": "mdi:security",
  "TCP/IP": "mdi:network",
  "Firewall Configuration": "mdi:firewall",
  "VPNs": "mdi:vpn",
  "Wireshark": "simple-icons:wireshark",
  "Nmap": "file-icons:nmap",
  "NVIDIA GB200 NVL72 Racks": "mdi:server",
  "NVLink Maintenance": "mdi:gpu",
  "Fiber Optics": "pajamas:work-item-maintenance",
  "Link Validation": "material-symbols:cable",
}

const linkIcons = {
  "edward-zurakowski": "mdi:linkedin",
  "Ejz9": "mdi:github",
}
</script>

<template>
  <div v-if="resume" v-auto-animate
       class="container mx-auto bg-background/95 backdrop-blur-sm shadow-lg space-y-8 px-8 max-w-4xl"
  >
    <section>
      <div class="flex items-center justify-between">
        <h1 class="text-4xl font-bold mb-2">{{ resume.basics.name }}</h1>
        <Button
            as="a"
            href="/march-2026-redacted.pdf"
            download
            variant="outline"
        >
          <Icon icon="material-symbols:download" />
          Download Resume (PDF)
        </Button>
      </div>
      <h3 class="text-2xl text-muted-foreground mb-4">{{ resume.basics.headline }}</h3>
      <div class="flex gap-2">
        <Button
            as="a"
            variant="outline"
            :href="resume.basics.website.url"
            target="_blank"
        >
          <Icon icon="material-symbols:web-asset" />
          {{ resume.basics.website.url }}
        </Button>
        <Button
            as="a"
            variant="outline"
            v-for="item in resume.basics.customFields"
            :key="item.id"
            :href="item.link"
            target="_blank"
        >
          <Icon v-if="linkIcons[item.text]" :icon="linkIcons[item.text]" />
          {{ item.text }}
        </Button>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Education</h2>
      <div v-for="education in resume.sections.education.items" :key="education.id" class="mb-4">
        <p class="font-bold">{{ education.school }}</p>
        <div class="flex flex-col md:flex-row md:justify-between">
          <p class="text-primary">{{ education.area }}</p>
          <p class="text-muted-foreground">{{ education.period }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Experience</h2>
      <div v-for="experience in resume.sections.experience.items" :key="experience.id" class="mb-4">
        <div class="flex flex-col md:flex-row md:justify-between">
          <p class="font-bold">{{ experience.company }}</p>
          <p class="text-muted-foreground">{{ experience.location }}</p>
        </div>
        <div class="flex flex-col md:flex-row md:justify-between">
          <p class="text-primary">{{ experience.position }}</p>
          <p class="text-muted-foreground">{{ experience.period }}</p>
        </div>

        <ul class="list-disc list-outside ml-5 mt-2  space-y-1">
          <li v-for="item in experience.description" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Skills</h2>
      <div v-for="category in resume.sections.skills.items" :key="category.id" class="flex flex-col">
        <p class="font-bold">{{ category.name }}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          <p v-for="skill in category.proficiency.split(', ')"
             :key="skill"
             class="flex items-center gap-2 border px-4 py-2 rounded-full text-sm shadow-sm">
            <Icon v-if="skillIcons[skill]" :icon="skillIcons[skill]" />
            {{ skill }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Projects</h2>
      <div v-for="project in resume.sections.projects.items" :key="project.id" class="mb-4">
        <div class="flex flex-col md:flex-row md:justify-between">
          <p class="font-bold">{{ project.name }}</p>
          <p class="text-muted-foreground">{{ project.period }}</p>
        </div>

        <ul class="list-disc list-outside ml-5 mt-2 space-y-1">
          <li v-for="item in project.description" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2">Awards</h2>
      <div v-for="award in resume.sections.awards.items" :key="award.id">
        <div class="flex flex-col md:flex-row md:justify-between">
          <p class="">{{ award.title }}</p>
          <p class="text-muted-foreground">{{ award.date }}</p>
        </div>

        <p class="font-bold">{{ award.awarder }}</p>
      </div>
    </section>

    <p class="italic text-xs text-muted-foreground mt-2">This version is redacted for privacy. A full version is available upon request.</p>
  </div>
</template>

<style scoped>

</style>