import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;

    @media (min-width: ${theme.breakpoints.small}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${theme.breakpoints.large}) {
      grid-template-columns: repeat(6, 1fr);
    }
  `}
`

export const Block = styled.div``

export const Title = styled.h6`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.light};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`
