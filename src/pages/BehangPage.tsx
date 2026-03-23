import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button } from '../components/ui'

export function BehangPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Behang</h1>
          <p className="hero-lead">
            Schilderwerk en behang vormen een sterke combinatie in kleur en structuur.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een vrijblijvende offerte aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Behang" title="Veel keuze in materialen en stijlen" variant="white">
        <p className="body-text">
          Schildersbedrijf Buunk kan een breed assortiment behang van verschillende merken leveren. Tijdens een
          gesprek aan huis kunt u door behangboeken bladeren en inspiratie opdoen.
        </p>
      </Section>

      <Section eyebrow="Mogelijkheden" title="Uitvoering door ervaren vakmensen" variant="light">
        <ul className="check-list">
          <li>Veel variatie met prints, relief en glasweefselbehang.</li>
          <li>Plaatsing van glasweefselbehang met een behanginlijmmachine.</li>
          <li>Ook fotobehang, in een stuk en naadloos aangebracht.</li>
        </ul>
      </Section>

      <BottomCtaSection
        heading="Behangwerk laten uitvoeren?"
        text="Maak vrijblijvend een afspraak en bekijk samen met ons de mogelijkheden."
        buttonLabel="Vraag direct een offerte aan"
        buttonTo="/offerte"
      />
    </>
  )
}
