import { screen } from '@testing-library/react'

import GameCardSlider from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?q=80&w=1317',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  {
    title: 'Population Zero 2',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?q=80&w=1470',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render slider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(
      screen.getAllByRole('heading', { name: /Population Zero/i, hidden: true })
    )
    expect(
      screen.getAllByRole('heading', {
        name: /Population Zero 2/i,
        hidden: true
      })
    )
  })
})
