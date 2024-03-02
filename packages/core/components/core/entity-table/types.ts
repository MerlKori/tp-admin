import type { IEntity } from '~/global.types'

interface IRepository {
  attrs (data: Array<string>): IRepository
  select (): Promise<unknown>
}

export interface ITableEntity extends IEntity {
  repository (): IRepository
}
