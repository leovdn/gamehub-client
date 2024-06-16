import ProfileForm from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Form/ProfileForm',
  component: ProfileForm
} as Meta

export const Basic: StoryFn = (args) => <ProfileForm {...args} />
