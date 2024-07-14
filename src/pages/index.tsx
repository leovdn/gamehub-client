import gamecardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { QUERY_HOME } from 'graphql/queries/home'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_HOME
  })

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
      newGames: gamecardMock,
      mostPopularGames: gamecardMock,
      mostPopularHighlight: highlightMock,
      upcomingGames: gamecardMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamecardMock,
      freeGames: gamecardMock,
      freeHighlight: highlightMock
    }
  }
}
