import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Quotes from './pages/Quotes.tsx'
import NotFound from './pages/NotFound.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/quotes',
        element: <Quotes/>
      },
      {
        path: '/notfound',
        element: <NotFound/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)