import { mutation, query } from 'gql-query-builder'
import { uperCaseFirstLater } from './utils'

interface IObject {
  [prop: string]: unknown
}

function generateType (key: string, operation: string) {
  switch (key) {
    case 'where':
      return {
        type: `${uperCaseFirstLater(operation)}WhereArguments`
      }

    case 'input':
      return {
        type: `${uperCaseFirstLater(operation)}Input`,
        required: true
      }

    default:
      return null
  }
}

export class QraphqlQueryBuilder {
  operation: string
  variables: IObject
  fields: Array<string>
  total: boolean

  constructor (operation: string) {
    this.operation = operation
    this.variables = {}
    this.fields = ['id']
    this.total = false
  }

  __normalizeRequestFields (fields: Array<string>) {
    const result: Array<string | IObject> = []

    for (const field of fields) {
      let targetObj: IObject = {}
      let target: Array<string | IObject> = result
      const parts = field.split('.')
      const key = parts.at(-1)
      const path = parts.slice(0, parts.length - 1)

      for (const pKey of path) {
        let idx: number = target.findIndex(i => typeof i === 'object' && i[pKey])
        if (idx < 0) {
          target.push({ [pKey]: [] })
          idx = target.length - 1
        }
        targetObj = target[idx] as IObject
        target = targetObj[pKey] as Array<string | IObject>
      }

      target.push(key as string)
    }
    return result
  }

  param (key: string, value: unknown): QraphqlQueryBuilder {
    const type = generateType(key, this.operation)

    if (type) {
      this.variables[key] = { value, ...type }
    } else {
      this.variables[key] = value
    }

    return this
  }

  paramIf (condition: boolean, key: string, value: unknown): QraphqlQueryBuilder {
    if (condition) this.param(key, value)
    return this
  }

  attrs (fields: Array<string>): QraphqlQueryBuilder {
    this.fields = fields
    return this
  }

  withTotal (total: boolean): QraphqlQueryBuilder {
    this.total = total
    return this
  }

  query () {
    const baseQuery = {
      operation: this.operation,
      variables: this.variables,
      fields: this.__normalizeRequestFields(this.fields)
    }

    if (this.total) {
      return query([
        baseQuery,
        {
          operation: `count${uperCaseFirstLater(this.operation)}`,
          fields: ['total']
        }
      ])
    } else {
      return query(baseQuery)
    }
  }

  save () {
    return mutation({
      operation: `save${uperCaseFirstLater(this.operation)}`,
      variables: this.variables,
      fields: this.fields
    })
  }

  delete () {
    return mutation({
      operation: `delete${uperCaseFirstLater(this.operation)}`,
      variables: this.variables,
      fields: this.fields
    })
  }
}
