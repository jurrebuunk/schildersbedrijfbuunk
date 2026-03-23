import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { OffertePage } from './pages/OffertePage'
import { SchilderwerkenPage } from './pages/SchilderwerkenPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'schilderwerken', element: <SchilderwerkenPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'offerte', element: <OffertePage /> },
    ],
  },
])
