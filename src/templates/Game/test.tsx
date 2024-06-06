// import { screen } from '@testing-library/react'

import Game from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Game />)
  })
})
