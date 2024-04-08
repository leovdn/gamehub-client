import Heading, { HeadingProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {
    children: 'Most Populars'
  }
} as Meta

export const Basic: StoryFn<HeadingProps> = (args) => <Heading {...args} />
