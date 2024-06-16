import Link from 'next/link'
import * as S from './styles'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.LinkItem isActive={activeLink === '/profile/me'} title="My Profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.LinkItem>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.LinkItem isActive={activeLink === '/profile/cards'} title="My Cards">
          <CreditCard size={24} />
          <span>My cards</span>
        </S.LinkItem>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.LinkItem
          isActive={activeLink === '/profile/orders'}
          title="My Orders"
        >
          <FormatListBulleted size={24} />
          <span>My Orders</span>
        </S.LinkItem>
      </Link>

      <Link href="/logout" title="Sign out" passHref>
        <S.LinkItem>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.LinkItem>
      </Link>
    </S.Nav>
  )
}

export default ProfileMenu
