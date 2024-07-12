import React from 'react'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from '../components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.data.map((game) => ({
        title: game.attributes.name,
        developer: game.attributes.developers.data[0].attributes.name,
        price: game.attributes.price,
        img: game.attributes.cover.data
          ? `http://localhost:1337/${game.attributes.cover.data?.attributes.url.replace('/', '')}`
          : `http://localhost:1337/${game.attributes.gallery?.data[0]?.attributes.url.replace('/', '')}`
      })),
      filterItems: filterItemsMock
    }
  }
}
