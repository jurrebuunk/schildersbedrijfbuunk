import overOnsImage from '../assets/site-images/002_assets.cdn.filesafe.space_qJoLB1VO30IJs12kbIbf_media_69a7fe48b701fe501c8408fc.jpg'
import { BottomCtaSection } from '../components/BottomCtaSection'
import { HomeHeroSection } from '../components/HomeHeroSection'
import { Section } from '../components/Section'
import { Button, Card, GalleryImage } from '../components/ui'
import { reviews, services } from '../data/siteContent'

const cardAccents = ['pink', 'cyan', 'navy', 'orange', 'pink', 'cyan'] as const
const workSkeletons = ['work-carousel-item--lg', 'work-carousel-item--md', 'work-carousel-item--sm', 'work-carousel-item--md', 'work-carousel-item--lg'] as const

export function HomePage() {
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
          <GalleryImage
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

      {/* ── Bekijk ons werk ── */}
      <Section eyebrow="Portfolio" title="Bekijk ons werk" variant="white" align="center">
        <div className="work-showcase">
          <div className="work-carousel">
            <div className="work-carousel-track">
              {[...workSkeletons, ...workSkeletons].map((itemClass, index) => (
                <GalleryImage
                  key={`${itemClass}-${index}`}
                  alt={`Portfolio voorbeeld ${index + 1}`}
                  forceSkeleton
                  className={`work-carousel-item ${itemClass}`}
                />
              ))}
            </div>
          </div>
          <Button to="/portofolio" variant="primary" size="md" className="work-showcase-btn">
            Bekijk het portfolio
          </Button>
        </div>
      </Section>

      {/* ── Reviews ── */}
      <Section eyebrow="Klantbeoordelingen" title="Wat klanten over ons zeggen" variant="cyan-wash" align="center">
        <div className="review-grid">
          {reviews.map((review) => (
            <blockquote key={review} className="review-card">
              <p className="review-card-text">{review.replace(/^★+\s*/, '')}</p>
              <div className="review-stars" aria-label="5 van 5 sterren">★★★★★</div>
            </blockquote>
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
