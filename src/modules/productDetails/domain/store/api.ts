import { basicApi } from '@/store/basicApi'
import { TAGS } from '@/shared/constants/rtkTags'
import type {
  IGetProductByIdParams,
  IGetProductMerchantsByIdParams,
} from '../interface/models'
import type {
  IProduct,
  IProductSpecification,
  ProductOffersList,
} from '@/modules/productList/domain/interface/models'

const productDetailsApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<IProduct, IGetProductByIdParams>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: [TAGS.Product],
    }),
    getProductSpecificationsById: build.query<
      IProductSpecification,
      IGetProductByIdParams
    >({
      query: ({ id }) => ({
        url: `/specifications/${id}`,
      }),
    }),
    getProductMerchantsById: build.query<
      ProductOffersList,
      IGetProductMerchantsByIdParams
    >({
      query: ({ id }) => ({
        url: `/offers/${id}`,
      }),
    }),
  }),

  overrideExisting: false,
})

export const {
  useGetProductByIdQuery,
  useGetProductSpecificationsByIdQuery,
  useGetProductMerchantsByIdQuery,
} = productDetailsApi
