import { basicApi } from '@/store/basicApi'
import { TAGS } from '@/shared/constants/rtkTags'
import type { IProduct } from '@/modules/main/domain/interface/models'
import type { IGetProductByIdParams } from '../interface/models'

const productDetailsApi = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getProductById: build.query<IProduct, IGetProductByIdParams>({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: [TAGS.Product],
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductByIdQuery } = productDetailsApi
