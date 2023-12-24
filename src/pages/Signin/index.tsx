import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../../components/UI/atoms/Button'
import { Field } from '../../components/UI/molecules/Field'
import * as S from './styles'

const schema = yup
  .object({
    user: yup.string().required('Usuário é obrigatório.'),
    password: yup.string().required('Senha é obrigatório.'),
  })
  .required()

export function Signin() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [authorizedError, setAuthorizedError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  type FormData = yup.InferType<typeof schema>

  const onSubmit = (data: FormData) => {
    axios({
      method: 'get',
      url: 'https://night-project-back.onrender.com/login',
      responseType: 'text',
      params: {
        name: data.user,
        password: data.password,
      },
    })
      .then((response) => {
        setIsAuthorized(response.data)
        setAuthorizedError(!response.data)

        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
        setAuthorizedError(true)
      })
  }

  return (
    <S.Signin>
      <S.Container>
        <S.Gradient />
        <S.LoginContainer>
          <S.Content>
            <S.Text>
              <S.Span>Entre</S.Span> na sua conta
            </S.Text>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <Field
                label="Usuário"
                {...register('user')}
                error={errors.user}
              />
              <Field
                type="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />

              {!isAuthorized && authorizedError && (
                <S.ErrorMessage>Usuário ou Senha incorretos!</S.ErrorMessage>
              )}

              <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>
            </S.Form>

            <Button type="submit">Entrar</Button>
          </S.Content>
        </S.LoginContainer>
      </S.Container>
    </S.Signin>
  )
}
