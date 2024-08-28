import styled, { css } from 'styled-components'
import * as EmptyStyles from 'components/Empty/styles'

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.EmptyImage} {
        max-width: 20rem;
      }

      ${EmptyStyles.EmptyTitle} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.EmptyDescription} {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const CartList = styled.div``

type TotalProps = {
  modal?: boolean
}

export const Total = styled.div<TotalProps>`
  ${({ theme, modal }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.lightBg};
    padding: 2.4rem;

    span {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
    }

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${modal &&
    css`
      border-top: 2px solid ${theme.colors.lightGray};

      > span {
        display: none;
      }
    `}
  `}
`
