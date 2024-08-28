import Dropdown from 'components/Dropdown'
import Link from 'next/link'
import * as S from './styles'
import { AccountCircle, ExitToApp, FavoriteBorder } from 'styled-icons/material-outlined'
import { ChevronDown } from 'styled-icons/boxicons-solid'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username = 'John Doe' }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <S.LinkItem href="/profile/me">
          <AccountCircle />
          <span>My profile</span>
        </S.LinkItem>

        <S.LinkItem href="/wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.LinkItem>

        <S.LinkItem href="/logout">
          <ExitToApp />
          <span>Sign out</span>
        </S.LinkItem>
      </S.Nav>
    </Dropdown>
  )
}

export default UserDropdown
