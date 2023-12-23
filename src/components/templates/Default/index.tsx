import { Outlet } from 'react-router-dom'
import * as S from './styles'

export function Default() {
  return (
    <S.Default>
      <Outlet />
    </S.Default>
  )
}
