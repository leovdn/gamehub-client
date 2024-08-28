import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CartDropdown from './index'
import { mockGameItems } from 'components/GameItem/mock'

describe('<CartDropdown />', () => {
  it('should render CartDropdown with icon and items count in badge', () => {
    renderWithTheme(<CartDropdown items={mockGameItems} total="R$ 430,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(mockGameItems.length)).toBeInTheDocument()
  })

  it('should render CartDropdown with cart items and total', () => {
    renderWithTheme(<CartDropdown items={mockGameItems} total="R$ 430,00" />)

    expect(screen.getByText('R$ 430,00')).toBeInTheDocument()
    expect(screen.getByText(mockGameItems[0].title)).toBeInTheDocument()
  })
})
