<script>
import { defineComponent } from 'vue';
import { useUiStore } from '@/stores/uiStore';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: { NavBar, Footer },
  setup() {
    const uiStore = useUiStore();
    return { uiStore };
  }
});
</script>

<!-- src/App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavBar v-if="uiStore.showNavbar" />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer v-if="uiStore.showFooter" />
  </div>
</template>


<style>
html, body {
  background-color: #0f172a; /* This is the slate-900 color */
  margin: 0;
  padding: 0;
  min-height: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>

