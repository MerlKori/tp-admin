import { defineStore, acceptHMRUpdate } from 'pinia'
// import type { IObject } from '~/types'

interface IUser {
  token: string | null
  refreshToken: string | null
  expiresIn: string | null
  tokenType: string | null
  userID: string | null
  userStatus: string | null
  userRoles: Array<{ id: string, name: string }>
  profileID: string | null
}

export const useUserStore = defineStore('useUserStore', {
  state: (): IUser => ({
    token: null,
    refreshToken: null,
    expiresIn: null,
    tokenType: null,
    userID: null,
    userStatus: null,
    userRoles: [],
    profileID: null
  }),

  getters: {
    authorized (state) {
      return Boolean(state.token)
    }
  },

  actions: {
    setUserData (data: IObject) {
      for (const key of Object.keys(data)) {
        if (Object.hasOwn(this, key)) {
          const state = this as IUser
          state[key] = data[key]
        }
      }
    },

    hasSomeRoles (...roles: string[]): boolean {
      return (this.userRoles || []).some(row => roles.includes(row.name))
    },

    hasEveryRoles (...roles: string[]): boolean {
      return (this.userRoles || []).every(row => roles.includes(row.name))
    }
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
