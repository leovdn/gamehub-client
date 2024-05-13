import FormSignUp from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Basic: StoryFn = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
    <FormSignUp {...args} />
  </div>
)
