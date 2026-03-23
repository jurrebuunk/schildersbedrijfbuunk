import { NavLink } from 'react-router-dom'
import logo from '../assets/branding/buunk-logo.png'

const footerLinks = [
  {
    heading: 'Diensten',
    links: [
      { label: 'Schilderwerken', to: '/schilderwerken' },
      { label: 'Behang', to: '/behang' },
      { label: 'Spuitwerk', to: '/spuitwerk' },
      { label: 'Glaszetten', to: '/glaszetten' },
      { label: 'Houtrot herstel', to: '/houtrot-herstel' },
    ],
  },
  {
    heading: 'Bedrijf',
    links: [
      { label: 'Over ons', to: '/over-ons' },
      { label: 'Contact', to: '/contact' },
      { label: 'Portofolio', to: '/portofolio' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <NavLink to="/" aria-label="Schildersbedrijf Buunk home">
            <img src={logo} alt="Schildersbedrijf Buunk" className="footer-logo" />
          </NavLink>
          <p className="footer-tagline">
            Vakbekwaam schilderwerk voor binnen en buiten, houtrotherstel, behangwerk en kleuradvies.
          </p>
          <p className="footer-tel">
            <a href="tel:0653490089">📞 06 534 900 89</a>
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.heading} className="footer-col">
            <h4 className="footer-col-heading">{group.heading}</h4>
            <ul className="footer-col-list">
              {group.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col footer-col--phone">
          <p className="footer-tel">
            <a href="tel:0653490089">📞 06 534 900 89</a>
          </p>
        </div>

        <div className="footer-col footer-col--social">
          <h4 className="footer-col-heading">Volg Ons</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="social-link social-link--facebook">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="social-link social-link--instagram">in</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="social-link social-link--linkedin">li</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Schildersbedrijf Buunk. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}
