import { defineStore } from "pinia";
// import { useWindowSize, useScreenOrientation } from "@vueuse/core";

export const useAppStateStore = defineStore("appstate", {
  state: () => ({
    dinosaur: { name: "", description: "" }
  }),
  actions: {
    setDinosaur(name: string, description: string) {
      this.dinosaur.name = name;
      this.dinosaur.description = description;
    },
  },
});
