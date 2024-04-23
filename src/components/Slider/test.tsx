import { render, screen } from '@testing-library/react'

import Slider from './index'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>Slider1</p>
        <p>Slider2</p>
      </Slider>
    )

    expect(
      screen.getByText(/Slider1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(
      screen.getByText(/Slider2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
