import styled, { DefaultTheme, css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.small};
  `}
`

const ItemStyles = (theme: DefaultTheme) => css`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  background: ${theme.colors.lightGray};
  cursor: pointer;
`

export const CardsList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)}
    justify-content: space-between;
  `}
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    ${ItemStyles(theme)}

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCreditCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small};

    background: ${theme.colors.lightGray};
  `}
`
