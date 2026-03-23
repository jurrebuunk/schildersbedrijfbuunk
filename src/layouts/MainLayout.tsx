import { Outlet } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function MainLayout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
