import { createBrowserRouter } from 'react-router-dom'

import { Main } from './pages/Main'
import { Vyacheclav } from './pages/Vyacheslav'
import { Reference } from './pages/Reference'
import { Maxim } from './pages/Maxim'
import { Maria } from './pages/Maria'
import { VyacheslavTask1 } from './pages/Vyacheslav/VyacheslavTask1'
import { MaximTask1 } from './pages/Maxim/MaximTask1'

export const Routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
    },
    { path: '/reference', element: <Reference /> },
    {
      path: '/vyacheslav',
      element: <Vyacheclav />,
    },
    { path: '/vyacheslav/first-task', element: <VyacheslavTask1 /> },
    { path: '/maxim', element: <Maxim /> },
    { path: '/maxim/first-task', element: <MaximTask1 /> },
    { path: '/maria', element: <Maria /> },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)
