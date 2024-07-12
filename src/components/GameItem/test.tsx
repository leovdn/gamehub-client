import { screen } from '@testing-library/react'
import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from './index'

const props: GameItemProps = {
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
  image: '/img/gamecard-img.png',
  payment: {
    cardNumber: '1234 1234 1234 1234',
    cardFlag: 'visa',
    purchaseDate: '2022-07-20 21:34',
    img: '/test'
  }
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />
}))

describe('<GameItem />', () => {
  it('should render the GameItem with image, title and price', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: props.title
      })
    ).toHaveAttribute('src', props.image)

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the download link', () => {
    renderWithTheme(<GameItem {...props} downloadLink="/test" />)

    expect(screen.getByRole('link', { name: `Get ${props.title} here` })).toHaveAttribute(
      'href',
      '/test'
    )
  })

  it('should render the payment info', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByText(/1234 1234 1234 1234/i)).toBeInTheDocument()
  })
})
