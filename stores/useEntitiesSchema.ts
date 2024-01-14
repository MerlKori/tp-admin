import { defineStore, acceptHMRUpdate } from 'pinia'
import { usePreloader } from './usePreloader'
import useApi from '~/composables/useApi'
const entities = await import('../schema.json')
// debugger

export interface IEntityAttribute {
  name: string
  dataType: string
  required: boolean
  default?: unknown
  enums?: Array<string>
  entity?: string
  type?: string
}

export interface IEntitySchema {
  name: string
  attributes: Array<IEntityAttribute>
}

interface ISchema {
  [prop: string]: IEntitySchema
}

export const useEntitiesSchema = defineStore('useEntitiesSchema', {
  state: () => ({
    entities: entities as ISchema,
    loaded: false
  }),

  actions: {
    get (entity: string): IEntitySchema {
      return this.entities[entity]
    },

    async getEntitySchema (entity: string): Promise<IEntitySchema> {
      // if (!this.loaded) await this.init()
      return this.entities[entity]
    },

    init () {
      const { asyncActionWrapp } = usePreloader()
      const { getEntitiesSchema } = useApi()
      asyncActionWrapp(async () => {
        this.entities = await getEntitiesSchema()
        console.log('entities', { ...this.entities });
      })
    }   
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEntitiesSchema, import.meta.hot))
}
