import Heading from 'components/Heading'
import * as S from './styles'

export type GameDescriptionProps = {
  title?: string
  content: string
}

const GameDescription = ({ title, content }: GameDescriptionProps) => {
  return (
    <S.Wrapper>
      {title && (
        <Heading color="black" $lineLeft $lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  )
}

export default GameDescription
