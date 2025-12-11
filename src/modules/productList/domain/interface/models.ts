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

export interface IProductSpecsResponse {
  characteristics: IProductSpecs[]
  id: string
}

export interface IProductMerchantsResponse {
  id: number
  merchants: IProductMerchants[]
}

export interface IProductMerchants {
  name: string
  currency: string
  delivery: string
  rating: number
  price: number
}

export interface IProductSpecs {
  name: string
  value: string
}

export interface IGetProductParams {
  page: number
  limit: number
}
