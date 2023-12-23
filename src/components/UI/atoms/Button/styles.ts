import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  width: 14.125rem;
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
