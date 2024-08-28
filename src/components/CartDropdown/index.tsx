import Dropdown from 'components/Dropdown'
import * as S from './styles'
import CartIcon from 'components/CartIcon'
import CartItems from 'components/Cart'
import { GameItemProps } from 'components/GameItem'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon quantity={items.length} />}>
        <CartItems items={items} total={total} modal />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
