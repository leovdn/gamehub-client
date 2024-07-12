import { screen } from '@testing-library/react'

import FormSignUp from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormSignUp />', () => {
  it('should render the form inputs', () => {
    renderWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Create account/i })).toBeInTheDocument()
  })

  it('should render the sign in link', () => {
    renderWithTheme(<FormSignUp />)

    const signInLink = screen.getByRole('link', { name: /Sign in/ })

    expect(signInLink).toBeInTheDocument()
    expect(signInLink).toHaveAttribute('href', '/sign-in')
  })
})
