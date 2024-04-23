import { fireEvent, screen } from '@testing-library/react'

import GameCard from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import { ClassAttributes, ImgHTMLAttributes } from 'react'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Studios',
  img: '/img/gamecard-img.png',
  price: 'R$ 235,00'
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />
}))

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText(props.price)).toBeInTheDocument()

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    //price doesn't have line-through
    expect(screen.getByText(props.price)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    // price doesn't have gray color
    expect(screen.getByText(props.price)).not.toHaveStyle({
      color: '#8F8F8F'
    })
    // price have secondary background
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-through when price is promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 200,00" {...props} />)

    //price has line-through
    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
    //new promotional price doesn't have line-through
    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard favorite {...props} />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite icon is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<GameCard favorite {...props} onFavorite={onFavorite} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toHaveBeenCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })

    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })

    expect(ribbon).toBeInTheDocument()
  })
})
