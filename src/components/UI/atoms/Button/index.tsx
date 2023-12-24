import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  w: number | string
}

export function Button({ children, w, ...props }: ButtonProps) {
  return (
    <S.Button $w={w} {...props}>
      {children}
    </S.Button>
  )
}
