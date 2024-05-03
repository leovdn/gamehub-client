import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioButtonValue = string | ReadonlyArray<string> | number

export type RadioInputProps = {
  onCheck?: (value?: RadioButtonValue) => void
  value?: RadioButtonValue
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
} & InputHTMLAttributes<HTMLInputElement>

const RadioInput = ({
  onCheck,
  value,
  label,
  labelFor = '',
  labelColor = 'white',
  ...props
}: RadioInputProps) => {
  const onChange = () => {
    if (onCheck) {
      onCheck(value)
    }
  }

  return (
    <S.Wrapper>
      <S.RadioButton
        type="radio"
        id={labelFor}
        onChange={onChange}
        value={value}
        {...props}
      />

      {label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default RadioInput
