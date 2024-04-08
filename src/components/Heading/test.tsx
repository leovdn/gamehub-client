import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  it('should render the heading with black by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#030517'
      }
    )
  })

  it('should render the heading when white color is passed', () => {
    renderWithTheme(<Heading color="white">Most Populars</Heading>)
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#fafafa'
      }
    )
  })

  it('should render the heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #3CD3C1'
      }
    )
  })

  it('should render the heading with a line on the bottom', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)
    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
