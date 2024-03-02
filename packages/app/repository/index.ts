import type { IApiClient } from '@nuxt3-monorepo/core/types/api'
import BanerEntity from './baner'

export interface IApiInstance {
  baner: BanerEntity
}

export function initApiEntities (client: IApiClient): IApiInstance {
  return {
    baner: new BanerEntity(client)
  }
}
