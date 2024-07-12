import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    gap: ${theme.spacings.xsmall};

    > button {
      margin-top: ${theme.spacings.small};
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      grid-template-columns: 1fr 1fr;

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: ${theme.spacings.small};
      }
    }
  `}
`
