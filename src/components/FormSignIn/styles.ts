import styled, { css } from 'styled-components'

export const ForgotPassword = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: end;

    a {
      color: ${theme.colors.black};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`
