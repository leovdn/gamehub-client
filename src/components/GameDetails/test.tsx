import { screen } from '@testing-library/react'

import GameDetails from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameDetails />)

    expect(
      screen.getByRole('heading', { name: /Game Details/i })
    ).toBeInTheDocument()
  })
})
