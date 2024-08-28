import UserDropdown, { UserDropdownProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {
    username: 'Leovdn'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: StoryFn<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)
