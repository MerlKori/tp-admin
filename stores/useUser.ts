import { defineStore, acceptHMRUpdate } from 'pinia'

export const useUser = defineStore('useUser', {
  state: () => ({
    token: null as string | null
  }),

  getters: {
    authorized (): boolean {
      return Boolean(this.token)
    }
  },

  actions: {
    async login (name: string, pwd: string) {
      const cfg = useRuntimeConfig()
      const url = `${cfg.public.api.baseURL}/token`
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ name, pwd })
      })

      if (!response.ok) return
      const { token } = await response.json()
      this.token = token
    },

    logOut () {
      this.token = null
      navigateTo('/')
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
