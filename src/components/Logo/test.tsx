import { renderWithTheme } from 'utils/tests/helpers'
import Logo from './index'
import { screen } from '@testing-library/react'
import 'jest-styled-components'

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

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/GameHub/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a normal logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/GameHub/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a bigger logo without text on mobile if hideonmobile', () => {
    renderWithTheme(<Logo size="large" $hideonmobile />)
    expect(screen.getByLabelText(/GameHub/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 600px)'
      }
    )
  })
})
