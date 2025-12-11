import { useState } from 'react'
import { useGetProductsQuery } from '../domain/store/api'
import { useIntersectionObserver } from '@/shared/hooks/useIntersctionObserver'

export const useProductList = () => {
  const [page, setPage] = useState(1)

  const {
    data: products,
    isLoading,
    isError,
    isFetching,
  } = useGetProductsQuery({ page, limit: 8 })

  const hasMore = products?.hasMore ?? true
  

  const loadMore = () => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1)
    }
  }

  const loadingTriggerRef = useIntersectionObserver(loadMore, [isFetching])

  return {
    products,
    loadingTriggerRef,
    isError,
    isLoading,
    isFetching,
  }
}
