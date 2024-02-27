// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    'nuxt-primevue',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  primevue: {
    components: {
      prefix: 'Prime',
      include: ['Button', 'Menu']
    },
    options: {
      ripple: true
    }
  },
  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    './assets/css/index.css'
  ],
  // pinia: {
    // storesDirs: ['./stores/**'],
  // },
  runtimeConfig: {
    public: {
      api: {
        baseURL: process.env.API_BASE_URL
      }
    }
  }
})
