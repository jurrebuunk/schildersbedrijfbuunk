import overOnsImage from '../assets/site-images/002_assets.cdn.filesafe.space_qJoLB1VO30IJs12kbIbf_media_69a7fe48b701fe501c8408fc.jpg'
import { BottomCtaSection } from '../components/BottomCtaSection'
import { Section } from '../components/Section'
import { Button, GalleryImage } from '../components/ui'

export function OverOnsPage() {
  return (
    <>
      <section className="hero hero--small">
        <div className="container hero-content">
          <h1 className="hero-title">Over ons</h1>
          <p className="hero-lead">
            Schildersbedrijf Buunk is vanuit Hengelo actief in de regio voor schilderwerk, behang, glaszetten,
            spuitwerk en houtrot herstel.
          </p>
          <div className="hero-actions">
            <Button to="/offerte" variant="primary" size="lg">Vraag een vrijblijvende offerte aan</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Schildersbedrijf Buunk" title="Vakmanschap en betrouwbaarheid" variant="white">
        <div className="about-split">
          <GalleryImage
            src={overOnsImage}
            alt="Schildersbedrijf Buunk in uitvoering"
            className="about-image"
          />
          <div className="about-content">
            <p className="body-text">
              Wij staan voor duidelijke afspraken, netjes werk en goed advies. Voor een vrijblijvend gesprek of
              offerte kunt u altijd contact opnemen.
            </p>
            <ul className="check-list">
              <li>Vakmanschap</li>
              <li>Betrouwbaarheid</li>
              <li>De beste materialen</li>
              <li>Eerlijk advies</li>
            </ul>
          </div>
        </div>
      </Section>

      <BottomCtaSection
        heading="Meer weten over onze aanpak?"
        text="Neem vrijblijvend contact op. We denken graag met u mee."
        buttonLabel="Neem contact op"
        buttonTo="/contact"
      />
    </>
  )
}
