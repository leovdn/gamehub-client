import { screen } from '@testing-library/react'

import ExploreSidebar from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar />)

    expect(screen.getByRole('checkbox', { name: /under \$50/i })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /under \$100/i })).toBeInTheDocument()
    expect(screen.getByRole('checkbox', { name: /under \$150/i })).toBeInTheDocument()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
