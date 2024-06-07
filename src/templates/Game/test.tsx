import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Game, { GameTemplateProps } from './index'
import { gameInfoMock } from 'components/GameInfo/mock'
import { gameDetailsMock } from 'components/GameDetails/mock'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo" />
    }
  }
})

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu" />
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails" />
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase Mock" />
    }
  }
})

const props: GameTemplateProps = {
  cover: 'test.jpg',
  gameInfo: gameInfoMock,
  description: `<h1>Custom HTML</h1>`,
  gameDetails: gameDetailsMock,
  upcomingGames: gameCardSliderMockItems,
  upcomingHighlight: highlightMockItem,
  recommendedGames: gameCardSliderMockItems
}

describe('<Game />', () => {
  it('should render the Game page components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase Mock')).toHaveLength(2)
    expect(screen.getByText(/custom HTML/i)).toBeInTheDocument()
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByRole('img', { name: /cover/i })).toHaveAttribute(
      'src',
      'test.jpg'
    )

    expect(screen.getByRole('img', { name: /cover/i })).toHaveStyle(
      'height: 39.5rem'
    )
  })
})
