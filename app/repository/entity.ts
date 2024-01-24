// 3rd's
import type { $Fetch, FetchOptions } from 'ofetch';
// import { $Fetch, FetchOptions } from 'ofetch';

export type TEntityAttr = {
  id: string
  dataType: 'String' | 'Number'
}

// type TRequestOptions = {
//   method: string
//   endpoint: string
// } 
type TEntityOptions = {
  fetcher: $Fetch
  name: string
  attrs: Array<TEntityAttr>
}

class Entity<T> {
  private $fetch: $Fetch
  attrs: Array<TEntityAttr>
  name: string

  constructor({
    fetcher,
    name,
    attrs
  }: TEntityOptions) {
    this.$fetch = fetcher
    this.attrs = attrs
    this.name = name
  }

  async select (fetchOptions: FetchOptions<'json'>): Promise<T> {
    return this.$fetch<T>( 
      `/${this.name}`,
      { 
        method: 'GET', 
        ...fetchOptions 
      }
    )
  }

  // async call(
  //   method: string,
  //   url: string,
  //   data?: object,
  //   fetchOptions?: FetchOptions<'json'>
  // ): Promise<T> {
    // return this.$fetch<T>(
    //   url, 
    //   { 
    //     method, 
    //     body: data, 
    //     ...fetchOptions 
    //   }
    // )
  // }
}

export default Entity;
