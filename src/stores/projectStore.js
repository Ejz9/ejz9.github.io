import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    projects: [
        {
            id: 'portfolio',
            name: 'My Portfolio',
            heading: 'My personal site built with Vue and Tailwind.',
            description: 'This site is a portfolio showcasing my work and skills. It is built with Vue and TailwindCSS. It is meant to be the central hub of all things regarding me and my professional career. It\'s also a passion project and a blog for what I\'m up to in my life.',
            image: '/portfolio.png',
            technologies: ['Vite', 'Vue.js', 'TailwindCSS', 'Pinia'],
            code: 'https://github.com/Ejz9/ejz9.github.io',
            demo: 'https://ztree.dev',
        },
        {
            id: 'dota2',
            name: 'Dota-2-Stats',
            heading: 'A game statistic web application for Dota 2.',
            description: 'For my spring semester at college in 2025 I took Software Engineering. The emphasis of this class was making software with a group project being the culmination of the semester\'s effort. I worked in a group of six and specifically my role was the backend / data integration. I had presented the project idea as well so I was the product owner. We used scrum methodology and developed over one week sprints. I created the hooks for the API we used and later integrated a database and proper backend with express.js. This was to cache data fetched and reduce loading times. It proved a challenge but I got to learn a lot especially developing my Vue skills and experimenting with MongoDB and its data processing. The code is private as the software is school owned, and a live demo isn\'t available publicly because it exposes the backend processes. At request a demo can be demonstrated.',
            image: '/dota2.png',
            technologies: ['Vite', 'Vue.js', 'Bootstrap', 'MongoDB', 'Axios', 'Express', 'Chart.js'],
            code: null,
            demo: null,
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