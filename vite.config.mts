import { defineConfig } from "npm:vite@^4.3.9";
import vue from "npm:@vitejs/plugin-vue@^4.2.3";
// import { fileURLToPath } from 'https://deno.land/std/node/url.ts'

import "npm:vue@^3.3.4";
import "npm:vue-router@^4.0.11";
import "npm:pinia";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000, host: true },
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
});
