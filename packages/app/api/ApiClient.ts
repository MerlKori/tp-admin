import { $fetch } from 'ofetch'
import { QraphqlQueryBuilder } from './GrapgQL.QueryBuilders'
import { uperCaseFirstLater } from './utils'

import type { FetchOptions, $Fetch } from 'ofetch'
import type {
  IApiClient,
  ISelectRequest,
  ISelectResponse,
  IInsertRequest,
  IInsertUpdateResponse,
  IUpdateRequest,
  IDeleteRequest,
  IDeleteResponse
} from '@nuxt3-monorepo/core/types/api'

type TAuthResponse = {
  method: string | null
  token: string | null
}

type TAuth = () => TAuthResponse

type TGraphqlOptions = {
  query: string
  variables: {
    [prop: string]: unknown
  }
}

export class ApiClient implements IApiClient {
  $fetch: $Fetch
  auth: TAuth

  constructor (options: { url: string, auth: TAuth }) {
    this.$fetch = $fetch.create({ baseURL: options.url })
    this.auth = options.auth
  }

  async request (endpoint: string, options: FetchOptions<'json'>) {
    const auth = this.auth()
    const Authorization = auth.token ? `${auth.method} ${auth.token}` : ''

    return await this.$fetch(endpoint,
      {
        ...options,
        headers: Object.assign({}, { Authorization }, options.headers)
      }
    ).catch((err) => {
      console.error('ApiClient request error', err)
    })
  }

  async graphql (body: TGraphqlOptions): Promise<{ data?: { [prop: string]: unknown }, errors?: Array<{ [prop: string]: unknown }> }> {
    return await this.request('/graphql',
      {
        method: 'POST',
        body
      }
    )
  }

  async select (data: ISelectRequest) {
    const request = new QraphqlQueryBuilder(data.entity)
      .attrs(data.fieldsList || [])
      .withTotal(data.total)
      .paramIf(!!Object.keys(data.whereList).length, 'where', data.whereList)
      .query()

    const response = await this.graphql(request as TGraphqlOptions)
    const result = {
      count: 0,
      success: false,
      data: [],
      errors: []
    } as ISelectResponse

    if (response.data) {
      const getTotal = (): number => {
        const totalKey = `count${uperCaseFirstLater(data.entity)}`
        return data.total ? ((response.data as { [prop: string]: unknown })[totalKey] as { total: number }).total : 0
      }
      result.success = true
      result.data = response.data[data.entity] as Array<{ [prop: string]: unknown }>
      result.count = getTotal()
      return result
    }
    result.errors = response.errors || []
    return result
  }

  async insert (data: IInsertRequest) {
    const request = new QraphqlQueryBuilder(data.entity)
      .attrs(data.fieldsList || ['id'])
      .param('input', data.body)
      .save()

    const response = await this.graphql(request as TGraphqlOptions)
    return {
      data: response.data,
      errors: response.errors,
      success: !response.errors
    } as IInsertUpdateResponse
  }

  async update (data: IUpdateRequest) {
    const request = new QraphqlQueryBuilder(data.entity)
      .attrs(data.fieldsList || ['id'])
      .param('input', data.body)
      .save()

    const response = await this.graphql(request as TGraphqlOptions)
    return {
      data: response.data,
      errors: response.errors,
      success: !response.errors
    } as IInsertUpdateResponse
  }

  async delete (data: IDeleteRequest) {
    const request = new QraphqlQueryBuilder(data.entity)
      .attrs(['id'])
      .param('where', { id: { eq: data.id } })
      .delete()

    const response = await this.graphql(request as TGraphqlOptions)
    return {
      errors: response.errors,
      success: !response.errors
    } as IDeleteResponse
  }

  async uploadFile () {}
  async downloadFile () {}
}
