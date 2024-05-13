import styled, { DefaultTheme, css } from 'styled-components'
import { TextFieldProps } from '.'

const wrapperModifiers = {
  disabled: () => css`
    ${Input},
    ${Icon},
    ${Label} {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }
  `
}

type WrapperProps = {
  disabled?: boolean
  error?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled()}
    ${error && wrapperModifiers.error(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    gap: ${theme.spacings.xxsmall};
    padding: 0 ${theme.spacings.xsmall};
    border-radius: 0.2rem;
    background: ${theme.colors.lightGray};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xxsmall} 0;
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};

    background: transparent;
    color: ${theme.colors.darkGray};
    outline: none;
    border: 0;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<Pick<TextFieldProps, 'iconPosition'>>`
  ${({ iconPosition }) => css`
    display: flex;
    width: 2.5rem;
    order: ${iconPosition === 'right' ? 1 : 0};
    color: ${({ theme }) => theme.colors.gray};

    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  position: absolute;
  left: 0;
  bottom: -2rem;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.red};
`
