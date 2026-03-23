import type { ReactNode } from 'react'

export type SectionVariant = 'light' | 'white' | 'navy' | 'navy-gradient' | 'charcoal-gradient' | 'pink' | 'cyan-wash'
export type SectionAlign = 'left' | 'center'

type SectionProps = {
  title?: string
  subtitle?: string
  eyebrow?: string
  variant?: SectionVariant
  align?: SectionAlign
  children: ReactNode
  className?: string
}

export function Section({
  title,
  subtitle,
  eyebrow,
  variant = 'light',
  align = 'left',
  children,
  className = '',
}: SectionProps) {
  return (
    <section className={`section section--${variant} section--${align} ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div className="section-header">
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
