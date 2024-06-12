import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.white};
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
