import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    title: 'Board Game 1',
    subtitle: '<p>Play the new <strong>Mindblowing RPG</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/board-test',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    title: 'Board Game 2',
    subtitle: '<p>Play the new <strong>Mindblowing RPG</strong></p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/board-test'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Board Game 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Board Game 2/i, hidden: true })
    ).toBeInTheDocument()
  })
})
