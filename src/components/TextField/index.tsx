import { useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  initialValue = '',
  label,
  onInput,
  icon,
  name,
  iconPosition = 'left',
  disabled,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.currentTarget.value
    setValue(newValue)

    if (onInput) {
      onInput(newValue)
    }
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
        {!!error && <S.Error>{error}</S.Error>}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
