type TCallback = () => Promise<unknown>

export const usePreloader = defineStore('usePreloader', {
  state: () => ({
    loadings: [] as Array<string>
  }),

  getters: {
    active: (state) => Boolean(state.loadings.length)
  },

  actions: {
    set (key: string, state: boolean) {
      if (!state) this.loadings = this.loadings.filter(i => i !== key)
      else this.loadings.push(key)
    },
    
    async asyncActionWrapp (action: TCallback) {
      const target = (Math.random() + 1).toString(36).substring(7)
      try {
        this.set(target, true)
        const result = await action()
        return result
      } catch (error) {
        throw error
      } finally {
        this.set(target, false)
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePreloader, import.meta.hot))
}