import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  disabled?: boolean
  fullWidth?: boolean
}

type ButtonProps =
  | (BaseProps & { to: string; href?: never; type?: never; onClick?: never })
  | (BaseProps & { href: string; to?: never; type?: never; onClick?: never })
  | (BaseProps & { type?: 'button' | 'submit' | 'reset'; to?: never; href?: never; onClick?: () => void })

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  ...rest
}: ButtonProps) {
  const cls = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('to' in rest && rest.to) {
    return (
      <NavLink to={rest.to} className={cls}>
        {children}
      </NavLink>
    )
  }

  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  const { type = 'button', onClick } = rest as { type?: 'button' | 'submit' | 'reset'; onClick?: () => void }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
