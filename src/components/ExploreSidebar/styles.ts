import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const CheckboxContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings.small} 0;
  `}
`
