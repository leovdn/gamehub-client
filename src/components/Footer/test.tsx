import { screen } from '@testing-library/react'

import Footer from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Footer />', () => {
  it('should render four colunm topics', () => {
    renderWithTheme(<Footer />)

    expect(screen.getAllByRole('heading', { name: /contact/i }))
    expect(screen.getAllByRole('heading', { name: /follow us/i }))
    expect(screen.getAllByRole('heading', { name: /links/i }))
    expect(screen.getAllByRole('heading', { name: /location/i }))
  })
})
