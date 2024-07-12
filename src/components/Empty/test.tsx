import { screen } from '@testing-library/react'

import Empty, { EmptyProps } from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props: EmptyProps = {
  title: 'Content not found',
  description: 'Empty description'
}

describe('<Empty />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(screen.getByRole('img', { name: /not found/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Content not found/i })).toBeInTheDocument()

    expect(screen.getByText(/Empty description/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /back to store/i })).toHaveAttribute('href', '/')
  })
})
