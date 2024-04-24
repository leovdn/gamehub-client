import { Container } from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Container>
        <h1>Test</h1>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '130rem')

    expect(container.firstChild).toMatchSnapshot()
  })
})
