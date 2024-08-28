import { ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => {
  return (
    <S.Wrapper>
      {!!quantity && <S.CartBadge aria-label="Cart Items">{quantity}</S.CartBadge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
  )
}

export default CartIcon
