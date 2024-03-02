import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: { '~core': resolve('./') },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
    '@pinia/nuxt'
  ],

  components: [
    { path: '~core/components/ui', prefix: 'Ui' },
    { path: '~core/components/core', prefix: 'Core' }
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
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  }
})
