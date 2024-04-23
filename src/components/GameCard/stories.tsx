import GameCard, { GameCardProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Studios',
    img: '/img/gamecard-img.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFavorite: { action: 'clicked' }
  }
} as Meta

export const Basic: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
