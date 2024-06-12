import styled from 'styled-components'
import { css } from 'styled-components'

export const Content = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 40rem;
    align-items: start;
    gap: 2rem;
    margin-top: ${theme.spacings.small};

    @media (max-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    margin-top: 3rem;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    span {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    svg {
      fill: ${theme.colors.primary};
      margin-right: 0.5rem;
    }
  `}
`
