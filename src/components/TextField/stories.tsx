import { Email } from 'styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'Email',
    name: 'email',
    initialValue: '',
    placeholder: 'leo.vdn@gmail.com',
    icon: <Email />
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Basic: StoryFn<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 16 }}>
    <TextField {...args} icon={<Email />} />
  </div>
)
