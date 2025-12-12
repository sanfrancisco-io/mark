import { AppLayout } from '@/shared/ui/layouts'
import NotFoundPage from '@/modules/scenarios-constructor/ui/notFoundPage/NotFoundPage'
import { createBrowserRouter } from 'react-router'
import { ProductDetailsPage } from '@/modules/scenarios-constructor/ui/productDetailsPage/ProductDetailsPage'
import { FeedPage } from '@/modules/scenarios-constructor/ui/feedPage/FeedPage'
import { SearchPage } from '@/modules/scenarios-constructor/ui/searchPage/SearchPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <FeedPage />,
      },
      {
        path: '/products/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: '/products/search',
        element: <SearchPage />,
      },
    ],
  },
])
