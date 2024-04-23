import styled, { css } from 'styled-components'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      list-style: none;

      li {
        width: 1.2rem;
        height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        background: ${theme.colors.white};
        border-radius: 100%;
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        width: 1.2rem;
        height: 1.2rem;
        opacity: 0;
        cursor: pointer;
      }
    }

    @media (min-width: 768px) {
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        flex-direction: column;
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    }
  `}
`
