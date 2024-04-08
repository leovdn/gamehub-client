import { renderWithTheme } from 'utils/tests/helpers'
import Logo from './index'
import { screen } from '@testing-library/react'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //render the component with 'render' or a helper (renderWithTheme)
    renderWithTheme(<Logo />)
    //select the element to be tested with 'screen' (queries)
    //expect --assertion to to render white logo
    expect(screen.getByLabelText(/GameHub/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/GameHub/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
