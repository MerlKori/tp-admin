// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  extends: [
    '@foundation/core'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**', '../layers/core-layer/stores/**'],
  }
})
