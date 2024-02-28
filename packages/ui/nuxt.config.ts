import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: { '~ui': resolve('./') },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-icons'
  ],

  components: [
    { path: '~ui/components', prefix: 'Ui' }
  ],

  googleFonts: {
    families: {
      Commissioner: {
        wght: [600, 700]
      },
      Nunito: {
        wght: [500, 700],
        ital: [400]
      }
    }
  }
})
