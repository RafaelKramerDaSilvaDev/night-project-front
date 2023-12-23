import { InputHTMLAttributes } from 'react'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ children, ...props }: InputProps) {
  return <S.Input {...props}>{children}</S.Input>
}
