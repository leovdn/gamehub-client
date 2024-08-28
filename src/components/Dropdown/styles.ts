import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}

      transition: ${theme.transition.fast};
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.small};
    color: ${theme.colors.white};
    cursor: pointer;

    &::selection {
      background: transparent;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall};

    background: ${theme.colors.white};
    color: ${theme.colors.black}
    border: 0.1rem solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    z-index: 1;


    &::before {
      content: '';
      position: absolute;
      top: -1.2rem;
      right: 2.4rem;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
    }
  `}
`
