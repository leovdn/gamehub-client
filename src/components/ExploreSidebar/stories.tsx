import ExploreSidebar, { ExploreSidebarProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<ExploreSidebarProps> = (args) => <ExploreSidebar {...args} />

export const WithInitialValues: StoryFn<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} initialValues={{ windows: true, sort_by: 'low-to-high' }} />
)
