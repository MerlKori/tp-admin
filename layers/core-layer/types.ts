import type { LocationQueryRaw } from 'vue-router'

export type TNavItem = {
  label: string
  code: string
  order?: number
  icon?: string
  route?: string
  query?: LocationQueryRaw
  items?: Array<TNavItem>
}