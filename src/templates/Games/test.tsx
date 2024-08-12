import { ClassAttributes, ImgHTMLAttributes } from 'react'
import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'

import { mockFetchMoreGames, mockGamesQueryData } from './mocks'
import apolloCache from 'utils/apolloCache'
import Games from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/Loader', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Loader" />
    }
  }
})

describe('<Games />', () => {
  it('should render loading while fetching games', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGamesQueryData]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // Starts with loading when no data is returned
    expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()

    // Wait ultil data is fetched to render sections
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findByText(/Stranglehold/i)).toBeInTheDocument()

    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider cache={apolloCache} mocks={[mockGamesQueryData, mockFetchMoreGames]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    expect(await screen.findByText(/Stranglehold/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    // expect(await screen.findByText(/Stranglehold 2/i)).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()
  })
})
