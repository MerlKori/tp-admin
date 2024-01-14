import { useUser } from '~/stores/useUser'

export default defineNuxtPlugin((nuxtApp) => {
  // addRouteMiddleware('auth', async (from, to) => {
  //   const user = useUser()
  //   if (!user.authorized) return navigateTo('/auth')
  // })
})
