import styled from 'styled-components'

export const Signin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;

  border-radius: 12px;
  box-shadow: 0px 6px 215.7px 5px rgba(0, 0, 0, 0.25);

  max-width: 59.625rem;
  width: 100%;
  height: 33rem;

  overflow: hidden;

  @media (max-width: 768px) {
    max-width: max-content;
  }
`

export const Gradient = styled.div`
  background: linear-gradient(90deg, #14b0ff 0%, #6950f5 100%);
  width: 100%;

  @media (max-width: 768px) {
    width: 0;
  }
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  border-radius: 0px 12px 12px 0px;
  background: #fff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2.625rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;

  width: 100%;
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

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #ef4040;
`
