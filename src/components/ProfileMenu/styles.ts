import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    background: ${theme.colors.white};

    a {
      text-decoration: none;
    }
  `}
`

export const LinkItem = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-decoration: none;
    color: ${theme.colors.black};

    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
  `}
`
