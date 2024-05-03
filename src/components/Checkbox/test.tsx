import { screen } from '@testing-library/react'

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
})
