import { screen, waitFor } from '@testing-library/react'

import Dropdown from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render the title', () => {
    expect(screen.getByLabelText(/toggle dropdown/i)).toBeInTheDocument()
  })

  it('should open and close the content on click', () => {
    const content = screen.getByText(/Content/i).parentElement!
    const dropdownIcon = screen.getByLabelText(/toggle dropdown/i)

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(dropdownIcon)

    waitFor(() => {
      expect(content).toHaveStyle({ opacity: 1 })
      expect(content.getAttribute('aria-hidden')).toBe('false')
    })
  })
})
