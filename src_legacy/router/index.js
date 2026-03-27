import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import ThankYou from "@/views/ThankYou.vue";


const routes = [
    { path: '/', component: Home, meta: { showParticles: true }},
    { path: '/projects', component: Projects, meta: { showParticles: true }},
    { path: '/projects/:id', component: ProjectDetails, props: true, meta: { showParticles: true }},
    { path: '/resume', component: Resume, meta: { showParticles: true }},
    { path: '/about', component: About, meta: { showParticles: true }},
    { path: '/contact', component: Contact, meta: { showParticles: true }},
    { path: '/thank-you', component: ThankYou, meta: { showParticles: true }},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router