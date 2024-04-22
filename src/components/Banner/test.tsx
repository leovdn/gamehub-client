import { screen } from '@testing-library/react'

import Banner from './index'
import { renderWithTheme } from 'utils/tests/helpers'

const buttonProps = {
  img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Banner Default',
  subtitle: '<p>Play the new <strong>Game</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/default'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...buttonProps} />)

    expect(
      screen.getByRole('heading', { name: /Banner Default/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new Game season/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Banner Default/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Ribbon', () => {
    renderWithTheme(
      <Banner
        {...buttonProps}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
