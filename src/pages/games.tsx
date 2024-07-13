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
    query: QUERY_GAMES,
    variables: { pagination: { limit: 9 } }
  })

  function formatUrl(url: string) {
    return url.replace('/', '')
  }

  function imageValidation(game: any) {
    if (game.attributes.cover.data) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game.attributes.cover.data?.attributes.url)}`
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game.attributes.gallery?.data[0]?.attributes.url)}`
    }
  }

  function formatPrice(price: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price)
  }

  return {
    props: {
      revalidate: 60,
      games: data.games?.data.map((game) => ({
        title: game.attributes?.name,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        price: formatPrice(game.attributes!.price),
        img: imageValidation(game),
        slug: game.attributes?.slug
      })),
      filterItems: filterItemsMock
    }
  }
}
