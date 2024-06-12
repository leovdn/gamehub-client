import { screen } from '@testing-library/react'

import Cart from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import { mockGameItems } from 'components/GameItem/mock'

const props = {
  items: mockGameItems,
  total: 'R$ 430,00'
}

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameItem" />
    }
  }
})

describe('<Cart />', () => {
  it('should render the items and total', () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getAllByTestId(/Mock GameItem/i)).toHaveLength(2)
    expect(screen.getByText(props.total)).toBeInTheDocument()
  })
})
