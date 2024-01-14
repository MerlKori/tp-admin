
async function request (endpoint: string, options: RequestInit) {
  const cfg = useRuntimeConfig()
  const url = `${cfg.public.api.baseURL}/${endpoint}`
  // const user = useUser()
  // if (!user.authorized) navigateTo('/auth')
  const requestOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      // Authorization: `Bearer ${user.token}`,
      ...(options.headers || {})
    },
    body: options.body
  }

  try {
    const response = await fetch(url, requestOptions)
    if (response.ok) return response.json()
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  } catch (error) {
    console.error(`request error: `, error);
  }
}

async function rpc (body: object) {
  return request('rpc', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

class Repository {
  entity: string
  method: string
  fieldList: string | Array<string>
  limit: null | number
  whereList: null | object
  offset: null | number
  total: boolean
  constructor (entity: string) {
    this.entity = entity
    this.method = 'select'
    this.fieldList = '*'
    this.whereList = null
    this.limit = null
    this.offset = null
    this.total = false
  }

  attrs (...args: Array<string>) {
    this.fieldList = args
    return this
  }

  withTotal () {
    this.total = true
    return this
  }

  where (value: object) {
    this.whereList = value
    return this
  }

  setLimit (limit: number) {
    this.limit = limit
    return this
  }

  setOffset (offset: number) {
    this.offset = offset
    return this
  }

  async select () {
    const body = { ...this }
    const result = await rpc(body) 
    return result
  }

  async selectById (id: number) {
    this.limit = 1
    this.whereList = { id }
    const result = await this.select()
    return result.data[0]
  }
}

function repository (entity: string) {
  return new Repository(entity)
}

async function getEntitiesSchema () {
  return request('domain/schema', { method: 'GET' })
} 

async function uploadFile (body: FormData) {
  return request('file', {
    method: 'POST',
    body 
  })
}

async function insert (entity: string, execParams) {
  return rpc({
    entity,
    method: 'insert',
    execParams
  })
}

async function update (entity: string, execParams) {
  return rpc({
    entity,
    method: 'update',
    execParams
  })
}

async function deleteByID (entity: string, id: string | number) {
  return rpc({
    entity,
    method: 'delete',
    execParams: { id }
  })
}

export default () => ({
  insert,
  update,
  deleteByID,
  getEntitiesSchema,
  rpc,
  repository,
  uploadFile
})
