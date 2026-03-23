import type { ReactNode } from 'react'

type BadgeVariant = 'pink' | 'cyan' | 'navy' | 'orange'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'cyan', className = '' }: BadgeProps) {
  return <span className={`badge badge--${variant} ${className}`.trim()}>{children}</span>
}
