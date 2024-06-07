import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import * as S from './styles'
import GameDescription from 'components/GameDescription'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  description: string
  gameDetails: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  description,
  gameDetails,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="img" aria-label="Cover" />

      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionDescription>
          <GameDescription title="Description" content={description} />
        </S.SectionDescription>

        <S.SectionGameDetails>
          <GameDetails {...gameDetails} />
        </S.SectionGameDetails>

        <Showcase
          title="Upcoming Games"
          games={upcomingGames}
          highlight={upcomingHighlight}
        />

        <Showcase
          title="You may also like these games"
          games={recommendedGames}
        />
      </S.Main>
    </Base>
  )
}

export default Game
