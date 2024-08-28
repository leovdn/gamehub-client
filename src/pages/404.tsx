import Base from 'templates/Base'
import { Container } from 'components/Container'
import Empty from 'components/Empty'
export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="Page not found"
          description="Please, check the URL in the address bar and try again."
          hasLink
        />
      </Container>
    </Base>
  )
}
