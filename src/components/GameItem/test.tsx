import { screen } from '@testing-library/react'

import GameItem from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  image: '/img/gamecard-img.png'
  // downloadLink: 'test',
  // payment: '3213141'
}

describe('<GameItem />', () => {
  it('should render the GameItem with image, title and price', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    )

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the download link', () => {
    renderWithTheme(<GameItem {...props} downloadLink="/test" />)

    expect(screen.getByLabelText(/download payment info/i)).toBeInTheDocument()
  })

  it('should render the payment info', () => {
    renderWithTheme(<GameItem {...props} payment="2314 4142 1223" />)

    expect(screen.getByText(/2314 4142 1223/i)).toBeInTheDocument()
  })
})
