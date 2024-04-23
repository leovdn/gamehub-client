import styled, { css } from 'styled-components'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'align'>

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatimage content';

    ${Content} {
      text-align: right;
    }
  `,

  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundImage, align }) => css`
    position: relative;
    height: 23rem;
    display: grid;
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &&::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
    }

    @media (min-width: 768px) {
      height: 32rem;
    }

    ${wrapperModifiers[align!] && wrapperModifiers[align!]()};
  `}
`

export const FloatImg = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatimage;
    align-self: flex-end;

    @media (min-width: 768px) {
      max-height: 32rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    @media (min-width: 768px) {
      align-self: flex-end;
      padding: ${theme.spacings.large};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`
