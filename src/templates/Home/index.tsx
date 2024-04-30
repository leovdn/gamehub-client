import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

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
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft>
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Upcoming
        </Heading>

        <GameCardSlider items={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider items={upcomingMoreGames} />
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
