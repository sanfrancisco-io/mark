import { basicApi } from '@/store/basicApi'
import { TAGS } from '@/shared/constants/rtkTags'
import type {
  IGetProductByIdParams,
  IGetProductMerchantsByIdParams,
} from '../interface/models'
import type {
  IProduct,
  IProductMerchantsResponse,
  IProductSpecsResponse,
} from '@/modules/productList/domain/interface/models'

const productDetailsApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<IProduct, IGetProductByIdParams>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: [TAGS.Product],
    }),
    getProductSpecsById: build.query<
      IProductSpecsResponse,
      IGetProductByIdParams
    >({
      query: ({ id }) => ({
        url: `/specs/${id}`,
      }),
    }),
    getProductMerchantsById: build.query<
      IProductMerchantsResponse,
      IGetProductMerchantsByIdParams
    >({
      query: ({ id }) => ({
        url: `/merchants/${id}`,
      }),
    }),
  }),

  overrideExisting: false,
})

export const {
  useGetProductByIdQuery,
  useGetProductSpecsByIdQuery,
  useGetProductMerchantsByIdQuery,
} = productDetailsApi
