import PaymentOptions, { PaymentOptionsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import { mockCreditCards } from './mock'

export default {
  title: 'Checkout/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockCreditCards
  },
  argTypes: {
    handlePayment: { action: 'clicked' }
  }
} as Meta

export const Basic: StoryFn<PaymentOptionsProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
    <PaymentOptions {...args} />
  </div>
)
