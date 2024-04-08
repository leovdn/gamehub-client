import MediaMatch from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn = (args) => (
  <MediaMatch greaterThan="768px" {...args}>
    Only on Desktop
  </MediaMatch>
)

export const Mobile: StoryFn = (args) => (
  <MediaMatch lessThan="768px" {...args}>
    Only on Mobile
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop1'
  }
}
