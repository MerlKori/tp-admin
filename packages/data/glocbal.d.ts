import type { Schema } from 'yup'

export interface IObject {
  [prop: string]: unknown
}

export type TDataType = 'String' | 'Number' | 'Enum' | 'Entity' | 'Date' | 'Boolean'

export interface IEntityAttr {
  name: string
  dataType: TDataType
  defaultValue?: number | string
  enums?: Array<string>
  associateEntity?: string
  size?: number
  reuired?: boolean
  validation?: Schema
}

export interface IEntitySchema {
  code: string
  descAttr?: string
  attrs: Array<IEntityAttr>
}

export interface IEntity {
  code: string
  descAttr?: string
  attrs: Array<IEntityAttr>
}