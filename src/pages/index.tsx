import bannersMock from 'components/BannerSlider/mock'
import gamecardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
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
