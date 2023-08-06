// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    "./src/ui",
    "./src/apps/landing",
    "./src/apps/store",
    "./src/apps/blog",
    "./src/apps/admin",
    "./src/apps/docs",
    "./src/apps/auth",
  ],
  modules: ["@nuxtjs/tailwindcss"],
  srcDir: "src",
});
