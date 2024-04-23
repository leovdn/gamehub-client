import BannerSlider, { BannerSliderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    title: 'Board Game 1',
    subtitle: '<p>Play the new <strong>Mindblowing RPG</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/board-test',
    ribbon: 'Bestselling',
    ribbonColor: 'primary',
    ribbonSize: 'normal'
  },
  {
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    title: 'Board Game 2',
    subtitle: '<p>Play the new <strong>Mindblowing RPG</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/board-test'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
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

export const Basic: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
