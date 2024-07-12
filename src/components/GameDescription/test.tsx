import { screen } from '@testing-library/react'

import GameDescription from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Description',
  content: 'Description content'
}

describe('<GameDescription />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<GameDescription {...props} />)

    expect(screen.getByRole('heading', { name: /Description/i })).toBeInTheDocument()
    expect(screen.getByText(/Description content/i)).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(<GameDescription content={props.content} />)

    expect(screen.queryByRole('heading', { name: /Description/i })).not.toBeInTheDocument()
  })

  it('should render the title and content', () => {
    renderWithTheme(<GameDescription {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /Description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
