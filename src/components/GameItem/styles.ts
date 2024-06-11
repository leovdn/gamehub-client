import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    @media (min-width: ${theme.breakpoints.medium}) {
      display: flex;
    }
  `}
`
export const GameContent = styled.div`
  display: flex;
`
export const ImageBox = styled.div`
  ${({ theme }) => css`
    width: 9.6rem;
    height: 5.6rem;
    flex-shrink: 0;
    margin-right: 1.2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      margin-right: ${theme.spacings.xsmall};
      width: 15rem;
      height: 7rem;
    }
  `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};

    @media (min-width: ${theme.breakpoints.medium}) {
      font-size: 2rem;
      line-height: 2rem;
    }
  `}
`
export const Price = styled.div`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
  `}
`
export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 28rem;
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    @media (min-width: ${theme.breakpoints.medium}) {
      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 0;
    }
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`
