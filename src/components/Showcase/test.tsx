import { screen } from '@testing-library/react'

import Showcase from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import highlightMockItem from 'components/Highlight/mock'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'

describe('<Showcase />', () => {
  it('should render the Showcase with Title,  Highlight and Games', () => {
    renderWithTheme(
      <Showcase
        title="Most Popular"
        highlight={highlightMockItem}
        games={gameCardSliderMockItems}
      />
    )

    expect(screen.getByRole('heading', { name: /most popular/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: highlightMockItem.title })).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
  })

  it('should render without title', () => {
    renderWithTheme(<Showcase highlight={highlightMockItem} games={gameCardSliderMockItems} />)

    expect(screen.getByRole('heading', { name: highlightMockItem.title })).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)

    expect(screen.queryByRole('heading', { name: /most popular/i })).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase games={gameCardSliderMockItems} title="Most Popular" />)

    expect(screen.queryByRole('heading', { name: highlightMockItem.title })).not.toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(4)
  })
})
