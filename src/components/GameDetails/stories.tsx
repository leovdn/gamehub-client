import GameDetails, { GameDetailsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import { gameDetailsMock } from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    ...gameDetailsMock
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
