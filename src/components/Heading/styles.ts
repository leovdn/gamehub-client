import styled, { DefaultTheme, css } from 'styled-components'
import { HeadingProps, LineColors } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    @media (min-width: 600px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  $lineLeft: (theme: DefaultTheme, $lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[$lineColor]};
  `,

  $lineBottom: (theme: DefaultTheme, $lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[$lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $lineLeft, $lineBottom, $lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${$lineLeft && $lineColor && wrapperModifiers.$lineLeft(theme, $lineColor)}
    ${$lineBottom && $lineColor && wrapperModifiers.$lineBottom(theme, $lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
