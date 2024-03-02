import { useUserStore } from '~/stores/useUserStore'
import { ApiClient } from '~/api/ApiClient'
import { initApiEntities } from '../repository/index'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const client = new ApiClient({
    url: config.public.apiUrl,
    auth () {
      const user = useUserStore()
      return { token: user.token, method: user.tokenType }
    }
  })

  const api = initApiEntities(client)

  return {
    provide: { api }
  }
})
