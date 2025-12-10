import { Button } from '@/components/ui/button'
import { Frown } from 'lucide-react'
import { useNavigate } from 'react-router'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center min-h-full bg-gray-50 text-gray-800 p-6'>
      <Frown className='h-24 w-24 text-gray-400 mb-8' />
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-2xl mb-8 text-center'>
        Ой! Кажется, эта страница не найдена.
      </p>
      <p className='text-lg text-gray-600 mb-10 text-center max-w-md'>
        Возможно, вы ввели неправильный адрес, или страница была перемещена.
      </p>
      <Button
        onClick={() => navigate(-1)}
        className='px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition-colors duration-300'
      >
        Вернуться назад
      </Button>
      <Button
        onClick={() => navigate('/')}
        variant='link'
        className='mt-4 text-blue-600 hover:text-blue-800 text-lg'
      >
        Перейти на главную
      </Button>
    </div>
  )
}
