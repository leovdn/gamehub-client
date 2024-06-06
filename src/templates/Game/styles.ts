import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 20rem;

    @media (min-width: ${theme.breakpoints.medium}) {
      margin-top: 38rem;
    }
  `}
`

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
      -webkit-mask-size: 300px;
      -webkit-mask-image: -webkit-gradient(
        linear,
        center top,
        center bottom,
        color-stop(1, rgba(0, 0, 0, 0)),
        color-stop(0, rgba(0, 0, 0, 1))
      );
    }
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    @media (min-width: ${theme.breakpoints.medium};) {
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionGameInfo = styled(Section)`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.xxlarge} * 2);
    position: relative;
  `}
`

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    hr {
      opacity: 0.4;
    }

    .description__copyrights {
      color: ${theme.colors.gray};
    }
  `}
`

export const SectionGameDetails = styled(Section)``
