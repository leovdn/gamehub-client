import { screen } from '@testing-library/react'

import Checkout, { CheckoutTemplateProps } from './index'
import { mockGameItems } from 'components/GameItem/mock'
import { mockCreditCards } from 'components/PaymentOptions/mock'
import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'

const props: CheckoutTemplateProps = {
  cart: {
    total: 'R$ 430,00',
    items: mockGameItems,
    modal: false
  },
  cards: mockCreditCards,
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

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="PaymentOptions Mock" />
    }
  }
})

describe('<Checkout />', () => {
  it('should render the cart section', () => {
    renderWithTheme(<Checkout {...props} />)

    expect(screen.getByRole('heading', { name: /My Cart/i })).toBeInTheDocument()
  })
})
