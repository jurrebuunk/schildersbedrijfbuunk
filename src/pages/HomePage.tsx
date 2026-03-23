import { useState } from 'react'
import overOnsImage from '../assets/site-images/002_assets.cdn.filesafe.space_qJoLB1VO30IJs12kbIbf_media_69a7fe48b701fe501c8408fc.jpg'
import { BottomCtaSection } from '../components/BottomCtaSection'
import { HomeHeroSection } from '../components/HomeHeroSection'
import { Section } from '../components/Section'
import { Button, Card } from '../components/ui'
import { faqs, reviews, services } from '../data/siteContent'

const cardAccents = ['pink', 'cyan', 'navy', 'orange', 'pink', 'cyan'] as const

export function HomePage() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <HomeHeroSection />

      {/* ── Over ons ── */}
      <Section
        eyebrow="Over ons"
        title="Vakmanschap met een Achterhoekse mentaliteit"
        variant="white"
      >
        <div className="about-split">
          <img
            src={overOnsImage}
            alt="Schilder in uitvoering bij een Buunk project"
            className="about-image"
          />
          <div className="about-content">
            <p className="body-text">
              Al meer dan 20 jaar staat de naam Buunk garant voor hoogwaardig schilderwerk. Wat begon met Martin Buunk als
              gedreven vakman, is uitgegroeid tot een allround schildersbedrijf met een team van specialisten.
            </p>
            <ul className="check-list">
              <li>Vrijblijvend advies op locatie.</li>
              <li>Duidelijke planning en heldere communicatie.</li>
              <li>Hoogwaardig vakwerk met duurzame materialen.</li>
            </ul>
            <Button to="/contact" variant="primary" size="md" className="about-contact-btn">
              Meer over Buunk
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Diensten ── */}
      <Section
        eyebrow="Diensten"
        title="Wat Buunk voor u kan betekenen"
        variant="charcoal-gradient"
      >
        <div className="card-grid">
          {services.map((service, i) => (
            <Card key={service.title} title={service.title} accent={cardAccents[i]}>
              <p>{service.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section eyebrow="FAQ" title="Veelgestelde vragen" variant="white">
        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <button
                key={item.q}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                onClick={() => setOpenFaq(isOpen ? -1 : index)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-chevron">{isOpen ? '▲' : '▼'}</span>
                </div>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </button>
            )
          })}
        </div>
      </Section>

      {/* ── Reviews ── */}
      <Section eyebrow="Klantbeoordelingen" title="Wat klanten over ons zeggen" variant="cyan-wash" align="center">
        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote key={review} className="review-card">{review}</blockquote>
          ))}
        </div>
      </Section>

      <BottomCtaSection
        heading="Klaar voor een frisse blik?"
        text="Neem vrijblijvend contact op voor een adviesgesprek op locatie."
        buttonLabel="Vraag een vrijblijvende offerte aan"
        buttonTo="/offerte"
      />
    </>
  )
}
