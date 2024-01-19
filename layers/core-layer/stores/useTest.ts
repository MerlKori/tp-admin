import { defineStore, acceptHMRUpdate } from 'pinia'
import type { LocationQueryRaw } from 'vue-router'

export interface INavigationItem {
  name: string
  type: 'item' | 'group'
  code: string
  order?: number
  icon?: string
  route?: string
  query?: LocationQueryRaw
  submenu?: Array<INavigationItem>
}

export interface IOpenedPage {
  type: 'showList' | 'showForm' | 'showPage'
}

function showList () {}
function showForm () {}
function showPage () {}

export const useTest = defineStore('useTest', {
  state: () => ({
    activePages: [] as Array<IOpenedPage>,


    items: [
      {
        code: 'category',
        name: 'Categories',
        type: 'item',
        route: '/test',
        query: { id: 1, entity: 'Brand' }
      },
      {
        code: 'category',
        name: 'Categories',
        type: 'item',
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
    ] as Array<INavigationItem>
  }),

  getters: {},

  actions: {
    register (data: INavigationItem, path: string) {
      if (path) {
        // const resolvedPath: any = $resolveDataPath(this.items, path)
        // resolvedPath.target.submenu.push(data)
      } else {
        this.items.push(data)
      } 
    },
    
    open (routeCfg: INavigationItem) {
      // console.log('open', routeCfg);
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTest, import.meta.hot))
}
