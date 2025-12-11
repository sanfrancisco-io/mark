import { useParams } from 'react-router'
import {
  useGetProductByIdQuery,
  useGetProductSpecsByIdQuery,
  useGetProductMerchantsByIdQuery,
} from '../domain/store/api'
import { SORT_TYPE } from '@/shared/constants/productDetails'
import { useState } from 'react'

export const useProductDetails = () => {
  const [sort, setSort] = useState(SORT_TYPE[0])

  const { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery({ id }, { skip: !id })
  const { data: specs } = useGetProductSpecsByIdQuery({ id }, { skip: !id })
  const { data: merchants } = useGetProductMerchantsByIdQuery(
    { id },
    { skip: !id },
  )

  const handleChangeSort = (value: string) => {
    const findSortType = SORT_TYPE.find((item) => item.value === value)

    if (!findSortType) return

    setSort(findSortType)
  }

  return {
    product,
    isError,
    isLoading,
    specs,
    merchants,
    sort,
    handleChangeSort,
  }
}
