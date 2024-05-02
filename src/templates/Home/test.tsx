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

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    // footer
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    // logos (menu/footer)
    expect(screen.getAllByRole('img', { name: /gamehub/i })).toHaveLength(2)
  })

  it('should render the Home page contents', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /New/ })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // banner
    expect(screen.getAllByText(/Board Game/i)).toHaveLength(2)
    // Gamecard (5 sliders with only 1 element each)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // highlight
    expect(screen.getAllByRole('heading', { name: /Red Dead/i })).toHaveLength(
      3
    )
  })
})
