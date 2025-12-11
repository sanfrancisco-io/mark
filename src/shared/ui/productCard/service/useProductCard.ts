import { useNavigate } from 'react-router'

export const useProductCard = () => {
  const navigate = useNavigate()

  const handleNavigate = (id: string) => {
    navigate(`/products/${id}`)
  }

  return { handleNavigate }
}
