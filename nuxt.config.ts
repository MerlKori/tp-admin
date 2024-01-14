// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: false },
  ssr: false,
  css: ['~/assets/css/index.css'],
  modules: [
    '@unocss/nuxt',
    'nuxt-icons',
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    public: {
      api: {
        baseURL: process.env.API_BASE_URL
      }
    }
  }
})
