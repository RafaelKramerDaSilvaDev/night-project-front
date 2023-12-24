import { Outlet } from 'react-router-dom'
import * as S from './styles'

export function Default() {
  return (
    <S.Default>
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Default>
  )
}
