import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from './index'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu Mock" />
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Footer Mock" />
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase Mock" />
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="BannerSlider Mock" />
    }
  }
})

describe('<Base />', () => {
  it('should render Manu, Footer and child components', () => {
    renderWithTheme(
      <Base>
        <h1>Title</h1>
      </Base>
    )

    expect(screen.getByTestId('Menu Mock')).toBeInTheDocument()
    expect(screen.getByTestId('Footer Mock')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()
  })
})
