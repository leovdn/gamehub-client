import { screen } from '@testing-library/react'

import GameDescription from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  image: '/mock.png',
  full_description: 'Full description',
  short_description: 'short'
}

describe('<GameDescription />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDescription {...props} />)

    expect(screen.getByText(/short/i, { selector: 'p' })).toBeInTheDocument()
    expect(
      screen.getByText(/Full description/i, { selector: 'p' })
    ).toBeInTheDocument()
  })
})
