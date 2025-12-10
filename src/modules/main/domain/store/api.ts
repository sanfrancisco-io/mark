import { basicApi } from '@/store/basicApi'
import type { IGetProductParams, IProduct } from '../interface/models'
import { TAGS } from '@/shared/constants/rtkTags'

const homeApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], IGetProductParams>({
      query: ({ page, limit }) => ({
        url: '/products',
        params: { _page: page, _limit: limit },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems
        }
        currentCache.push(...newItems)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: [TAGS.Products],
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductsQuery } = homeApi
