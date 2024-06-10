import Empty, { EmptyProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to wishlist will be listed here'
  }
} as Meta

export const Basic: StoryFn<EmptyProps> = (args) => <Empty {...args} />
