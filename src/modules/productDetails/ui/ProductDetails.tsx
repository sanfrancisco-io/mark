import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useProductDetails } from '../service/useProductDetails'
import { RatingStars } from '@/components/ui/rating'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SORT_TYPE } from '@/shared/constants/productDetails'
import { getCurrency } from '@/shared/helpers/getCurrency'
import { Star } from 'lucide-react'
import { formatDate } from '@/shared/helpers/formatDate'
import { getRatingColor } from '@/shared/helpers/getRatingColor'
import { getHighResUrl } from '@/shared/helpers/getHighResUrl'

export const ProductDetails = () => {
  const {
    product,
    isError,
    isLoading,
    specifications,
    offers,
    sort,
    handleChangeSort,
  } = useProductDetails()

  if (isLoading) return <div>Loading products...</div>

  if (isError) return <div>An error occurred while loading products.</div>

  if (!product) return <div>Something went wrong!</div>

  const renderOffersContent = () => {
    if (!offers?.length) return <span>no merchants</span>

    return offers.map((item) => {
      const currency = getCurrency(item.currency)
      const ratingColor = getRatingColor(item.merchantRating)
      const formattedDate = formatDate(new Date(item.estimatedDeliveryDate))

      return (
        <div
          key={item.merchantId}
          className='mt-2 border rounded-xl p-2 first:mt-0'
        >
          <div className='flex justify-between items-center flex-wrap gap-2'>
            <p className='font-bold text-sm sm:text-base'>
              {item.merchantName}
            </p>
            <p className='font-bold text-nowrap text-sm sm:text-base'>
              {item.price.toFixed(2)} {currency}
            </p>
          </div>
          <div className='flex items-center gap-4 mt-1'>
            <div className='flex items-center gap-2 sm:gap-5'>
              <Star
                fill={ratingColor}
                color={ratingColor}
                size={20}
                strokeWidth={1.5}
              />
              <p className='text-sm sm:text-base'>{item.merchantRating}</p>
            </div>
            <p className='text-sm sm:text-base text-gray-500'>
              {formattedDate}
            </p>
          </div>
        </div>
      )
    })
  }

  const renderOffersHeader = () => {
    return (
      <div className='flex flex-col xl:flex-row gap-2 xl:gap-4 xl:items-center'>
        <span className='text-sm font-medium text-gray-500 xl:text-gray-900'>
          Sort:
        </span>
        <Tabs
          defaultValue={SORT_TYPE[0].value}
          value={sort.value}
          onValueChange={handleChangeSort}
          className='w-full xl:w-auto flex-1'
        >
          <TabsList>
            {SORT_TYPE.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className='text-xs sm:text-sm'
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    )
  }

  const renderAttributesHeader = () => {
    return <p className='text-lg font-bold'>{product.name}</p>
  }

  const renderAttributesContent = () => {
    const attr = specifications?.attributes

    if (!attr?.length) return <span>no attributes</span>

    return (
      <>
        <div className='flex items-center gap-4'>
          <RatingStars rating={product.rating} size={20} />{' '}
          <span className='text-gray-400 text-sm'>({product.rating})</span>
        </div>
        <div className='mt-4 space-y-2'>
          {attr.map((item) => (
            <div
              key={item.value}
              className='flex justify-between items-center text-sm sm:text-base border-b border-gray-100 last:border-0 pb-1'
            >
              <span className='text-gray-600'>{item.name}: </span>
              <span className='font-bold text-right ml-2'>{item.value}</span>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10'>
      <div className='h-[600px] w-full flex items-center justify-center bg-white rounded-lg border ring-2 ring-blue-400 overflow-hidden relative'>
        <img
          src={getHighResUrl(product.imageUrl)}
          alt={product.name}
          className='w-full h-full object-cover'
        />
      </div>

      <Card className='ring-2 ring-blue-400 h-[600px] flex flex-col'>
        <CardHeader className='shrink-0'>{renderAttributesHeader()}</CardHeader>
        <CardContent className='flex-1 overflow-y-auto'>
          {renderAttributesContent()}
        </CardContent>
      </Card>

      <Card className='ring-2 ring-blue-400 md:col-span-2 lg:col-span-1 h-[600px] flex flex-col overflow-hidden'>
        <CardHeader className='pb-2 shrink-0'>
          {renderOffersHeader()}
        </CardHeader>
        <CardContent className='flex-1 overflow-y-auto py-2'>
          {renderOffersContent()}
        </CardContent>
      </Card>
    </div>
  )
}
