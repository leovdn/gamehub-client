import styled, { css } from 'styled-components'

import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'

export const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      @media (max-width: 768px) {
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      }
    }

    ${GameCardSliderStyles.Wrapper} {
      @media (max-width: 1440px) {
        margin-right: calc(-${theme.grid.gutter} / 2);
      }
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    @media (min-width: 768px) {
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    }
  `}
`

export const SectioNewGames = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    @media (min-width: 1170px) {
      margin-top: -13rem;
    }

    @media (min-width: 768px) {
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    }
  `}
`

export const SectionMostPopular = styled(Sections)``

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFreeGames = styled(Sections)``

export const SectionFooter = styled(Sections)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: 0;
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};
    background-color: ${theme.colors.lightBg};

    @media (min-width: 768px) {
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    }
  `}
`
