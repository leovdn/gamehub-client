import { QUERY_HOME } from 'graphql/queries/home'
import gamecardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { imageValidation } from 'utils/formatters'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, freeGames, upcommingGames, sections }
  } = await apolloClient.query({
    query: QUERY_HOME
  })

  const mostPopularHighlight = sections?.data?.attributes?.popularGames?.highlight
  const upcommingHighlight = sections?.data?.attributes?.upcommingGames?.highlight
  const freeHighlight = sections?.data?.attributes?.upcommingGames?.highlight

  return {
    props: {
      revalidate: 10,
      banners: banners?.data.map((banner) => ({
        img: `${process.env.NEXT_PUBLIC_API_URL}${banner?.attributes?.image?.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ribbon: banner.attributes?.ribbon?.text,
        ribbonColor: banner.attributes?.ribbon?.color,
        ribbonSize: banner.attributes?.ribbon?.size
      })),
      newGames: newGames?.data.map((game) => ({
        img: imageValidation(game),
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0]?.attributes?.name,
        price: game.attributes?.price
      })),
      mostPopularGames: sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
        img: imageValidation(game),
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0]?.attributes?.name,
        price: game.attributes?.price
      })),
      mostPopularHighlight: {
        title: mostPopularHighlight?.title,
        subtitle: mostPopularHighlight?.subtitle,
        buttonLabel: mostPopularHighlight?.buttonLabel,
        buttonLink: mostPopularHighlight?.buttonLink,
        $backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${mostPopularHighlight?.background.data?.attributes?.url}`,
        floatImage: !mostPopularHighlight?.floatImage ?? null,
        align: mostPopularHighlight?.align
      },
      upcomingGames: upcommingGames?.data.map((game) => ({
        img: imageValidation(game),
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0]?.attributes?.name,
        price: game.attributes?.price
      })),
      upcomingHighlight: {
        title: upcommingHighlight?.title,
        subtitle: upcommingHighlight?.subtitle,
        buttonLabel: upcommingHighlight?.buttonLabel,
        buttonLink: upcommingHighlight?.buttonLink,
        $backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${upcommingHighlight?.background.data?.attributes?.url}`,
        floatImage: !upcommingHighlight?.floatImage ?? null,
        align: upcommingHighlight?.align
      },
      freeGames: freeGames?.data.map((game) => ({
        img: imageValidation(game),
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0]?.attributes?.name,
        price: game.attributes?.price
      })),
      freeHighlight: {
        title: freeHighlight?.title,
        subtitle: freeHighlight?.subtitle,
        buttonLabel: freeHighlight?.buttonLabel,
        buttonLink: freeHighlight?.buttonLink,
        $backgroundImage: `${process.env.NEXT_PUBLIC_API_URL}${freeHighlight?.background.data?.attributes?.url}`,
        floatImage: !freeHighlight?.floatImage ?? null,
        align: freeHighlight?.align
      }
    }
  }
}
