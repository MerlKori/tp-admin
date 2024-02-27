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

export type TDataType = 'String' | 'Number' | 'Enum' | 'Entity' | 'Date' | 'Boolean'

export interface IEntityAttr {
  name: string
  dataType: TDataType
  defaultValue?: number | string
  enums?: Array<string>
  associateEntity?: string
}

export type TEntity = {
  code: string
  descAttr?: string
  attrs: Array<IEntityAttr>
  select (): Promise<Array<unknown>>
}

export interface IDataTableColumn {
  id: string
  label?: string
  dataType: TDataType
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
