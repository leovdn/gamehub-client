import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};

    p {
      font-size: 1.4rem;
      margin-top: 1.4rem;
    }

    @media (max-width: ${theme.breakpoints.small}) {
      background: transparent;
      color: ${theme.colors.white};
      font-size: 1.2rem;
      padding: ${theme.spacings.xxsmall};

      img {
        width: 100%;
        height: 100%;
      }

      h2 {
        color: ${theme.colors.white};
      }
    }
  `}
`

export const About = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 20px;

    @media (max-width: ${theme.breakpoints.small}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const Description = styled.div`
  margin-top: 3rem;
`
