import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 2rem;
  `,
  large: () => css`
    width: 20rem;
    height: 4rem;
  `,

  hideonmobile: () => css`
    @media (max-width: 600px) {
      width: 5.8rem;
      height: 2.5rem;

      svg {
        height: 3.2rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    }
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideonmobile }) => `
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]()}
    ${!!hideonmobile && wrapperModifiers.hideonmobile()}
  `}
`
