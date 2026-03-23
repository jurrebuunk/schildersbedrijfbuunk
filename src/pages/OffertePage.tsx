import type { FormEvent } from 'react'
import { Section } from '../components/Section'
import { Button, FormField } from '../components/ui'

export function OffertePage() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Vraag een vrijblijvende offerte aan</h1>
          <p className="hero-lead">
            Laat ons weten wat je wensen zijn en we komen snel bij je terug met een passend voorstel.
          </p>
        </div>
      </section>

      <Section eyebrow="Direct contact" title="Bel of WhatsApp Martin" variant="white">
        <p className="body-text">
          <strong>06 534 900 89</strong> — bereikbaar op werkdagen van 07:30 tot 17:30 uur.
        </p>
        <ul className="check-list">
          <li>Vrijblijvend advies op locatie.</li>
          <li>Duidelijke offerte zonder verborgen kosten.</li>
          <li>Regionale focus in Hengelo, Doetinchem, Zelhem en omgeving.</li>
          <li>Gecertificeerd vakwerk met duidelijke garanties.</li>
        </ul>
      </Section>

      <Section eyebrow="Formulier" title="Offerteformulier" variant="light">
        <form className="offer-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <FormField label="Naam" name="name" type="text" required />
            <FormField label="Telefoon *" name="phone" type="tel" required />
          </div>
          <div className="form-row">
            <FormField label="E-mailadres *" name="email" type="email" required />
            <FormField label="Adres" name="street" type="text" />
          </div>
          <div className="form-row">
            <FormField label="Woonplaats" name="city" type="text" />
            <FormField label="Postcode" name="postal" type="text" />
          </div>
          <div className="form-row">
            <FormField label="Type woning/pand" name="propertyType" type="text" />
            <FormField label="Wat mag er gebeuren?" name="scope" type="text" />
          </div>
          <FormField label="Gewenste startperiode" name="startPeriod" type="text" fullWidth />
          <FormField label="Bericht" name="message" multiline rows={5} fullWidth />
          <FormField
            label="Optioneel: foto's uploaden"
            name="photos"
            type="file"
            multiple
            fullWidth
            hint="Upload foto's voor een nauwkeurigere prijsindicatie."
          />
          <div className="form-submit">
            <Button type="submit" variant="primary" size="lg">
              Vraag de vrijblijvende offerte aan
            </Button>
          </div>
        </form>
      </Section>
    </>
  )
}
