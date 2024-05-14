import { screen } from '@testing-library/react'

import Home from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import bannersMock from 'components/BannerSlider/mock'
import gamecardMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamecardMock[0]],
  mostPopularGames: [gamecardMock[0]],
  mostPopularHighlight: highlightMock,
  upcomingGames: [gamecardMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamecardMock[0]],
  freeGames: [gamecardMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu Mock" />
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Footer Mock" />
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

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="BannerSlider Mock" />
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByTestId('Menu Mock')).toBeInTheDocument()
    // footer
    expect(screen.getByTestId('Footer Mock')).toBeInTheDocument()
  })

  it('should render the Home page contents', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('BannerSlider Mock')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase Mock')).toHaveLength(5)
  })
})
