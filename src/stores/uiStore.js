import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    showNavbar: false,
    showFooter: false,
    animationHasRun: localStorage.getItem('animationHasRun') === 'true',
  }),
  actions: {
    setShowNavbar(value) {
      this.showNavbar = value;
    },
    setShowFooter(value) {
      this.showFooter = value;
    },
    setAnimationHasRun(value) {
      this.animationHasRun = value;
      localStorage.setItem('animationHasRun', value ? 'true' : 'false');
    }
  }
});
