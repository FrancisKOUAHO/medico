import { HTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  icon?: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default ButtonProps
