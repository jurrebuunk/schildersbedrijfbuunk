import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button, Card } from '../components/ui'

const werkwijzeSteps = [
  { num: '01', title: 'Inspectie', text: 'We beoordelen de staat van het huidig schilderwerk.' },
  { num: '02', title: 'Advies', text: 'Eerlijk kleur- en voorbehandelingsadvies op maat.' },
  { num: '03', title: 'Uitvoering', text: 'Netjes en efficiënt, met eigen steigers en vakmensen.' },
  { num: '04', title: 'Oplevering', text: 'Gezamenlijke controle; klaar bij volledige tevredenheid.' },
]

export function SchilderwerkenPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Schilderwerk dat staat als een huis</h1>
          <p className="hero-lead">
            Van strakke binnenwanden tot weerbestendig buitenonderhoud, met oog voor elk detail.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een gratis inspectie aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Waarom" title="Goed schilderwerk maakt het verschil" variant="white">
        <p className="body-text">
          Schilderwerk is meer dan een frisse kleur — het is de beschermlaag van je woning of bedrijfspand.
          Wij werken grondig, van ondergrond tot afwerking.
        </p>
      </Section>

      <Section eyebrow="Werkwijze" title="Onze aanpak in 4 stappen" variant="light">
        <div className="step-grid">
          {werkwijzeSteps.map((step) => (
            <Card key={step.num} accent="cyan">
              <div className="step-num">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p>{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Buiten" title="Buitenschilderwerk: Bescherming tegen elk weertype" variant="white">
        <ul className="check-list">
          <li>Grondige reiniging en schuurwerk.</li>
          <li>Herstel van kitwerk en kleine houtgebreken.</li>
          <li>Hoogwaardige verfsystemen met langdurig kleur- en glansbehoud.</li>
          <li>Resultaat: betere bescherming en hogere vastgoedwaarde.</li>
        </ul>
      </Section>

      <Section eyebrow="Binnen" title="Binnenschilderwerk: De sfeer in huis" variant="light">
        <ul className="check-list">
          <li>Schilderen van kozijnen, deuren en trappen.</li>
          <li>Sauswerk van wanden en plafonds met streeploze afwerking.</li>
          <li>Kleuradvies dat aansluit op jouw interieurstijl.</li>
        </ul>
      </Section>

      <BottomCtaSection
        heading="Is jouw schilderwerk toe aan een beurt?"
        text="Als erkend lid van De Betere Schilder bieden wij schriftelijke garantie en duidelijke offertes."
        buttonLabel="Direct een offerte aanvragen"
        buttonTo="/offerte"
      />
    </>
  )
}
