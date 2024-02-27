import { $fetch } from 'ofetch';
import type { FetchOptions } from 'ofetch';

import ProductsModule from '~/repository/modules/products';
import Entity from '~/repository/entity'

interface IApiInstance {
  products: ProductsModule
  [prop: string]: Entity<unknown>
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.api.baseURL as string
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    products: new ProductsModule(apiFecther),
  };

  return {
    provide: {
      api: modules
    }
  };
});