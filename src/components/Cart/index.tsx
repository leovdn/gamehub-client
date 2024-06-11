import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'
import * as S from './styles'

export type CartItemsProps = {
  items?: GameItemProps[]
  total?: string
  modal?: boolean
}

const CartItems = ({ items, total, modal }: CartItemsProps) => {
  return (
    <S.Wrapper>
      <S.CartList>
        {items?.map((item) => <GameItem key={item.title} {...item} />)}
      </S.CartList>

      <S.Total modal={modal}>
        <span>Total:</span>
        <strong>{total}</strong>
        {modal && <Button>Buy Now</Button>}
      </S.Total>
    </S.Wrapper>
  )
}

export default CartItems
