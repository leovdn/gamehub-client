import CartIcon, { CartIconProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {
    quantity: 1
  }
} as Meta

export const Basic: StoryFn<CartIconProps> = (args) => <CartIcon {...args} />
