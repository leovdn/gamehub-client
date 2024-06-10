import { Price } from 'components/GameCard/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: 2rem;
`

export const GameData = styled.div``

export const Title = styled.h3`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`

export const DownloadLink = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
  `}
`

export const GamePrice = styled(Price)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 0.7rem;
    height: 2rem;
  `}
`

export const PaymentData = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    color: ${theme.colors.gray};
  `}
`
