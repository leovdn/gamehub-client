import { screen } from '@testing-library/react'

import GameInfo from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'GameTitle',
  description: 'Description',
  price: 'R$ 228,00'
}

describe('<GameInfo />', () => {
  it('should render the Game Info', () => {
    renderWithTheme(<GameInfo {...props} />)

    // expect title
    expect(screen.getByRole('heading', { name: `${props.title}` })).toBeInTheDocument()

    //expect description
    expect(screen.getByText(`${props.description}`)).toBeInTheDocument()

    //expect price
    expect(screen.getByText(`${props.price}`)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /add to wishlist/i
      })
    ).toBeInTheDocument()
  })
})
