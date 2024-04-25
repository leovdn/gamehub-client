import { screen } from '@testing-library/react'

import Home from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(screen.getByText(/News/i)).toBeInTheDocument()
    expect(screen.getByText(/Most Popular/i)).toBeInTheDocument()
    expect(screen.getByText(/Upcoming/i)).toBeInTheDocument()
    expect(screen.getByText(/Free Games/i)).toBeInTheDocument()
  })
})
