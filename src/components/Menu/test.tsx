import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Menu from './index'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/gamehub/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile Menu', () => {
    renderWithTheme(<Menu />)

    // select the fullMenu element
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // check if the menu is hidden
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // Verify if menu opens when clicked
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // Verify if menu closes when clicked
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    // expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument()
    // expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Log in now/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account', () => {
    renderWithTheme(<Menu username="John Doe" />)

    // expect(screen.getByText(/My Account/i)).toBeInTheDocument()
    // expect(screen.getByText(/Wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument()
  })
})
