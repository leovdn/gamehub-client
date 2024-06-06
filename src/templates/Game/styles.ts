import styled, { css } from 'styled-components'

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ theme, src }) => css`
    position: absolute;
    height: 39.5rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;
    z-index: -1;

    @media (min-width: ${theme.breakpoints.medium}) {
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    }
  `}
`
