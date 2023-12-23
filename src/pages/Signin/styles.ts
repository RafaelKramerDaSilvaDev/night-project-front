import styled from 'styled-components'

export const Signin = styled.div`
  display: flex;
  justify-content: flex-end;

  border-radius: 12px;
  background: linear-gradient(90deg, #14b0ff 0%, #6950f5 100%);
  box-shadow: 0px 6px 215.7px 5px rgba(0, 0, 0, 0.25);

  width: 59.625rem;
  height: 33rem;
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21.563rem;
  height: 100%;

  border-radius: 0px 12px 12px 0px;
  background: #fff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 3.125rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  width: 100%;
`

export const Title = styled.h1`
  color: #507ef5;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Text = styled.h3`
  color: #1b262c;
  font-size: 1rem;
  font-weight: 300;
`

export const Span = styled.span`
  color: #507ef5;
  font-size: 1rem;
  font-weight: 600;
`

export const ForgotPassword = styled.a`
  color: #507ef5;
  font-size: 0.75rem;
  font-weight: 400;

  cursor: pointer;

  user-select: none;

  &:hover {
    text-decoration: underline;
    filter: brightness(80%);
  }
`
