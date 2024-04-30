import { screen } from '@testing-library/react'

import Home from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import bannerSlideMockItems from 'components/BannerSlider/mock'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'

const props = {
  banners: bannerSlideMockItems,
  newGames: [gameCardSliderMockItems[0]],
  mostPopularHighlight: highlightMockItem,
  mostPopularGames: [gameCardSliderMockItems[0]],
  upcommingGames: [gameCardSliderMockItems[0]],
  upcommingHighligth: highlightMockItem,
  upcommingMoreGames: [gameCardSliderMockItems[0]],
  freeGames: [gameCardSliderMockItems[0]],
  freeHighligth: highlightMockItem
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

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // // banner
    // expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    // // card game ( 5 sections com 1 card cada = 5x1 = 5)
    // expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    // // highlight
    // expect(screen.getAllByText(/read dead is back!/i)).toHaveLength(3)
  })
})
