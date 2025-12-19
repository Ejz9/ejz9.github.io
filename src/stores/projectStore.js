import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [
        {
            id: "ember",
            name: "Ember",
            heading: "A cloud-native code snippet manager.",
            description: ["During the fall semester of 2025 at college, I took a graduate course in cloud computing. This is one of the two graduate courses I had the opportunity to participate in during this semester. Part of the class was a final project that needed to use some form of cloud technologies. I came up with the idea for a code snippet manager after deploying the self-hosted tool ByteStash.", "I sought to create a different version of that tool with some expanded features and better visual safety. One standout feature Ember offers is the ability to rapidly create a snippet and have its cyclomatic complexity computed. Complexity calculation is performed in merely seconds after a user submits a new snippet, and all snippet interactions are logged. I developed Ember using Nuxt 4, having started a project, still in progress, to learn about the framework after hearing about it during the summer of 2025. Having completed a previous project in Vue, I was compelled to use Nuxt, as it offers a full stack. It\'s got some incredible features and helped me learn a tremendous amount about what is possible in web development. The code is open-source, unlike my other project for school, as I created the application myself, and I intended to carry it forward, as I think it\'s a resourceful tool with incredible potential."],
            images: ["/ember.png", "/ember-snippet.png", "/ember-snippet-editor.png", "/ember-admin.png"],
            technologies: ['TypeScript', 'Nuxt', 'MongoDB', 'Docker', 'Bun'],
            code: 'https://github.com/Ejz9/ember',
            demo: 'https://ember.ztree.dev',
        },
        {
            id: 'dota2',
            name: 'Dota-2-Stats',
            heading: 'A game statistic web application for Dota 2.',
            description: ['For my spring semester at college in 2025 I took Software Engineering. The emphasis of this class was making software with a group project being the culmination of the semester\'s effort. I worked in a group of six and specifically my role was the backend / data integration. I had presented the project idea as well so I was the product owner. We used scrum methodology and developed over one week sprints. I created the hooks for the API we used and later integrated a database and proper backend with express.js. This was to cache data fetched and reduce loading times. It proved a challenge but I got to learn a lot especially developing my Vue skills and experimenting with MongoDB and its data processing. The code is private as the software is school owned, and a live demo isn\'t available publicly because it exposes the backend processes. At request a demo can be demonstrated.'],
            image: '/dota2.png',
            technologies: ['Vite', 'Vue.js', 'Bootstrap', 'MongoDB', 'Axios', 'Express', 'Chart.js'],
            code: null,
            demo: null,
        },
        {
            id: 'portfolio',
            name: 'My Portfolio',
            heading: 'My personal portfolio website.',
            description: ['This site is a portfolio showcasing my work and skills. It is built with Vue and TailwindCSS. It is meant to be the central hub of all things regarding me and my professional career. It\'s also a passion project and a blog for what I\'m up to in my life.'],
            image: '/portfolio.png',
            technologies: ['Vite', 'Vue.js', 'TailwindCSS', 'Pinia'],
            code: 'https://github.com/Ejz9/ejz9.github.io',
            demo: 'https://ztree.dev',
        },
    ],
  }),

    getters: {
      selectedProject(state) {
          return state.projects.find(p => p.id === state.selectedProjectId)
      }
    },

    actions: {
      selectProject(id) {
          this.selectedProjectId = id;
      }
    },
})