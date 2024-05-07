import styled, { css } from 'styled-components'
import { RadioInputProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const RadioButton = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;

    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 50%;
    appearance: none;
    outline: none;

    transition: background border ${theme.transition.fast};
    cursor: pointer;

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;

      background: ${theme.colors.primary};
      border-radius: 50%;

      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<RadioInputProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`
