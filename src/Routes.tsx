import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { Vyacheclav } from './pages/Vyacheslav'
import { Reference } from './pages/Reference'
import { Maxim } from './pages/Maxim'
import { Maria } from './pages/Maria'
import { VyacheslavTask1 } from './pages/Vyacheslav/VyacheslavTask1'

export const Routes = createBrowserRouter([
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
  { path: '/maria', element: <Maria /> },
])
