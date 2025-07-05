<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {NavBar, Footer}
})

</script>

<!-- src/App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
      <Footer />
    </router-view>
  </div>
</template>

<style>
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

</style>

