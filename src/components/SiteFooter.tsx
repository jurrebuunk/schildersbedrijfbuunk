import { NavLink } from 'react-router-dom'
import logo from '../assets/branding/buunk-logo.png'

const footerLinks = {
  Diensten: ['Home', 'Over Ons', 'Schilderwerken', 'Portfolio', 'Contact'],
  Klantenservice: ['Algemene Voorwaarden', 'Onderhoud & Service', 'Privacybeleid'],
}

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

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="footer-col">
            <h4 className="footer-col-heading">{heading}</h4>
            <ul className="footer-col-list">
              {links.map((link) => (
                <li key={link}>
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-col">
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
