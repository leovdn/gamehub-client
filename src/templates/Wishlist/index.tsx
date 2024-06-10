import Base from 'templates/Base'
import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'
import * as S from './styles'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishlistTemplate = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading color="white" $lineLeft $lineColor="secondary">
          Wishlist
        </Heading>

        <S.WishlistContent>
          {games &&
            games.map((game) => (
              <GameCard {...game} key={`wishlist-${game.title}`} />
            ))}
        </S.WishlistContent>
      </Container>

      <Container>
        <hr />
      </Container>

      <Showcase
        title="You may also like"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default WishlistTemplate
