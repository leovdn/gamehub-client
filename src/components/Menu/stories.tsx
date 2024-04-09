import Menu from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    title: '',
    description: ''
  }
} as Meta

export const Basic: StoryFn = (args) => <Menu {...args} />
