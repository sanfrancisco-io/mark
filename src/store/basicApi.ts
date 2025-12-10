import { BASE_URL } from '@/shared/constants/environmentVariables'
import { TAGS } from '@/shared/constants/rtkTags'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const basicApi = createApi({
  reducerPath: 'basicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: Object.values(TAGS),
  endpoints: () => ({}),
  keepUnusedDataFor: 30,
})

