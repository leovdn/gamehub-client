import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import PaymentOptions from './index'
import { mockCreditCards } from './mock'

const props = {
  cards: mockCreditCards
}

describe('<PaymentOptions />', () => {
  it('should render the saved cards and add New card', () => {
    renderWithTheme(<PaymentOptions {...props} handlePayment={jest.fn} />)

    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Mastercard/i })).toBeInTheDocument()
    expect(screen.getByText(/4242/i)).toBeInTheDocument()
    expect(screen.getByText(/Add new credit card/i)).toBeInTheDocument()
  })

  it('should select the clicked card', async () => {
    renderWithTheme(<PaymentOptions {...props} handlePayment={jest.fn} />)

    userEvent.click(screen.getByText(/4242/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4242/ })).toBeChecked()
    })
  })

  it('should disable Buy Now button if no card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)
    const buyButton = screen.getByRole('button', { name: /Buy Now/i })

    userEvent.click(buyButton)
    expect(buyButton).toBeDisabled()
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when a card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(<PaymentOptions {...props} handlePayment={handlePayment} />)
    const buyButton = screen.getByRole('button', { name: /Buy Now/i })

    userEvent.click(screen.getByText(/4242/))
    userEvent.click(buyButton)

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
