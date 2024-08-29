import { Container } from 'components/Container'
import * as S from './styles'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { SectionFooter } from 'templates/Home/styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}
const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu username="leovdn" />
      </Container>

      <S.Content>{children}</S.Content>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </S.Wrapper>
  )
}

export default Base
