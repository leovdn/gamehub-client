import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import { mockGameItems } from 'components/GameItem/mock'
import highlightMockItem from 'components/Highlight/mock'
import { mockCreditCards } from 'components/PaymentOptions/mock'
import CheckoutTemplate, { CheckoutTemplateProps } from 'templates/Checkout'

export default function Checkout(props: CheckoutTemplateProps) {
  return <CheckoutTemplate {...props} />
}

export const getServerSideProps = () => {
  return {
    props: {
      recommendedGames: gameCardSliderMockItems,
      recommendedHighlight: highlightMockItem,
      cart: {
        total: 'R$ 430,00',
        items: mockGameItems,
        modal: false
      },
      cards: mockCreditCards
    }
  }
}
