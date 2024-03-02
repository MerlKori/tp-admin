// import { Repository } from '~/services/Entity'

type ID = string | number

interface IRandomObject {
  [prop: string]: unknown
}

// export type IApiClientResponse <T> = (body: T) => Promise<{ data?: IRandomObject, errors?: Array<IRandomObject> }>

// export type ISelectRequest = InstanceType<typeof Repository>

export interface ISelectRequest {
  entity: string
  method?: string
  body?: IRandomObject
  whereList: IRandomObject
  fieldsList?: Array<string>
  limit?: number | undefined | null
  offset?: number | undefined | null
  total: boolean
}

export interface ISelectResponse {
  success: boolean
  count: number
  data: Array<IRandomObject>
  errors: Array<IRandomObject>
}

export interface IInsertRequest {
  entity: string
  body: IRandomObject
  fieldsList?: Array<string>
}

export interface IUpdateRequest {
  entity: string
  body: {
    id: ID
    [prop: string]: unknown
  }
  fieldsList?: Array<string>
}

export interface IInsertUpdateResponse {
  success: boolean
  data: IRandomObject
  errors: Array<IRandomObject>
}


export interface IDeleteRequest {
  entity: string
  id: ID
}

export interface IDeleteResponse {
  success: boolean
  errors: Array<IRandomObject>
}

export interface IApiClient {
  uploadFile (): Promise<any>
  downloadFile (): Promise<any>
  select (data: ISelectRequest): Promise<ISelectResponse>
  insert (data: IInsertRequest): Promise<IInsertUpdateResponse>
  update (data: IUpdateRequest): Promise<IInsertUpdateResponse>
  delete (data: IDeleteRequest): Promise<IDeleteResponse>
}