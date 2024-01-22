import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/i18n'
  ],
  alias: { '~ui': resolve('./') },

  primevue: {
    components: {
      prefix: 'Prime',
      include: ['Button']
    },
    options: {
      ripple: true
    }
  },
  css: [
    // 'primevue/resources/themes/lara-light-green/theme.css',
    '~ui/assets/css/index.css'
  ]
})
