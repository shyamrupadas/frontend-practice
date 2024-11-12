import { RouterProvider } from 'react-router-dom'

import './App.css'
import { Routes } from './Routes'

function App() {
  return (
    <RouterProvider
      router={Routes}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App
