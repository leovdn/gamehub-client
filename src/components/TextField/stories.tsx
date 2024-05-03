import TextField, { TextFieldProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Basic: StoryFn<TextFieldProps> = (args) => <TextField {...args} />
