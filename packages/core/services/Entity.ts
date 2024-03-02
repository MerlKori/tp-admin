import type { IApiClient, ISelectRequest, IInsertUpdateResponse, ID, IDeleteResponse } from '~/types/api'
import type { IEntityAttr } from '~/types/entity'
import type { IObject } from '~/types/base'

interface IEntityOptions {
  code: string
  attrs: Array<IEntityAttr>
  client: IApiClient
}

type TWhereCondition = 'eq'

interface IWhereList {
  [prop: string]: { [t: string]: unknown }
}

interface IEntityInsertOptions {
  body: IObject
  fieldsList?: Array<string>
}

interface IEntityUpdateOptions {
  body: {
    id: ID
    [prop: string]: unknown
  }
  fieldsList?: Array<string>
}

export class Repository {
  entity: string
  fieldsList: Array<string> | null
  client: IApiClient
  total: boolean
  whereList: IWhereList
  constructor (client: IApiClient, entity: string) {
    this.entity = entity
    this.fieldsList = null
    this.client = client
    this.total = false
    this.whereList = {}
  }

  attrs (fields: Array<string>): Repository {
    this.fieldsList = fields
    return this
  }

  withTotal (): Repository {
    this.total = true
    return this
  }

  where (key: string, condition: TWhereCondition, value: unknown) {
    this.whereList[key] = { [condition]: value }
  }

  async select () {
    return await this.client.select({ ...(this as ISelectRequest) })
  }

  async selectByID (id: string | number) {
    this.where('id', 'eq', id)
    this.total = false
    const result = await this.select()
    return result.success ? result.data[0] : undefined
  }
}

export class Entity {
  code: string
  attrs: Array<IEntityAttr>
  client: IApiClient

  constructor ({ code, attrs = [], client }: IEntityOptions) {
    this.code = code
    this.attrs = attrs
    this.client = client
  }

  getAttr (name: string): IEntityAttr {
    const attr = this.attrs?.find(attr => attr.name === name)
    if (!attr) throw new Error(`entity ${this.code} error: field ${name} does not exist!`)
    return attr
  }

  getAttrsList () {
    return this.attrs.map(a => a.name)
  }

  repository (attrs?: Array<string>) {
    return new Repository(this.client, this.code)
      .attrs(attrs || this.getAttrsList())
  }

  async insert (data: IEntityInsertOptions): Promise<IInsertUpdateResponse> {
    return await this.client.insert({
      entity: this.code,
      body: data.body
    })
  }

  async update (data: IEntityUpdateOptions): Promise<IInsertUpdateResponse> {
    return await this.client.update({
      entity: this.code,
      body: data.body
    })
  }

  async delete (id: ID): Promise<IDeleteResponse> {
    return await this.client.delete({
      entity: this.code,
      id
    })
  }
}
