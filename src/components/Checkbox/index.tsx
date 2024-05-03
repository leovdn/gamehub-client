import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  onCheck?: (state: boolean) => void
  isChecked?: boolean
  value?: string
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Checkbox
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
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

export default Checkbox
