import Dropdown, { DropdownProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    title: 'Click here',
    children: 'Content'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />
