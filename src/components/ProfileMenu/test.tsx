import { screen } from '@testing-library/react'

import ProfileMenu from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<ProfileMenu />', () => {
  it('should render the profile menu', () => {
    renderWithTheme(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )

    expect(screen.getByRole('link', { name: /My cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )

    expect(screen.getByRole('link', { name: /sign out/i })).toHaveAttribute(
      'href',
      '/logout'
    )
  })
})
