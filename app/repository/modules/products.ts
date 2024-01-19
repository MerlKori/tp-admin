import type { FetchOptions } from 'ofetch';
import type { AsyncDataOptions } from '#app';

import FetchFactory from '../factory';

// export const attrs = [
//   {
//     name: 'attr1',
//     dataType: 'String'
//   },
//   {
//     name: 'attr2',
//     dataType: 'Number'
//   }
// ];

// type TRow = {
//   attr1: String;
//   attr2: Number;
// };

type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}



class ProductsModule extends FetchFactory<IProduct[]> {
  private RESOURCE = '/products';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getProducts(
    asyncDataOptions?: AsyncDataOptions<IProduct[]>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US'
          }
        };
        return this.call(
          'GET',
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    ) 
  }
}

export default ProductsModule;