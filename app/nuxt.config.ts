// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  extends: [
    '../layers/ui-layer',
    '../layers/core-layer'
  ],
  components: [
    '~/components',
    { path: '../layers/ui-layer/components', prefix: 'UI' },
    { path: '../layers/core-layer/components', prefix: 'Data' },
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
