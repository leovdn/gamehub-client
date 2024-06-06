import GameDetails, { GameDetailsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    platforms: ['windows', 'mac', 'linux']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check'
      },
      options: ['windows', 'mac', 'linux']
    }
  }
} as Meta

export const Basic: StoryFn<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
)
