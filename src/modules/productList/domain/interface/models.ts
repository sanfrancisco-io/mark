export type CurrencyCode = 'RUB' | 'USD' | 'KGS'

export interface IProductAttribute {
  name: string
  value: string
}

export interface IMerchantOffer {
  merchantId: string
  merchantName: string
  merchantRating: number
  price: number
  currency: CurrencyCode
  estimatedDeliveryDate: Date
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  currency: CurrencyCode
  imageUrl: string
  stockCount: number
  rating: number
  deliveryDate: Date
}

export interface IProductSpecification {
  id: number
  attributes: IProductAttribute[]
}

export interface ProductOffersList {
  id: number
  items: IMerchantOffer[]
}

export interface IGetProductResponse {
  products: IProduct[]
  hasMore: boolean
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

export interface IGetProductParams {
  page: number
  limit: number
}
