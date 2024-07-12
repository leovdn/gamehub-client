import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'
import Link from 'next/link'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <Logo id="banner" />
          </Link>

          <div>
            <Heading color="white" size="huge">
              All your favorite games in one place
            </Heading>

            <S.Subtitle>
              <strong>GameHub</strong> is the best and most complete gaming platform
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <Logo color="black" size="large" id="form" />
          </Link>
          <Heading $lineLeft $lineColor="secondary" color="black" size="medium">
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
