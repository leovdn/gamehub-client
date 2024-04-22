import Footer from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    title: '',
    description: ''
  }
} as Meta

export const Basic: StoryFn = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)
