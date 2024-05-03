import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from './index'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<TextField />', () => {
  it('should render the text input', () => {
    renderWithTheme(<TextField label="Name" labelFor="TextField" />)

    expect(screen.getByLabelText('TextField')).toBeInTheDocument()
    expect(screen.getByText('Name')).toHaveAttribute('for', 'TextField')
  })

  it('should render the text input values', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" initialValue="test" />
    )

    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  })

  it('should dispatch textfield when text changes', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField label="Name" labelFor="TextField" onInput={onInput} />
    )

    expect(onInput).not.toHaveBeenCalled()

    userEvent.type(screen.getByLabelText('TextField'), 'test')

    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(4)
    })

    expect(onInput).toHaveBeenCalledWith('test')
  })
})
