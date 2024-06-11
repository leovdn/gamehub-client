import { Meta, StoryFn } from '@storybook/react'
import GameDescription, { GameDescriptionProps } from '.'
import { gameDescriptionMock } from './mock'

export default {
  title: 'Game/GameDescription',
  component: GameDescription,
  args: gameDescriptionMock
} as Meta

export const Basic: StoryFn<GameDescriptionProps> = (args) => (
  <GameDescription {...args} />
)
