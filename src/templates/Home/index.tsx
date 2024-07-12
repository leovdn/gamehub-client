import BannerSlider from 'components/BannerSlider'

import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'

import * as S from './styles'
import Base from 'templates/Base'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectioNewGames>
        <Showcase title="New Games" games={newGames} />
      </S.SectioNewGames>

      <Showcase title="Most Popular" games={mostPopularGames} highlight={mostPopularHighlight} />

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upcomingMoreGames} />
        <Showcase games={upcomingGames} highlight={upcomingHighlight} />
      </S.SectionUpcoming>

      <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />
    </Base>
  )
}

export default Home
