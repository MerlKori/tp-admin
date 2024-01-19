declare module '@nuxt/schema' {
  interface NuxtConfig {
    // primevue?: {
    //   components?: {
    //     prefix?: string,
    //     include?: Array<string>
    //   }
    // },
    // i18n?: {
    //   langDir?: string
    //   locales?: Array<{ code: string, file: string }>
    // }
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icons',
    'nuxt-primevue'
  ],
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['Button', 'DataTable']
    }
  },
  i18n: {
    langDir: './lang',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'uk', file: 'uk.json' }
    ]
  },
  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    './assets/css/index.css'
  ]
})
