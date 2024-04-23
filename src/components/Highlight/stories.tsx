import Highlight, { HighlightProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: 'Experience the new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/games/default',
    backgroundImage: 'img/hl-bg.png'
  }
} as Meta

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight floatImage="/img/hl-img.png" {...args} />
  </div>
)
