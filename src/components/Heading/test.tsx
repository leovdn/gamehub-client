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
        'border-left': '0.7rem solid #F231A5'
      }
    )
  })

  it('should render the heading with a line on the bottom', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)
    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render the heading with a small size', () => {
    renderWithTheme(
      <Heading size="small" lineBottom>
        Most Populars
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'font-size': '1.6rem'
      }
    )

    expect(
      screen.getByRole('heading', { name: /Most Populars/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render the Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Most Populars/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render the Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /Most Populars/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
