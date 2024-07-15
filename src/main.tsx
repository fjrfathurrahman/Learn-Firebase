import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.tsx'
import './root/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePage from './root/create/page.tsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/create', Component: CreatePage}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
