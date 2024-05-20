import GameInfo, { GameInfoProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Red Dead Redemption',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque possimus minima.',
    price: 'R$ 228,00'
  }
} as Meta

export const Basic: StoryFn<GameInfoProps> = (args) => <GameInfo {...args} />
