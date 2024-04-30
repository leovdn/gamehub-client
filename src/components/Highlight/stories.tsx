import Highlight, { HighlightProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import highlightMockItem from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...highlightMockItem }
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
