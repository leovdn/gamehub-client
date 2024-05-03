import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const InputWrapper = styled.div``

export const Input = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightGray};
    color: ${theme.colors.gray};
    border: 0.2rem solid ${theme.colors.lightGray};
    outline: none;
  `}
`

export const Label = styled.label``
