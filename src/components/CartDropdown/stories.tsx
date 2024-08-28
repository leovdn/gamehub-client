import { mockGameItems } from 'components/GameItem/mock'
import CartDropdown, { CartDropdownProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: mockGameItems,
    total: 'R$ 430,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: StoryFn<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

Empty.args = {
  items: []
}
