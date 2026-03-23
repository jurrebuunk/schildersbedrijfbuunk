import { Section } from '../components/Section'
import { GalleryImage } from '../components/ui'

const placeholderTiles = [
  'portfolio-tile--landscape',
  'portfolio-tile--portrait',
  'portfolio-tile--square',
  'portfolio-tile--wide',
  'portfolio-tile--portrait',
  'portfolio-tile--square',
  'portfolio-tile--landscape',
  'portfolio-tile--tall',
]

export function PortofolioPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Portofolio</h1>
          <p className="hero-lead">Fotos zijn hier binnenkort zichtbaar</p>
        </div>
      </section>

      <Section eyebrow="Portofolio" title="Binnenkort meer projecten" variant="white">
        <div className="portfolio-placeholder-grid">
          {placeholderTiles.map((tile, index) => (
            <GalleryImage
              key={`${tile}-${index}`}
              alt={`Portfolio afbeelding ${index + 1}`}
              forceSkeleton
              className={`portfolio-tile ${tile}`}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
