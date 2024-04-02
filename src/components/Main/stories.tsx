import Main from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, Next.Js, Styled Components'
  }
} as Meta

export const Basic: StoryFn = (args) => <Main {...args} />
