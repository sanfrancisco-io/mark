import { useProductDetails } from '../service/useProductDetails'

export const ProductDetails = () => {
  const { product, isError, isLoading } = useProductDetails()

  if (isLoading) {
    return <div>Загрузка товара...</div>
  }

  if (isError) {
    return <div>An error occurred while loading products.</div>
  }

  console.log(product)

  return <div>product details</div>
}
