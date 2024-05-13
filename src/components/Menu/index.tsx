import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from 'styled-icons/material-outlined'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'

import Logo from '../Logo/index'
import * as S from './styles'
import { useState } from 'react'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [$isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessthan="768px">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo $hideonmobile color="alternative" size="large" />
      </S.LogoWrapper>

      <MediaMatch greaterthan="768px">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterthan="768px">
            <Link href="/sign-in" passHref>
              <Button>Sign In</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!$isOpen} $isOpen={$isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in">
              <Button $fullwidth size="large">
                Log in now
              </Button>
            </Link>
            <span>or</span>

            <Link href="/sign-up">
              <S.CreateAccount title="Sign up">Sign up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
