import type { ReactNode } from 'react'

export type CardAccent = 'pink' | 'cyan' | 'navy' | 'orange' | 'none'

type CardProps = {
  title?: string
  icon?: ReactNode
  children: ReactNode
  accent?: CardAccent
  className?: string
  bordered?: boolean
}

export function Card({ title, icon, children, accent = 'none', bordered = true, className = '' }: CardProps) {
  return (
    <article
      className={[
        'card',
        accent !== 'none' ? `card--accent-${accent}` : '',
        bordered ? 'card--bordered' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon ? <div className="card-icon">{icon}</div> : null}
      {title ? <h3 className="card-title">{title}</h3> : null}
      <div className="card-body">{children}</div>
    </article>
  )
}
