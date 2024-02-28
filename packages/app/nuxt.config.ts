// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  extends: [
    '@nuxt3-monorepo/ui',
    '@nuxt3-monorepo/data'
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
    '../ui/style/index.css'
  ],

  routeRules: {
    '/': { redirect: '/dashboard' }
  }
})
