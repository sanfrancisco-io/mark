import { AppLayout } from '@/shared/ui/layouts'
import { HomePage } from '@/modules/scenarios-constructor/ui/homePage/HomePage'
import NotFoundPage from '@/modules/scenarios-constructor/ui/notFoundPage/NotFoundPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])
