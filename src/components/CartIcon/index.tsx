import { ShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 2 }: CartIconProps) => {
  return (
    <S.Wrapper>
      {quantity > 0 && <S.CartBadge aria-label="Cart Items">{quantity}</S.CartBadge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
  )
}

export default CartIcon
