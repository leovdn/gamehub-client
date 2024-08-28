import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;

  cursor: pointer;
`

export const CartBadge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    width: 1.6rem;
    height: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 50%;
  `}
`
