import FormSignIn from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Basic: StoryFn = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
    <FormSignIn {...args} />
  </div>
)
