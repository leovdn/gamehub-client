import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Checkbox = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1.8rem;
    height: 1.8rem;

    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    appearance: none;
    outline: none;

    transition: background border ${theme.transition.fast};
    cursor: pointer;

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      position: absolute;
      top: 0.01rem;

      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;

      transform: rotate(45deg);
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`
