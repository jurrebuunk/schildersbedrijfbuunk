import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/branding/buunk-logo.png'
import { Button } from './ui'

const navItems = [
  { to: '/schilderwerken', label: 'Schilderwerken', end: false },
  { to: '/behang', label: 'Behang', end: false },
  { to: '/spuitwerk', label: 'Spuitwerk', end: false },
  { to: '/glaszetten', label: 'Glaszetten', end: false },
  { to: '/houtrot-herstel', label: 'Houtrot herstel', end: false },
]

const dienstenItems = [
  { to: '/schilderwerken', label: 'Schilderwerken' },
  { to: '/behang', label: 'Behang' },
  { to: '/spuitwerk', label: 'Spuitwerk' },
  { to: '/glaszetten', label: 'Glaszetten' },
  { to: '/houtrot-herstel', label: 'Houtrot herstel' },
]

export function SiteHeader() {
  const { pathname } = useLocation()
  const dienstenDropdownRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (dienstenDropdownRef.current) {
      dienstenDropdownRef.current.open = false
    }
  }, [pathname])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const dropdown = dienstenDropdownRef.current
      if (!dropdown || !dropdown.open) return
      if (event.target instanceof Node && !dropdown.contains(event.target)) {
        dropdown.open = false
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const closeDienstenDropdown = () => {
    if (dienstenDropdownRef.current) {
      dienstenDropdownRef.current.open = false
    }
  }

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <NavLink to="/" className="brand-mark" aria-label="Schildersbedrijf Buunk home">
          <img src={logo} alt="Schildersbedrijf Buunk" className="brand-logo" />
        </NavLink>

        <nav className="topbar-nav" aria-label="Hoofdnavigatie">
          <div className="topbar-nav-desktop">
            {navItems.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}>
                {label}
              </NavLink>
            ))}
            <Button to="/offerte" variant="primary" size="md">
              Offerte aanvragen
            </Button>
          </div>

          <div className="topbar-nav-mobile">
            <details className="diensten-dropdown" ref={dienstenDropdownRef}>
              <summary className="nav-link diensten-summary">Diensten</summary>
              <div className="diensten-dropdown-menu">
                {dienstenItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className="nav-link diensten-dropdown-link" onClick={closeDienstenDropdown}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </details>

            <NavLink to="/over-ons" className={({ isActive }) => `nav-link nav-link--mobile${isActive ? ' nav-link--active' : ''}`}>
              Over ons
            </NavLink>

            <Button to="/offerte" variant="primary" size="sm" className="topbar-offerte-btn">
              Offerte
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
