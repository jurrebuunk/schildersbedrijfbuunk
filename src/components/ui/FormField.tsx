import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseFieldProps = {
  label: string
  error?: string
  hint?: string
  fullWidth?: boolean
}

type InputFieldProps = BaseFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
    multiline?: false
  }

type TextareaFieldProps = BaseFieldProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> & {
    multiline: true
    rows?: number
  }

export type FormFieldProps = InputFieldProps | TextareaFieldProps

export function FormField(props: FormFieldProps) {
  const commonClass = `form-field${props.fullWidth ? ' form-field--full' : ''}${props.error ? ' form-field--error' : ''}`

  if (props.multiline) {
    const { label, error, hint, fullWidth: _fullWidth, multiline, ...textareaProps } = props

    return (
      <div className={commonClass}>
        <label className="form-label">{label}</label>
        <textarea
          className={`form-control form-control--textarea${error ? ' form-control--invalid' : ''}`}
          {...textareaProps}
        />
        {hint && <span className="form-hint">{hint}</span>}
        {error && <span className="form-error">{error}</span>}
      </div>
    )
  }

  const { label, error, hint, fullWidth: _fullWidth, multiline, ...inputProps } = props

  return (
    <div className={commonClass}>
      <label className="form-label">{label}</label>
      <input
        className={`form-control${error ? ' form-control--invalid' : ''}`}
        {...inputProps}
      />
      {hint && <span className="form-hint">{hint}</span>}
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}
