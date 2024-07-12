import ExploreSidebar from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    title: '',
    description: ''
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn = (args) => <ExploreSidebar {...args} />
