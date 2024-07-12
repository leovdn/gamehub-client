import CartItems, { CartItemsProps } from 'components/Cart'
import Base from 'templates/Base'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Empty from 'components/Empty'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import PaymentOptions, { PaymentCardProps } from 'components/PaymentOptions'
import * as S from './styles'
import { Info } from 'styled-icons/material-outlined'

export type CheckoutTemplateProps = {
  cart: CartItemsProps
  cards?: PaymentCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const CheckoutTemplate = ({
  cart,
  cards,
  recommendedGames,
  recommendedHighlight
}: CheckoutTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" $lineLeft $lineColor="secondary">
          My Cart
        </Heading>

        {!cart && (
          <Empty
            title="Your cart is empty"
            description="Games added to your cart will be listed here"
            hasLink
          />
        )}
        <S.Content>
          <CartItems items={cart.items} total={cart.total} />
          <PaymentOptions cards={cards} handlePayment={() => console.log('Buy')} />
        </S.Content>

        <S.Info>
          <Info size={16} />
          Your purchase is protected by a secure connection from the GameHub platform. By purchasing
          from our store, you accept and agree to our
          <span> terms of use</span>. After the purchase, you have the right to return within a
          maximum of 30 days, without any additional cost, provided that the game download did not
          occur after your purchase.
        </S.Info>
      </Container>

      <Container>
        <hr />
      </Container>

      <Showcase
        title="You may also like"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default CheckoutTemplate
