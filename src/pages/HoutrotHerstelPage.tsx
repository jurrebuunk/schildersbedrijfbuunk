import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button } from '../components/ui'

export function HoutrotHerstelPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Houtrot herstel</h1>
          <p className="hero-lead">
            Heeft u een kozijn of deur met houtrot? Wij herstellen dit voorafgaand aan het schilderwerk.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een vrijblijvende offerte aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Houtrot" title="Professioneel herstel als basis" variant="white">
        <p className="body-text">
          Schildersbedrijf Buunk zorgt ervoor dat houtrot op professionele wijze wordt hersteld voordat het
          schilderwerk start.
        </p>
      </Section>

      <Section eyebrow="Aanpak" title="Complete ontzorging" variant="light">
        <ul className="check-list">
          <li>Herstel van kozijnen en deuren met houtrot.</li>
          <li>Waar nodig schakelen we een timmerbedrijf in dat voldoet aan onze kwaliteitsnormen.</li>
          <li>Op deze manier kunnen we u volledig ontzorgen.</li>
        </ul>
      </Section>

      <BottomCtaSection
        heading="Houtrot laten herstellen?"
        text="Neem contact op voor een vrijblijvend gesprek of offerte."
        buttonLabel="Vraag direct een offerte aan"
        buttonTo="/offerte"
      />
    </>
  )
}
