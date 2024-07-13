import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from 'graphql/queries/games'

import { initializeApollo } from 'utils/apollo'
import { formatPrice, formatUrl } from 'utils/formatters'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'
import Game, { GameTemplateProps } from 'templates/Game'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // ADD loading or skelleton loading when page not created yet
  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { pagination: { limit: 9 } }
  })

  const paths = data.games?.data.map((game) => ({
    params: { slug: game.attributes?.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0].attributes!

  function imageValidation(game: any) {
    if (game.cover.data) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game?.cover.data?.attributes.src)}`
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game?.gallery?.data[0]?.attributes.src)}`
    }
  }

  return {
    props: {
      revalidate: 60,
      cover: imageValidation(game),
      gameInfo: {
        title: game.name,
        price: formatPrice(game.price),
        description: game.short_description
      },
      gallery: game.gallery?.data.map((img) => img.attributes),
      description: game?.description,
      gameDetails: {
        developer: game.developers?.data[0].attributes?.name,
        releaseDate: game.release_date,
        platforms: game.platforms?.data.map((platform) => platform.attributes?.name),
        publisher: game.publisher?.data?.attributes?.name,
        rating: game.rating,
        genres: game.categories?.data.map((category) => category.attributes?.name)
      },
      upcomingGames: gameCardSliderMockItems,
      upcomingHighlight: highlightMockItem,
      recommendedGames: gameCardSliderMockItems
    }
  }
}
