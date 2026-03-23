import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { BehangPage } from './pages/BehangPage'
import { ContactPage } from './pages/ContactPage'
import { GlaszettenPage } from './pages/GlaszettenPage'
import { HomePage } from './pages/HomePage'
import { HoutrotHerstelPage } from './pages/HoutrotHerstelPage'
import { OffertePage } from './pages/OffertePage'
import { OverOnsPage } from './pages/OverOnsPage'
import { PortofolioPage } from './pages/PortofolioPage'
import { SchilderwerkenPage } from './pages/SchilderwerkenPage'
import { SpuitwerkPage } from './pages/SpuitwerkPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'glaszetten', element: <GlaszettenPage /> },
      { path: 'schilderwerken', element: <SchilderwerkenPage /> },
      { path: 'behang', element: <BehangPage /> },
      { path: 'spuitwerk', element: <SpuitwerkPage /> },
      { path: 'houtrot-herstel', element: <HoutrotHerstelPage /> },
      { path: 'over-ons', element: <OverOnsPage /> },
      { path: 'portofolio', element: <PortofolioPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'offerte', element: <OffertePage /> },
    ],
  },
])
