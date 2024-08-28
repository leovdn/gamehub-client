import { screen } from '@testing-library/react'
import CartIcon from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<CartIcon />', () => {
  it('should render without the quantity badge', () => {
    renderWithTheme(<CartIcon quantity={0} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with the quantity badge', () => {
    renderWithTheme(<CartIcon quantity={3} />)

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
