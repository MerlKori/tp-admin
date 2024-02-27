import { defineStore, acceptHMRUpdate } from 'pinia'
import type { TNavItem } from '../types'



export const useNavigation = defineStore('useNavigation', {
  state: () => ({
    // activePages: [] as Array<TNavItem>,


    items: [
      {
        code: 'category',
        label: 'Categories',
        route: '/test',
        query: { id: 1, entity: 'Brand' }
      },
      {
        code: 'category',
        label: 'Categories',
        route: '/test',
        query: { id: 2, entity: 'Brand' }
      },
      // {
      //   code: 'category',
      //   name: 'Categories',
      //   type: 'item',
      //   route: '/dataList/Category'
      // },
      // {
      //   code: 'category',
      //   name: 'Categories',
      //   type: 'group',
      //   submenu: [
      //     {
      //       code: 't1',
      //       name: 'test 1',
      //       type: 'item',
      //       route: '/494',
      //       query: {
      //         entity: 'Category'
      //       }
      //     },
      //     {
      //       code: 't2',
      //       name: 'test 2',
      //       type: 'item',
      //       route: '/494',
      //       query: {
      //         entity: 'Category'
      //       }
      //     },
      //   ]
      // },
      // {
      //   code: 'brand',
      //   name: 'Brands',
      //   type: 'item',
      //   route: '/dataList/Brand'
      // },
    ] as Array<TNavItem>
  }),

  getters: {},

  actions: {
    // register (data: INavigationItem, path: string) {
    //   if (path) {
    //     // const resolvedPath: any = $resolveDataPath(this.items, path)
    //     // resolvedPath.target.submenu.push(data)
    //   } else {
    //     this.items.push(data)
    //   } 
    // }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigation, import.meta.hot))
}
