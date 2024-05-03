import Checkbox, { CheckboxProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {}
} as Meta

export const Basic: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />
