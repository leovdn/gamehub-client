import { screen } from '@testing-library/react'

import FormSignIn from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<FormSignIn />', () => {
  it('should render the form inputs', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const forgotPasswordLink = screen.getByRole('link', {
      name: /forgot your password\?/i
    })

    expect(forgotPasswordLink).toBeInTheDocument()
    expect(forgotPasswordLink).toHaveAttribute('href', '/forgot-password')
  })

  it('should render the sign up link', () => {
    renderWithTheme(<FormSignIn />)

    const signUpLink = screen.getByRole('link', { name: /sign up/i })

    expect(signUpLink).toBeInTheDocument()
    expect(signUpLink).toHaveAttribute('href', '/sign-up')
  })
})
