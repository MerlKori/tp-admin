// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../layers/ui-layer'
  ],
  components: [
    '~/components',
    { path: '../layers/ui-layer/components', prefix: 'Special' },
  ],
  modules: [
    '@pinia/nuxt'
  ],
  i18n: {
    langDir: './lang',
    locales: [
      { code: 'en', file: 'en.json' }
    ]
  },
  pinia: {
    storesDirs: [
      './stores/**'
    ],
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL
    }
  }
})
