import Link from 'next/link'
import * as S from './styles'
import Button from 'components/Button'

export type EmptyProps = {
  title?: string
  description?: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.EmptyImage src="/img/not-found.svg" alt="Not found" />

      <S.EmptyTitle>{title}</S.EmptyTitle>
      <S.EmptyDescription>{description}</S.EmptyDescription>

      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  )
}

export default Empty
