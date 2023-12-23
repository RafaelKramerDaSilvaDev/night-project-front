import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import * as S from './styles'

type FieldProps = {
  label?: string
  placeholder?: string
}

export function Field({ label, placeholder }: FieldProps) {
  return (
    <S.Field>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder ?? ''} />
    </S.Field>
  )
}
