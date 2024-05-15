import { Container } from 'components/Container'
import styled, { css } from 'styled-components'

import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
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
