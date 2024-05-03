import { useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
}

const TextField = ({
  initialValue,
  label,
  labelFor,
  onInput
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
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={labelFor}
          id={labelFor}
          autoComplete="off"
          aria-label={labelFor}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
