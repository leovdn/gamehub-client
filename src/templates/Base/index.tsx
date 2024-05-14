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
        <Menu />
      </Container>

      {children}

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </S.Wrapper>
  )
}

export default Base
