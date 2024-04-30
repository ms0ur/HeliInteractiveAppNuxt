// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@nuxt/image",
    "radix-vue",
    "@vite-pwa/nuxt",
    "nuxt-auth-utils",
    "@nuxtjs/color-mode",
    "nuxt-mongoose"
  ],
  colorMode: {
    classSuffix: ''
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
})