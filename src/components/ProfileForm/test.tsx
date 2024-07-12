import { screen } from '@testing-library/react'

import ProfileForm from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<ProfileForm />', () => {
  it('should render the profile form', () => {
    renderWithTheme(<ProfileForm />)

    expect(screen.getByRole('heading', { name: /My Profile/i })).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /e-mail/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/type your password/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
