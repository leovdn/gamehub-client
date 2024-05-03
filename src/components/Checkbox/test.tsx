import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Checkbox from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(
      <Checkbox label="checkbox with label" labelFor="checkbox" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('checkbox with label')).toBeInTheDocument()

    expect(screen.getByText('checkbox with label')).toHaveAttribute(
      'for',
      'checkbox'
    )
  })

  it('should not render if no label is passed', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="checkbox" labelColor="black" />
    )

    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })
})
