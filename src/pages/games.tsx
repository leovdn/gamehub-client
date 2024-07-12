import React from 'react'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gameCardSliderMockItems,
      filterItems: filterItemsMock
    }
  }
}
