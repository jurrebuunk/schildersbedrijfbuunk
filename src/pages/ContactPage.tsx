import { Section } from '../components/Section'
import { Button } from '../components/ui'

export function ContactPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Contact</h1>
          <p className="hero-lead">
            Neem vrijblijvend contact op voor advies over schilderwerk, onderhoud of een offerte op maat.
          </p>
        </div>
      </section>

      <Section eyebrow="Direct contact" title="Bel of WhatsApp Martin" variant="white">
        <p className="body-text">
          <strong>06 534 900 89</strong> — bereikbaar op werkdagen van 07:30 tot 17:30 uur.
        </p>
        <ul className="check-list">
          <li>Snel persoonlijk contact zonder lange wachttijden.</li>
          <li>Vrijblijvend advies voor uw woning of bedrijfspand.</li>
          <li>Regionale service in Hengelo, Doetinchem, Zelhem en omgeving.</li>
        </ul>
        <Button to="/offerte" variant="primary" size="md">
          Vraag een offerte aan
        </Button>
      </Section>
    </>
  )
}