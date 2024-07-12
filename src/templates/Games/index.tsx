import Base from 'templates/Base'
import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import * as S from './styles'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from 'styled-icons/material-outlined'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={() => console.log('Filter')} />

        <section>
          <Grid>
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={() => console.log('Show more')}>
            <p>Show more</p>
            <KeyboardArrowDown size={34} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
