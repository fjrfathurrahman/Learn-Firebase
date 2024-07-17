import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/page.tsx'
import './root/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePage from './root/create/page.tsx'
import getValuePage from './root/getValue/page.tsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/get data', Component: getValuePage},
  {path: '/create', Component: CreatePage}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
