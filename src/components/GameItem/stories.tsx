import GameItem, { GameItemProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Basic: StoryFn<GameItemProps> = (args) => (
  <div
    style={{
      maxWidth: '300rem',
      margin: '0 auto',
      background: '#fafafa',
      padding: '2rem'
    }}
  >
    <GameItem {...args} />
  </div>
)

Basic.args = {
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  image: 'img/gamecard-img.png',
  downloadLink: 'test',
  payment: '3213141'
}
