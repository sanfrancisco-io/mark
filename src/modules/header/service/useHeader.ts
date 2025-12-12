import { type ChangeEvent } from 'react'
import { setQuery } from '../domain/store/slice'
import { useAppDispatch } from '@/store/hooks'
import { useNavigate } from 'react-router'

export const useHeader = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    dispatch(setQuery(value))
  }

  const resetQuery = () => {
    dispatch(setQuery(''))
  }

  const handleSearchClick = () => {
    navigate('/products/search')
  }

  return { handleChangeQuery, resetQuery, handleSearchClick }
}
