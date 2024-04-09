import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const LogoWrapper = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    color: ${theme.colors.white};
    cursor: pointer;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`
