import { LabelHTMLAttributes } from 'react'
import * as S from './styles'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: LabelProps) {
  return <S.Label {...props}>{children}</S.Label>
}
