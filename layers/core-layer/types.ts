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

export type TEntityAttr = {
  name: string
  dataType: TDataType
  defaultValue?: number | string
  enums?: Array<string>
  associateEntity?: string
}

export type TEntity = {
  code: string
  attrs: Array<TEntityAttr>
  select (): Promise<Array<unknown>>
}

export type TDataTableColumn = {
  id: string
  label?: string
  dataType: TDataType
}
