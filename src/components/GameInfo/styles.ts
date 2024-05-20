import styled, { css } from 'styled-components'
import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${RibbonStyles.Wrapper} {
      right: -10px;

      &:before {
        border-right-width: 1rem;
      }
    }

    @media (min-width: ${theme.breakpoints.small}) {
      padding: ${theme.spacings.xlarge};
      padding-top: ${theme.spacings.small};
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      ${RibbonStyles.Wrapper} {
        top: ${theme.spacings.small};
        right: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};
        border-radius: ${theme.border.radius};

        &:before {
          border: none;
        }
      }
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.gray};

    @media (min-width: ${theme.breakpoints.medium}) {
      max-width: 77rem;
    }
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    }
  `}
`
