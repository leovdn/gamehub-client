import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const FormWrapper = styled.main``

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: ${theme.spacings.large};
    gap: ${theme.spacings.xxsmall};

    button {
      text-transform: uppercase;
      margin-top: ${theme.spacings.small};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const FormLink = styled.span`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition:
        color,
        border ${theme.transition.fast};

      &:hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
        color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
