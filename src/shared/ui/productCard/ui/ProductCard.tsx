import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { RatingStars } from '@/components/ui/rating'
import { getCurrency } from '@/shared/helpers/getCurrency'
import { formatDate } from '@/shared/helpers/formatDate'
import type { IProduct } from '@/modules/main/domain/interface/models'

interface IProductCard {
  product: IProduct
}

export const ProductCard = ({ product }: IProductCard) => {
  const {
    description,
    imageUrl,
    name,
    price,
    rating,
    deliveryDate,
    stock,
    currency,
  } = product

  const productCurrency = getCurrency(currency)

  const renderContent = () => {
    return (
      <>
        <div className='flex items-baseline justify-between'>
          <p className='text-xl font-bold'>
            {price.toFixed(2)} {productCurrency}
          </p>
          <RatingStars rating={rating} size={20} />
        </div>
        <p className='text-sm font-medium self-end'>
          in stock: <span className='font-semibold'>{stock}</span>
        </p>
        <p>{formatDate(new Date(deliveryDate))}</p>
      </>
    )
  }

  const renderHeader = () => {
    return (
      <>
        <CardTitle className='text-xl font-semibold leading-tight'>
          {name}
        </CardTitle>
        <CardDescription className='text-sm line-clamp-3'>
          {description}
        </CardDescription>
      </>
    )
  }

  return (
    <Card className='grid cursor-pointer grid-rows-subgrid row-span-6 overflow-hidden border text-white bg-[#4B352A] shadow-sm p-4'>
      <img
        src={imageUrl}
        alt={name}
        width={270}
        height={180}
        className='h-full w-full object-cover rounded-xs ring-2 ring-[#F7DCB9]'
      />
      <CardHeader className='contents'>{renderHeader()}</CardHeader>
      <CardContent className='contents'>{renderContent()}</CardContent>
    </Card>
  )
}
