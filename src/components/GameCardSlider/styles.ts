import styled, { css } from 'styled-components'
import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    @media (max-width: 768px) {
      overflow: hidden;
    }

    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    @media (min-width: 768px) {
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }

    .slick-slide {
      transition: all ease-in-out 0.3s;
    }

    .slick-dots {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slick-dots li {
      display: inline-block;
      padding: 0 ${theme.spacings.xxsmall};
    }
  `}
`
