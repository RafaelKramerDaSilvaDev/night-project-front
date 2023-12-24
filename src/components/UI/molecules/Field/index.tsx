import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import * as S from './styles'

type FieldProps = {
  label?: string
  placeholder?: string
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}

export function Field({ label, type = 'text', placeholder }: FieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <S.Field>
      {label && <Label>{label}</Label>}
      <S.InputContainer>
        <Input
          type={showPassword ? 'text' : type}
          placeholder={placeholder ?? ''}
        />
        <S.EyeContainer onClick={() => setShowPassword((prev) => !prev)}>
          {type === 'password' && showPassword && <FaEye />}
          {type === 'password' && !showPassword && <FaEyeSlash />}
        </S.EyeContainer>
      </S.InputContainer>
    </S.Field>
  )
}
