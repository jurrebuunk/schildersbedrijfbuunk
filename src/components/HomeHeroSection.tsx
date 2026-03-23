import heroProjectImage from '../assets/site-images/005_assets.cdn.filesafe.space_qJoLB1VO30IJs12kbIbf_media_69a8002b66ab6e593d6308bf.jpg'
import { Button } from './ui'

export function HomeHeroSection() {
  return (
    <section className="hero hero--photo" style={{ backgroundImage: `url(${heroProjectImage})` }}>
      <div className="container hero-content">
        <h1 className="hero-title">
          Uw woning of bedrijfspand
          <span className="hero-title-accent">strak in de lak</span>
        </h1>
        <p className="hero-lead">
          Meesterschilders uit Hengelo (Gld) met oog voor detail en passie voor onderhoud.
        </p>
        <div className="hero-actions">
          <Button to="/offerte" variant="primary" size="lg">Offerte aanvragen</Button>
        </div>
      </div>
    </section>
  )
}
