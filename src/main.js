import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

const app = createApp(App);
const pinia = createPinia()

app.use(Particles, {
    init: async engine => {
        await loadFull(engine)
    }
})
app.use(pinia)
app.use(router)
app.mount('#app')
