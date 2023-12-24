import styled from 'styled-components'

export const Field = styled.div`
  position: relative;

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
  margin-right: 4px;
  margin-left: 4px;
`
