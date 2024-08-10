import { useQuery } from '@apollo/client'
import Base from 'templates/Base'
import { Grid } from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import { KeyboardArrowDown } from 'styled-icons/material-outlined'
import * as S from './styles'
import { QUERY_GAMES } from 'graphql/queries/games'
import { formatPrice, imageValidation } from 'utils/formatters'
import Loading from 'components/Loader'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQuery(QUERY_GAMES, {
    variables: { pagination: { limit: 6 } }
  })

  function handleShowMore() {
    fetchMore({
      variables: { pagination: { limit: 6, start: data?.games?.data.length } }
    })
  }

  console.log(data?.games?.data.length)

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={() => console.log('Filter')} />

        {loading ? (
          <Loading />
        ) : (
          <section>
            <Grid>
              {data?.games?.data.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.attributes!.name}
                  img={imageValidation(game)}
                  slug={game!.attributes!.slug!}
                  developer={game.attributes?.developers?.data[0].attributes?.name}
                  price={formatPrice(game.attributes!.price)}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <KeyboardArrowDown size={34} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
