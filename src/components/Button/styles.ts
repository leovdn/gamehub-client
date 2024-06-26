import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

type WrapperProps = {
  $hasIcon: boolean
} & Pick<ButtonProps, 'size' | '$fullwidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  $fullwidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, $fullwidth, $hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    border: none;
    background: linear-gradient(180deg, #ff4f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${minimal &&
    css`
      &:hover {
        background: none;
      }
    `}

    ${!!size && wrapperModifiers[size](theme)}
    ${$fullwidth && wrapperModifiers.$fullwidth()}
    ${$hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!disabled && wrapperModifiers.disabled()};
  `}
`
