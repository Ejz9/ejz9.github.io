import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Skills from "@/views/Skills.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects},
    { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetails, props: true},
    { path: '/contact', name: 'Contact', component: Contact},
    { path: '/skills', name: 'Skills', component: Skills}
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
})