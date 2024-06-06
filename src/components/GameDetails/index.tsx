import Heading from 'components/Heading'
import { Apple, Windows, Linux } from 'styled-icons/fa-brands'
import * as S from './styles'

type Platform = 'windows' | 'mac' | 'linux'

export type GameDetailsProps = {
  platforms?: Platform[]
  developer: string
  releaseDate: string
  publisher: string
}

const GameDetails = ({
  platforms,
  developer,
  releaseDate,
  publisher
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <Heading $lineLeft color="white" $lineColor="secondary" size="medium">
        Game Details
      </Heading>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.Description>
            <S.IconsWrapper>
              {platforms?.map((platform: Platform) => (
                <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
              ))}
            </S.IconsWrapper>
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>4.8</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>Action</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
