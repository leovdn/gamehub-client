import GameDetails from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    title: '',
    description: ''
  }
} as Meta

export const Basic: StoryFn = (args) => <GameDetails {...args} />
