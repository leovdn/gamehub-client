import { screen } from '@testing-library/react'

import GameDetails, { GameDetailsProps } from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props: GameDetailsProps = {
  developer: 'Rockstar Games',
  releaseDate: '2020-11-21T11:00:00',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'Rockstar Games',
  rating: 'BR0',
  genres: ['Action', 'Role-playing', 'Narrative', 'Indie', 'Early Access']
}

describe('<GameDetails />', () => {
  it('should render the game detail blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('heading', { name: /Game Details/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Developer/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Release Date/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Platforms/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Publisher/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render "free" rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render "18+" rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the first 3 genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Action / Role-playing / Narrative')).toBeInTheDocument()
  })
})
