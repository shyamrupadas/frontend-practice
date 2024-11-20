import { RouterProvider } from 'react-router-dom'

import { Routes } from './Routes'

import './App.css'

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
