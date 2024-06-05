import Heading from 'components/Heading'
import * as S from './styles'
import Image from 'next/image'

export type GameDescriptionProps = {
  short_description: string
  full_description: string
  image: string
}

const GameDescription = ({
  full_description,
  short_description,
  image
}: GameDescriptionProps) => {
  return (
    <S.Wrapper>
      <S.About>
        <Image src={image} alt="game description" width={200} height={100} />

        <div>
          <Heading color="black" size="small" $lineLeft $lineColor="secondary">
            About the Game
          </Heading>

          <p>{short_description}</p>
        </div>
      </S.About>

      <S.Description>
        <Heading color="black" size="small" $lineLeft $lineColor="secondary">
          Learn More
        </Heading>

        <p>{full_description}</p>
      </S.Description>
    </S.Wrapper>
  )
}

export default GameDescription
