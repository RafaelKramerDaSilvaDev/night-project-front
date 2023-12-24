import { Button } from '../../components/UI/atoms/Button'
import { Field } from '../../components/UI/molecules/Field'
import * as S from './styles'

export function Signin() {
  return (
    <S.Signin>
      <S.Container>
        <S.Gradient />
        <S.LoginContainer>
          <S.Content>
            <S.Title>Boa Tarde</S.Title>
            <S.Text>
              <S.Span>Entre</S.Span> na sua conta
            </S.Text>
            <S.Form>
              <Field label="Usuário" />
              <Field type="password" label="Senha" />
              <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>
            </S.Form>
            <Button>Entrar</Button>
          </S.Content>
        </S.LoginContainer>
      </S.Container>
    </S.Signin>
  )
}
