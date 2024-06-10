import styled, { css } from 'styled-components'

export const WishlistContent = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: ${theme.breakpoints.large}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakpoints.small}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`
