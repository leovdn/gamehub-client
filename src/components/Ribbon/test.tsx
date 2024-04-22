import { screen } from '@testing-library/react'

import Ribbon from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/))
  })

  it('should render with primary color as default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with small size', () => {
    renderWithTheme(
      <Ribbon color="secondary" size="small">
        Best Seller
      </Ribbon>
    )

    expect(screen.getByText(/Best Seller/)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
