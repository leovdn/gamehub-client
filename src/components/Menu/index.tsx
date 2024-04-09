import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from 'styled-icons/material-outlined'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'

import Logo from '../Logo/index'
import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo hideonmobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Shopping Cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
