<template >
  <Suspense>
    <!-- <router-view></router-view> -->
    
    <template #default>
      <Dinosaurs />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Dinosaurs from "../views/Dinosaurs.vue";

// defineProps<{ msg: string }>()
// const count = ref(0)
</script>
<style lang=""></style>
