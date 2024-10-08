import { mockGameItems } from 'components/GameItem/mock'
import Cart, { CartItemsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Checkout/Cart',
  component: Cart,
  args: {
    total: 'R$ 430,00',
    items: mockGameItems,
    modal: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<CartItemsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Cart {...args} />
  </div>
)

export const EmptyCart: StoryFn<CartItemsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Cart {...args} />
  </div>
)

EmptyCart.args = {
  items: []
}
