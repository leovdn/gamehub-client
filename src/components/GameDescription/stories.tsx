import GameDescription, { GameDescriptionProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'GameDescription',
  component: GameDescription,
  args: {
    image: '/img/gamecard-img.png',
    full_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque possimus minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque possimus minima. amet consectetur adipisicing elit. Odio doloremque possimus minima.amet consectetur adipisicing elit. Odio doloremque possimus minima.',
    short_description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit. Odio doloremque possimus minima.'
  }
} as Meta

export const Basic: StoryFn<GameDescriptionProps> = (args) => (
  <GameDescription {...args} />
)
