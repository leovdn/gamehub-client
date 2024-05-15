import { Container } from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({ games, highlight, title }: ShowcaseProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Heading $lineColor="secondary" $lineLeft color="white">
          {title && title}
        </Heading>

        {highlight && <Highlight {...highlight} />}

        {games && <GameCardSlider items={games} />}
      </Container>
    </S.Wrapper>
  )
}

export default Showcase
