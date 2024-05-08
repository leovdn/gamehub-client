import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo color="alternative" />
        <Heading color="white">All your favorite games in one place</Heading>
        <S.Subtitle>
          <strong>GameHub</strong> is the best and most complete gaming platform
        </S.Subtitle>
        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerBlock>

      <S.Content>
        <Logo color="black" size="large" />
        <Heading $lineLeft $lineColor="secondary" color="black" size="medium">
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
