import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gradient-to-r from-gray-900 via-stone-800 to-slate-800'>
    <React.StrictMode>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>
)
