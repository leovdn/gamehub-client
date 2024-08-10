import { QUERY_GAMES } from 'graphql/queries/games'

export const mockGamesQueryData = {
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
              gallery: {
                data: [
                  {
                    id: '1',
                    attributes: {
                      url: 'uploads/stranglehold_d92b0c49d6.jpg'
                    }
                  }
                ]
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

export const mockFetchMoreGames = {
  request: { query: QUERY_GAMES, variables: { pagination: { limit: 9, start: 1 } } },
  result: {
    data: {
      games: {
        data: [
          {
            id: '133',
            attributes: {
              name: 'Stranglehold 2',
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
              gallery: {
                data: [
                  {
                    id: '1',
                    attributes: {
                      url: 'uploads/stranglehold_d92b0c49d6.jpg'
                    }
                  }
                ]
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
