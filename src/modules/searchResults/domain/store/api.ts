import { basicApi } from '@/store/basicApi'

import type { IProduct } from '@/modules/productList/domain/interface/models'
import type { IGetProductByQueryParams } from '../interface/models'

const searchResultsApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProductsByQuery: build.query<IProduct[], IGetProductByQueryParams>({
      query: ({ query }) => ({
        url: `/products`,
        params: { name_like: query, _limit: 8 },
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductsByQueryQuery } = searchResultsApi
