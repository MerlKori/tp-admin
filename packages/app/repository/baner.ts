// import { string, boolean } from 'yup'
import Attr from '@nuxt3-monorepo/core/services/Attr'
import { Entity } from '@nuxt3-monorepo/core/services/Entity'

import type { IApiClient } from '@nuxt3-monorepo/core/types/api'

const schema = {
  code: 'baner',
  attrs: [
    new Attr('id').number(),
    new Attr('name').string(128),
    new Attr('state').enum(['DRFAT', 'ACTIVE']),
    new Attr('route').string(128)
  ]
}

class BanerEntity extends Entity {
  constructor (client: IApiClient) {
    super({
      code: schema.code,
      attrs: schema.attrs,
      client
    })
  }
}

export default BanerEntity
