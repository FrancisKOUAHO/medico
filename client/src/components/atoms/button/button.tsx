import React, { FunctionComponent } from 'react'
import ButtonProps from '@/types/ButtonProps'

const Button: FunctionComponent<ButtonProps> = ({
  primary = true,
  size = 'medium',
  label,
  backgroundColor,
  icon,
  onClick,
  type = 'button',
}) => {
  const mode = primary ? 'c-button--primary' : 'c-button--secondary'

  return (
    <button
      type={type}
      className={[
        'c-button',
        `c-button--${size}`,
        `c-button--${backgroundColor}`,
        mode,
      ].join(' ')}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

export default Button
