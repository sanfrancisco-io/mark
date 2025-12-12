import { ProductCard } from '@/shared/ui/productCard'
import { useSearchResult } from '../service/useSearchResult'

export const SearchResults = () => {
  const { products, isError, isLoading } = useSearchResult()

  if (isLoading) return <div>Loading products...</div>

  if (isError) return <div>An error occurred while loading products.</div>

  if (!products?.length)
    return (
      <div className='text-center py-8 text-gray-500'>
        <p>There are no such goods.</p>
      </div>
    )

  return (
    <div className='flex flex-col gap-4 pb-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  )
}
