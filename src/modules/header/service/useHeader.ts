import { type ChangeEvent } from 'react'
import { setQuery } from '../domain/store/slice'
import { useAppDispatch } from '@/store/hooks'

export const useHeader = () => {
  const dispatch = useAppDispatch()

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    dispatch(setQuery(value))
  }

  const resetQuery = () => {
    dispatch(setQuery(''))
  }

  return { handleChangeQuery, resetQuery }
}
