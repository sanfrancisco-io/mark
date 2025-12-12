import { HeaderStateSelector } from '@/modules/header/domain/store/selector'
import { useAppSelector } from '@/store/hooks'
import { useGetProductsByQueryQuery } from '../domain/store/api'

export const useSearchResult = () => {
  const query = useAppSelector(HeaderStateSelector).query

  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByQueryQuery({ query })

  return {
    products,
    isLoading,
    isError,
  }
}
