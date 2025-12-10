import { Footer } from '@/modules/footer'
import { Header } from '@/modules/header'
import { Outlet } from 'react-router'

export const AppLayout = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header className='shrink-0' />
      <main className='grow overflow-y-auto'>
        <Outlet />
      </main>
      <Footer className='shrink-0' />
    </div>
  )
}
