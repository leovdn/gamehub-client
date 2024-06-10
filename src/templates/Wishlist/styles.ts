import styled, { css } from 'styled-components'

export const WishlistContent = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: 3rem;
  `}
`
