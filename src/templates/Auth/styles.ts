import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.large};

    background-image: url(/img/login-bg.jpg);
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.colors.mainBg};
      opacity: 0.84;
    }

    @media (max-width: 768px) {
      display: none;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;

    z-index: ${theme.layers.base};
    color: ${theme.colors.white};

    a {
      display: contents;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    align-self: end;
    text-align: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.white};
  `}
`

export const ContentWrapper = styled.div`
  width: 30rem;

  @media (min-width: 768px) {
    width: 40rem;
  }

  ${LogoStyles.Wrapper} {
    margin: 0 auto;
  }

  ${HeadingStyles.Wrapper} {
    align-self: start;
    margin-top: 6rem;
    font-weight: 600;
  }

  a {
    display: contents;
  }
`
