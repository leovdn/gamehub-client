import Button from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}
