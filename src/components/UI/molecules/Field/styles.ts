import styled from 'styled-components'

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;

  border-bottom: 1px solid #1b262c;

  svg {
    color: #1b262c;
    cursor: pointer;
  }
`
export const InputContainer = styled.div`
  display: flex;
`

export const EyeContainer = styled.div`
  margin-right: 0.25rem;
  margin-left: 0.25rem;
`

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #ef4040;
`
