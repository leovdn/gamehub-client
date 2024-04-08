import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideonmobile: () => css`
    @media (max-width: 600px) {
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
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
