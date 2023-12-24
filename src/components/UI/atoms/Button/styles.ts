import styled from 'styled-components'

type ButtonStyleProps = {
  $w?: number | string
}

export const Button = styled.button<ButtonStyleProps>`
  display: flex;

  width: ${({ $w }) => {
    if (!$w) return '14.125rem'

    if (typeof $w === 'number') return `${$w}rem`

    if (typeof $w === 'string') return $w
  }};

  padding: 1.188rem 5.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border: none;
  border-radius: 4px;
  background: #507ef5;

  font-size: 1rem;
  font-weight: 700;
  color: #fff;

  cursor: pointer;

  transition: 0.2s ease-out;

  user-select: none;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }
`
