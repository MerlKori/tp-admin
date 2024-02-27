import type { FetchOptions, $Fetch } from 'ofetch'
// import type { AsyncDataOptions } from '#app'
// import { useAsyncData } from '#app'
import type { IProduct } from '~/types'

// locals
import Entity from '../entity';

class ProductEntity extends Entity<IProduct[]> {
  constructor (fetcher: $Fetch) {
    super({
      fetcher,
      name: 'products',
      attrs: [
        {
          id: 'title',
          dataType: 'String'
        },
        {
          id: 'price',
          dataType: 'Number'
        }
      ]
    })
  }

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  // async getProducts(
  //   asyncDataOptions?: AsyncDataOptions<IProduct[]>
  // ) {

  //   // return useAsyncData(
  //   //   () => {
  //   //     const fetchOptions: FetchOptions<'json'> = {
  //   //       headers: {
  //   //         'Accept-Language': 'en-US'
  //   //       }
  //   //     };
  //   //     return this.call(
  //   //       'GET',
  //   //       `${this.RESOURCE}`,
  //   //       undefined, // body
  //   //       fetchOptions
  //   //     )
  //   //   },
  //   //   asyncDataOptions
  //   // ) 
  // }
}

export default ProductEntity

// class ProductsModule extends FetchFactory<IProduct[]> {
//   private RESOURCE = '/products';

//   /**
//    * Return the products as array 
//    * @param asyncDataOptions options for `useAsyncData`
//    * @returns 
//    */
//   async getProducts(
//     asyncDataOptions?: AsyncDataOptions<IProduct[]>
//   ) {

//     return useAsyncData(
//       () => {
//         const fetchOptions: FetchOptions<'json'> = {
//           headers: {
//             'Accept-Language': 'en-US'
//           }
//         };
//         return this.call(
//           'GET',
//           `${this.RESOURCE}`,
//           undefined, // body
//           fetchOptions
//         )
//       },
//       asyncDataOptions
//     ) 
//   }
// }

// export default ProductsModule;
