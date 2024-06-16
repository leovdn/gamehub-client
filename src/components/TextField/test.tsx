import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import { Email } from 'styled-icons/material-outlined'

describe('<TextField />', () => {
  it('should render the text input', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" />)

    expect(screen.getByLabelText('TextField')).toBeInTheDocument()
    expect(screen.getByText('TextField')).toHaveAttribute('for', 'TextField')
  })

  it('should not render the label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('TextField')).not.toBeInTheDocument()
  })

  it('should render with the Placeholder', () => {
    renderWithTheme(
      <TextField label="TextField" name="TextField" placeholder="testing" />
    )

    expect(screen.getByPlaceholderText('testing')).toBeInTheDocument()
  })

  it('should render the text input values', () => {
    renderWithTheme(
      <TextField label="TextField" name="TextField" initialValue="test" />
    )

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('should dispatch textfield when text changes', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="TextField" name="TextField" onInput={onInput} />
    )

    const input = screen.getByLabelText('TextField')
    const text = 'Mock text for testing purposes'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should render with icon', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        icon={<Email data-testid="icon" />}
      />
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with icon on the right side', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should not change when disabled', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        onInput={onInput}
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    userEvent.type(input, 'test')

    await waitFor(() => {
      expect(input).not.toHaveValue('test')
      expect(onInput).not.toHaveBeenCalled()
    })
  })

  it('should run with error', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label="TextField"
        name="TextField"
        onInput={onInput}
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
