import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const LinkItem = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    text-decoration: none;
    color: ${theme.colors.black};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
