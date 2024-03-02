// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  extends: [
    '@nuxt3-monorepo/core'
  ],

  modules: [
    '@pinia/nuxt'
  ],

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'uk',
    langDir: './locale',
    locales: [{ code: 'uk', file: 'uk.json' }]
  },

  css: [
    '@nuxt3-monorepo/core/style/index.css'
  ],

  pinia: {
    storesDirs: [
      './stores/*',
      '../core/stores/*'
    ]
  },

  routeRules: {
    '/': { redirect: '/dashboard' }
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }
})
