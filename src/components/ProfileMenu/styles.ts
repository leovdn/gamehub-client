import styled, { DefaultTheme, css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    background: ${theme.colors.white};

    a {
      text-decoration: none;
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.02);
    }

    @media (max-width: ${theme.breakpoints.small}) {
      flex-direction: row;
      justify-content: space-between;

      a {
        border-bottom: none;
      }
    }
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type LinkItemProps = {
  isActive?: boolean
}

export const LinkItem = styled.a<LinkItemProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    background: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }

    @media (max-width: ${theme.breakpoints.small}) {
      span {
        display: none;
      }
    }

    ${!isActive && linkModifiers.default(theme)}
    ${isActive && linkModifiers.active(theme)}
  `}
`
