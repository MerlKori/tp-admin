import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    'nuxt-primevue',
    '@nuxtjs/i18n'
  ],
  alias: { '~ui': resolve('./') },

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
    '~ui/assets/css/index.css'
  ]
})
