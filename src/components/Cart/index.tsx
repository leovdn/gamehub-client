import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'
import * as S from './styles'
import Empty from 'components/Empty'

export type CartItemsProps = {
  items?: GameItemProps[]
  total?: string
  modal?: boolean
}

const CartItems = ({ items = [], total, modal = false }: CartItemsProps) => {
  return (
    <S.Wrapper isEmpty={!items.length}>
      {!items.length && (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore games and promotions"
          hasLink
        />
      )}

      {!!items.length && (
        <>
          <S.CartList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.CartList>

          <S.Total modal={modal}>
            <span>Total:</span>
            <strong>{total}</strong>
            {modal && <Button>Buy Now</Button>}
          </S.Total>
        </>
      )}
    </S.Wrapper>
  )
}

export default CartItems
