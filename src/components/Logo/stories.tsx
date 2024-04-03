import Logo from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: '',
    description: ''
  }
} as Meta

export const Basic: StoryFn = (args) => <Logo {...args} />
