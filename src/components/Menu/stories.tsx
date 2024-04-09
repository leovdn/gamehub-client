import Menu, { MenuProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Basic: StoryFn<MenuProps> = (args) => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
