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

    a {
      color: ${theme.colors.white};
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.white};

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.1s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

type MenuFullProps = {
  $isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, $isOpen }) => css`
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    overflow: hidden;
    pointer-events: ${$isOpen ? 'all' : 'none'};
    opacity: ${$isOpen ? 1 : 0};
    transition: opacity ease-in-out 0.2s;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};

      position: absolute;
      top: 0;
      right: 0;

      cursor: pointer;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};

      color: ${theme.colors.black};

      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.2s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${$isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.2s ease-in-out;
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    a {
      text-decoration: none;
    }

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.div`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
