import { render } from '@testing-library/react'

import Logo from './index'

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
