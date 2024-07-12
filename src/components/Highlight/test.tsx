import { screen } from '@testing-library/react'

import Highlight from './index'
import { renderWithTheme } from 'utils/tests/helpers'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/default',
  $backgroundImage: '/img/hl-bg.png'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('heading', { name: /Heading 1/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Heading 2/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy Now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.$backgroundImage})`
    })
  })

  it('should render the floating image', () => {
    renderWithTheme(<Highlight floatImage="/img/hl-img.png" {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute('src', '/img/hl-img.png')
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'floatimage content'")

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(<Highlight align="left" {...props} />)

    expect(container.firstChild).toHaveStyleRule('grid-template-areas', "'content floatimage'")

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
