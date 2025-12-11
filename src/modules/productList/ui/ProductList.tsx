import { ProductCard } from '@/shared/ui/productCard'
import { useProductList } from '../service/useProductsList'

export const ProductList = () => {
  const { isError, isLoading, loadingTriggerRef, products, isFetching } =
    useProductList()

  if (isLoading) return <div>Loading products...</div>

  if (isError) return <div>An error occurred while loading products.</div>

  if (!products?.products.length)
    return (
      <div className='text-center py-8 text-gray-500'>
        <p>There are currently no products available.</p>
        <p>New arrivals will be here soon!</p>
      </div>
    )

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div
        ref={loadingTriggerRef}
        className='h-10 py-4 text-center text-[#666] w-full text-sm sm:text-base'
      >
        {isFetching
          ? 'Loading data...'
          : products.hasMore
          ? 'Scroll to view.'
          : null}
      </div>
    </div>
  )
}
