import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button } from '../components/ui'

export function SpuitwerkPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Spuitwerk</h1>
          <p className="hero-lead">
            Ook voor spuitwerk heeft schildersbedrijf Buunk eigen materiaal in huis.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een vrijblijvende offerte aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Spuitwerk" title="Snel schakelen met eigen materiaal" variant="white">
        <p className="body-text">
          Doordat wij ons eigen materiaal in huis hebben, kunnen we altijd en overal snel schakelen. Zo hoeft u
          nooit onnodig lang te wachten.
        </p>
      </Section>

      <Section eyebrow="Vakmanschap" title="Vakkundig uitgevoerd" variant="light">
        <ul className="check-list">
          <li>Eigen materiaal in huis.</li>
          <li>Snel inzetbaar op locatie.</li>
          <li>Uitvoering door vakkundige mensen.</li>
        </ul>
      </Section>

      <BottomCtaSection
        heading="Spuitwerk nodig?"
        text="Neem vrijblijvend contact op voor advies of een offerte."
        buttonLabel="Direct een offerte aanvragen"
        buttonTo="/offerte"
      />
    </>
  )
}
