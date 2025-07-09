import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: [
            {
                id: 'portfolio',
                title: 'My Portfolio',
                description: 'My personal site built with Vue and Tailwind.',
                image: '/images/portfolio.png',
                technologies: ['Vite', 'Vue.js', 'TailwindCSS', 'Pinia'],
                link: 'https://ztree.dev',
                demo: null,
            },
            {
                id: 'dota2',
                title: 'Dota-2-Stats',
                description: 'A game statistic web application for Dota 2.',
                image: '/images/dota2.png',
                technologies: ['Vite', 'Vue.js', 'Bootstrap', 'MongoDB', 'Axios', 'Express', 'Chart.js'],
                link: '#',
                demo: null,
            },
        ],
        selectedProjectId: null,
    }),

    getters: {
        selectedProject(state) {
            return state.projects.find(p => p.id === state.selectedProjectId)
        }
    },

    actions: {
        selectProject(id) {
            this.selectedProjectId = id
        }
    }
})
