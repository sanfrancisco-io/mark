import { AppLayout } from '@/shared/ui/layouts'
import { HomePage } from '@/modules/scenarios-constructor/ui/homePage/HomePage'
import NotFoundPage from '@/modules/scenarios-constructor/ui/notFoundPage/NotFoundPage'
import { createBrowserRouter } from 'react-router'
import { ProductDetailsPage } from '@/modules/scenarios-constructor/ui/productDetailsPage/ProductDetailsPage'

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
      {
        path: '/products/:id',
        element: <ProductDetailsPage />,
      },
    ],
  },
])
