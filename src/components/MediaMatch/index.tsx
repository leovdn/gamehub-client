import styled, { css } from 'styled-components'

type Breakpoint = '1440px' | '1170px' | '768px' | '450px'

export type MediaMatchProps = {
  lessThan?: Breakpoint
  greaterThan?: Breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: Breakpoint) => css`
    @media (max-width: ${size}) {
      display: block;
    }
  `,
  greaterThan: (size: Breakpoint) => css`
    @media (min-width: ${size}) {
      display: block;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
