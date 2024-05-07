import styled, { css } from 'styled-components'

type Breakpoint = '1440px' | '1170px' | '768px' | '450px'

export type MediaMatchProps = {
  lessthan?: Breakpoint
  greaterthan?: Breakpoint
}

const mediaMatchModifiers = {
  lesserthan: (size: Breakpoint) => css`
    @media (max-width: ${size}) {
      display: block;
    }
  `,
  greaterthan: (size: Breakpoint) => css`
    @media (min-width: ${size}) {
      display: block;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessthan, greaterthan }) => css`
    display: none;

    ${!!lessthan && mediaMatchModifiers.lesserthan(lessthan)}
    ${!!greaterthan && mediaMatchModifiers.greaterthan(greaterthan)}
  `}
`
