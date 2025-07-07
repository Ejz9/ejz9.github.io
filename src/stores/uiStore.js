import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    showNavbar: false
  }),
  actions: {
    setShowNavbar(value) {
      this.showNavbar = value;
    }
  }
});