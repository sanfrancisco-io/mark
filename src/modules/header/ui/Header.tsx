import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/store/hooks'
import clsx from 'clsx'
import { Menu, Search, ShoppingCart, User, XIcon } from 'lucide-react'
import { HeaderStateSelector } from '../domain/store/selector'
import { useHeader } from '../service/useHeader'
import { Link } from 'react-router'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'

interface IHeader {
  className: string
}

export const Header = ({ className }: IHeader) => {
  const { query } = useAppSelector(HeaderStateSelector)
  const { handleChangeQuery, resetQuery } = useHeader()

  return (
    <header
      className={clsx(
        'bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between',
        className,
      )}
    >
      <div className='flex items-center gap-6'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>
          Marketplace
        </Link>

        <nav className='hidden md:flex gap-4'>
          <Button variant='link' className='text-gray-700 hover:text-gray-900'>
            Catalog
          </Button>
          <Button variant='link' className='text-gray-700 hover:text-gray-900'>
            New
          </Button>
          <Button variant='link' className='text-gray-700 hover:text-gray-900'>
            About us
          </Button>
        </nav>
      </div>

      <div className='flex items-center gap-4'>
        <InputGroup>
          <InputGroupInput
            onClick={() => console.log('blur')}
            value={query}
            onChange={handleChangeQuery}
            placeholder='Search...'
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align='inline-end'>
            <Button onClick={resetQuery} variant='ghost' size='sm'>
              <XIcon />
            </Button>
          </InputGroupAddon>
        </InputGroup>

        <Button
          variant='ghost'
          size='icon'
          className='text-gray-700 hover:bg-gray-100'
        >
          <ShoppingCart className='h-5 w-5' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='text-gray-700 hover:bg-gray-100'
        >
          <User className='h-5 w-5' />
        </Button>

        <Button
          variant='ghost'
          size='icon'
          className='md:hidden text-gray-700 hover:bg-gray-100'
        >
          <Menu className='h-5 w-5' />
        </Button>
      </div>
    </header>
  )
}
