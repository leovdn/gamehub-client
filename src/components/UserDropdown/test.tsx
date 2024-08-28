import { screen, waitFor } from '@testing-library/react'

import UserDropdown from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Leovdn" />)

    expect(screen.getByText(/Leovdn/i)).toBeInTheDocument()
  })

  it('should render the dropdown content', () => {
    renderWithTheme(<UserDropdown username="Leovdn" />)

    userEvent.click(screen.getByText(/Leovdn/i))

    waitFor(() => {
      expect(screen.getByText(/My profile/i)).toBeInTheDocument()
      expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
      expect(screen.getByText(/Log out/i)).toBeInTheDocument()
    })
  })
})
