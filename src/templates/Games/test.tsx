import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'
import { ClassAttributes, ImgHTMLAttributes } from 'react'

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
      <MockedProvider
        mocks={[
          {
            request: { query: QUERY_GAMES, variables: { pagination: { limit: 9 } } },
            result: {
              data: {
                games: {
                  data: [
                    {
                      id: '132',
                      attributes: {
                        name: 'Stranglehold',
                        slug: 'stranglehold',
                        price: 1.99,
                        release_date: '2007-09-05',
                        rating: 'BR18',
                        cover: {
                          data: {
                            id: '47',
                            attributes: {
                              url: 'uploads/stranglehold_d92b0c49d6.jpg'
                            }
                          }
                        },
                        developers: {
                          data: [
                            {
                              id: '182',
                              attributes: {
                                name: 'Midway Games, Inc., Tiger Hill Entertainment'
                              }
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        ]}
        addTypename={false}
      >
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
})
