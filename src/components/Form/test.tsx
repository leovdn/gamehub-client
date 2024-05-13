import { FormLink, FormWrapper } from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          From Link Test<a href="#">Form Link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
