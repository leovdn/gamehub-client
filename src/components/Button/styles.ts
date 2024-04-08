import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth'>

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
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    border: none;
    background: linear-gradient(180deg, #ff4f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};

    ${!!size && wrapperModifiers[size](theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`
