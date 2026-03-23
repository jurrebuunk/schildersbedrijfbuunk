import { Section } from './Section'
import { Button } from './ui'

type BottomCtaSectionProps = {
  heading: string
  text: string
  buttonLabel: string
  buttonTo: string
}

export function BottomCtaSection({
  heading,
  text,
  buttonLabel,
  buttonTo,
}: BottomCtaSectionProps) {
  return (
    <Section variant="navy-gradient" align="center" className="cta-section">
      <div className="cta-panel">
        <div className="cta-block">
          <h2 className="cta-heading">{heading}</h2>
          <p className="cta-sub">{text}</p>
          <Button to={buttonTo} variant="primary" size="lg">{buttonLabel}</Button>
        </div>
      </div>
    </Section>
  )
}
