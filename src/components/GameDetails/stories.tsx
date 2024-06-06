import GameDetails, { GameDetailsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import mockdata from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    ...mockdata
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
