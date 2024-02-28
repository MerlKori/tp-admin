import { defineStore, acceptHMRUpdate } from 'pinia'
import type { LocationQueryRaw } from 'vue-router'
// import type { TAppIcons } from '~/types'

export interface INavigationItem {
  code: string
  order?: number
  // icon: TAppIcons
  route?: string
  query?: LocationQueryRaw
}

export const useNavigation = defineStore('useNavigation', {
  state: () => ({
    items: [
      {
        code: 'dashboard',
        route: '/dashboard'
        // icon: 'dashboard'
      }
    ] as Array<INavigationItem>
  }),

  getters: {},

  actions: {}
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useNavigation, import.meta.hot))
