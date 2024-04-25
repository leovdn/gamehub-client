import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'

import Heading from 'components/Heading'

const Home = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft>
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading lineColor="secondary" lineLeft color="white">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
