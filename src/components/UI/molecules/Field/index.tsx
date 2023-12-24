import { forwardRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import * as S from './styles'

type FieldProps = {
  label?: string
  placeholder?: string
  error?: FieldError
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

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, type = 'text', placeholder, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <S.Field>
        {label && <Label>{label}</Label>}
        <S.InputContainer>
          <Input
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            placeholder={placeholder}
            {...rest}
          />
          {type === 'password' && (
            <S.EyeContainer onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </S.EyeContainer>
          )}
        </S.InputContainer>
        {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
      </S.Field>
    )
  },
)

Field.displayName = 'Field'
