import type { TDataType } from '~/types/entity'

export default class Attr {
  name: string
  dataType: TDataType
  defaultValue?: number | string | undefined
  enums?: Array<string> | undefined
  associateEntity?: string | undefined
  size?: number | undefined
  // reuired?: boolean
  // validation?: Schema

  constructor (name: string) {
    this.name = name
    this.dataType = 'String'
    this.defaultValue = undefined
    this.enums = undefined
    this.associateEntity = undefined
    this.size = undefined
  }

  number (): Attr {
    this.dataType = 'Number'
    return this
  }

  string (size: number): Attr {
    this.dataType = 'String'
    this.size = size
    return this
  }

  enum (enums: string[], defaultValue?: string): Attr {
    this.dataType = 'Enum'
    this.defaultValue = defaultValue || enums[0]
    this.enums = enums
    return this
  }
}
