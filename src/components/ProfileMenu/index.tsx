import Link from 'next/link'
import * as S from './styles'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

const ProfileMenu = () => {
  return (
    <S.Nav>
      <Link href="/profile/me">
        <S.LinkItem>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.LinkItem>
      </Link>

      <Link href="/profile/cards">
        <S.LinkItem>
          <CreditCard size={24} />
          <span>My cards</span>
        </S.LinkItem>
      </Link>

      <Link href="/profile/orders">
        <S.LinkItem>
          <FormatListBulleted size={24} />
          <span>My Orders</span>
        </S.LinkItem>
      </Link>

      <Link href="/logout">
        <S.LinkItem>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.LinkItem>
      </Link>
    </S.Nav>
  )
}

export default ProfileMenu
