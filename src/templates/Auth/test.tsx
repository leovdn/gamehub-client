import { screen } from '@testing-library/react'

import Auth from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Auth />', () => {
  it('should render logos, title and children', () => {
    renderWithTheme(
      <Auth title="AuthTest">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /gamehub/i })).toHaveLength(2)

    expect(screen.getByRole('heading', { name: /AuthTest/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /GameHub is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
