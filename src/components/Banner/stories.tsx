import Banner, { BannerProps } from '.'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Banner Default',
    subtitle: '<p>Play the new <strong>Game</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/default'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />
