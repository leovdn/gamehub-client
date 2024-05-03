import Checkbox, { CheckboxProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Checkbox',
  argTypes: {
    onCheck: { action: 'checked' }
  },
  component: Checkbox
} as Meta

export const Basic: StoryFn<CheckboxProps> = (args) => (
  <Checkbox isChecked {...args} />
)
