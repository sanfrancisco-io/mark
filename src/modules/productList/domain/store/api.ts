import { basicApi } from '@/store/basicApi'
import type {
  IGetProductParams,
  IGetProductResponse,
  IProduct,
} from '../interface/models'
import { TAGS } from '@/shared/constants/rtkTags'

const productListApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IGetProductResponse, IGetProductParams>({
      query: ({ page, limit}) => ({
        url: '/products',
        params: { _page: page, _limit: limit },
      }),
      transformResponse: (response: IProduct[]) => ({
        products: response,
        hasMore: response.length > 0,
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newData, { arg }) => {
        if (arg.page === 1) {
          return newData
        }
        return {
          products: [...currentCache.products, ...newData.products],
          hasMore: newData.hasMore,
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: [TAGS.Products],
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductsQuery } = productListApi
