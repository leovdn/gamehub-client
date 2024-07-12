import { screen } from '@testing-library/react'

import Button from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from 'styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the medium button size by Default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small button size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large button size', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a full-width version', () => {
    renderWithTheme(
      <Button size="small" $fullwidth>
        Buy Now
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button size="small" icon={<AddShoppingCart data-testid="icon" />}>
        Buy Now
      </Button>
    )

    expect(screen.getByText(/Buy Now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render the Button as a Link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )

    expect(screen.getByRole('link', { name: /Buy Now/i })).toHaveAttribute('href', '/link')
  })
})
