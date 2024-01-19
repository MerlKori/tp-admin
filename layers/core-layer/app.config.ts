export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer1'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
