import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishlistTemplateProps } from './index'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: gameCardSliderMockItems,
  recommendedGames: gameCardSliderMockItems,
  recommendedHighlight: highlightMockItem
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase Mock" />
    }
  }
})

jest.mock('components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameCard Mock" />
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('GameCard Mock')).toHaveLength(5)
    expect(screen.getAllByTestId('Showcase Mock')).toHaveLength(1)
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gameCardSliderMockItems}
        recommendedHighlight={highlightMockItem}
      />
    )

    expect(screen.getByText(/your wishlist is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
  })
})
