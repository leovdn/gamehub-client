import highlightMockItem from 'components/Highlight/mock'
import Showcase, { ShowcaseProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Populars',
  highlight: highlightMockItem,
  games: gameCardSliderMockItems
}

export const WithoutHighlight: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Populars',
  games: gameCardSliderMockItems
}

export const WithoutGames: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Populars',
  highlight: highlightMockItem
}
