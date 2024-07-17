import { QUERY_HOME } from 'graphql/queries/home'
import gamecardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { formatPrice } from 'utils/formatters'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_HOME
  })

  const freeGames = data?.freeGames?.data?.map((game) => ({
    id: game.id,
    title: game.attributes?.title?.data?.attributes?.name,
    slug: game.attributes?.slug,
    developer: game.attributes?.developer?.data?.attributes?.name,
    img: `${process.env.NEXT_PUBLIC_API_URL}${game.attributes?.img.data?.attributes?.url}`,
    price: formatPrice(game?.attributes!.price),
    promotionalPrice: game.attributes?.promotionalPrice
  }))

  return {
    props: {
      revalidate: 10,
      banners: data?.banners?.data?.map((banner) => ({
        img: `${process.env.NEXT_PUBLIC_API_URL}${banner?.attributes?.image?.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ribbon: banner.attributes?.ribbon?.text,
        ribbonColor: banner.attributes?.ribbon?.color,
        ribbonSize: banner.attributes?.ribbon?.size
      })),
      newGames: freeGames,
      mostPopularGames: gamecardMock,
      mostPopularHighlight: highlightMock,
      upcomingGames: freeGames,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: freeGames,
      freeGames: freeGames,
      freeHighlight: highlightMock
    }
  }
}
