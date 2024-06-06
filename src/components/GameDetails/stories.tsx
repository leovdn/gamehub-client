import GameDetails, { GameDetailsProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    platforms: ['windows', 'mac', 'linux'],
    developer: 'Rockstar Games',
    releaseDate: '2020-11-21T11:00:00',
    publisher: 'Rockstar Games',
    rating: '4',
    genres: ['Action']
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
