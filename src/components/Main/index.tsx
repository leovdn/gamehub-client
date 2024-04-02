import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypesCript, ReactJS, Next.Js, Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor com telas ao lado"
      ></S.Illustration>
    </S.Wrapper>
  )
}

export default Main
