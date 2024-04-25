import GameCardSlider, { GameCardSliderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<GameCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider {...args} />
  </div>
)