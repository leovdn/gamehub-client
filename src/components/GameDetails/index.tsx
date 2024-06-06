import Heading from 'components/Heading'
import * as S from './styles'

const GameDetails = () => {
  return (
    <S.Wrapper>
      <Heading $lineLeft color="white" $lineColor="secondary" size="medium">
        Game Details
      </Heading>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>Rockstar Games</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>Nov 13, 2020</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>Rockstar Games</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>Nov 21, 2020</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.Description>Windows, Mac, Linux</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>4.8</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genre</S.Title>
          <S.Description>Action</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
