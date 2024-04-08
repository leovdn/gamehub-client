import Logo, { LogoProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Basic: StoryFn<LogoProps> = (args) => <Logo {...args} />
