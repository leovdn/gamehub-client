import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  $fullwidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  $fullwidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      $fullwidth={$fullwidth}
      $hasIcon={!!icon}
      minimal={minimal}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default Button
