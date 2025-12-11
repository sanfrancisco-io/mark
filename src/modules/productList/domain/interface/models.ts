export interface IProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  imageUrl: string
  stock: number
  rating: number
  deliveryDate: string
}

export interface IGetProductParams {
  page: number
  limit: number
}
