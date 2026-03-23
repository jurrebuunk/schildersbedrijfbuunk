import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button } from '../components/ui'

export function GlaszettenPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Glaszetten</h1>
          <p className="hero-lead">
            Wij leveren beglazing in alle mogelijke soorten en maten en verzorgen ook de plaatsing.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een vrijblijvende offerte aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Glaszetten" title="Soorten glas en advies op maat" variant="white">
        <p className="body-text">
          Gefigureerd glas, gehard glas en HR++ glas behoren tot de standaardmogelijkheden. We stemmen ons advies af
          op uw wensen op het gebied van isolatie, veiligheid en uitstraling.
        </p>
      </Section>

      <Section eyebrow="Plaatsing" title="Professionele montage voor langdurig resultaat" variant="light">
        <ul className="check-list">
          <li>Professionele plaatsing door het team van Buunk.</li>
          <li>Gebruik van glaslatten, beglazingskit en RVS-materialen.</li>
          <li>Deze aanpak verlengt de levensduur van de dubbele ruit en het schilderwerk.</li>
        </ul>
      </Section>

      <BottomCtaSection
        heading="Toe aan nieuwe beglazing?"
        text="Neem contact op voor een vrijblijvend gesprek of een offerte op maat."
        buttonLabel="Direct een offerte aanvragen"
        buttonTo="/offerte"
      />
    </>
  )
}
