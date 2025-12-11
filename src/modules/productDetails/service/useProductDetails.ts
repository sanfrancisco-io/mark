import { useParams } from 'react-router'
import { useGetProductByIdQuery } from '../domain/store/api'

export const useProductDetails = () => {
  const { id } = useParams()

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery({ id }, { skip: !id })

  return { product, isError, isLoading }
}
