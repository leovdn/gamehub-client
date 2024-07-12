import ProfileMenu, { ProfileMenuProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Basic: StoryFn<ProfileMenuProps> = (args) => <ProfileMenu {...args} />
