import RadioInput, { RadioInputProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'RadioInput',
  component: RadioInput,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: StoryFn<RadioInputProps> = (args) => (
  <div>
    <RadioInput
      label="Teste 1"
      labelFor="test1"
      id="test1"
      name="teste"
      defaultChecked
      {...args}
    />
    <RadioInput
      label="Teste 2"
      labelFor="test2"
      id="test2"
      name="teste"
      {...args}
    />
    <RadioInput
      label="Teste 3"
      labelFor="test3"
      id="test3"
      name="teste"
      {...args}
    />
  </div>
)
