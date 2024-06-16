import ProfileMenu from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  args: {
    title: '',
    description: ''
  }
} as Meta

export const Basic: StoryFn = (args) => <ProfileMenu {...args} />
