import type { PropsWithChildren } from 'react'

type IPageWrapper = PropsWithChildren

export const PageWrapper = ({ children }: IPageWrapper) => {
  return (
    <div className='w-full max-w-7xl m-auto flex flex-col flex-1 px-2 py-10'>
      {children}
    </div>
  )
}
