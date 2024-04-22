import Button from '.'
import { Meta, StoryFn } from '@storybook/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'function'
    }
  }
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}

export const WithIcon: StoryFn = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink: StoryFn = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}
