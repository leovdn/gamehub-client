import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: relative;

  @media (min-width: 768px) {
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  }
`

type ImgProps = {
  src: string
}

export const Img = styled.div<ImgProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    @media (min-width: 768px) {
      height: 58rem;
    }
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};

    @media (min-width: 768px) {
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    }
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

    strong {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
    }

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`
