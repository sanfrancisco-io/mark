import { ProductCard } from '@/shared/ui/productCard'
import { useHome } from '../service/useHome'

export const Home = () => {
  const { isError, isLoading, loadingTriggerRef, products, isFetching } =
    useHome()

  if (isLoading) {
    return <div>Загрузка товаров...</div>
  }

  if (isError) {
    return <div>Произошла ошибка при загрузке товаров.</div>
  }

  if (!products.length)
    return (
      <div className='text-center py-8 text-gray-500'>
        <p>В данный момент товары отсутствуют.</p>
        <p>Скоро здесь появятся новые поступления!</p>
      </div>
    )

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-4 gap-4'>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div
        ref={loadingTriggerRef}
        className='h-10 py-4 text-center text-[#666] w-full'
      >
        {isFetching ? 'Загружаем данные...' : 'Прокрутите для просмотра'}
      </div>
    </div>
  )
}
