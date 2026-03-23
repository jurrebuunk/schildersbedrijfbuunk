import { NavLink } from 'react-router-dom'
import logo from '../assets/branding/buunk-logo.png'
import { Button } from './ui'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/schilderwerken', label: 'Schilderwerken', end: false },
  { to: '/behang', label: 'Behang', end: false },
  { to: '/spuitwerk', label: 'Spuitwerk', end: false },
  { to: '/glaszetten', label: 'Glaszetten', end: false },
  { to: '/houtrot-herstel', label: 'Houtrot herstel', end: false },
]

export function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <NavLink to="/" className="brand-mark" aria-label="Schildersbedrijf Buunk home">
          <img src={logo} alt="Schildersbedrijf Buunk" className="brand-logo" />
        </NavLink>

        <nav className="topbar-nav" aria-label="Hoofdnavigatie">
          {navItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <Button to="/offerte" variant="primary" size="md">
            Offerte aanvragen
          </Button>
        </nav>
      </div>
    </header>
  )
}
