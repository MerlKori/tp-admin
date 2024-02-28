import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: { '~data': resolve('./') },

  modules: [
    '@nuxtjs/i18n'
  ],

  components: [
    { path: '~data/components', prefix: 'Data' }
  ]
})
