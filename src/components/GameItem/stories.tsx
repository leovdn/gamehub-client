import GameItem, { GameItemProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Checkout/GameItem',
  component: GameItem
} as Meta

export const Default: StoryFn<GameItemProps> = (args) => (
  <div
    style={{
      maxWidth: '300rem',
      margin: '0 auto',
      background: '#fafafa'
    }}
  >
    <GameItem {...args} />
  </div>
)

Default.args = {
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  image: 'img/gamecard-img.png',
  downloadLink: 'test'
}

export const WithPaymentInfo: StoryFn<GameItemProps> = (args) => (
  <div
    style={{
      maxWidth: '300rem',
      margin: '0 auto',
      background: '#fafafa'
    }}
  >
    <GameItem {...args} />
  </div>
)

WithPaymentInfo.args = {
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  image: 'img/gamecard-img.png',
  downloadLink: 'test',
  payment: {
    cardNumber: '1234 1234 1234 1234',
    cardFlag: 'visa',
    purchaseDate: '2022-07-20 21:34',
    img: 'img/master.svg'
  }
}
