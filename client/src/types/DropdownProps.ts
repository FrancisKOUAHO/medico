import { ReactNode } from 'react'

type Item = {
  label: string
  link?: string
  onclick?: () => void
  icon?: ReactNode
}

type DropdownProps = {
  list: Item[]
  children?: ReactNode
}

export default DropdownProps
