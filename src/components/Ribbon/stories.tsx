import Ribbon, { RibbonProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Basic: StoryFn<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: 'gray'
    }}
  >
    <Ribbon {...args} />
  </div>
)
