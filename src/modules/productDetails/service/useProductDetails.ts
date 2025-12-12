import { useParams } from 'react-router'
import {
  useGetProductByIdQuery,
  useGetProductSpecificationsByIdQuery,
  useGetProductMerchantsByIdQuery,
} from '../domain/store/api'
import { SORT_TYPE } from '@/shared/constants/productDetails'
import { useMemo, useState } from 'react'

export const useProductDetails = () => {
  const [sort, setSort] = useState(SORT_TYPE[0])

  const { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery({ id }, { skip: !id })

  const { data: specifications } = useGetProductSpecificationsByIdQuery(
    { id },
    { skip: !id },
  )

  const { data: merchants } = useGetProductMerchantsByIdQuery(
    { id },
    { skip: !id },
  )

  const handleChangeSort = (value: string) => {
    const findSortType = SORT_TYPE.find((item) => item.value === value)

    if (!findSortType) return

    setSort(findSortType)
  }

  const sortedOffers = useMemo(() => {
    const offers = merchants?.items

    if (!offers) return []

    if (!offers.length) return []

    return [...offers].sort((a, b) => {
      let comparison = 0

      switch (sort.value) {
        case 'price':
          comparison = a.price - b.price
          break

        case 'date': {
          const dateA = new Date(a.estimatedDeliveryDate).getTime()
          const dateB = new Date(b.estimatedDeliveryDate).getTime()

          comparison = dateA - dateB
          break
        }

        default:
          return 0
      }

      return comparison
    })
  }, [sort, merchants])

  return {
    product,
    isError,
    isLoading,
    specifications,
    offers: sortedOffers,
    sort,
    handleChangeSort,
  }
}
