import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import * as S from './styles'

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
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectioNewGames>
        <Container>
          <Heading lineColor="secondary" lineLeft>
            New
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectioNewGames>

      <S.SectionMostPopular>
        <Container>
          <Heading lineColor="secondary" lineLeft color="white">
            Most Popular
          </Heading>

          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </Container>
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Container>
          <Heading lineColor="secondary" lineLeft color="white">
            Upcoming
          </Heading>

          <GameCardSlider items={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider items={upcomingMoreGames} />
        </Container>
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Container>
          <Heading lineColor="secondary" lineLeft color="white">
            Free Games
          </Heading>

          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </Container>
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
